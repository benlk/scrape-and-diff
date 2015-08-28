# INN site comparisons

Goals:

1. Get list of INN sites from http://inn.org/members/
2. Take screenshots of notable places on live sites
	- [ ] Homepage `/`
	- [ ] Articles `/?p=1234`
	- [ ] Series `/series/slug/` `/?series=1234`
	- [ ] Category archive pages `/category/slug/`
	- [ ] Series archive pages `/series/slug/`
	- [ ] Series landing pages `/slug/`
	- [ ] Search results `/?s=words`
	- [ ] Pages `/slug/`
	- [ ] Tag archives `/tag/slug`
	- [ ] Roundup pages `/roundup/slug`
3. Take screenshots of notable places on staging/vagrant sites
4. Diff the images
	- in ruby: http://jeffkreeftmeijer.com/2011/comparing-images-and-creating-image-diffs/
	- in imagemagick: https://stackoverflow.com/questions/5132749/diff-an-image-using-imagemagick

## Setup

1. [Install Nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html)
2. [Install PhantomJS](http://phantomjs.org/download.html)
3. [Install ImageMagick](http://imagemagick.org/script/binary-releases.php)
4. `chmod u+x run.sh`

## Usage

To get all the screenshots:

```
./run.sh
```

This downloads the list of INN member site URLs as found on inn.org/members

If you want to exclude certain sites, add them to the array in nokigiri.rb.

## Reusing

`nokogiri.rb` is set up for INN sites, but it's really not that hard to edit for grabbing a list of URLs out of any other page. Just make sure to change the CSS selectors to point to your specific URLs. The output is [not deduplicated or sorted](http://benlk.com/static/uploads/site-list.txt).

This repo is a fork of benlk/gannett-scraper. 

## License

MIT License, because this code isn't really that important.

Copyright &copy; 2014 Benjamin Keith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

