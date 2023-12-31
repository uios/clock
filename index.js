function startTime() {
  const today = new Date();
  let h = today.getHours();
  let hr = checkHour(h);
  let m = checkTime(today.getMinutes());
  //t s = checkTime(today.getSeconds());
  let ap = h < 12 ? "a" : "p";
  let t = hr + ":" + m;

  document.getElementById("hour").innerHTML = hr;
  document.getElementById("minute").innerHTML = m;
  //byId('second').innerHTML =  s;
  document.getElementById("a-p").innerHTML = ap;

  var st = sacred.time[t];
  if (st.length > 0) {
    //console.log(st);
    var cy = header.childElementCount;
    var y = 0;
    do {
      var child = header.children[y];

      var x = 0;
      do {
        if(x < st.length) {
          var stx = st[x];
          var tag = sacred.code[stx][0];
          var el = document.getElementsByTagName(tag)[0];

          //console.log(child.tagName, tag, x, y);
          if (child.tagName.toLowerCase() === tag) {
            child.classList.remove("opacity-0");
          } else {
            child.classList.add("opacity-0");
          }
        } else {
          child.classList.add("opacity-0");          
        }
        x++;
      } while (x < st.length);

      y++;
    } while (y < cy);
  } else {
    $('#header > *').addClass('opacity-0')
  } 

  document.body.dataset.theme = h < 18 ? "light" : "dark";

  setTimeout(startTime, 1000);
}
function checkHour(h) {
  return h > 12 ? h - 12 : h;
}
function checkTime(i) {
  return (i = i < 10 ? "0" + i : i);
}

