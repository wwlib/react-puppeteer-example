const path = require('path');
const puppeteer = require('puppeteer');

// let renderPath = 'https://www.google.com';
let renderPath = 'file:' + path.resolve(__dirname, '../build/index.html');


console.log(renderPath);
async function doIt() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulateMedia('screen');
    await page.goto(renderPath, {
        timeout: 30 * 1000,
        waitUntil: 'networkidle0'
    });

//     const content = `
// <div>Hello, world!</div>
// `

    // await page.setContent(content, {
    //     timeout: 30 * 1000,
    //     waitUntil: 'networkidle0'
    // });

    await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 4 });

    const pdfOptions = {
        path: path.resolve(__dirname, 'page.pdf'),
    }
    await page.pdf(pdfOptions);

    const screenshotOptions = {
        path: path.resolve(__dirname, 'page.png'),
        type: 'png'
    }
    await page.screenshot(screenshotOptions);

    // fs.writeFileSync('test.pdf', pdf);
    console.log('done');
}

doIt()
    .then(() => {
        console.log('done-done.');
        process.exit()
    })
    .catch((e) => {
        console.log(e)
        process.exit()
    })
