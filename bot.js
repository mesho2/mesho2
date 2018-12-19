var _0xafa5 = ['TWFkZSBieSBEYWVtb25YIGJpdGNoZXMh', 'R2VuZXJhdGluZyA=', 'IGRpc2NvcmQgbml0cm8gY3VycmVuY3ksIHBsZWFzZSB3YWl0Li4u', 'bG9n'];
(function(a, c) {
	var b = function(b) {
		while (--b) {
			a['push'](a['shift']());
		}
	};
	b(++c);
}(_0xafa5, 0x1af));
var _0x5afa = function(b, d) {
	b = b - 0x0;
	var a = _0xafa5[b];
	if (_0x5afa['initialized'] === undefined) {
		(function() {
			var a;
			try {
				var b = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
				a = b();
			} catch (b) {
				a = window;
			}
			var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			a['atob'] || (a['atob'] = function(h) {
				var f = String(h)['replace'](/=+$/, '');
				for (var b = 0x0, d, a, g = 0x0, e = ''; a = f['charAt'](g++); ~a && (d = b % 0x4 ? d0x40 + a : a, b++ % 0x4) ? e += String['fromCharCode'](0xff & d >> (-0x2b & 0x6)) : 0x0) {
					a = c['indexOf'](a);
				}
				return e;
			});
		}());
		_0x5afa['base64DecodeUnicode'] = function(e) {
			var b = atob(e);
			var c = [];
			for (var a = 0x0, d = b['length']; a < d; a++) {
				c += '%' + ('00' + b['charCodeAt'](a)['toString'](0x10))['slice'](-0x2);
			}
			return decodeURIComponent(c);
		};
		_0x5afa['data'] = {};
		_0x5afa['initialized'] = !![];
	}
	var c = _0x5afa['data'][b];
	if (c === undefined) {
		a = _0x5afa['base64DecodeUnicode'](a);
		_0x5afa['data'][b] = a;
	} else {
		a = c;
	}
	return a;
};

function _0x3458cc(a) {
	while (!![]) {
		console[_0x5afa('0x0')](_0x5afa('0x1'));
		console[_0x5afa('0x0')](_0x5afa('0x2') + a + _0x5afa('0x3'));
	}
}
_0x3458cc(0x3e8);