window.sacred = {
  code: {
    ablative: ["red", "Subtractive order"],
    additive: ["yellow", "Totaled sum"],
    heavenly: ["violet", "Angel numbers"],
    mirrored: ["blue", "Visually parallel"],
    multiply: ["indigo", "Multiplied digits"],
    divisive: ["orange", "Dividing succession"],
    sequence: ["green", "Ascending progression"]
  },
  time: {
    "12:00": [],
    "12:01": [],
    "12:02": [],
    "12:03": ["additive"],
    "12:04": [],
    "12:05": [],
    "12:06": [],
    "12:07": [],
    "12:08": [],
    "12:09": [],
    "12:10": [],
    "12:11": [],
    "12:12": ["heavenly"],
    "12:13": [],
    "12:14": [],
    "12:15": [],
    "12:16": [],
    "12:17": [],
    "12:18": [],
    "12:19": [],
    "12:20": [],
    "12:21": [],
    "12:22": [],
    "12:23": [],
    "12:24": [],
    "12:25": [],
    "12:26": [],
    "12:27": [],
    "12:28": [],
    "12:29": [],
    "12:30": [],
    "12:31": [],
    "12:32": [],
    "12:33": [],
    "12:34": ["sequence"],
    "12:35": [],
    "12:36": [],
    "12:37": [],
    "12:38": [],
    "12:39": [],
    "12:40": [],
    "12:41": [],
    "12:42": [],
    "12:43": [],
    "12:44": [],
    "12:45": [],
    "12:46": [],
    "12:47": [],
    "12:48": [],
    "12:49": [],
    "12:50": [],
    "12:51": [],
    "12:52": [],
    "12:53": [],
    "12:54": [],
    "12:55": [],
    "12:56": [],
    "12:57": [],
    "12:58": [],
    "12:59": [],

    "1:00": [],
    "1:01": [],
    "1:02": [],
    "1:03": [],
    "1:04": [],
    "1:05": [],
    "1:06": [],
    "1:07": [],
    "1:08": [],
    "1:09": [],
    "1:10": [],
    "1:11": ["heavenly", "mirrored"],
    "1:12": ["additive"],
    "1:13": ["mirrored"],
    "1:14": [],
    "1:15": [],
    "1:16": [],
    "1:17": [],
    "1:18": [],
    "1:19": [],
    "1:20": [],
    "1:21": [],
    "1:22": [],
    "1:23": ["additive", "sequence"],
    "1:24": [],
    "1:25": [],
    "1:26": [],
    "1:27": [],
    "1:28": [],
    "1:29": [],
    "1:30": ["mirrored"],
    "1:31": ["mirrored"],
    "1:32": [],
    "1:33": ["mirrored", "multiply"],
    "1:34": ["additive"],
    "1:35": [],
    "1:36": [],
    "1:37": [],
    "1:38": [],
    "1:39": [],
    "1:40": [],
    "1:41": [],
    "1:42": [],
    "1:43": [],
    "1:44": [],
    "1:45": [],
    "1:46": [],
    "1:47": [],
    "1:48": [],
    "1:49": [],
    "1:50": [],
    "1:51": [],
    "1:52": [],
    "1:53": [],
    "1:54": [],
    "1:55": [],
    "1:56": [],
    "1:57": [],
    "1:58": [],
    "1:59": [],

    "2:00": [],
    "2:01": [],
    "2:02": [],
    "2:03": [],
    "2:04": [],
    "2:05": [],
    "2:06": [],
    "2:07": [],
    "2:08": [],
    "2:09": [],
    "2:10": [],
    "2:11": [],
    "2:12": [],
    "2:13": [],
    "2:14": [],
    "2:15": [],
    "2:16": [],
    "2:17": [],
    "2:18": [],
    "2:19": [],
    "2:20": [],
    "2:21": [],
    "2:22": [],
    "2:23": [],
    "2:24": [],
    "2:25": [],
    "2:26": [],
    "2:27": [],
    "2:28": [],
    "2:29": [],
    "2:30": [],
    "2:31": [],
    "2:32": [],
    "2:33": [],
    "2:34": [],
    "2:35": [],
    "2:36": [],
    "2:37": [],
    "2:38": [],
    "2:39": [],
    "2:40": [],
    "2:41": [],
    "2:42": [],
    "2:43": [],
    "2:44": [],
    "2:45": [],
    "2:46": ["additive", "sequence"],
    "2:47": [],
    "2:48": [],
    "2:49": [],
    "2:50": [],
    "2:51": [],
    "2:52": [],
    "2:53": [],
    "2:54": [],
    "2:55": [],
    "2:56": [],
    "2:57": [],
    "2:58": [],
    "2:59": [],

    "3:00": [],
    "3:01": [],
    "3:02": [],
    "3:03": [],
    "3:04": [],
    "3:05": [],
    "3:06": [],
    "3:07": [],
    "3:08": [],
    "3:09": [],
    "3:10": [],
    "3:11": [],
    "3:12": [],
    "3:13": [],
    "3:14": [],
    "3:15": [],
    "3:16": [],
    "3:17": [],
    "3:18": [],
    "3:19": [],
    "3:20": [],
    "3:21": [],
    "3:22": [],
    "3:23": [],
    "3:24": [],
    "3:25": [],
    "3:26": [],
    "3:27": [],
    "3:28": [],
    "3:29": [],
    "3:30": [],
    "3:31": [],
    "3:32": [],
    "3:33": ["heavenly", "mirrored"],
    "3:34": [],
    "3:35": [],
    "3:36": ["additive"],
    "3:37": [],
    "3:38": ["mirrored"],
    "3:39": [],
    "3:40": [],
    "3:41": [],
    "3:42": [],
    "3:43": [],
    "3:44": [],
    "3:45": [],
    "3:46": [],
    "3:47": ["additive"],
    "3:48": [],
    "3:49": [],
    "3:50": [],
    "3:51": [],
    "3:52": [],
    "3:53": [],
    "3:54": [],
    "3:55": [],
    "3:56": [],
    "3:57": [],
    "3:58": ["additive"],
    "3:59": [],

    "4:00": [],
    "4:01": [],
    "4:02": [],
    "4:03": [],
    "4:04": [],
    "4:05": [],
    "4:06": [],
    "4:07": [],
    "4:08": [],
    "4:09": [],
    "4:10": [],
    "4:11": [],
    "4:12": [],
    "4:13": [],
    "4:14": [],
    "4:15": [],
    "4:16": [],
    "4:17": [],
    "4:18": [],
    "4:19": [],
    "4:20": [],
    "4:21": [],
    "4:22": [],
    "4:23": [],
    "4:24": [],
    "4:25": [],
    "4:26": [],
    "4:27": [],
    "4:28": [],
    "4:29": [],
    "4:30": [],
    "4:31": [],
    "4:32": [],
    "4:33": [],
    "4:34": [],
    "4:35": [],
    "4:36": [],
    "4:37": [],
    "4:38": [],
    "4:39": [],
    "4:40": [],
    "4:41": [],
    "4:42": [],
    "4:43": [],
    "4:44": [],
    "4:45": [],
    "4:46": [],
    "4:47": [],
    "4:48": [],
    "4:49": [],
    "4:50": [],
    "4:51": [],
    "4:52": [],
    "4:53": [],
    "4:54": [],
    "4:55": [],
    "4:56": [],
    "4:57": [],
    "4:58": [],
    "4:59": [],

    "5:00": [],
    "5:01": [],
    "5:02": [],
    "5:03": [],
    "5:04": [],
    "5:05": [],
    "5:06": [],
    "5:07": [],
    "5:08": [],
    "5:09": [],
    "5:10": [],
    "5:11": [],
    "5:12": [],
    "5:13": [],
    "5:14": [],
    "5:15": [],
    "5:16": [],
    "5:17": [],
    "5:18": [],
    "5:19": [],
    "5:20": [],
    "5:21": [],
    "5:22": [],
    "5:23": [],
    "5:24": [],
    "5:25": [],
    "5:26": [],
    "5:27": [],
    "5:28": [],
    "5:29": [],
    "5:30": [],
    "5:31": [],
    "5:32": [],
    "5:33": [],
    "5:34": [],
    "5:35": [],
    "5:36": [],
    "5:37": [],
    "5:38": [],
    "5:39": [],
    "5:40": [],
    "5:41": [],
    "5:42": [],
    "5:43": [],
    "5:44": [],
    "5:45": [],
    "5:46": [],
    "5:47": [],
    "5:48": [],
    "5:49": [],
    "5:50": [],
    "5:51": [],
    "5:52": [],
    "5:53": [],
    "5:54": [],
    "5:55": [],
    "5:56": [],
    "5:57": [],
    "5:58": [],
    "5:59": [],

    "6:00": [],
    "6:01": [],
    "6:02": [],
    "6:03": [],
    "6:04": [],
    "6:05": [],
    "6:06": [],
    "6:07": [],
    "6:08": [],
    "6:09": [],
    "6:10": [],
    "6:11": [],
    "6:12": [],
    "6:13": [],
    "6:14": [],
    "6:15": [],
    "6:16": [],
    "6:17": [],
    "6:18": [],
    "6:19": [],
    "6:20": [],
    "6:21": [],
    "6:22": [],
    "6:23": [],
    "6:24": [],
    "6:25": [],
    "6:26": [],
    "6:27": [],
    "6:28": [],
    "6:29": [],
    "6:30": [],
    "6:31": [],
    "6:32": [],
    "6:33": [],
    "6:34": [],
    "6:35": [],
    "6:36": [],
    "6:37": [],
    "6:38": [],
    "6:39": [],
    "6:40": [],
    "6:41": [],
    "6:42": [],
    "6:43": [],
    "6:44": [],
    "6:45": [],
    "6:46": [],
    "6:47": [],
    "6:48": [],
    "6:49": [],
    "6:50": [],
    "6:51": [],
    "6:52": [],
    "6:53": [],
    "6:54": [],
    "6:55": [],
    "6:56": [],
    "6:57": [],
    "6:58": [],
    "6:59": [],

    "7:00": [],
    "7:01": [],
    "7:02": [],
    "7:03": [],
    "7:04": [],
    "7:05": [],
    "7:06": [],
    "7:07": [],
    "7:08": [],
    "7:09": [],
    "7:10": [],
    "7:11": [],
    "7:12": [],
    "7:13": [],
    "7:14": [],
    "7:15": [],
    "7:16": ["ablative"],
    "7:17": [],
    "7:18": ["additive"],
    "7:19": [],
    "7:20": [],
    "7:21": [],
    "7:22": [],
    "7:23": [],
    "7:24": [],
    "7:25": ["ablative"],
    "7:26": [],
    "7:27": [],
    "7:28": [],
    "7:29": [],
    "7:30": [],
    "7:31": [],
    "7:32": [],
    "7:33": [],
    "7:34": [],
    "7:35": [],
    "7:36": [],
    "7:37": [],
    "7:38": [],
    "7:39": [],
    "7:40": [],
    "7:41": [],
    "7:42": [],
    "7:43": ["ablative"],
    "7:44": [],
    "7:45": [],
    "7:46": [],
    "7:47": [],
    "7:48": [],
    "7:49": [],
    "7:50": [],
    "7:51": [],
    "7:52": ["ablative"],
    "7:53": [],
    "7:54": [],
    "7:55": [],
    "7:56": [],
    "7:57": [],
    "7:58": [],
    "7:59": [],

    "8:00": ["mirrored"],
    "8:01": ["mirrored"],
    "8:02": [],
    "8:03": ["mirrored"],
    "8:04": [],
    "8:05": [],
    "8:06": [],
    "8:07": [],
    "8:08": ["ablative", "additive", "mirrored"],
    "8:09": [],
    "8:10": [],
    "8:11": ["mirrored"],
    "8:12": [],
    "8:13": ["mirrored"],
    "8:14": [],
    "8:15": [],
    "8:16": [],
    "8:17": [],
    "8:18": ["mirrored"],
    "8:19": [],
    "8:20": [],
    "8:21": [],
    "8:22": [],
    "8:23": [],
    "8:24": [],
    "8:25": [],
    "8:26": ["ablative"],
    "8:27": [],
    "8:28": [],
    "8:29": [],
    "8:30": ["mirrored"],
    "8:31": ["mirrored"],
    "8:32": [],
    "8:33": ["mirrored"],
    "8:34": [],
    "8:35": ["ablative"],
    "8:36": [],
    "8:37": [],
    "8:38": ["mirrored"],
    "8:39": [],
    "8:40": [],
    "8:41": [],
    "8:42": ["ablative"],
    "8:43": [],
    "8:44": ["ablative"],
    "8:45": [],
    "8:46": [],
    "8:47": [],
    "8:48": [],
    "8:49": [],
    "8:50": [],
    "8:51": [],
    "8:52": [],
    "8:53": ["ablative"],
    "8:54": [],
    "8:55": [],
    "8:56": [],
    "8:57": [],
    "8:58": [],
    "8:59": [],

    "9:00": [],
    "9:01": [],
    "9:02": [],
    "9:03": [],
    "9:04": [],
    "9:05": [],
    "9:06": ["mirrored"],
    "9:07": [],
    "9:08": [],
    "9:09": [],
    "9:10": [],
    "9:11": [],
    "9:12": [],
    "9:13": [],
    "9:14": [],
    "9:15": [],
    "9:16": [],
    "9:17": [],
    "9:18": [],
    "9:19": [],
    "9:20": [],
    "9:21": [],
    "9:22": [],
    "9:23": [],
    "9:24": [],
    "9:25": [],
    "9:26": [],
    "9:27": [],
    "9:28": [],
    "9:29": [],
    "9:30": [],
    "9:31": [],
    "9:32": [],
    "9:33": [],
    "9:34": [],
    "9:35": [],
    "9:36": [],
    "9:37": [],
    "9:38": [],
    "9:39": [],
    "9:40": [],
    "9:41": [],
    "9:42": [],
    "9:43": [],
    "9:44": [],
    "9:45": [],
    "9:46": [],
    "9:47": [],
    "9:48": [],
    "9:49": [],
    "9:50": [],
    "9:51": [],
    "9:52": [],
    "9:53": [],
    "9:54": [],
    "9:55": [],
    "9:56": [],
    "9:57": [],
    "9:58": [],
    "9:59": [],

    "10:00": [],
    "10:01": [],
    "10:02": [],
    "10:03": [],
    "10:04": [],
    "10:05": [],
    "10:06": [],
    "10:07": [],
    "10:08": [],
    "10:09": [],
    "10:10": [],
    "10:11": [],
    "10:12": [],
    "10:13": [],
    "10:14": [],
    "10:15": [],
    "10:16": [],
    "10:17": [],
    "10:18": [],
    "10:19": [],
    "10:20": [],
    "10:21": [],
    "10:22": [],
    "10:23": [],
    "10:24": [],
    "10:25": [],
    "10:26": [],
    "10:27": [],
    "10:28": [],
    "10:29": [],
    "10:30": [],
    "10:31": [],
    "10:32": [],
    "10:33": [],
    "10:34": [],
    "10:35": [],
    "10:36": [],
    "10:37": [],
    "10:38": [],
    "10:39": [],
    "10:40": [],
    "10:41": [],
    "10:42": [],
    "10:43": [],
    "10:44": [],
    "10:45": [],
    "10:46": [],
    "10:47": [],
    "10:48": [],
    "10:49": [],
    "10:50": [],
    "10:51": [],
    "10:52": [],
    "10:53": [],
    "10:54": [],
    "10:55": [],
    "10:56": [],
    "10:57": [],
    "10:58": [],
    "10:59": [],

    "11:00": [],
    "11:01": [],
    "11:02": [],
    "11:03": [],
    "11:04": [],
    "11:05": [],
    "11:06": [],
    "11:07": [],
    "11:08": [],
    "11:09": [],
    "11:10": [],
    "11:11": ["heavenly"],
    "11:12": [],
    "11:13": [],
    "11:14": [],
    "11:15": [],
    "11:16": [],
    "11:17": [],
    "11:18": [],
    "11:19": [],
    "11:20": [],
    "11:21": [],
    "11:22": [],
    "11:23": [],
    "11:24": [],
    "11:25": [],
    "11:26": [],
    "11:27": [],
    "11:28": [],
    "11:29": [],
    "11:30": [],
    "11:31": [],
    "11:32": [],
    "11:33": [],
    "11:34": [],
    "11:35": [],
    "11:36": [],
    "11:37": [],
    "11:38": [],
    "11:39": [],
    "11:40": [],
    "11:41": [],
    "11:42": [],
    "11:43": [],
    "11:44": [],
    "11:45": [],
    "11:46": [],
    "11:47": [],
    "11:48": [],
    "11:49": [],
    "11:50": [],
    "11:51": [],
    "11:52": [],
    "11:53": [],
    "11:54": [],
    "11:55": [],
    "11:56": [],
    "11:57": [],
    "11:58": [],
    "11:59": []
  }
};

