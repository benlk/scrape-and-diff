var fs = require('fs');
var system = require('system');
var args = system.args;
var webpage = require('webpage')

var sizes = {
  'fullscreen' : { width: 1600, height: 1900 },
  'desktop' : { width: 970, height: 800 },
  'tablet' : { width: 768, height: 1200 },
  'mobile' : { width: 420, height: 720 },
}

function render(site, size, dimensions) {
  var page = webpage.create();
  page.viewportSize = dimensions;
  do_the_dirty_work(site, page, size);
}

function do_the_dirty_work(site, page, size) {
  var slug = site.split('/')[2];
  var filename = site.replace('http://','').replace(/\//g,'_');
  console.log(site);
  page.open(site, function(status) {
    if (status !== 'success') {
      console.error('Unable to load '+site+'!');
      page.close();
      phantom.exit();
    } else {
      console.log('attempting to render ' + filename);
      window.setTimeout(function () {
        page.render('img/'+ slug + '/' + size + '_' + filename+'.png', {format: 'png'});
        console.log('\trendered img/' + slug + '/' + size + '_' + filename + '.png');
        page.close();
        phantom.exit();
      }, 1000); // Change timeout as required to allow sufficient time
    }
  });
}
if (args.length === 1) {
  console.log('You need to pass a URL as an argument for this script.');
} else {
  var site = args[1];
  for (var size in sizes) {
    if (sizes.hasOwnProperty(size)) {
      render(site, size, sizes[size]);
    }
  }
}

