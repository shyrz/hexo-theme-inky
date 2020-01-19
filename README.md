# Inky


Inky is a **Simple**, **Elegant** theme of hexo.

## Preview

![preview](http://ww2.sinaimg.cn/large/dcc02b70gw1f171t9103jj21kw0y3wif.jpg)

## Installing

- Remove default markdown renderer `marked` and use `markdown-it` instead.
  ```bash
  npm uninstall hexo-renderer-marked -S
  npm install hexo-renderer-markdown-it markdown-it-emoji markdown-it-task-lists markdown-it-sub markdown-it-sup -S
  ```


- Go into your hexo blog folder
  ```bash
  cd YOUR_HEXO_BLOG_PATH
  ```

- Clone [Inky](https://github.com/sh7me/hexo-theme-inky) into `themes` folder and install dependencies.
  ```bash
  git clone https://github.com/sh7me/hexo-theme-inky/ themes/inky
  cd themes/inky
  yarn install
  ```

## Contributing

Any types of contribution are okay, waiting for your `pull request`.


## Changelog

[![hexo-image]][hexo-url]

[hexo-image]: https://img.shields.io/badge/Hexo-3+-02A8FE.svg?style=flat-square
[hexo-url]: http://hexo.io

## License

© 2016 - 2020 [Sh7me](https://github.com/sh7me)

[Inky](https://github.com/sh7me/hexo-theme-inky) is released under the [MIT](https://github.com/sh7me/hexo-theme-inky/blob/master/LICENSE) license.