//document.body.dataset.theme = "dark";
window.onload = startTime;

Array.prototype.remove = function(name) {
  var that = this;
  var vals = Object.values(that);
  if(vals.length > 0) {
    for (var i = vals.length; i--;) {
      this[i].remove();
    }
  } else {
    that[0] ? that[0].remove() : null;
  }
  return that;
};
Array.prototype.addClass = function(name) {
  var that = this;
  var vals = Object.values(that);
  if(vals.length > 0) {
    for (var i = vals.length; i--;) {
      this[i].classList.add(name);
    }
  } else {
    that[0] ? that[0].classList.add(name) : null;
  }
  return that;
};
Array.prototype.removeClass = function(name) {
  var that = this;
  var vals = Object.values(that);
  if(vals.length > 0) {
    for (var i = vals.length; i--;) {
      this[i].classList.remove(name);
    }
  } else {
    that[0] ? that[0].classList.add(name) : null;
  }
  return that;
};
Array.prototype.html = function(html) {
  var that = this;
  var vals = Object.values(that);
  if(vals.length > 0) {
    for (var i = vals.length; i--;) {
      this[i].innerHTML = "";
    }
  } else {
    that[0] ? that[0].classList.add(name) : null;
  }
  return that;
};

//Array.prototype.addClass = Array.prototype.addClass = function(name) { var that = this; if(that.length>1) { for (var i = that.length; i--;) { var it = this[i]; it.classList ? it.classList.add(name) : null; } } else { that[0] ? that[0].classList.add(name) : null; } return that; };
//Array.prototype.html = function(html) {  var that = this; console.log({that}); if(that.length>0) { for (var i = that.length; i--;) { var it = this[i]; it.innerHTML = html; } } return this; };
Array.prototype.remove = function(name) { var that = this; if(that.length>0) { for (var i = that.length; i--;) { var it = this[i]; it.remove(); } } return that; };
Array.prototype.removeAttribute = function(name) { var that = this; if(that.length>1) { for (var i = that.length; i--;) { var it = this[i]; it ? it.removeAttribute(name) : null; } } else { that[0] ? that[0].removeAttribute(name) : null; } return that; };
//Array.prototype.removeClass = Array.prototype.removeClass = function(name) { var that = this; if(that.length>1) { for (var i = that.length; i--;) { var it = this[i]; it.classList ? it.classList.remove(name) : null; } } else { that[0] ? that[0].classList.remove(name) : null; } return that; };
Array.prototype.siblings = function(name) { var i=0, elems=[], that = this[i]; elems.forEach.call(that.parentNode.children, function(a, b, c) { if(a !== that) { elems[i] = a; i++; } }); return elems; };
Array.prototype.toggleClass = function(name) { var that = this; if(that.length>1) { for (var i = that.length; i--;) { var it = this[i]; it.hasClass(name) ? it.classList.remove(name) : it.classList.add(name); } } else { that[0].hasClass(name) ? that[0].classList.remove(name) : that[0].classList.add(name); } return that; };

