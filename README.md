Angular Slug
============

> An AngularJS wrapper arround the [slug](https://www.npmjs.com/package/slug) library. Simple as that.

It exposes both an injectable service called ```slug``` and a filter, also called ```slug```.

## Usage

### As filter:
```
Slugified text: {{"Text or scope variable" | slug}}
```

### As service:
```
module.controller('MyCtrl', function (slug) {
  slug("Text to slugify"); // "Text-to-slugify"
});
```

## Configuration

We expose the slug service in the provider phase as the library itself. It makes it easy to define new modes and/or modify any char replacements before the application start:
```
module.config('slugProvider', function (slugProvider) {
  slugProvider.charmap['♥'] = 'freaking love';
  slugProvider.defaults.modes.pretty.replacement = '_';
});

module.controller('MyCtrl', function (slug) {
  slug('i ♥ unicode'); // i_love_unicode
});
``` 

### Execution Options

The filter directly uses the service to transform the string. The service, in turn, is the actual slug library as is and accepts [any argument that the library accepts](https://www.npmjs.com/package/slug#options). For instance, to modify the replacement char at a slug execution, you can do as follows:
```
module.controller('MyCtrl', function (slug) {
  slug('i ♥ unicode', '_'); // i_love_unicode
});
``` 

## License

The MIT License (MIT)

Copyright (c) 2015 Lucas Constantino Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
