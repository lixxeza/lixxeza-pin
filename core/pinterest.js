const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class Pinterest {
  async getURL(Url) {
    try {
      const response = await axios.get(Url);
      const dom = new JSDOM(response.data);
      const document = dom.window.document;
      let contentUrl = '';
      const video = document.querySelector('video');
      if (video) {
        const videoUrl = video.getAttribute('src');
        contentUrl = videoUrl.replace('hls', '720p').replace('.m3u8', '.mp4');
      } else {
        const img = document.querySelector('meta[property="og:image"]');
        if (img) {
          contentUrl = img.getAttribute('content');
        }
      }
      return contentUrl;
    } catch (error) {
      console.error('Ошибка:', error.message);
      return '';
    }
  }
  
  async getBuffer(RawUrl) {
    try {
	  const url = await this.getURL(RawUrl);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      return response.data;
    } catch (error) {
      console.error('Ошибка:', error.message);
      return null;
    }
  }

  async getUint8ArrayBuffer(RawUrl) {
    try {
	  const url = await this.getURL(RawUrl);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
	  const buffer = Uint8Array.from(response.data);
      return buffer;
    } catch (error) {
      console.error('Ошибка:', error.message);
      return null;
    }
  }
}

const pinterest = new Pinterest();
module.exports = pinterest;