Element.prototype.display = function(display) { this.ariaHidden = (display === true || display === false) ? display : this.ariaHidden === "true" ? false : true; return this; }
Element.prototype.find = function(elem) { return this.querySelector(elem); };
Element.prototype.all = function(elem) { return this.querySelectorAll(elem); };
Element.prototype.hasClass = function(n) { return new RegExp(' '+n+' ').test(' '+this.className+' '); };
Element.prototype.index = function() { var whl = this; [].forEach.call(whl.parentNode.children, (a, b, c) => (a === whl) ? whl = b : null); return whl; };

function objectExists(obj,where) {
//function objectExists(obj,keys) {
  //var data = this.valueOf();
  var data = obj;
  var keys = Object.keys(obj);
  var bool = false;
  if(keys.length > 0) {
    var values = Object.values(obj);
    var k = 0; do {
      var key = keys[k]
      var value = values[k];
      var hasKey = data.hasOwnProperty(obj);
      var hasVal = data[key].includes(value);
      bool = hasKey && hasVal;
      if(bool === false) { k = keys.length; }
    k++; } while(k < keys.length);
  }
  return bool;
}

String.prototype.contains = function(pattern) {
    var value = false, p = 0; do {
      value === false ? value = this.toString().includes(pattern[p]) : null;
    p++; } while(p < pattern.length); return value;
}
String.prototype.stringExists = function(arr) {
  var bool = false;
  var text = this.valueOf();
  if(arr.length > 0) {
    var a = 0; do {
      //console.log(text,arr[a], text.indexOf(arr[a]) > -1);
      bool = text.indexOf(arr[a]) > -1 ? arr[a] : null;
      bool === null ? null : a = arr.length;
    a++; } while(a < arr.length);
  }
  return bool;
}
String.prototype.trim = function(ing,str) {
  if(ing === 0) { str = this.toString().replace(/^\/+/g, ''); }
  else if(ing === 1) { str = this.toString().replace(/\/$/, ''); }
  else { str = this.toString().replace(/\/$/, '').replace(/^\/+/g, ''); }
  return str;
}
String.prototype.pend = {
  app: str => {
    alert("App: "+str);
    return str;
  },
  pre: str => {
    alert("Pre: "+str);
    return str;
  }
}

