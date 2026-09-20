## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"
  integrity="sha384-KnPvYPx1poT554tHDV1nuYV9sOkh4cZPBvLZQlXgJmoRQZPdgQNwL50/xq9kynp9"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/languages/go.min.js"
  integrity="sha384-orYKHAs3chK3oDMQLy5ywrzoY8z9zvzfmNIjmVxKXioAUtwDhP+xf6THWYSI/43Y"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-Vqe1AEoiNcLtV2DfIX2ddu9YnDvXbzuMi4hx542iG7/t9WlE1sobqt9DHidv8/23 /es/languages/bash.js
sha384-8FqiBkFvhBoCq7xHJ8pB0H0/hBH2FJ0IHl2CcZWpINYY6uyw38RJgZNe5fddwEaa /es/languages/bash.min.js
sha384-A3L5Tf7tUTEvvb7CBQ7/Ss1TL493yDjIre9lL9+hewzsmlGvDaF0zr2jtRL/as9+ /es/languages/c.js
sha384-QjLTklOpGRj5BiUGiD7/7RYVgazp8V+oQvLPmM+goByoChSDDxbVf7ztjZ5MtHO2 /es/languages/c.min.js
sha384-jJSKb0kbVcDJLL6D9Zc80g+XBwa84Ogoi6JH0dZMQJlbzn6ZCjYFE2WtU6oTc8Au /es/languages/cpp.js
sha384-p1ClIV57O7/nb8vDAVFIhZ7u0/8oonjMxc4Yd8EarzxmLPMiQAV95I0ogb+ZkEFN /es/languages/cpp.min.js
sha384-7noG79RNFwjFy4/hbVGV1eMd6FsibtUmuw8xdObECaxdp13/RWgmYMePqalTBME6 /es/languages/dos.js
sha384-pdIVqwgqt8ANCiylECyktCbjqe6gtj23Kn9pYqzlktlg0XdWglywc4vnH9xEwkTJ /es/languages/dos.min.js
sha384-btFSo3SEJNPWl4YEj99Ws4vfJOENZoIppHk/IDH2iGwIWHWA9e/DuDjj7sSQJH12 /es/languages/makefile.js
sha384-ai0V0qlpdcBs1bZEDPT9mIIFwPXiKIjVtDrDZL68xKan6TWmMxuzMKycOP42aBId /es/languages/makefile.min.js
sha384-UbOS4JomBdQgpHT9lwmZipdtIqKiJP8T2IG7oG0l6K/LnyVrSMoaPI7Hh6vWatoS /es/languages/plaintext.js
sha384-RhTHpYmm2hh4ZEkHCbk+tklVV1oUvBVYUfdesSGg3QO/JtYDmqYoycxlBJxg9Lqb /es/languages/plaintext.min.js
sha384-/FFsa5X7Nn8shMYLbVUb0WRQA+ay+XKibuVCTYwN7XJNcs3hhMaIvUEl87d6ULcv /es/languages/x86asm.js
sha384-Rkq9CZ04qdVs0aJLp8vSLGoOejY+m/XxsKFZ9BwdXW/9PFCxs6o5ebFulZXaDQRf /es/languages/x86asm.min.js
sha384-5DAFEjB/sJxmunBVtQT5pIOWPcB8/sbocTrB4vhqxJ3G38RVlxXiUInHwkdik75C /languages/bash.js
sha384-3LwgJG25r+ir+HS3WNVBMDCbzxie+2TxFfg/kMUMmtWF9mxd0dEDwFS2LGd8akPz /languages/bash.min.js
sha384-++jr2IZH8qZUHclpwLKPdPB67oloAwlp6bVn6IOBm1PRyrATGwIJDemLwIjTXWhI /languages/c.js
sha384-XUlYYDNkxUkC5F86/mGCoT9eEdPUigCR+8ihyrqFat6tMD0/GRHkorEtHKgBSS7D /languages/c.min.js
sha384-Fu6emj6YokTl+GgIHZRr4tqDnAWVGmEP67A0XguFYxkNQLhiKEgZa3J2t21BQ7Fq /languages/cpp.js
sha384-csK05VfEiSG0s/zJz067fB5PZCE5+Uo1yqgoa1zZkSG1cmBaOuXEGSbVr2YqAghu /languages/cpp.min.js
sha384-rR+1J/oRSjdE/88NcmhsQ4DoXsMillzaxxF4QsXQwSrcffqaz3+yCMkJY8aFH3OK /languages/dos.js
sha384-OP6ey9zMpJWPVgF9AGbxxfHDX5xCrPeJuM9x1nAZXFMNjzNz3xOUrRtphSL+N3h3 /languages/dos.min.js
sha384-InzoelUz5Kd5nr0UlmC3zkpZcx44OV88IrddbIg35m+umNK2EHFzQynfFBn34TOC /languages/makefile.js
sha384-B/EK9u4TdeCwE+1vigZs6g3/LKhzjAu8NNjRBbWox7nAgCTtEu5ctWCayQZD/SMr /languages/makefile.min.js
sha384-5antmxjEm+wiK5ytnS/IhTDt8w3EK4ELSuskQjN+4wPiEPP0PE6aE65JRI9R4ZVj /languages/plaintext.js
sha384-vpQpEp61iIf7WRxlpZKYck63VGy6819HP7jPmr8BoVQ1D6Ov7Z4RR9deMn/v/6t+ /languages/plaintext.min.js
sha384-xebVCRDgDosTvpLuJmoJn/2/WFYgcgJkVcMAh4kNwgbC/gThZaYEaqMVTDXtk0fP /languages/x86asm.js
sha384-Cf3xzgfOHCjwxHFvuO1cpP6GHSth3EMwNXmQ1fdOonZL5fHRQx6cICV3YkQ74oVu /languages/x86asm.min.js
sha384-y9giGT9YFFjgRPS1yK6YWkdg3UpW3QZbcRf6x0kEpjlF78XNGimKatJYqW3PG7O9 /highlight.js
sha384-5OHvQzwfRAA1AS9ZOL4/SC9wDfokQuv+Il33cNO6InEXbPQOyh6fQ/dbiWaGnpdn /highlight.min.js
```

