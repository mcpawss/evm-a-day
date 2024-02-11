export const a = `<html lang="en">
<head>
  <title>Minimalist Frame - A</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/a.gif"
  />
  <meta
    property="og:image"
    content="https://minimalist-frame.vercel.app/img/a.png"
  />
  <meta property="fc:frame:image:aspect_ratio" content="1:1" />
  <meta property="fc:frame:button:1" content="Go to B" />
  <meta property="fc:frame:button:2" content="Go to C" />
  <meta property="fc:frame:button:3" content="View source code" />
  <meta property="fc:frame:button:3:action" content="link" />
  <meta
    property="fc:frame:button:3:target"
    content="https://github.com/InsideTheSim/minimalist-frame"
  />
  <meta
    property="fc:frame:post_url"
    content="https://evm-a-day.vercel.app/api/frame-a"
  />
</head>
<body>
  <h1>Minimalist Frame - A</h1>
</body>
</html>`

export const b = `<html lang="en">
<head>
const images = [
    "https://f4.bcbits.com/img/a0600385591_16.jpg",
    "https://f4.bcbits.com/img/a0600385591_16.jpg",
    "https://f4.bcbits.com/img/a0600385591_16.jpg",
    // Add more image URLs as needed
  ];

  // Create the markup for the image
  const imageUrl = images[2];
  
  <title>Minimalist Frame - B</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="${imageUrl}"
  />
  <meta property="og:image" content="${imageUrl}"
 />
  <meta property="fc:frame:image:aspect_ratio" content="1:1" />
  <meta property="fc:frame:button:1" content="Go to A" />
  <meta property="fc:frame:button:2" content="Go to C" />
  <meta property="fc:frame:button:3" content="View source code" />
  <meta property="fc:frame:button:3:action" content="link" />
  <meta
    property="fc:frame:button:3:target"
    content="https://github.com/InsideTheSim/minimalist-frame"
  />
  <meta
    property="fc:frame:post_url"
    content="https://evm-a-day.vercel.app/api/frame-b"
  />
</head>
<body>
  <h1>Minimalist Frame - B</h1>
  
</body>
</html>`

export const c = `<html lang="en">
<head>
  <title>Minimalist Frame - C</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/c.gif"
  />
  <meta property="og:image" content="https://minimalist-frame.vercel.app/img/c.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1:1" />
  <meta property="fc:frame:button:1" content="Go to A" />
  <meta property="fc:frame:button:2" content="Go to B" />
  <meta property="fc:frame:button:3" content="View source code" />
  <meta property="fc:frame:button:3:action" content="link" />
  <meta
    property="fc:frame:button:3:target"
    content="https://github.com/InsideTheSim/minimalist-frame"
  />
  <meta
    property="fc:frame:post_url"
    content="https://evm-a-day.vercel.app/api/frame-c"
  />
</head>
<body>
  <h1>Minimalist Frame - C</h1>
</body>
</html>
`