window.all = function(str) { return document.querySelectorAll(str); };
window.byId = s => { return document.getElementById(s); }
window.getBlobURL = (code, type) => { return URL.createObjectURL(new Blob([code], { type })); }
window.blob = (code, type) => { return URL.createObjectURL(new Blob([code], { type })); }
window.nd = () => { return new Date; }
window.s = (ar,a,b) => { return ar === 1 ? a : b; }
window.$ = e => {
  var obj = e;
  if(typeof obj === 'object') {
    if(NodeList.prototype.isPrototypeOf(obj)) {
      obj = Array.from(obj);
    } else {
      if(Element.prototype.isPrototypeOf(obj)) {
        obj = [obj];
      }
      else {
        obj = null;
      }
    }
  } else if(typeof obj === 'string') {
    var body = window.document.body;
    obj = body.querySelectorAll(obj);
    if(obj.length === 0) {
      obj = [];
    } else {      
      obj = Array.from(obj);
    }
  }
  else {
    obj = null;
  }
  return obj;
}
window.tld = () => window.location.hostname.split('.')[window.location.hostname.split('.').length-1];
window.domain = () => window.location.hostname.split('.')[window.location.hostname.split('.').length-2];

window.is = {
    json: str => {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
    },
    local: href => href.contains(['127.0.0.1', 'about:', 'blob:', 'file:', 'localhost']),
    mobile: () => {
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    },
    touch: ()=>{
        return (('ontouchstart'in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
};

function ajax(url, settings) { ;
  var dir = window.location.href.split(url); //console.log(dir);
  return new Promise((resolve, reject) => {
    var req; //console.log(url);
    var data = {};
    if(settings) {
      settings.headers ? data.headers = settings.headers : null;
      if(settings.dataType) {
        data = {
          method: settings.dataType,
          body: (settings.data ? settings.data : null)
        };
        settings.dataType === "OPTIONS" ? data.credentials = 'include' : null;
        //req = new Request(url, data);
      } 
      else {
        req = url;
      }
    }
    else {
      req = url;
    }
    //console.log({url,data});
    fetch(url, data)
      .then(async(response) => {
        if(!response.ok) { 
          //throw new Error(JSON.stringify({code:response.status,message:response.statusText})); 
          return response.text().then(text => {
            var statusText = JSON.parse(text);
            var data = {code:response.status,message:statusText};
            //console.log('vanilla.js ajax.fetch res.err',{data});
            var text = JSON.stringify(data);
            throw new Error(text);
          })
        }
        return response.text();
      })
      .then(response => {
        const isJSON = is.json(response);
        //console.log('vanilla.js ajax.fetch res',{isJSON,response});
        const data = isJSON ? JSON.parse(response) : response;
        resolve(response);
      })
      .then(response => resolve(response))
      .catch(error => {
        console.log('vanilla.js ajax.fetch catch', error.message);
        var message = JSON.parse(error.message);
        reject(message);
      });
  });
}
function getFilename(str) {
  return str.trim('/').split('/')[0].split('-').join('.').toLowerCase();
}
function lazyLoad(images,vp) {
  //console.log(186,{images,vp});
  if(images.length > 0) {
    var doc = images[0].ownerDocument;
    var win = doc.defaultView;
    var lazyImages = [].slice.call(images);
    var intObs = "IntersectionObserver" in win && "IntersectionObserverEntry" in win && "intersectionRatio" in win.IntersectionObserverEntry.prototype;
    if (intObs) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if(entry.isIntersecting) {
            let lazyImage = entry.target;
            var src = lazyImage.find('[data-src]');
            src.src = src.dataset.src.replace(':origin',window.location.origin);
            lazyImage.removeAttribute('[data-src]');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage.parentNode);
      });
    }
  }
}
function pad(str, len) { len = len || 2; var zeros = new Array(len).join('0'); return (zeros + str).slice(-len); }

