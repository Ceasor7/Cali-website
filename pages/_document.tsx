import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="CALI is a non-profit organization that focuses on promoting arts management in the country. It provides research, training, education, and resources to empower individuals and organizations working in the arts sector." />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact.' />
       
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
