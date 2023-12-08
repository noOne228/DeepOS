/*
 * /sys/startup.js
 *
 * This is executed when everything is loaded (when body loaded)(this script is executed from /sys/boot.js)
 */

import { std } from '/sys/lib/std.js';
import { fs } from '/sys/lib/fs.js';
import { Term } from '/sys/lib/Term.js';

if (!(Term.exists())) {
  Term.create('div#term');
}
fs.readFile('/sys/data/ver.txt', function(version) {
  fs.readFile('/sys/data/ver.patch.txt', function(version_patch) {
    if (version_patch !== '0') {
      std.out('DeepOS ' + version + ' patch ' + version_patch);
    } else {
      std.out('DeepOS ' + version);
    }
    std.in(false, function(userInput) {
    });
  });
});