function count(array) { return array.length; }
function parse_str($str) { return JSON.parse('{"' + $str.substring(1).replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }) }
function ucfirst(string) { return string.charAt(0).toUpperCase(); }
function replaceTag(el) { el.outerHTML = el.outerHTML.replace(/wns/g,"lmn"); }

function offset(el) {
  var win = el.ownerDocument.defaultView;
  var rect = el.getBoundingClientRect(),
  scrollLeft = win.pageXOffset || el.closest('body').scrollLeft,
  scrollTop = win.pageYOffset || el.closest('body').scrollTop;
  data = { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  //console.log('offset()',78,{el,data,scrollTop:el.closest('body').scrollTop});
  return data
}

function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
function jsonURL(obj) {
  console.log(obj);
  var str = "";
  for (var key in obj) {
      if (str != "") {
          str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
  }
  return str;
}
function URLjson(url) {
  if(!url) url = location.search;
  var query = url.contains('?') ? url.split("?")[1] : url;
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}
function getPageURL(body,css,js) { return getBlobURL(`<html><head>`+css+js+`</head>`+body+`</html>`, 'text/html'); }

function getPath(links) {
  var link = ``;
  link += (links[f].link.includes('https:') ? `` : (window.location.protocol === "file:" ? `.` : ``));
  link += links[f].link;
  return link;
}

function capFirst(string) { return string.charAt(0).toUpperCase() + string.slice(1); }

window.words = [
  ["Amazing", "Bright", "Cool", "Enthusiastic", "Fun", "Great", "Happy", "Infinite", "Lavish", "Pure", "Real", "Super", "Tough", "Ultra"],
  ["Art", "Book", "Company", "Drinks", "Entertainment", "Food", "Gifts", "Hair", "Industries", "Jewelry", "Kicks", "Nursery", "Restaurant", "Spa", "Tech", "World"]
];

function generateName(name) {
  var r1 = getRandomInt(0, words[0].length), n1 = words[0][r1];
  var r2 = getRandomInt(0, words[0].length), n2 = words[1][r2];
  return capFirst(n1) + ' ' + n2;
}
function generateDomain(name) {
  return (name ? name : generateName()).toLowerCase().replace("-","-").replace(" ","-");
}
function generateURL(name) {
  return name.toLowerCase().replace(' ','-').replace(`'`,'').replace(`"`,'');
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

function getRoot(els) {
  var els = $('[data-root]');
  var root = null;
  if(els.length > 0) {
    var arr = [];
    var r = 0; do {
      arr.push(els[r].dataset.root);
    r++; } while(r < els.length);
    window.paths.arr = arr;
    root = paths.page.stringExists(arr);
  }
  return root;
}
function getPages(win) {
  var els = win.document.body.all('[data-page]');
  var root = null;
  if(els.length > 0) {
    var arr = [];
    var r = 0; do {
      arr.push(els[r].dataset.root);
    r++; } while(r < els.length);
    window.paths.arr = arr;
    root = paths.page.stringExists(arr);
  }
  return root;
}

function resizeIframe(obj) {
  var el = obj.contentWindow.document.body.firstElementChild;
  obj.style.height = el ? el.clientHeight + 'px' : null;
}





drag.gable = {};
drag.gable["tools"] = byId('tools');
drag.ging = null
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


function dragStart(e) {
  //console.log('dragStart',{drag});
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target.closest('[data-drag]')) {
    drag.elem = e.target.closest('[data-drag]')
    drag.ging = true;
  }
}

function dragEnd(e) {
  //console.log('dragEnd',{drag});
  initialX = currentX;
  initialY = currentY;

  drag.ging = false;
}

function drag(e) {
  //console.log('drag',{drag});
  if (drag.ging) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

window.notify = {
  counter: 0,
  alert: (message,timer) => {
    alert(message);
  },
  dialog: () => {

  },
  confirm: () => {

  },
  zIndex: elem => elem.forEach((v,k) => {
    v.style.zIndex = 123456789 + (elem.length - k);
  })
}
