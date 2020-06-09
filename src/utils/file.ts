import { http, https } from 'follow-redirects';
import { Transform as Stream } from 'stream';

export const downloadFile = (url: any) => new Promise((resolve, reject) => {
  const handler = url.indexOf('https') === -1 ? http : https;
  const req = handler.get(url, (res) => {
    const data = new Stream();
    res.on('data', (chunk) => {
      data.push(chunk);
    });

    res.on('end', () => resolve(data.read()));
    res.on('error', err => {
      reject(err)
      console.log('url error', url)
    });
  });

  req.setTimeout(120000, () => reject(new Error(`Download Timeout ${url}`)));
});
export default {
  downloadFile
};
