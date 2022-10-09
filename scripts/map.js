/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, (function (t) {
  "use strict";
  function e(t) {
    var e, i, n, o;
    for (i = 1,
      n = arguments.length; i < n; i++)
      for (e in o = arguments[i])
        t[e] = o[e];
    return t
  }
  var i = Object.create || function () {
    function t() { }
    return function (e) {
      return t.prototype = e,
        new t
    }
  }();
  function n(t, e) {
    var i = Array.prototype.slice;
    if (t.bind)
      return t.bind.apply(t, i.call(arguments, 1));
    var n = i.call(arguments, 2);
    return function () {
      return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
    }
  }
  var o = 0;
  function s(t) {
    return t._leaflet_id = t._leaflet_id || ++o,
      t._leaflet_id
  }
  function r(t, e, i) {
    var n, o, s, r;
    return r = function () {
      n = !1,
        o && (s.apply(i, o),
          o = !1)
    }
      ,
      s = function () {
        n ? o = arguments : (t.apply(i, arguments),
          setTimeout(r, e),
          n = !0)
      }
      ,
      s
  }
  function a(t, e, i) {
    var n = e[1]
      , o = e[0]
      , s = n - o;
    return t === n && i ? t : ((t - o) % s + s) % s + o
  }
  function h() {
    return !1
  }
  function l(t, e) {
    var i = Math.pow(10, void 0 === e ? 6 : e);
    return Math.round(t * i) / i
  }
  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
  }
  function c(t) {
    return u(t).split(/\s+/)
  }
  function _(t, e) {
    for (var n in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? i(t.options) : {}),
      e)
      t.options[n] = e[n];
    return t.options
  }
  function d(t, e, i) {
    var n = [];
    for (var o in t)
      n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
    return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
  }
  var p = /\{ *([\w_-]+) *\}/g;
  function m(t, e) {
    return t.replace(p, (function (t, i) {
      var n = e[i];
      if (void 0 === n)
        throw new Error("No value provided for variable " + t);
      return "function" == typeof n && (n = n(e)),
        n
    }
    ))
  }
  var f = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }
    ;
  function g(t, e) {
    for (var i = 0; i < t.length; i++)
      if (t[i] === e)
        return i;
    return -1
  }
  var v = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  function y(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t]
  }
  var x = 0;
  function w(t) {
    var e = +new Date
      , i = Math.max(0, 16 - (e - x));
    return x = e + i,
      window.setTimeout(t, i)
  }
  var b = window.requestAnimationFrame || y("RequestAnimationFrame") || w
    , P = window.cancelAnimationFrame || y("CancelAnimationFrame") || y("CancelRequestAnimationFrame") || function (t) {
      window.clearTimeout(t)
    }
    ;
  function T(t, e, i) {
    if (!i || b !== w)
      return b.call(window, n(t, e));
    t.call(e)
  }
  function M(t) {
    t && P.call(window, t)
  }
  var C = {
    extend: e,
    create: i,
    bind: n,
    lastId: o,
    stamp: s,
    throttle: r,
    wrapNum: a,
    falseFn: h,
    formatNum: l,
    trim: u,
    splitWords: c,
    setOptions: _,
    getParamString: d,
    template: m,
    isArray: f,
    indexOf: g,
    emptyImageUrl: v,
    requestFn: b,
    cancelFn: P,
    requestAnimFrame: T,
    cancelAnimFrame: M
  };
  function z() { }
  z.extend = function (t) {
    var n = function () {
      this.initialize && this.initialize.apply(this, arguments),
        this.callInitHooks()
    }
      , o = n.__super__ = this.prototype
      , s = i(o);
    for (var r in s.constructor = n,
      n.prototype = s,
      this)
      Object.prototype.hasOwnProperty.call(this, r) && "prototype" !== r && "__super__" !== r && (n[r] = this[r]);
    return t.statics && (e(n, t.statics),
      delete t.statics),
      t.includes && (!function (t) {
        if ("undefined" == typeof L || !L || !L.Mixin)
          return;
        t = f(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
      }(t.includes),
        e.apply(null, [s].concat(t.includes)),
        delete t.includes),
      s.options && (t.options = e(i(s.options), t.options)),
      e(s, t),
      s._initHooks = [],
      s.callInitHooks = function () {
        if (!this._initHooksCalled) {
          o.callInitHooks && o.callInitHooks.call(this),
            this._initHooksCalled = !0;
          for (var t = 0, e = s._initHooks.length; t < e; t++)
            s._initHooks[t].call(this)
        }
      }
      ,
      n
  }
    ,
    z.include = function (t) {
      return e(this.prototype, t),
        this
    }
    ,
    z.mergeOptions = function (t) {
      return e(this.prototype.options, t),
        this
    }
    ,
    z.addInitHook = function (t) {
      var e = Array.prototype.slice.call(arguments, 1)
        , i = "function" == typeof t ? t : function () {
          this[t].apply(this, e)
        }
        ;
      return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i),
        this
    }
    ;
  var E = {
    on: function (t, e, i) {
      if ("object" == typeof t)
        for (var n in t)
          this._on(n, t[n], e);
      else
        for (var o = 0, s = (t = c(t)).length; o < s; o++)
          this._on(t[o], e, i);
      return this
    },
    off: function (t, e, i) {
      if (t)
        if ("object" == typeof t)
          for (var n in t)
            this._off(n, t[n], e);
        else
          for (var o = 0, s = (t = c(t)).length; o < s; o++)
            this._off(t[o], e, i);
      else
        delete this._events;
      return this
    },
    _on: function (t, e, i) {
      this._events = this._events || {};
      var n = this._events[t];
      n || (n = [],
        this._events[t] = n),
        i === this && (i = void 0);
      for (var o = {
        fn: e,
        ctx: i
      }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === e && s[r].ctx === i)
          return;
      s.push(o)
    },
    _off: function (t, e, i) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (e) {
          if (i === this && (i = void 0),
            n)
            for (o = 0,
              s = n.length; o < s; o++) {
              var r = n[o];
              if (r.ctx === i && r.fn === e)
                return r.fn = h,
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
            }
        } else {
          for (o = 0,
            s = n.length; o < s; o++)
            n[o].fn = h;
          delete this._events[t]
        }
    },
    fire: function (t, i, n) {
      if (!this.listens(t, n))
        return this;
      var o = e({}, i, {
        type: t,
        target: this,
        sourceTarget: i && i.sourceTarget || this
      });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, o)
          }
          this._firingCount--
        }
      }
      return n && this._propagateEvent(o),
        this
    },
    listens: function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length)
        return !0;
      if (e)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, e))
            return !0;
      return !1
    },
    once: function (t, e, i) {
      if ("object" == typeof t) {
        for (var o in t)
          this.once(o, t[o], e);
        return this
      }
      var s = n((function () {
        this.off(t, e, i).off(t, s, i)
      }
      ), this);
      return this.on(t, e, i).on(t, s, i)
    },
    addEventParent: function (t) {
      return this._eventParents = this._eventParents || {},
        this._eventParents[s(t)] = t,
        this
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[s(t)],
        this
    },
    _propagateEvent: function (t) {
      for (var i in this._eventParents)
        this._eventParents[i].fire(t.type, e({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0)
    }
  };
  E.addEventListener = E.on,
    E.removeEventListener = E.clearAllEventListeners = E.off,
    E.addOneTimeEventListener = E.once,
    E.fireEvent = E.fire,
    E.hasEventListeners = E.listens;
  var k = z.extend(E);
  function S(t, e, i) {
    this.x = i ? Math.round(t) : t,
      this.y = i ? Math.round(e) : e
  }
  var Z = Math.trunc || function (t) {
    return t > 0 ? Math.floor(t) : Math.ceil(t)
  }
    ;
  function B(t, e, i) {
    return t instanceof S ? t : f(t) ? new S(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new S(t.x, t.y) : new S(t, e, i)
  }
  function I(t, e) {
    if (t)
      for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
        this.extend(i[n])
  }
  function A(t, e) {
    return !t || t instanceof I ? t : new I(t, e)
  }
  function O(t, e) {
    if (t)
      for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
        this.extend(i[n])
  }
  function D(t, e) {
    return t instanceof O ? t : new O(t, e)
  }
  function R(t, e, i) {
    if (isNaN(t) || isNaN(e))
      throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
    this.lat = +t,
      this.lng = +e,
      void 0 !== i && (this.alt = +i)
  }
  function F(t, e, i) {
    return t instanceof R ? t : f(t) && "object" != typeof t[0] ? 3 === t.length ? new R(t[0], t[1], t[2]) : 2 === t.length ? new R(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new R(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new R(t, e, i)
  }
  S.prototype = {
    clone: function () {
      return new S(this.x, this.y)
    },
    add: function (t) {
      return this.clone()._add(B(t))
    },
    _add: function (t) {
      return this.x += t.x,
        this.y += t.y,
        this
    },
    subtract: function (t) {
      return this.clone()._subtract(B(t))
    },
    _subtract: function (t) {
      return this.x -= t.x,
        this.y -= t.y,
        this
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t)
    },
    _divideBy: function (t) {
      return this.x /= t,
        this.y /= t,
        this
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t)
    },
    _multiplyBy: function (t) {
      return this.x *= t,
        this.y *= t,
        this
    },
    scaleBy: function (t) {
      return new S(this.x * t.x, this.y * t.y)
    },
    unscaleBy: function (t) {
      return new S(this.x / t.x, this.y / t.y)
    },
    round: function () {
      return this.clone()._round()
    },
    _round: function () {
      return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    },
    floor: function () {
      return this.clone()._floor()
    },
    _floor: function () {
      return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    },
    ceil: function () {
      return this.clone()._ceil()
    },
    _ceil: function () {
      return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    },
    trunc: function () {
      return this.clone()._trunc()
    },
    _trunc: function () {
      return this.x = Z(this.x),
        this.y = Z(this.y),
        this
    },
    distanceTo: function (t) {
      var e = (t = B(t)).x - this.x
        , i = t.y - this.y;
      return Math.sqrt(e * e + i * i)
    },
    equals: function (t) {
      return (t = B(t)).x === this.x && t.y === this.y
    },
    contains: function (t) {
      return t = B(t),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
    },
    toString: function () {
      return "Point(" + l(this.x) + ", " + l(this.y) + ")"
    }
  },
    I.prototype = {
      extend: function (t) {
        return t = B(t),
          this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
            this.max.x = Math.max(t.x, this.max.x),
            this.min.y = Math.min(t.y, this.min.y),
            this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
              this.max = t.clone()),
          this
      },
      getCenter: function (t) {
        return new S((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
      },
      getBottomLeft: function () {
        return new S(this.min.x, this.max.y)
      },
      getTopRight: function () {
        return new S(this.max.x, this.min.y)
      },
      getTopLeft: function () {
        return this.min
      },
      getBottomRight: function () {
        return this.max
      },
      getSize: function () {
        return this.max.subtract(this.min)
      },
      contains: function (t) {
        var e, i;
        return (t = "number" == typeof t[0] || t instanceof S ? B(t) : A(t)) instanceof I ? (e = t.min,
          i = t.max) : e = i = t,
          e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
      },
      intersects: function (t) {
        t = A(t);
        var e = this.min
          , i = this.max
          , n = t.min
          , o = t.max
          , s = o.x >= e.x && n.x <= i.x
          , r = o.y >= e.y && n.y <= i.y;
        return s && r
      },
      overlaps: function (t) {
        t = A(t);
        var e = this.min
          , i = this.max
          , n = t.min
          , o = t.max
          , s = o.x > e.x && n.x < i.x
          , r = o.y > e.y && n.y < i.y;
        return s && r
      },
      isValid: function () {
        return !(!this.min || !this.max)
      }
    },
    O.prototype = {
      extend: function (t) {
        var e, i, n = this._southWest, o = this._northEast;
        if (t instanceof R)
          e = t,
            i = t;
        else {
          if (!(t instanceof O))
            return t ? this.extend(F(t) || D(t)) : this;
          if (e = t._southWest,
            i = t._northEast,
            !e || !i)
            return this
        }
        return n || o ? (n.lat = Math.min(e.lat, n.lat),
          n.lng = Math.min(e.lng, n.lng),
          o.lat = Math.max(i.lat, o.lat),
          o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new R(e.lat, e.lng),
            this._northEast = new R(i.lat, i.lng)),
          this
      },
      pad: function (t) {
        var e = this._southWest
          , i = this._northEast
          , n = Math.abs(e.lat - i.lat) * t
          , o = Math.abs(e.lng - i.lng) * t;
        return new O(new R(e.lat - n, e.lng - o), new R(i.lat + n, i.lng + o))
      },
      getCenter: function () {
        return new R((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
      },
      getSouthWest: function () {
        return this._southWest
      },
      getNorthEast: function () {
        return this._northEast
      },
      getNorthWest: function () {
        return new R(this.getNorth(), this.getWest())
      },
      getSouthEast: function () {
        return new R(this.getSouth(), this.getEast())
      },
      getWest: function () {
        return this._southWest.lng
      },
      getSouth: function () {
        return this._southWest.lat
      },
      getEast: function () {
        return this._northEast.lng
      },
      getNorth: function () {
        return this._northEast.lat
      },
      contains: function (t) {
        t = "number" == typeof t[0] || t instanceof R || "lat" in t ? F(t) : D(t);
        var e, i, n = this._southWest, o = this._northEast;
        return t instanceof O ? (e = t.getSouthWest(),
          i = t.getNorthEast()) : e = i = t,
          e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
      },
      intersects: function (t) {
        t = D(t);
        var e = this._southWest
          , i = this._northEast
          , n = t.getSouthWest()
          , o = t.getNorthEast()
          , s = o.lat >= e.lat && n.lat <= i.lat
          , r = o.lng >= e.lng && n.lng <= i.lng;
        return s && r
      },
      overlaps: function (t) {
        t = D(t);
        var e = this._southWest
          , i = this._northEast
          , n = t.getSouthWest()
          , o = t.getNorthEast()
          , s = o.lat > e.lat && n.lat < i.lat
          , r = o.lng > e.lng && n.lng < i.lng;
        return s && r
      },
      toBBoxString: function () {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
      },
      equals: function (t, e) {
        return !!t && (t = D(t),
          this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast)
      }
    },
    R.prototype = {
      equals: function (t, e) {
        return !!t && (t = F(t),
          Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
      },
      toString: function (t) {
        return "LatLng(" + l(this.lat, t) + ", " + l(this.lng, t) + ")"
      },
      distanceTo: function (t) {
        return U.distance(this, F(t))
      },
      wrap: function () {
        return U.wrapLatLng(this)
      },
      toBounds: function (t) {
        var e = 180 * t / 40075017
          , i = e / Math.cos(Math.PI / 180 * this.lat);
        return D([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
      },
      clone: function () {
        return new R(this.lat, this.lng, this.alt)
      }
    };
  var j, N = {
    latLngToPoint: function (t, e) {
      var i = this.projection.project(t)
        , n = this.scale(e);
      return this.transformation._transform(i, n)
    },
    pointToLatLng: function (t, e) {
      var i = this.scale(e)
        , n = this.transformation.untransform(t, i);
      return this.projection.unproject(n)
    },
    project: function (t) {
      return this.projection.project(t)
    },
    unproject: function (t) {
      return this.projection.unproject(t)
    },
    scale: function (t) {
      return 256 * Math.pow(2, t)
    },
    zoom: function (t) {
      return Math.log(t / 256) / Math.LN2
    },
    getProjectedBounds: function (t) {
      if (this.infinite)
        return null;
      var e = this.projection.bounds
        , i = this.scale(t);
      return new I(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
    },
    infinite: !1,
    wrapLatLng: function (t) {
      var e = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng;
      return new R(this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
    },
    wrapLatLngBounds: function (t) {
      var e = t.getCenter()
        , i = this.wrapLatLng(e)
        , n = e.lat - i.lat
        , o = e.lng - i.lng;
      if (0 === n && 0 === o)
        return t;
      var s = t.getSouthWest()
        , r = t.getNorthEast();
      return new O(new R(s.lat - n, s.lng - o), new R(r.lat - n, r.lng - o))
    }
  }, U = e({}, N, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function (t, e) {
      var i = Math.PI / 180
        , n = t.lat * i
        , o = e.lat * i
        , s = Math.sin((e.lat - t.lat) * i / 2)
        , r = Math.sin((e.lng - t.lng) * i / 2)
        , a = s * s + Math.cos(n) * Math.cos(o) * r * r
        , h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return this.R * h
    }
  }), H = 6378137, W = {
    R: H,
    MAX_LATITUDE: 85.0511287798,
    project: function (t) {
      var e = Math.PI / 180
        , i = this.MAX_LATITUDE
        , n = Math.max(Math.min(i, t.lat), -i)
        , o = Math.sin(n * e);
      return new S(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
    },
    unproject: function (t) {
      var e = 180 / Math.PI;
      return new R((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
    },
    bounds: (j = H * Math.PI,
      new I([-j, -j], [j, j]))
  };
  function V(t, e, i, n) {
    if (f(t))
      return this._a = t[0],
        this._b = t[1],
        this._c = t[2],
        void (this._d = t[3]);
    this._a = t,
      this._b = e,
      this._c = i,
      this._d = n
  }
  function q(t, e, i, n) {
    return new V(t, e, i, n)
  }
  V.prototype = {
    transform: function (t, e) {
      return this._transform(t.clone(), e)
    },
    _transform: function (t, e) {
      return e = e || 1,
        t.x = e * (this._a * t.x + this._b),
        t.y = e * (this._c * t.y + this._d),
        t
    },
    untransform: function (t, e) {
      return e = e || 1,
        new S((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
    }
  };
  var G = e({}, U, {
    code: "EPSG:3857",
    projection: W,
    transformation: function () {
      var t = .5 / (Math.PI * W.R);
      return q(t, .5, -t, .5)
    }()
  })
    , K = e({}, G, {
      code: "EPSG:900913"
    });
  function Y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
  }
  function X(t, e) {
    var i, n, o, s, r, a, h = "";
    for (i = 0,
      o = t.length; i < o; i++) {
      for (n = 0,
        s = (r = t[i]).length; n < s; n++)
        h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
      h += e ? zt ? "z" : "x" : ""
    }
    return h || "M0 0"
  }
  var J = document.documentElement.style
    , $ = "ActiveXObject" in window
    , Q = $ && !document.addEventListener
    , tt = "msLaunchUri" in navigator && !("documentMode" in document)
    , et = kt("webkit")
    , it = kt("android")
    , nt = kt("android 2") || kt("android 3")
    , ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10)
    , st = it && kt("Google") && ot < 537 && !("AudioNode" in window)
    , rt = !!window.opera
    , at = !tt && kt("chrome")
    , ht = kt("gecko") && !et && !rt && !$
    , lt = !at && kt("safari")
    , ut = kt("phantom")
    , ct = "OTransition" in J
    , _t = 0 === navigator.platform.indexOf("Win")
    , dt = $ && "transition" in J
    , pt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !nt
    , mt = "MozPerspective" in J
    , ft = !window.L_DISABLE_3D && (dt || pt || mt) && !ct && !ut
    , gt = "undefined" != typeof orientation || kt("mobile")
    , vt = gt && et
    , yt = gt && pt
    , xt = !window.PointerEvent && window.MSPointerEvent
    , Lt = !(!window.PointerEvent && !xt)
    , wt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    , bt = gt && rt
    , Pt = gt && ht
    , Tt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1
    , Mt = function () {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0
          }
        });
        window.addEventListener("testPassiveEventSupport", h, e),
          window.removeEventListener("testPassiveEventSupport", h, e)
      } catch (t) { }
      return t
    }()
    , Ct = !!document.createElement("canvas").getContext
    , zt = !(!document.createElementNS || !Y("svg").createSVGRect)
    , Et = !zt && function () {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)",
          e && "object" == typeof e.adj
      } catch (t) {
        return !1
      }
    }();
  function kt(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0
  }
  var St = {
    ie: $,
    ielt9: Q,
    edge: tt,
    webkit: et,
    android: it,
    android23: nt,
    androidStock: st,
    opera: rt,
    chrome: at,
    gecko: ht,
    safari: lt,
    phantom: ut,
    opera12: ct,
    win: _t,
    ie3d: dt,
    webkit3d: pt,
    gecko3d: mt,
    any3d: ft,
    mobile: gt,
    mobileWebkit: vt,
    mobileWebkit3d: yt,
    msPointer: xt,
    pointer: Lt,
    touch: wt,
    mobileOpera: bt,
    mobileGecko: Pt,
    retina: Tt,
    passiveEvents: Mt,
    canvas: Ct,
    svg: zt,
    vml: Et
  }
    , Zt = xt ? "MSPointerDown" : "pointerdown"
    , Bt = xt ? "MSPointerMove" : "pointermove"
    , It = xt ? "MSPointerUp" : "pointerup"
    , At = xt ? "MSPointerCancel" : "pointercancel"
    , Ot = {}
    , Dt = !1;
  function Rt(t, e, i, o) {
    return "touchstart" === e ? function (t, e, i) {
      var o = n((function (t) {
        t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ae(t),
          Ut(t, e)
      }
      ));
      t["_leaflet_touchstart" + i] = o,
        t.addEventListener(Zt, o, !1),
        Dt || (document.addEventListener(Zt, Ft, !0),
          document.addEventListener(Bt, jt, !0),
          document.addEventListener(It, Nt, !0),
          document.addEventListener(At, Nt, !0),
          Dt = !0)
    }(t, i, o) : "touchmove" === e ? function (t, e, i) {
      var n = function (t) {
        t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Ut(t, e)
      };
      t["_leaflet_touchmove" + i] = n,
        t.addEventListener(Bt, n, !1)
    }(t, i, o) : "touchend" === e && function (t, e, i) {
      var n = function (t) {
        Ut(t, e)
      };
      t["_leaflet_touchend" + i] = n,
        t.addEventListener(It, n, !1),
        t.addEventListener(At, n, !1)
    }(t, i, o),
      this
  }
  function Ft(t) {
    Ot[t.pointerId] = t
  }
  function jt(t) {
    Ot[t.pointerId] && (Ot[t.pointerId] = t)
  }
  function Nt(t) {
    delete Ot[t.pointerId]
  }
  function Ut(t, e) {
    for (var i in t.touches = [],
      Ot)
      t.touches.push(Ot[i]);
    t.changedTouches = [t],
      e(t)
  }
  var Ht = xt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart"
    , Wt = xt ? "MSPointerUp" : Lt ? "pointerup" : "touchend"
    , Vt = "_leaflet_";
  var qt, Gt, Kt, Yt, Xt, Jt = de(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), $t = de(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Qt = "webkitTransition" === $t || "OTransition" === $t ? $t + "End" : "transitionend";
  function te(t) {
    return "string" == typeof t ? document.getElementById(t) : t
  }
  function ee(t, e) {
    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
    if ((!i || "auto" === i) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      i = n ? n[e] : null
    }
    return "auto" === i ? null : i
  }
  function ie(t, e, i) {
    var n = document.createElement(t);
    return n.className = e || "",
      i && i.appendChild(n),
      n
  }
  function ne(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
  }
  function oe(t) {
    for (; t.firstChild;)
      t.removeChild(t.firstChild)
  }
  function se(t) {
    var e = t.parentNode;
    e && e.lastChild !== t && e.appendChild(t)
  }
  function re(t) {
    var e = t.parentNode;
    e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
  }
  function ae(t, e) {
    if (void 0 !== t.classList)
      return t.classList.contains(e);
    var i = ce(t);
    return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
  }
  function he(t, e) {
    if (void 0 !== t.classList)
      for (var i = c(e), n = 0, o = i.length; n < o; n++)
        t.classList.add(i[n]);
    else if (!ae(t, e)) {
      var s = ce(t);
      ue(t, (s ? s + " " : "") + e)
    }
  }
  function le(t, e) {
    void 0 !== t.classList ? t.classList.remove(e) : ue(t, u((" " + ce(t) + " ").replace(" " + e + " ", " ")))
  }
  function ue(t, e) {
    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
  }
  function ce(t) {
    return t.correspondingElement && (t = t.correspondingElement),
      void 0 === t.className.baseVal ? t.className : t.className.baseVal
  }
  function _e(t, e) {
    "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
      var i = !1
        , n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n)
      } catch (t) {
        if (1 === e)
          return
      }
      e = Math.round(100 * e),
        i ? (i.Enabled = 100 !== e,
          i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
    }(t, e)
  }
  function de(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
      if (t[i] in e)
        return t[i];
    return !1
  }
  function pe(t, e, i) {
    var n = e || new S(0, 0);
    t.style[Jt] = (dt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
  }
  function me(t, e) {
    t._leaflet_pos = e,
      ft ? pe(t, e) : (t.style.left = e.x + "px",
        t.style.top = e.y + "px")
  }
  function fe(t) {
    return t._leaflet_pos || new S(0, 0)
  }
  if ("onselectstart" in document)
    qt = function () {
      Te(window, "selectstart", Ae)
    }
      ,
      Gt = function () {
        Ce(window, "selectstart", Ae)
      }
      ;
  else {
    var ge = de(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
    qt = function () {
      if (ge) {
        var t = document.documentElement.style;
        Kt = t[ge],
          t[ge] = "none"
      }
    }
      ,
      Gt = function () {
        ge && (document.documentElement.style[ge] = Kt,
          Kt = void 0)
      }
  }
  function ve() {
    Te(window, "dragstart", Ae)
  }
  function ye() {
    Ce(window, "dragstart", Ae)
  }
  function xe(t) {
    for (; -1 === t.tabIndex;)
      t = t.parentNode;
    t.style && (Le(),
      Yt = t,
      Xt = t.style.outline,
      t.style.outline = "none",
      Te(window, "keydown", Le))
  }
  function Le() {
    Yt && (Yt.style.outline = Xt,
      Yt = void 0,
      Xt = void 0,
      Ce(window, "keydown", Le))
  }
  function we(t) {
    do {
      t = t.parentNode
    } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
    return t
  }
  function be(t) {
    var e = t.getBoundingClientRect();
    return {
      x: e.width / t.offsetWidth || 1,
      y: e.height / t.offsetHeight || 1,
      boundingClientRect: e
    }
  }
  var Pe = {
    TRANSFORM: Jt,
    TRANSITION: $t,
    TRANSITION_END: Qt,
    get: te,
    getStyle: ee,
    create: ie,
    remove: ne,
    empty: oe,
    toFront: se,
    toBack: re,
    hasClass: ae,
    addClass: he,
    removeClass: le,
    setClass: ue,
    getClass: ce,
    setOpacity: _e,
    testProp: de,
    setTransform: pe,
    setPosition: me,
    getPosition: fe,
    disableTextSelection: qt,
    enableTextSelection: Gt,
    disableImageDrag: ve,
    enableImageDrag: ye,
    preventOutline: xe,
    restoreOutline: Le,
    getSizedParentNode: we,
    getScale: be
  };
  function Te(t, e, i, n) {
    if ("object" == typeof e)
      for (var o in e)
        ke(t, o, e[o], i);
    else
      for (var s = 0, r = (e = c(e)).length; s < r; s++)
        ke(t, e[s], i, n);
    return this
  }
  var Me = "_leaflet_events";
  function Ce(t, e, i, n) {
    if ("object" == typeof e)
      for (var o in e)
        Se(t, o, e[o], i);
    else if (e)
      for (var s = 0, r = (e = c(e)).length; s < r; s++)
        Se(t, e[s], i, n);
    else {
      for (var a in t[Me])
        Se(t, a, t[Me][a]);
      delete t[Me]
    }
    return this
  }
  function ze() {
    if (Lt)
      return !(tt || lt)
  }
  var Ee = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };
  function ke(t, e, i, n) {
    var o = e + s(i) + (n ? "_" + s(n) : "");
    if (t[Me] && t[Me][o])
      return this;
    var r = function (e) {
      return i.call(n || t, e || window.event)
    }
      , a = r;
    Lt && 0 === e.indexOf("touch") ? Rt(t, e, r, o) : wt && "dblclick" === e && !ze() ? function (t, e, i) {
      var n, o, s = !1;
      function r(t) {
        if (Lt) {
          if (!t.isPrimary)
            return;
          if ("mouse" === t.pointerType)
            return
        } else if (t.touches.length > 1)
          return;
        var e = Date.now()
          , i = e - (n || e);
        o = t.touches ? t.touches[0] : t,
          s = i > 0 && i <= 250,
          n = e
      }
      function a(t) {
        if (s && !o.cancelBubble) {
          if (Lt) {
            if ("mouse" === t.pointerType)
              return;
            var i, r, a = {};
            for (r in o)
              i = o[r],
                a[r] = i && i.bind ? i.bind(o) : i;
            o = a
          }
          o.type = "dblclick",
            o.button = 0,
            e(o),
            n = null
        }
      }
      t[Vt + Ht + i] = r,
        t[Vt + Wt + i] = a,
        t[Vt + "dblclick" + i] = e,
        t.addEventListener(Ht, r, !!Mt && {
          passive: !1
        }),
        t.addEventListener(Wt, a, !!Mt && {
          passive: !1
        }),
        t.addEventListener("dblclick", e, !1)
    }(t, r, o) : "addEventListener" in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(Ee[e] || e, r, !!Mt && {
      passive: !1
    }) : "mouseenter" === e || "mouseleave" === e ? (r = function (e) {
      e = e || window.event,
        He(t, e) && a(e)
    }
      ,
      t.addEventListener(Ee[e], r, !1)) : t.addEventListener(e, a, !1) : "attachEvent" in t && t.attachEvent("on" + e, r),
      t[Me] = t[Me] || {},
      t[Me][o] = r
  }
  function Se(t, e, i, n) {
    var o = e + s(i) + (n ? "_" + s(n) : "")
      , r = t[Me] && t[Me][o];
    if (!r)
      return this;
    Lt && 0 === e.indexOf("touch") ? function (t, e, i) {
      var n = t["_leaflet_" + e + i];
      "touchstart" === e ? t.removeEventListener(Zt, n, !1) : "touchmove" === e ? t.removeEventListener(Bt, n, !1) : "touchend" === e && (t.removeEventListener(It, n, !1),
        t.removeEventListener(At, n, !1))
    }(t, e, o) : wt && "dblclick" === e && !ze() ? function (t, e) {
      var i = t[Vt + Ht + e]
        , n = t[Vt + Wt + e]
        , o = t[Vt + "dblclick" + e];
      t.removeEventListener(Ht, i, !!Mt && {
        passive: !1
      }),
        t.removeEventListener(Wt, n, !!Mt && {
          passive: !1
        }),
        t.removeEventListener("dblclick", o, !1)
    }(t, o) : "removeEventListener" in t ? t.removeEventListener(Ee[e] || e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r),
      t[Me][o] = null
  }
  function Ze(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
      Ue(t),
      this
  }
  function Be(t) {
    return ke(t, "wheel", Ze),
      this
  }
  function Ie(t) {
    return Te(t, "mousedown touchstart dblclick", Ze),
      ke(t, "click", Ne),
      this
  }
  function Ae(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
      this
  }
  function Oe(t) {
    return Ae(t),
      Ze(t),
      this
  }
  function De(t, e) {
    if (!e)
      return new S(t.clientX, t.clientY);
    var i = be(e)
      , n = i.boundingClientRect;
    return new S((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)
  }
  var Re = _t && at ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;
  function Fe(t) {
    return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Re : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
  }
  var je = {};
  function Ne(t) {
    je[t.type] = !0
  }
  function Ue(t) {
    var e = je[t.type];
    return je[t.type] = !1,
      e
  }
  function He(t, e) {
    var i = e.relatedTarget;
    if (!i)
      return !0;
    try {
      for (; i && i !== t;)
        i = i.parentNode
    } catch (t) {
      return !1
    }
    return i !== t
  }
  var We = {
    on: Te,
    off: Ce,
    stopPropagation: Ze,
    disableScrollPropagation: Be,
    disableClickPropagation: Ie,
    preventDefault: Ae,
    stop: Oe,
    getMousePosition: De,
    getWheelDelta: Fe,
    fakeStop: Ne,
    skipped: Ue,
    isExternalTarget: He,
    addListener: Te,
    removeListener: Ce
  }
    , Ve = k.extend({
      run: function (t, e, i, n) {
        this.stop(),
          this._el = t,
          this._inProgress = !0,
          this._duration = i || .25,
          this._easeOutPower = 1 / Math.max(n || .5, .2),
          this._startPos = fe(t),
          this._offset = e.subtract(this._startPos),
          this._startTime = +new Date,
          this.fire("start"),
          this._animate()
      },
      stop: function () {
        this._inProgress && (this._step(!0),
          this._complete())
      },
      _animate: function () {
        this._animId = T(this._animate, this),
          this._step()
      },
      _step: function (t) {
        var e = +new Date - this._startTime
          , i = 1e3 * this._duration;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
          this._complete())
      },
      _runFrame: function (t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(),
          me(this._el, i),
          this.fire("step")
      },
      _complete: function () {
        M(this._animId),
          this._inProgress = !1,
          this.fire("end")
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower)
      }
    })
    , qe = k.extend({
      options: {
        crs: G,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0
      },
      initialize: function (t, e) {
        e = _(this, e),
          this._handlers = [],
          this._layers = {},
          this._zoomBoundLayers = {},
          this._sizeChanged = !0,
          this._initContainer(t),
          this._initLayout(),
          this._onResize = n(this._onResize, this),
          this._initEvents(),
          e.maxBounds && this.setMaxBounds(e.maxBounds),
          void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
          e.center && void 0 !== e.zoom && this.setView(F(e.center), e.zoom, {
            reset: !0
          }),
          this.callInitHooks(),
          this._zoomAnimated = $t && ft && !bt && this.options.zoomAnimation,
          this._zoomAnimated && (this._createAnimProxy(),
            Te(this._proxy, Qt, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers)
      },
      setView: function (t, i, n) {
        if ((i = void 0 === i ? this._zoom : this._limitZoom(i),
          t = this._limitCenter(F(t), i, this.options.maxBounds),
          n = n || {},
          this._stop(),
          this._loaded && !n.reset && !0 !== n) && (void 0 !== n.animate && (n.zoom = e({
            animate: n.animate
          }, n.zoom),
            n.pan = e({
              animate: n.animate,
              duration: n.duration
            }, n.pan)),
            this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)))
          return clearTimeout(this._sizeTimer),
            this;
        return this._resetView(t, i),
          this
      },
      setZoom: function (t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, {
          zoom: e
        }) : (this._zoom = t,
          this)
      },
      zoomIn: function (t, e) {
        return t = t || (ft ? this.options.zoomDelta : 1),
          this.setZoom(this._zoom + t, e)
      },
      zoomOut: function (t, e) {
        return t = t || (ft ? this.options.zoomDelta : 1),
          this.setZoom(this._zoom - t, e)
      },
      setZoomAround: function (t, e, i) {
        var n = this.getZoomScale(e)
          , o = this.getSize().divideBy(2)
          , s = (t instanceof S ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n)
          , r = this.containerPointToLatLng(o.add(s));
        return this.setView(r, e, {
          zoom: i
        })
      },
      _getBoundsCenterZoom: function (t, e) {
        e = e || {},
          t = t.getBounds ? t.getBounds() : D(t);
        var i = B(e.paddingTopLeft || e.padding || [0, 0])
          , n = B(e.paddingBottomRight || e.padding || [0, 0])
          , o = this.getBoundsZoom(t, !1, i.add(n));
        if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: o
          };
        var s = n.subtract(i).divideBy(2)
          , r = this.project(t.getSouthWest(), o)
          , a = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(r.add(a).divideBy(2).add(s), o),
          zoom: o
        }
      },
      fitBounds: function (t, e) {
        if (!(t = D(t)).isValid())
          throw new Error("Bounds are not valid.");
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e)
      },
      fitWorld: function (t) {
        return this.fitBounds([[-90, -180], [90, 180]], t)
      },
      panTo: function (t, e) {
        return this.setView(t, this._zoom, {
          pan: e
        })
      },
      panBy: function (t, e) {
        if (e = e || {},
          !(t = B(t).round()).x && !t.y)
          return this.fire("moveend");
        if (!0 !== e.animate && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this;
        if (this._panAnim || (this._panAnim = new Ve,
          this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)),
          e.noMoveStart || this.fire("movestart"),
          !1 !== e.animate) {
          he(this._mapPane, "leaflet-pan-anim");
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
        } else
          this._rawPanBy(t),
            this.fire("move").fire("moveend");
        return this
      },
      flyTo: function (t, e, i) {
        if (!1 === (i = i || {}).animate || !ft)
          return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter())
          , o = this.project(t)
          , s = this.getSize()
          , r = this._zoom;
        t = F(t),
          e = void 0 === e ? r : e;
        var a = Math.max(s.x, s.y)
          , h = a * this.getZoomScale(r, e)
          , l = o.distanceTo(n) || 1
          , u = 1.42
          , c = 2.0164;
        function _(t) {
          var e = (h * h - a * a + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? h : a) * c * l)
            , i = Math.sqrt(e * e + 1) - e;
          return i < 1e-9 ? -18 : Math.log(i)
        }
        function d(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2
        }
        var m = _(0);
        function f(t) {
          return a * (p(m) * (d(e = m + u * t) / p(e)) - d(m)) / c;
          var e
        }
        var g = Date.now()
          , v = (_(1) - m) / u
          , y = i.duration ? 1e3 * i.duration : 1e3 * v * .8;
        return this._moveStart(!0, i.noMoveStart),
          function i() {
            var s = (Date.now() - g) / y
              , h = function (t) {
                return 1 - Math.pow(1 - t, 1.5)
              }(s) * v;
            s <= 1 ? (this._flyToFrame = T(i, this),
              this._move(this.unproject(n.add(o.subtract(n).multiplyBy(f(h) / l)), r), this.getScaleZoom(a / function (t) {
                return a * (p(m) / p(m + u * t))
              }(h), r), {
                flyTo: !0
              })) : this._move(t, e)._moveEnd(!0)
          }
            .call(this),
          this
      },
      flyToBounds: function (t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e)
      },
      setMaxBounds: function (t) {
        return (t = D(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
          this.options.maxBounds = t,
          this._loaded && this._panInsideMaxBounds(),
          this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
            this.off("moveend", this._panInsideMaxBounds))
      },
      setMinZoom: function (t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t,
          this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
      },
      setMaxZoom: function (t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t,
          this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
      },
      panInsideBounds: function (t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter()
          , n = this._limitCenter(i, this._zoom, D(t));
        return i.equals(n) || this.panTo(n, e),
          this._enforcingBounds = !1,
          this
      },
      panInside: function (t, e) {
        var i = B((e = e || {}).paddingTopLeft || e.padding || [0, 0])
          , n = B(e.paddingBottomRight || e.padding || [0, 0])
          , o = this.getCenter()
          , s = this.project(o)
          , r = this.project(t)
          , a = this.getPixelBounds()
          , h = a.getSize().divideBy(2)
          , l = A([a.min.add(i), a.max.subtract(n)]);
        if (!l.contains(r)) {
          this._enforcingBounds = !0;
          var u = s.subtract(r)
            , c = B(r.x + u.x, r.y + u.y);
          (r.x < l.min.x || r.x > l.max.x) && (c.x = s.x - u.x,
            u.x > 0 ? c.x += h.x - i.x : c.x -= h.x - n.x),
            (r.y < l.min.y || r.y > l.max.y) && (c.y = s.y - u.y,
              u.y > 0 ? c.y += h.y - i.y : c.y -= h.y - n.y),
            this.panTo(this.unproject(c), e),
            this._enforcingBounds = !1
        }
        return this
      },
      invalidateSize: function (t) {
        if (!this._loaded)
          return this;
        t = e({
          animate: !1,
          pan: !0
        }, !0 === t ? {
          animate: !0
        } : t);
        var i = this.getSize();
        this._sizeChanged = !0,
          this._lastCenter = null;
        var o = this.getSize()
          , s = i.divideBy(2).round()
          , r = o.divideBy(2).round()
          , a = s.subtract(r);
        return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a),
          this.fire("move"),
          t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(n(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
          this.fire("resize", {
            oldSize: i,
            newSize: o
          })) : this
      },
      stop: function () {
        return this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
      },
      locate: function (t) {
        if (t = this._locateOptions = e({
          timeout: 1e4,
          watch: !1
        }, t),
          !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }),
            this;
        var i = n(this._handleGeolocationResponse, this)
          , o = n(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, o, t) : navigator.geolocation.getCurrentPosition(i, o, t),
          this
      },
      stopLocate: function () {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
      },
      _handleGeolocationError: function (t) {
        var e = t.code
          , i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + i + "."
          })
      },
      _handleGeolocationResponse: function (t) {
        var e = new R(t.coords.latitude, t.coords.longitude)
          , i = e.toBounds(2 * t.coords.accuracy)
          , n = this._locateOptions;
        if (n.setView) {
          var o = this.getBoundsZoom(i);
          this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
        }
        var s = {
          latlng: e,
          bounds: i,
          timestamp: t.timestamp
        };
        for (var r in t.coords)
          "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
        this.fire("locationfound", s)
      },
      addHandler: function (t, e) {
        if (!e)
          return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i),
          this.options[t] && i.enable(),
          this
      },
      remove: function () {
        if (this._initEvents(!0),
          this.off("moveend", this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id,
            delete this._containerId
        } catch (t) {
          this._container._leaflet_id = void 0,
            this._containerId = void 0
        }
        var t;
        for (t in void 0 !== this._locationWatchId && this.stopLocate(),
          this._stop(),
          ne(this._mapPane),
          this._clearControlPos && this._clearControlPos(),
          this._resizeRequest && (M(this._resizeRequest),
            this._resizeRequest = null),
          this._clearHandlers(),
          this._loaded && this.fire("unload"),
          this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          ne(this._panes[t]);
        return this._layers = [],
          this._panes = [],
          delete this._mapPane,
          delete this._renderer,
          this
      },
      createPane: function (t, e) {
        var i = ie("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
        return t && (this._panes[t] = i),
          i
      },
      getCenter: function () {
        return this._checkIfLoaded(),
          this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
      },
      getZoom: function () {
        return this._zoom
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new O(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
      },
      getBoundsZoom: function (t, e, i) {
        t = D(t),
          i = B(i || [0, 0]);
        var n = this.getZoom() || 0
          , o = this.getMinZoom()
          , s = this.getMaxZoom()
          , r = t.getNorthWest()
          , a = t.getSouthEast()
          , h = this.getSize().subtract(i)
          , l = A(this.project(a, n), this.project(r, n)).getSize()
          , u = ft ? this.options.zoomSnap : 1
          , c = h.x / l.x
          , _ = h.y / l.y
          , d = e ? Math.max(c, _) : Math.min(c, _);
        return n = this.getScaleZoom(d, n),
          u && (n = Math.round(n / (u / 100)) * (u / 100),
            n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u),
          Math.max(o, Math.min(s, n))
      },
      getSize: function () {
        return this._size && !this._sizeChanged || (this._size = new S(this._container.clientWidth || 0, this._container.clientHeight || 0),
          this._sizeChanged = !1),
          this._size.clone()
      },
      getPixelBounds: function (t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new I(i, i.add(this.getSize()))
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(),
          this._pixelOrigin
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t
      },
      getPanes: function () {
        return this._panes
      },
      getContainer: function () {
        return this._container
      },
      getZoomScale: function (t, e) {
        var i = this.options.crs;
        return e = void 0 === e ? this._zoom : e,
          i.scale(t) / i.scale(e)
      },
      getScaleZoom: function (t, e) {
        var i = this.options.crs;
        e = void 0 === e ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n
      },
      project: function (t, e) {
        return e = void 0 === e ? this._zoom : e,
          this.options.crs.latLngToPoint(F(t), e)
      },
      unproject: function (t, e) {
        return e = void 0 === e ? this._zoom : e,
          this.options.crs.pointToLatLng(B(t), e)
      },
      layerPointToLatLng: function (t) {
        var e = B(t).add(this.getPixelOrigin());
        return this.unproject(e)
      },
      latLngToLayerPoint: function (t) {
        return this.project(F(t))._round()._subtract(this.getPixelOrigin())
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(F(t))
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(D(t))
      },
      distance: function (t, e) {
        return this.options.crs.distance(F(t), F(e))
      },
      containerPointToLayerPoint: function (t) {
        return B(t).subtract(this._getMapPanePos())
      },
      layerPointToContainerPoint: function (t) {
        return B(t).add(this._getMapPanePos())
      },
      containerPointToLatLng: function (t) {
        var e = this.containerPointToLayerPoint(B(t));
        return this.layerPointToLatLng(e)
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(t)))
      },
      mouseEventToContainerPoint: function (t) {
        return De(t, this._container)
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
      },
      _initContainer: function (t) {
        var e = this._container = te(t);
        if (!e)
          throw new Error("Map container not found.");
        if (e._leaflet_id)
          throw new Error("Map container is already initialized.");
        Te(e, "scroll", this._onScroll, this),
          this._containerId = s(e)
      },
      _initLayout: function () {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ft,
          he(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (Tt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (lt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = ee(t, "position");
        "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos()
      },
      _initPanes: function () {
        var t = this._panes = {};
        this._paneRenderers = {},
          this._mapPane = this.createPane("mapPane", this._container),
          me(this._mapPane, new S(0, 0)),
          this.createPane("tilePane"),
          this.createPane("shadowPane"),
          this.createPane("overlayPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation || (he(t.markerPane, "leaflet-zoom-hide"),
            he(t.shadowPane, "leaflet-zoom-hide"))
      },
      _resetView: function (t, e) {
        me(this._mapPane, new S(0, 0));
        var i = !this._loaded;
        this._loaded = !0,
          e = this._limitZoom(e),
          this.fire("viewprereset");
        var n = this._zoom !== e;
        this._moveStart(n, !1)._move(t, e)._moveEnd(n),
          this.fire("viewreset"),
          i && this.fire("load")
      },
      _moveStart: function (t, e) {
        return t && this.fire("zoomstart"),
          e || this.fire("movestart"),
          this
      },
      _move: function (t, e, i) {
        void 0 === e && (e = this._zoom);
        var n = this._zoom !== e;
        return this._zoom = e,
          this._lastCenter = t,
          this._pixelOrigin = this._getNewPixelOrigin(t),
          (n || i && i.pinch) && this.fire("zoom", i),
          this.fire("move", i)
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"),
          this.fire("moveend")
      },
      _stop: function () {
        return M(this._flyToFrame),
          this._panAnim && this._panAnim.stop(),
          this
      },
      _rawPanBy: function (t) {
        me(this._mapPane, this._getMapPanePos().subtract(t))
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom()
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
      },
      _checkIfLoaded: function () {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.")
      },
      _initEvents: function (t) {
        this._targets = {},
          this._targets[s(this._container)] = this;
        var e = t ? Ce : Te;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
          this.options.trackResize && e(window, "resize", this._onResize, this),
          ft && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
      },
      _onResize: function () {
        M(this._resizeRequest),
          this._resizeRequest = T((function () {
            this.invalidateSize({
              debounceMoveend: !0
            })
          }
          ), this)
      },
      _onScroll: function () {
        this._container.scrollTop = 0,
          this._container.scrollLeft = 0
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
      },
      _findEventTargets: function (t, e) {
        for (var i, n = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r;) {
          if ((i = this._targets[s(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
            a = !0;
            break
          }
          if (i && i.listens(e, !0)) {
            if (o && !He(r, t))
              break;
            if (n.push(i),
              o)
              break
          }
          if (r === this._container)
            break;
          r = r.parentNode
        }
        return n.length || a || o || !He(r, t) || (n = [this]),
          n
      },
      _handleDOMEvent: function (t) {
        if (this._loaded && !Ue(t)) {
          var e = t.type;
          "mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e || xe(t.target || t.srcElement),
            this._fireDOMEvent(t, e)
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function (t, i, n) {
        if ("click" === t.type) {
          var o = e({}, t);
          o.type = "preclick",
            this._fireDOMEvent(o, o.type, n)
        }
        if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) {
          var s = n[0];
          "contextmenu" === i && s.listens(i, !0) && Ae(t);
          var r = {
            originalEvent: t
          };
          if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
            var a = s.getLatLng && (!s._radius || s._radius <= 10);
            r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t),
              r.layerPoint = this.containerPointToLayerPoint(r.containerPoint),
              r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
          }
          for (var h = 0; h < n.length; h++)
            if (n[h].fire(i, r, !0),
              r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== g(this._mouseEvents, i))
              return
        }
      },
      _draggableMoved: function (t) {
        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
      },
      _clearHandlers: function () {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable()
      },
      whenReady: function (t, e) {
        return this._loaded ? t.call(e || this, {
          target: this
        }) : this.on("load", t, e),
          this
      },
      _getMapPanePos: function () {
        return fe(this._mapPane) || new S(0, 0)
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0])
      },
      _getTopLeftPoint: function (t, e) {
        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
      },
      _getNewPixelOrigin: function (t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
      },
      _latLngToNewLayerPoint: function (t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n)
      },
      _latLngBoundsToNewLayerBounds: function (t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return A([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
      },
      _limitCenter: function (t, e, i) {
        if (!i)
          return t;
        var n = this.project(t, e)
          , o = this.getSize().divideBy(2)
          , s = new I(n.subtract(o), n.add(o))
          , r = this._getBoundsOffset(s, i, e);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
      },
      _limitOffset: function (t, e) {
        if (!e)
          return t;
        var i = this.getPixelBounds()
          , n = new I(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e))
      },
      _getBoundsOffset: function (t, e, i) {
        var n = A(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i))
          , o = n.min.subtract(t.min)
          , s = n.max.subtract(t.max);
        return new S(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
      },
      _rebound: function (t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
      },
      _limitZoom: function (t) {
        var e = this.getMinZoom()
          , i = this.getMaxZoom()
          , n = ft ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n),
          Math.max(e, Math.min(i, t))
      },
      _onPanTransitionStep: function () {
        this.fire("move")
      },
      _onPanTransitionEnd: function () {
        le(this._mapPane, "leaflet-pan-anim"),
          this.fire("moveend")
      },
      _tryAnimatedPan: function (t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return !(!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e),
          !0)
      },
      _createAnimProxy: function () {
        var t = this._proxy = ie("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t),
          this.on("zoomanim", (function (t) {
            var e = Jt
              , i = this._proxy.style[e];
            pe(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
              i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
          }
          ), this),
          this.on("load moveend", this._animMoveEnd, this),
          this._on("unload", this._destroyAnimProxy, this)
      },
      _destroyAnimProxy: function () {
        ne(this._proxy),
          this.off("load moveend", this._animMoveEnd, this),
          delete this._proxy
      },
      _animMoveEnd: function () {
        var t = this.getCenter()
          , e = this.getZoom();
        pe(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
      },
      _tryAnimatedZoom: function (t, e, i) {
        if (this._animatingZoom)
          return !0;
        if (i = i || {},
          !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var n = this.getZoomScale(e)
          , o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return !(!0 !== i.animate && !this.getSize().contains(o)) && (T((function () {
          this._moveStart(!0, !1)._animateZoom(t, e, !0)
        }
        ), this),
          !0)
      },
      _animateZoom: function (t, e, i, o) {
        this._mapPane && (i && (this._animatingZoom = !0,
          this._animateToCenter = t,
          this._animateToZoom = e,
          he(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: o
          }),
          setTimeout(n(this._onZoomTransitionEnd, this), 250))
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom && (this._mapPane && le(this._mapPane, "leaflet-zoom-anim"),
          this._animatingZoom = !1,
          this._move(this._animateToCenter, this._animateToZoom),
          T((function () {
            this._moveEnd(!0)
          }
          ), this))
      }
    });
  var Ge = z.extend({
    options: {
      position: "topright"
    },
    initialize: function (t) {
      _(this, t)
    },
    getPosition: function () {
      return this.options.position
    },
    setPosition: function (t) {
      var e = this._map;
      return e && e.removeControl(this),
        this.options.position = t,
        e && e.addControl(this),
        this
    },
    getContainer: function () {
      return this._container
    },
    addTo: function (t) {
      this.remove(),
        this._map = t;
      var e = this._container = this.onAdd(t)
        , i = this.getPosition()
        , n = t._controlCorners[i];
      return he(e, "leaflet-control"),
        -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
        this._map.on("unload", this.remove, this),
        this
    },
    remove: function () {
      return this._map ? (ne(this._container),
        this.onRemove && this.onRemove(this._map),
        this._map.off("unload", this.remove, this),
        this._map = null,
        this) : this
    },
    _refocusOnMap: function (t) {
      this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
    }
  })
    , Ke = function (t) {
      return new Ge(t)
    };
  qe.include({
    addControl: function (t) {
      return t.addTo(this),
        this
    },
    removeControl: function (t) {
      return t.remove(),
        this
    },
    _initControlPos: function () {
      var t = this._controlCorners = {}
        , e = "leaflet-"
        , i = this._controlContainer = ie("div", e + "control-container", this._container);
      function n(n, o) {
        var s = e + n + " " + e + o;
        t[n + o] = ie("div", s, i)
      }
      n("top", "left"),
        n("top", "right"),
        n("bottom", "left"),
        n("bottom", "right")
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners)
        ne(this._controlCorners[t]);
      ne(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer
    }
  });
  var Ye = Ge.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function (t, e, i, n) {
        return i < n ? -1 : n < i ? 1 : 0
      }
    },
    initialize: function (t, e, i) {
      for (var n in _(this, i),
        this._layerControlInputs = [],
        this._layers = [],
        this._lastZIndex = 0,
        this._handlingClick = !1,
        t)
        this._addLayer(t[n], n);
      for (n in e)
        this._addLayer(e[n], n, !0)
    },
    onAdd: function (t) {
      this._initLayout(),
        this._update(),
        this._map = t,
        t.on("zoomend", this._checkDisabledLayers, this);
      for (var e = 0; e < this._layers.length; e++)
        this._layers[e].layer.on("add remove", this._onLayerChange, this);
      return this._container
    },
    addTo: function (t) {
      return Ge.prototype.addTo.call(this, t),
        this._expandIfNotCollapsed()
    },
    onRemove: function () {
      this._map.off("zoomend", this._checkDisabledLayers, this);
      for (var t = 0; t < this._layers.length; t++)
        this._layers[t].layer.off("add remove", this._onLayerChange, this)
    },
    addBaseLayer: function (t, e) {
      return this._addLayer(t, e),
        this._map ? this._update() : this
    },
    addOverlay: function (t, e) {
      return this._addLayer(t, e, !0),
        this._map ? this._update() : this
    },
    removeLayer: function (t) {
      t.off("add remove", this._onLayerChange, this);
      var e = this._getLayer(s(t));
      return e && this._layers.splice(this._layers.indexOf(e), 1),
        this._map ? this._update() : this
    },
    expand: function () {
      he(this._container, "leaflet-control-layers-expanded"),
        this._section.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._section.clientHeight ? (he(this._section, "leaflet-control-layers-scrollbar"),
        this._section.style.height = t + "px") : le(this._section, "leaflet-control-layers-scrollbar"),
        this._checkDisabledLayers(),
        this
    },
    collapse: function () {
      return le(this._container, "leaflet-control-layers-expanded"),
        this
    },
    _initLayout: function () {
      var t = "leaflet-control-layers"
        , e = this._container = ie("div", t)
        , i = this.options.collapsed;
      e.setAttribute("aria-haspopup", !0),
        Ie(e),
        Be(e);
      var n = this._section = ie("section", t + "-list");
      i && (this._map.on("click", this.collapse, this),
        it || Te(e, {
          mouseenter: this.expand,
          mouseleave: this.collapse
        }, this));
      var o = this._layersLink = ie("a", t + "-toggle", e);
      o.href = "#",
        o.title = "Layers",
        wt ? (Te(o, "click", Oe),
          Te(o, "click", this.expand, this)) : Te(o, "focus", this.expand, this),
        i || this.expand(),
        this._baseLayersList = ie("div", t + "-base", n),
        this._separator = ie("div", t + "-separator", n),
        this._overlaysList = ie("div", t + "-overlays", n),
        e.appendChild(n)
    },
    _getLayer: function (t) {
      for (var e = 0; e < this._layers.length; e++)
        if (this._layers[e] && s(this._layers[e].layer) === t)
          return this._layers[e]
    },
    _addLayer: function (t, e, i) {
      this._map && t.on("add remove", this._onLayerChange, this),
        this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }),
        this.options.sortLayers && this._layers.sort(n((function (t, e) {
          return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
        }
        ), this)),
        this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
          t.setZIndex(this._lastZIndex)),
        this._expandIfNotCollapsed()
    },
    _update: function () {
      if (!this._container)
        return this;
      oe(this._baseLayersList),
        oe(this._overlaysList),
        this._layerControlInputs = [];
      var t, e, i, n, o = 0;
      for (i = 0; i < this._layers.length; i++)
        n = this._layers[i],
          this._addItem(n),
          e = e || n.overlay,
          t = t || !n.overlay,
          o += n.overlay ? 0 : 1;
      return this.options.hideSingleBase && (t = t && o > 1,
        this._baseLayersList.style.display = t ? "" : "none"),
        this._separator.style.display = e && t ? "" : "none",
        this
    },
    _onLayerChange: function (t) {
      this._handlingClick || this._update();
      var e = this._getLayer(s(t.target))
        , i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
      i && this._map.fire(i, e)
    },
    _createRadioElement: function (t, e) {
      var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>"
        , n = document.createElement("div");
      return n.innerHTML = i,
        n.firstChild
    },
    _addItem: function (t) {
      var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer);
      t.overlay ? ((e = document.createElement("input")).type = "checkbox",
        e.className = "leaflet-control-layers-selector",
        e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + s(this), n),
        this._layerControlInputs.push(e),
        e.layerId = s(t.layer),
        Te(e, "click", this._onInputClick, this);
      var o = document.createElement("span");
      o.innerHTML = " " + t.name;
      var r = document.createElement("div");
      return i.appendChild(r),
        r.appendChild(e),
        r.appendChild(o),
        (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
        this._checkDisabledLayers(),
        i
    },
    _onInputClick: function () {
      var t, e, i = this._layerControlInputs, n = [], o = [];
      this._handlingClick = !0;
      for (var s = i.length - 1; s >= 0; s--)
        t = i[s],
          e = this._getLayer(t.layerId).layer,
          t.checked ? n.push(e) : t.checked || o.push(e);
      for (s = 0; s < o.length; s++)
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      for (s = 0; s < n.length; s++)
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      this._handlingClick = !1,
        this._refocusOnMap()
    },
    _checkDisabledLayers: function () {
      for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
        t = i[o],
          e = this._getLayer(t.layerId).layer,
          t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
    },
    _expandIfNotCollapsed: function () {
      return this._map && !this.options.collapsed && this.expand(),
        this
    },
    _expand: function () {
      return this.expand()
    },
    _collapse: function () {
      return this.collapse()
    }
  })
    , Xe = Ge.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out"
      },
      onAdd: function (t) {
        var e = "leaflet-control-zoom"
          , i = ie("div", e + " leaflet-bar")
          , n = this.options;
        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
          this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          i
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this)
      },
      disable: function () {
        return this._disabled = !0,
          this._updateDisabled(),
          this
      },
      enable: function () {
        return this._disabled = !1,
          this._updateDisabled(),
          this
      },
      _zoomIn: function (t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
      },
      _zoomOut: function (t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
      },
      _createButton: function (t, e, i, n, o) {
        var s = ie("a", i, n);
        return s.innerHTML = t,
          s.href = "#",
          s.title = e,
          s.setAttribute("role", "button"),
          s.setAttribute("aria-label", e),
          Ie(s),
          Te(s, "click", Oe),
          Te(s, "click", o, this),
          Te(s, "click", this._refocusOnMap, this),
          s
      },
      _updateDisabled: function () {
        var t = this._map
          , e = "leaflet-disabled";
        le(this._zoomInButton, e),
          le(this._zoomOutButton, e),
          (this._disabled || t._zoom === t.getMinZoom()) && he(this._zoomOutButton, e),
          (this._disabled || t._zoom === t.getMaxZoom()) && he(this._zoomInButton, e)
      }
    });
  qe.mergeOptions({
    zoomControl: !0
  }),
    qe.addInitHook((function () {
      this.options.zoomControl && (this.zoomControl = new Xe,
        this.addControl(this.zoomControl))
    }
    ));
  var Je = Ge.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function (t) {
      var e = "leaflet-control-scale"
        , i = ie("div", e)
        , n = this.options;
      return this._addScales(n, e + "-line", i),
        t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
        t.whenReady(this._update, this),
        i
    },
    onRemove: function (t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
    },
    _addScales: function (t, e, i) {
      t.metric && (this._mScale = ie("div", e, i)),
        t.imperial && (this._iScale = ie("div", e, i))
    },
    _update: function () {
      var t = this._map
        , e = t.getSize().y / 2
        , i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
      this._updateScales(i)
    },
    _updateScales: function (t) {
      this.options.metric && t && this._updateMetric(t),
        this.options.imperial && t && this._updateImperial(t)
    },
    _updateMetric: function (t) {
      var e = this._getRoundNum(t)
        , i = e < 1e3 ? e + " m" : e / 1e3 + " km";
      this._updateScale(this._mScale, i, e / t)
    },
    _updateImperial: function (t) {
      var e, i, n, o = 3.2808399 * t;
      o > 5280 ? (e = o / 5280,
        i = this._getRoundNum(e),
        this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o),
          this._updateScale(this._iScale, n + " ft", n / o))
    },
    _updateScale: function (t, e, i) {
      t.style.width = Math.round(this.options.maxWidth * i) + "px",
        t.innerHTML = e
    },
    _getRoundNum: function (t) {
      var e = Math.pow(10, (Math.floor(t) + "").length - 1)
        , i = t / e;
      return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
    }
  })
    , $e = Ge.extend({
      options: {
        position: "bottomright",
        prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
      },
      initialize: function (t) {
        _(this, t),
          this._attributions = {}
      },
      onAdd: function (t) {
        for (var e in t.attributionControl = this,
          this._container = ie("div", "leaflet-control-attribution"),
          Ie(this._container),
          t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(),
          this._container
      },
      setPrefix: function (t) {
        return this.options.prefix = t,
          this._update(),
          this
      },
      addAttribution: function (t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0),
          this._attributions[t]++,
          this._update(),
          this) : this
      },
      removeAttribution: function (t) {
        return t ? (this._attributions[t] && (this._attributions[t]--,
          this._update()),
          this) : this
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix),
            t.length && i.push(t.join(", ")),
            this._container.innerHTML = i.join(" | ")
        }
      }
    });
  qe.mergeOptions({
    attributionControl: !0
  }),
    qe.addInitHook((function () {
      this.options.attributionControl && (new $e).addTo(this)
    }
    ));
  Ge.Layers = Ye,
    Ge.Zoom = Xe,
    Ge.Scale = Je,
    Ge.Attribution = $e,
    Ke.layers = function (t, e, i) {
      return new Ye(t, e, i)
    }
    ,
    Ke.zoom = function (t) {
      return new Xe(t)
    }
    ,
    Ke.scale = function (t) {
      return new Je(t)
    }
    ,
    Ke.attribution = function (t) {
      return new $e(t)
    }
    ;
  var Qe = z.extend({
    initialize: function (t) {
      this._map = t
    },
    enable: function () {
      return this._enabled || (this._enabled = !0,
        this.addHooks()),
        this
    },
    disable: function () {
      return this._enabled ? (this._enabled = !1,
        this.removeHooks(),
        this) : this
    },
    enabled: function () {
      return !!this._enabled
    }
  });
  Qe.addTo = function (t, e) {
    return t.addHandler(e, this),
      this
  }
    ;
  var ti, ei = {
    Events: E
  }, ii = wt ? "touchstart mousedown" : "mousedown", ni = {
    mousedown: "mouseup",
    touchstart: "touchend",
    pointerdown: "touchend",
    MSPointerDown: "touchend"
  }, oi = {
    mousedown: "mousemove",
    touchstart: "touchmove",
    pointerdown: "touchmove",
    MSPointerDown: "touchmove"
  }, si = k.extend({
    options: {
      clickTolerance: 3
    },
    initialize: function (t, e, i, n) {
      _(this, n),
        this._element = t,
        this._dragStartTarget = e || t,
        this._preventOutline = i
    },
    enable: function () {
      this._enabled || (Te(this._dragStartTarget, ii, this._onDown, this),
        this._enabled = !0)
    },
    disable: function () {
      this._enabled && (si._dragging === this && this.finishDrag(),
        Ce(this._dragStartTarget, ii, this._onDown, this),
        this._enabled = !1,
        this._moved = !1)
    },
    _onDown: function (t) {
      if (!t._simulated && this._enabled && (this._moved = !1,
        !ae(this._element, "leaflet-zoom-anim") && !(si._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (si._dragging = this,
          this._preventOutline && xe(this._element),
          ve(),
          qt(),
          this._moving)))) {
        this.fire("down");
        var e = t.touches ? t.touches[0] : t
          , i = we(this._element);
        this._startPoint = new S(e.clientX, e.clientY),
          this._parentScale = be(i),
          Te(document, oi[t.type], this._onMove, this),
          Te(document, ni[t.type], this._onUp, this)
      }
    },
    _onMove: function (t) {
      if (!t._simulated && this._enabled)
        if (t.touches && t.touches.length > 1)
          this._moved = !0;
        else {
          var e = t.touches && 1 === t.touches.length ? t.touches[0] : t
            , i = new S(e.clientX, e.clientY)._subtract(this._startPoint);
          (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x,
            i.y /= this._parentScale.y,
            Ae(t),
            this._moved || (this.fire("dragstart"),
              this._moved = !0,
              this._startPos = fe(this._element).subtract(i),
              he(document.body, "leaflet-dragging"),
              this._lastTarget = t.target || t.srcElement,
              window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
              he(this._lastTarget, "leaflet-drag-target")),
            this._newPos = this._startPos.add(i),
            this._moving = !0,
            M(this._animRequest),
            this._lastEvent = t,
            this._animRequest = T(this._updatePosition, this, !0)))
        }
    },
    _updatePosition: function () {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t),
        me(this._element, this._newPos),
        this.fire("drag", t)
    },
    _onUp: function (t) {
      !t._simulated && this._enabled && this.finishDrag()
    },
    finishDrag: function () {
      for (var t in le(document.body, "leaflet-dragging"),
        this._lastTarget && (le(this._lastTarget, "leaflet-drag-target"),
          this._lastTarget = null),
        oi)
        Ce(document, oi[t], this._onMove, this),
          Ce(document, ni[t], this._onUp, this);
      ye(),
        Gt(),
        this._moved && this._moving && (M(this._animRequest),
          this.fire("dragend", {
            distance: this._newPos.distanceTo(this._startPos)
          })),
        this._moving = !1,
        si._dragging = !1
    }
  });
  function ri(t, e) {
    if (!e || !t.length)
      return t.slice();
    var i = e * e;
    return t = function (t, e) {
      for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
        _i(t[n], t[o]) > e && (i.push(t[n]),
          o = n);
      o < s - 1 && i.push(t[s - 1]);
      return i
    }(t, i),
      t = function (t, e) {
        var i = t.length
          , n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
        n[0] = n[i - 1] = 1,
          hi(t, n, e, 0, i - 1);
        var o, s = [];
        for (o = 0; o < i; o++)
          n[o] && s.push(t[o]);
        return s
      }(t, i),
      t
  }
  function ai(t, e, i) {
    return Math.sqrt(di(t, e, i, !0))
  }
  function hi(t, e, i, n, o) {
    var s, r, a, h = 0;
    for (r = n + 1; r <= o - 1; r++)
      (a = di(t[r], t[n], t[o], !0)) > h && (s = r,
        h = a);
    h > i && (e[s] = 1,
      hi(t, e, i, n, s),
      hi(t, e, i, s, o))
  }
  function li(t, e, i, n, o) {
    var s, r, a, h = n ? ti : ci(t, i), l = ci(e, i);
    for (ti = l; ;) {
      if (!(h | l))
        return [t, e];
      if (h & l)
        return !1;
      a = ci(r = ui(t, e, s = h || l, i, o), i),
        s === h ? (t = r,
          h = a) : (e = r,
            l = a)
    }
  }
  function ui(t, e, i, n, o) {
    var s, r, a = e.x - t.x, h = e.y - t.y, l = n.min, u = n.max;
    return 8 & i ? (s = t.x + a * (u.y - t.y) / h,
      r = u.y) : 4 & i ? (s = t.x + a * (l.y - t.y) / h,
        r = l.y) : 2 & i ? (s = u.x,
          r = t.y + h * (u.x - t.x) / a) : 1 & i && (s = l.x,
            r = t.y + h * (l.x - t.x) / a),
      new S(s, r, o)
  }
  function ci(t, e) {
    var i = 0;
    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
      t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
      i
  }
  function _i(t, e) {
    var i = e.x - t.x
      , n = e.y - t.y;
    return i * i + n * n
  }
  function di(t, e, i, n) {
    var o, s = e.x, r = e.y, a = i.x - s, h = i.y - r, l = a * a + h * h;
    return l > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / l) > 1 ? (s = i.x,
      r = i.y) : o > 0 && (s += a * o,
        r += h * o)),
      a = t.x - s,
      h = t.y - r,
      n ? a * a + h * h : new S(s, r)
  }
  function pi(t) {
    return !f(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
  }
  function mi(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
      pi(t)
  }
  var fi = {
    simplify: ri,
    pointToSegmentDistance: ai,
    closestPointOnSegment: function (t, e, i) {
      return di(t, e, i)
    },
    clipSegment: li,
    _getEdgeIntersection: ui,
    _getBitCode: ci,
    _sqClosestPointOnSegment: di,
    isFlat: pi,
    _flat: mi
  };
  function gi(t, e, i) {
    var n, o, s, r, a, h, l, u, c, _ = [1, 4, 2, 8];
    for (o = 0,
      l = t.length; o < l; o++)
      t[o]._code = ci(t[o], e);
    for (r = 0; r < 4; r++) {
      for (u = _[r],
        n = [],
        o = 0,
        s = (l = t.length) - 1; o < l; s = o++)
        a = t[o],
          h = t[s],
          a._code & u ? h._code & u || ((c = ui(h, a, u, e, i))._code = ci(c, e),
            n.push(c)) : (h._code & u && ((c = ui(h, a, u, e, i))._code = ci(c, e),
              n.push(c)),
              n.push(a));
      t = n
    }
    return t
  }
  var vi = {
    clipPolygon: gi
  }
    , yi = {
      project: function (t) {
        return new S(t.lng, t.lat)
      },
      unproject: function (t) {
        return new R(t.y, t.x)
      },
      bounds: new I([-180, -90], [180, 90])
    }
    , xi = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new I([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
      project: function (t) {
        var e = Math.PI / 180
          , i = this.R
          , n = t.lat * e
          , o = this.R_MINOR / i
          , s = Math.sqrt(1 - o * o)
          , r = s * Math.sin(n)
          , a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return n = -i * Math.log(Math.max(a, 1e-10)),
          new S(t.lng * e * i, n)
      },
      unproject: function (t) {
        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++)
          e = s * Math.sin(a),
            e = Math.pow((1 - e) / (1 + e), s / 2),
            a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
        return new R(a * i, t.x * i / n)
      }
    }
    , Li = {
      LonLat: yi,
      Mercator: xi,
      SphericalMercator: W
    }
    , wi = e({}, U, {
      code: "EPSG:3395",
      projection: xi,
      transformation: function () {
        var t = .5 / (Math.PI * xi.R);
        return q(t, .5, -t, .5)
      }()
    })
    , bi = e({}, U, {
      code: "EPSG:4326",
      projection: yi,
      transformation: q(1 / 180, 1, -1 / 180, .5)
    })
    , Pi = e({}, N, {
      projection: yi,
      transformation: q(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t)
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2
      },
      distance: function (t, e) {
        var i = e.lng - t.lng
          , n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n)
      },
      infinite: !0
    });
  N.Earth = U,
    N.EPSG3395 = wi,
    N.EPSG3857 = G,
    N.EPSG900913 = K,
    N.EPSG4326 = bi,
    N.Simple = Pi;
  var Ti = k.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function (t) {
      return t.addLayer(this),
        this
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd)
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this),
        this
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane)
    },
    addInteractiveTarget: function (t) {
      return this._map._targets[s(t)] = this,
        this
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[s(t)],
        this
    },
    getAttribution: function () {
      return this.options.attribution
    },
    _layerAdd: function (t) {
      var e = t.target;
      if (e.hasLayer(this)) {
        if (this._map = e,
          this._zoomAnimated = e._zoomAnimated,
          this.getEvents) {
          var i = this.getEvents();
          e.on(i, this),
            this.once("remove", (function () {
              e.off(i, this)
            }
            ), this)
        }
        this.onAdd(e),
          this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
          this.fire("add"),
          e.fire("layeradd", {
            layer: this
          })
      }
    }
  });
  qe.include({
    addLayer: function (t) {
      if (!t._layerAdd)
        throw new Error("The provided object is not a Layer.");
      var e = s(t);
      return this._layers[e] || (this._layers[e] = t,
        t._mapToAdd = this,
        t.beforeAdd && t.beforeAdd(this),
        this.whenReady(t._layerAdd, t)),
        this
    },
    removeLayer: function (t) {
      var e = s(t);
      return this._layers[e] ? (this._loaded && t.onRemove(this),
        t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
        delete this._layers[e],
        this._loaded && (this.fire("layerremove", {
          layer: t
        }),
          t.fire("remove")),
        t._map = t._mapToAdd = null,
        this) : this
    },
    hasLayer: function (t) {
      return !!t && s(t) in this._layers
    },
    eachLayer: function (t, e) {
      for (var i in this._layers)
        t.call(e, this._layers[i]);
      return this
    },
    _addLayers: function (t) {
      for (var e = 0, i = (t = t ? f(t) ? t : [t] : []).length; e < i; e++)
        this.addLayer(t[e])
    },
    _addZoomLimit: function (t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[s(t)] = t,
        this._updateZoomLevels())
    },
    _removeZoomLimit: function (t) {
      var e = s(t);
      this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
        this._updateZoomLevels())
    },
    _updateZoomLevels: function () {
      var t = 1 / 0
        , e = -1 / 0
        , i = this._getZoomSpan();
      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
          e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
      }
      this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
        this._layersMinZoom = t === 1 / 0 ? void 0 : t,
        i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
    }
  });
  var Mi = Ti.extend({
    initialize: function (t, e) {
      var i, n;
      if (_(this, e),
        this._layers = {},
        t)
        for (i = 0,
          n = t.length; i < n; i++)
          this.addLayer(t[i])
    },
    addLayer: function (t) {
      var e = this.getLayerId(t);
      return this._layers[e] = t,
        this._map && this._map.addLayer(t),
        this
    },
    removeLayer: function (t) {
      var e = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
        delete this._layers[e],
        this
    },
    hasLayer: function (t) {
      return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
    },
    clearLayers: function () {
      return this.eachLayer(this.removeLayer, this)
    },
    invoke: function (t) {
      var e, i, n = Array.prototype.slice.call(arguments, 1);
      for (e in this._layers)
        (i = this._layers[e])[t] && i[t].apply(i, n);
      return this
    },
    onAdd: function (t) {
      this.eachLayer(t.addLayer, t)
    },
    onRemove: function (t) {
      this.eachLayer(t.removeLayer, t)
    },
    eachLayer: function (t, e) {
      for (var i in this._layers)
        t.call(e, this._layers[i]);
      return this
    },
    getLayer: function (t) {
      return this._layers[t]
    },
    getLayers: function () {
      var t = [];
      return this.eachLayer(t.push, t),
        t
    },
    setZIndex: function (t) {
      return this.invoke("setZIndex", t)
    },
    getLayerId: function (t) {
      return s(t)
    }
  })
    , Ci = Mi.extend({
      addLayer: function (t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this),
          Mi.prototype.addLayer.call(this, t),
          this.fire("layeradd", {
            layer: t
          }))
      },
      removeLayer: function (t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
          t.removeEventParent(this),
          Mi.prototype.removeLayer.call(this, t),
          this.fire("layerremove", {
            layer: t
          })) : this
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t)
      },
      bringToFront: function () {
        return this.invoke("bringToFront")
      },
      bringToBack: function () {
        return this.invoke("bringToBack")
      },
      getBounds: function () {
        var t = new O;
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
        }
        return t
      }
    })
    , zi = z.extend({
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0]
      },
      initialize: function (t) {
        _(this, t)
      },
      createIcon: function (t) {
        return this._createIcon("icon", t)
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t)
      },
      _createIcon: function (t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null
        }
        var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
        return this._setIconStyles(n, t),
          n
      },
      _setIconStyles: function (t, e) {
        var i = this.options
          , n = i[e + "Size"];
        "number" == typeof n && (n = [n, n]);
        var o = B(n)
          , s = B("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""),
          s && (t.style.marginLeft = -s.x + "px",
            t.style.marginTop = -s.y + "px"),
          o && (t.style.width = o.x + "px",
            t.style.height = o.y + "px")
      },
      _createImg: function (t, e) {
        return (e = e || document.createElement("img")).src = t,
          e
      },
      _getIconUrl: function (t) {
        return Tt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
      }
    });
  var Ei = zi.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function (t) {
      return Ei.imagePath || (Ei.imagePath = this._detectIconPath()),
        (this.options.imagePath || Ei.imagePath) + zi.prototype._getIconUrl.call(this, t)
    },
    _detectIconPath: function () {
      var t = ie("div", "leaflet-default-icon-path", document.body)
        , e = ee(t, "background-image") || ee(t, "backgroundImage");
      return document.body.removeChild(t),
        e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
    }
  })
    , ki = Qe.extend({
      initialize: function (t) {
        this._marker = t
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new si(t, t, !0)),
          this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(),
          he(t, "leaflet-marker-draggable")
      },
      removeHooks: function () {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(),
          this._marker._icon && le(this._marker._icon, "leaflet-marker-draggable")
      },
      moved: function () {
        return this._draggable && this._draggable._moved
      },
      _adjustPan: function (t) {
        var e = this._marker
          , i = e._map
          , n = this._marker.options.autoPanSpeed
          , o = this._marker.options.autoPanPadding
          , s = fe(e._icon)
          , r = i.getPixelBounds()
          , a = i.getPixelOrigin()
          , h = A(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        if (!h.contains(s)) {
          var l = B((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
          i.panBy(l, {
            animate: !1
          }),
            this._draggable._newPos._add(l),
            this._draggable._startPos._add(l),
            me(e._icon, this._draggable._newPos),
            this._onDrag(t),
            this._panRequest = T(this._adjustPan.bind(this, t))
        }
      },
      _onDragStart: function () {
        this._oldLatLng = this._marker.getLatLng(),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire("movestart").fire("dragstart")
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan && (M(this._panRequest),
          this._panRequest = T(this._adjustPan.bind(this, t)))
      },
      _onDrag: function (t) {
        var e = this._marker
          , i = e._shadow
          , n = fe(e._icon)
          , o = e._map.layerPointToLatLng(n);
        i && me(i, n),
          e._latlng = o,
          t.latlng = o,
          t.oldLatLng = this._oldLatLng,
          e.fire("move", t).fire("drag", t)
      },
      _onDragEnd: function (t) {
        M(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire("moveend").fire("dragend", t)
      }
    })
    , Si = Ti.extend({
      options: {
        icon: new Ei,
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10
      },
      initialize: function (t, e) {
        _(this, e),
          this._latlng = F(t)
      },
      onAdd: function (t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update()
      },
      onRemove: function (t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
          this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow()
      },
      getEvents: function () {
        return {
          zoom: this.update,
          viewreset: this.update
        }
      },
      getLatLng: function () {
        return this._latlng
      },
      setLatLng: function (t) {
        var e = this._latlng;
        return this._latlng = F(t),
          this.update(),
          this.fire("move", {
            oldLatLng: e,
            latlng: this._latlng
          })
      },
      setZIndexOffset: function (t) {
        return this.options.zIndexOffset = t,
          this.update()
      },
      getIcon: function () {
        return this.options.icon
      },
      setIcon: function (t) {
        return this.options.icon = t,
          this._map && (this._initIcon(),
            this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
      },
      getElement: function () {
        return this._icon
      },
      update: function () {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t)
        }
        return this
      },
      _initIcon: function () {
        var t = this.options
          , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
          , i = t.icon.createIcon(this._icon)
          , n = !1;
        i !== this._icon && (this._icon && this._removeIcon(),
          n = !0,
          t.title && (i.title = t.title),
          "IMG" === i.tagName && (i.alt = t.alt || "")),
          he(i, e),
          t.keyboard && (i.tabIndex = "0"),
          this._icon = i,
          t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          });
        var o = t.icon.createShadow(this._shadow)
          , s = !1;
        o !== this._shadow && (this._removeShadow(),
          s = !0),
          o && (he(o, e),
            o.alt = ""),
          this._shadow = o,
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane(t.shadowPane).appendChild(this._shadow)
      },
      _removeIcon: function () {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }),
          ne(this._icon),
          this.removeInteractiveTarget(this._icon),
          this._icon = null
      },
      _removeShadow: function () {
        this._shadow && ne(this._shadow),
          this._shadow = null
      },
      _setPos: function (t) {
        this._icon && me(this._icon, t),
          this._shadow && me(this._shadow, t),
          this._zIndex = t.y + this.options.zIndexOffset,
          this._resetZIndex()
      },
      _updateZIndex: function (t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t)
      },
      _animateZoom: function (t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e)
      },
      _initInteraction: function () {
        if (this.options.interactive && (he(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          ki)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(),
            this.dragging.disable()),
            this.dragging = new ki(this),
            t && this.dragging.enable()
        }
      },
      setOpacity: function (t) {
        return this.options.opacity = t,
          this._map && this._updateOpacity(),
          this
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        this._icon && _e(this._icon, t),
          this._shadow && _e(this._shadow, t)
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset)
      },
      _resetZIndex: function () {
        this._updateZIndex(0)
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor
      }
    });
  var Zi = Ti.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0,
      bubblingMouseEvents: !0
    },
    beforeAdd: function (t) {
      this._renderer = t.getRenderer(this)
    },
    onAdd: function () {
      this._renderer._initPath(this),
        this._reset(),
        this._renderer._addPath(this)
    },
    onRemove: function () {
      this._renderer._removePath(this)
    },
    redraw: function () {
      return this._map && this._renderer._updatePath(this),
        this
    },
    setStyle: function (t) {
      return _(this, t),
        this._renderer && (this._renderer._updateStyle(this),
          this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()),
        this
    },
    bringToFront: function () {
      return this._renderer && this._renderer._bringToFront(this),
        this
    },
    bringToBack: function () {
      return this._renderer && this._renderer._bringToBack(this),
        this
    },
    getElement: function () {
      return this._path
    },
    _reset: function () {
      this._project(),
        this._update()
    },
    _clickTolerance: function () {
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
    }
  })
    , Bi = Zi.extend({
      options: {
        fill: !0,
        radius: 10
      },
      initialize: function (t, e) {
        _(this, e),
          this._latlng = F(t),
          this._radius = this.options.radius
      },
      setLatLng: function (t) {
        var e = this._latlng;
        return this._latlng = F(t),
          this.redraw(),
          this.fire("move", {
            oldLatLng: e,
            latlng: this._latlng
          })
      },
      getLatLng: function () {
        return this._latlng
      },
      setRadius: function (t) {
        return this.options.radius = this._radius = t,
          this.redraw()
      },
      getRadius: function () {
        return this._radius
      },
      setStyle: function (t) {
        var e = t && t.radius || this._radius;
        return Zi.prototype.setStyle.call(this, t),
          this.setRadius(e),
          this
      },
      _project: function () {
        this._point = this._map.latLngToLayerPoint(this._latlng),
          this._updateBounds()
      },
      _updateBounds: function () {
        var t = this._radius
          , e = this._radiusY || t
          , i = this._clickTolerance()
          , n = [t + i, e + i];
        this._pxBounds = new I(this._point.subtract(n), this._point.add(n))
      },
      _update: function () {
        this._map && this._updatePath()
      },
      _updatePath: function () {
        this._renderer._updateCircle(this)
      },
      _empty: function () {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
      },
      _containsPoint: function (t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
      }
    });
  var Ii = Bi.extend({
    initialize: function (t, i, n) {
      if ("number" == typeof i && (i = e({}, n, {
        radius: i
      })),
        _(this, i),
        this._latlng = F(t),
        isNaN(this.options.radius))
        throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius
    },
    setRadius: function (t) {
      return this._mRadius = t,
        this.redraw()
    },
    getRadius: function () {
      return this._mRadius
    },
    getBounds: function () {
      var t = [this._radius, this._radiusY || this._radius];
      return new O(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
    },
    setStyle: Zi.prototype.setStyle,
    _project: function () {
      var t = this._latlng.lng
        , e = this._latlng.lat
        , i = this._map
        , n = i.options.crs;
      if (n.distance === U.distance) {
        var o = Math.PI / 180
          , s = this._mRadius / U.R / o
          , r = i.project([e + s, t])
          , a = i.project([e - s, t])
          , h = r.add(a).divideBy(2)
          , l = i.unproject(h).lat
          , u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
        (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)),
          this._point = h.subtract(i.getPixelOrigin()),
          this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x,
          this._radiusY = h.y - r.y
      } else {
        var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = i.latLngToLayerPoint(this._latlng),
          this._radius = this._point.x - i.latLngToLayerPoint(c).x
      }
      this._updateBounds()
    }
  });
  var Ai = Zi.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function (t, e) {
      _(this, e),
        this._setLatLngs(t)
    },
    getLatLngs: function () {
      return this._latlngs
    },
    setLatLngs: function (t) {
      return this._setLatLngs(t),
        this.redraw()
    },
    isEmpty: function () {
      return !this._latlngs.length
    },
    closestLayerPoint: function (t) {
      for (var e, i, n = 1 / 0, o = null, s = di, r = 0, a = this._parts.length; r < a; r++)
        for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
          var c = s(t, e = h[l - 1], i = h[l], !0);
          c < n && (n = c,
            o = s(t, e, i))
        }
      return o && (o.distance = Math.sqrt(n)),
        o
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t, e, i, n, o, s, r, a = this._rings[0], h = a.length;
      if (!h)
        return null;
      for (t = 0,
        e = 0; t < h - 1; t++)
        e += a[t].distanceTo(a[t + 1]) / 2;
      if (0 === e)
        return this._map.layerPointToLatLng(a[0]);
      for (t = 0,
        n = 0; t < h - 1; t++)
        if (o = a[t],
          s = a[t + 1],
          (n += i = o.distanceTo(s)) > e)
          return r = (n - e) / i,
            this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
    },
    getBounds: function () {
      return this._bounds
    },
    addLatLng: function (t, e) {
      return e = e || this._defaultShape(),
        t = F(t),
        e.push(t),
        this._bounds.extend(t),
        this.redraw()
    },
    _setLatLngs: function (t) {
      this._bounds = new O,
        this._latlngs = this._convertLatLngs(t)
    },
    _defaultShape: function () {
      return pi(this._latlngs) ? this._latlngs : this._latlngs[0]
    },
    _convertLatLngs: function (t) {
      for (var e = [], i = pi(t), n = 0, o = t.length; n < o; n++)
        i ? (e[n] = F(t[n]),
          this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
      return e
    },
    _project: function () {
      var t = new I;
      this._rings = [],
        this._projectLatlngs(this._latlngs, this._rings, t),
        this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
          this._updateBounds())
    },
    _updateBounds: function () {
      var t = this._clickTolerance()
        , e = new S(t, t);
      this._pxBounds = new I([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
    },
    _projectLatlngs: function (t, e, i) {
      var n, o, s = t[0] instanceof R, r = t.length;
      if (s) {
        for (o = [],
          n = 0; n < r; n++)
          o[n] = this._map.latLngToLayerPoint(t[n]),
            i.extend(o[n]);
        e.push(o)
      } else
        for (n = 0; n < r; n++)
          this._projectLatlngs(t[n], e, i)
    },
    _clipPoints: function () {
      var t = this._renderer._bounds;
      if (this._parts = [],
        this._pxBounds && this._pxBounds.intersects(t))
        if (this.options.noClip)
          this._parts = this._rings;
        else {
          var e, i, n, o, s, r, a, h = this._parts;
          for (e = 0,
            n = 0,
            o = this._rings.length; e < o; e++)
            for (i = 0,
              s = (a = this._rings[e]).length; i < s - 1; i++)
              (r = li(a[i], a[i + 1], t, i, !0)) && (h[n] = h[n] || [],
                h[n].push(r[0]),
                r[1] === a[i + 1] && i !== s - 2 || (h[n].push(r[1]),
                  n++))
        }
    },
    _simplifyPoints: function () {
      for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
        t[i] = ri(t[i], e)
    },
    _update: function () {
      this._map && (this._clipPoints(),
        this._simplifyPoints(),
        this._updatePath())
    },
    _updatePath: function () {
      this._renderer._updatePoly(this)
    },
    _containsPoint: function (t, e) {
      var i, n, o, s, r, a, h = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(t))
        return !1;
      for (i = 0,
        s = this._parts.length; i < s; i++)
        for (n = 0,
          o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
          if ((e || 0 !== n) && ai(t, a[o], a[n]) <= h)
            return !0;
      return !1
    }
  });
  Ai._flat = mi;
  var Oi = Ai.extend({
    options: {
      fill: !0
    },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t, e, i, n, o, s, r, a, h, l = this._rings[0], u = l.length;
      if (!u)
        return null;
      for (s = r = a = 0,
        t = 0,
        e = u - 1; t < u; e = t++)
        i = l[t],
          n = l[e],
          o = i.y * n.x - n.y * i.x,
          r += (i.x + n.x) * o,
          a += (i.y + n.y) * o,
          s += 3 * o;
      return h = 0 === s ? l[0] : [r / s, a / s],
        this._map.layerPointToLatLng(h)
    },
    _convertLatLngs: function (t) {
      var e = Ai.prototype._convertLatLngs.call(this, t)
        , i = e.length;
      return i >= 2 && e[0] instanceof R && e[0].equals(e[i - 1]) && e.pop(),
        e
    },
    _setLatLngs: function (t) {
      Ai.prototype._setLatLngs.call(this, t),
        pi(this._latlngs) && (this._latlngs = [this._latlngs])
    },
    _defaultShape: function () {
      return pi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
    },
    _clipPoints: function () {
      var t = this._renderer._bounds
        , e = this.options.weight
        , i = new S(e, e);
      if (t = new I(t.min.subtract(i), t.max.add(i)),
        this._parts = [],
        this._pxBounds && this._pxBounds.intersects(t))
        if (this.options.noClip)
          this._parts = this._rings;
        else
          for (var n, o = 0, s = this._rings.length; o < s; o++)
            (n = gi(this._rings[o], t, !0)).length && this._parts.push(n)
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0)
    },
    _containsPoint: function (t) {
      var e, i, n, o, s, r, a, h, l = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t))
        return !1;
      for (o = 0,
        a = this._parts.length; o < a; o++)
        for (s = 0,
          r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++)
          i = e[s],
            n = e[r],
            i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
      return l || Ai.prototype._containsPoint.call(this, t, !0)
    }
  });
  var Di = Ci.extend({
    initialize: function (t, e) {
      _(this, e),
        this._layers = {},
        t && this.addData(t)
    },
    addData: function (t) {
      var e, i, n, o = f(t) ? t : t.features;
      if (o) {
        for (e = 0,
          i = o.length; e < i; e++)
          ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        return this
      }
      var s = this.options;
      if (s.filter && !s.filter(t))
        return this;
      var r = Ri(t, s);
      return r ? (r.feature = Vi(t),
        r.defaultOptions = r.options,
        this.resetStyle(r),
        s.onEachFeature && s.onEachFeature(t, r),
        this.addLayer(r)) : this
    },
    resetStyle: function (t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions),
        this._setLayerStyle(t, this.options.style),
        this)
    },
    setStyle: function (t) {
      return this.eachLayer((function (e) {
        this._setLayerStyle(e, t)
      }
      ), this)
    },
    _setLayerStyle: function (t, e) {
      t.setStyle && ("function" == typeof e && (e = e(t.feature)),
        t.setStyle(e))
    }
  });
  function Ri(t, e) {
    var i, n, o, s, r = "Feature" === t.type ? t.geometry : t, a = r ? r.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || ji;
    if (!a && !r)
      return null;
    switch (r.type) {
      case "Point":
        return Fi(l, t, i = u(a), e);
      case "MultiPoint":
        for (o = 0,
          s = a.length; o < s; o++)
          i = u(a[o]),
            h.push(Fi(l, t, i, e));
        return new Ci(h);
      case "LineString":
      case "MultiLineString":
        return n = Ni(a, "LineString" === r.type ? 0 : 1, u),
          new Ai(n, e);
      case "Polygon":
      case "MultiPolygon":
        return n = Ni(a, "Polygon" === r.type ? 1 : 2, u),
          new Oi(n, e);
      case "GeometryCollection":
        for (o = 0,
          s = r.geometries.length; o < s; o++) {
          var c = Ri({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, e);
          c && h.push(c)
        }
        return new Ci(h);
      default:
        throw new Error("Invalid GeoJSON object.")
    }
  }
  function Fi(t, e, i, n) {
    return t ? t(e, i) : new Si(i, n && n.markersInheritOptions && n)
  }
  function ji(t) {
    return new R(t[1], t[0], t[2])
  }
  function Ni(t, e, i) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      n = e ? Ni(t[s], e - 1, i) : (i || ji)(t[s]),
        o.push(n);
    return o
  }
  function Ui(t, e) {
    return e = "number" == typeof e ? e : 6,
      void 0 !== t.alt ? [l(t.lng, e), l(t.lat, e), l(t.alt, e)] : [l(t.lng, e), l(t.lat, e)]
  }
  function Hi(t, e, i, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(e ? Hi(t[s], e - 1, i, n) : Ui(t[s], n));
    return !e && i && o.push(o[0]),
      o
  }
  function Wi(t, i) {
    return t.feature ? e({}, t.feature, {
      geometry: i
    }) : Vi(i)
  }
  function Vi(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    }
  }
  var qi = {
    toGeoJSON: function (t) {
      return Wi(this, {
        type: "Point",
        coordinates: Ui(this.getLatLng(), t)
      })
    }
  };
  function Gi(t, e) {
    return new Di(t, e)
  }
  Si.include(qi),
    Ii.include(qi),
    Bi.include(qi),
    Ai.include({
      toGeoJSON: function (t) {
        var e = !pi(this._latlngs);
        return Wi(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: Hi(this._latlngs, e ? 1 : 0, !1, t)
        })
      }
    }),
    Oi.include({
      toGeoJSON: function (t) {
        var e = !pi(this._latlngs)
          , i = e && !pi(this._latlngs[0])
          , n = Hi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return e || (n = [n]),
          Wi(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          })
      }
    }),
    Mi.include({
      toMultiPoint: function (t) {
        var e = [];
        return this.eachLayer((function (i) {
          e.push(i.toGeoJSON(t).geometry.coordinates)
        }
        )),
          Wi(this, {
            type: "MultiPoint",
            coordinates: e
          })
      },
      toGeoJSON: function (t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === e)
          return this.toMultiPoint(t);
        var i = "GeometryCollection" === e
          , n = [];
        return this.eachLayer((function (e) {
          if (e.toGeoJSON) {
            var o = e.toGeoJSON(t);
            if (i)
              n.push(o.geometry);
            else {
              var s = Vi(o);
              "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
            }
          }
        }
        )),
          i ? Wi(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          }
      }
    });
  var Ki = Gi
    , Yi = Ti.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: ""
      },
      initialize: function (t, e, i) {
        this._url = t,
          this._bounds = D(e),
          _(this, i)
      },
      onAdd: function () {
        this._image || (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive && (he(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset()
      },
      onRemove: function () {
        ne(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image)
      },
      setOpacity: function (t) {
        return this.options.opacity = t,
          this._image && this._updateOpacity(),
          this
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity),
          this
      },
      bringToFront: function () {
        return this._map && se(this._image),
          this
      },
      bringToBack: function () {
        return this._map && re(this._image),
          this
      },
      setUrl: function (t) {
        return this._url = t,
          this._image && (this._image.src = t),
          this
      },
      setBounds: function (t) {
        return this._bounds = D(t),
          this._map && this._reset(),
          this
      },
      getEvents: function () {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
      },
      setZIndex: function (t) {
        return this.options.zIndex = t,
          this._updateZIndex(),
          this
      },
      getBounds: function () {
        return this._bounds
      },
      getElement: function () {
        return this._image
      },
      _initImage: function () {
        var t = "IMG" === this._url.tagName
          , e = this._image = t ? this._url : ie("img");
        he(e, "leaflet-image-layer"),
          this._zoomAnimated && he(e, "leaflet-zoom-animated"),
          this.options.className && he(e, this.options.className),
          e.onselectstart = h,
          e.onmousemove = h,
          e.onload = n(this.fire, this, "load"),
          e.onerror = n(this._overlayOnError, this, "error"),
          (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t ? this._url = e.src : (e.src = this._url,
            e.alt = this.options.alt)
      },
      _animateZoom: function (t) {
        var e = this._map.getZoomScale(t.zoom)
          , i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        pe(this._image, i, e)
      },
      _reset: function () {
        var t = this._image
          , e = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
          , i = e.getSize();
        me(t, e.min),
          t.style.width = i.x + "px",
          t.style.height = i.y + "px"
      },
      _updateOpacity: function () {
        _e(this._image, this.options.opacity)
      },
      _updateZIndex: function () {
        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t,
          this._image.src = t)
      }
    })
    , Xi = Yi.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1
      },
      _initImage: function () {
        var t = "VIDEO" === this._url.tagName
          , e = this._image = t ? this._url : ie("video");
        if (he(e, "leaflet-image-layer"),
          this._zoomAnimated && he(e, "leaflet-zoom-animated"),
          this.options.className && he(e, this.options.className),
          e.onselectstart = h,
          e.onmousemove = h,
          e.onloadeddata = n(this.fire, this, "load"),
          t) {
          for (var i = e.getElementsByTagName("source"), o = [], s = 0; s < i.length; s++)
            o.push(i[s].src);
          this._url = i.length > 0 ? o : [e.src]
        } else {
          f(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
            e.autoplay = !!this.options.autoplay,
            e.loop = !!this.options.loop,
            e.muted = !!this.options.muted;
          for (var r = 0; r < this._url.length; r++) {
            var a = ie("source");
            a.src = this._url[r],
              e.appendChild(a)
          }
        }
      }
    });
  var Ji = Yi.extend({
    _initImage: function () {
      var t = this._image = this._url;
      he(t, "leaflet-image-layer"),
        this._zoomAnimated && he(t, "leaflet-zoom-animated"),
        this.options.className && he(t, this.options.className),
        t.onselectstart = h,
        t.onmousemove = h
    }
  });
  var $i = Ti.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function (t, e) {
      _(this, t),
        this._source = e
    },
    onAdd: function (t) {
      this._zoomAnimated = t._zoomAnimated,
        this._container || this._initLayout(),
        t._fadeAnimated && _e(this._container, 0),
        clearTimeout(this._removeTimeout),
        this.getPane().appendChild(this._container),
        this.update(),
        t._fadeAnimated && _e(this._container, 1),
        this.bringToFront()
    },
    onRemove: function (t) {
      t._fadeAnimated ? (_e(this._container, 0),
        this._removeTimeout = setTimeout(n(ne, void 0, this._container), 200)) : ne(this._container)
    },
    getLatLng: function () {
      return this._latlng
    },
    setLatLng: function (t) {
      return this._latlng = F(t),
        this._map && (this._updatePosition(),
          this._adjustPan()),
        this
    },
    getContent: function () {
      return this._content
    },
    setContent: function (t) {
      return this._content = t,
        this.update(),
        this
    },
    getElement: function () {
      return this._container
    },
    update: function () {
      this._map && (this._container.style.visibility = "hidden",
        this._updateContent(),
        this._updateLayout(),
        this._updatePosition(),
        this._container.style.visibility = "",
        this._adjustPan())
    },
    getEvents: function () {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
    },
    isOpen: function () {
      return !!this._map && this._map.hasLayer(this)
    },
    bringToFront: function () {
      return this._map && se(this._container),
        this
    },
    bringToBack: function () {
      return this._map && re(this._container),
        this
    },
    _prepareOpen: function (t, e, i) {
      if (e instanceof Ti || (i = e,
        e = t),
        e instanceof Ci)
        for (var n in t._layers) {
          e = t._layers[n];
          break
        }
      if (!i)
        if (e.getCenter)
          i = e.getCenter();
        else {
          if (!e.getLatLng)
            throw new Error("Unable to get source layer LatLng.");
          i = e.getLatLng()
        }
      return this._source = e,
        this.update(),
        i
    },
    _updateContent: function () {
      if (this._content) {
        var t = this._contentNode
          , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof e)
          t.innerHTML = e;
        else {
          for (; t.hasChildNodes();)
            t.removeChild(t.firstChild);
          t.appendChild(e)
        }
        this.fire("contentupdate")
      }
    },
    _updatePosition: function () {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng)
          , e = B(this.options.offset)
          , i = this._getAnchor();
        this._zoomAnimated ? me(this._container, t.add(i)) : e = e.add(t).add(i);
        var n = this._containerBottom = -e.y
          , o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
        this._container.style.bottom = n + "px",
          this._container.style.left = o + "px"
      }
    },
    _getAnchor: function () {
      return [0, 0]
    }
  })
    , Qi = $i.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: ""
      },
      openOn: function (t) {
        return t.openPopup(this),
          this
      },
      onAdd: function (t) {
        $i.prototype.onAdd.call(this, t),
          t.fire("popupopen", {
            popup: this
          }),
          this._source && (this._source.fire("popupopen", {
            popup: this
          }, !0),
            this._source instanceof Zi || this._source.on("preclick", Ze))
      },
      onRemove: function (t) {
        $i.prototype.onRemove.call(this, t),
          t.fire("popupclose", {
            popup: this
          }),
          this._source && (this._source.fire("popupclose", {
            popup: this
          }, !0),
            this._source instanceof Zi || this._source.off("preclick", Ze))
      },
      getEvents: function () {
        var t = $i.prototype.getEvents.call(this);
        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
      },
      _close: function () {
        this._map && this._map.closePopup(this)
      },
      _initLayout: function () {
        var t = "leaflet-popup"
          , e = this._container = ie("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
          , i = this._wrapper = ie("div", t + "-content-wrapper", e);
        if (this._contentNode = ie("div", t + "-content", i),
          Ie(e),
          Be(this._contentNode),
          Te(e, "contextmenu", Ze),
          this._tipContainer = ie("div", t + "-tip-container", e),
          this._tip = ie("div", t + "-tip", this._tipContainer),
          this.options.closeButton) {
          var n = this._closeButton = ie("a", t + "-close-button", e);
          n.href = "#close",
            n.innerHTML = "&#215;",
            Te(n, "click", this._onCloseButtonClick, this)
        }
      },
      _updateLayout: function () {
        var t = this._contentNode
          , e = t.style;
        e.width = "",
          e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth),
          i = Math.max(i, this.options.minWidth),
          e.width = i + 1 + "px",
          e.whiteSpace = "",
          e.height = "";
        var n = t.offsetHeight
          , o = this.options.maxHeight
          , s = "leaflet-popup-scrolled";
        o && n > o ? (e.height = o + "px",
          he(t, s)) : le(t, s),
          this._containerWidth = this._container.offsetWidth
      },
      _animateZoom: function (t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          , i = this._getAnchor();
        me(this._container, e.add(i))
      },
      _adjustPan: function () {
        if (this.options.autoPan) {
          this._map._panAnim && this._map._panAnim.stop();
          var t = this._map
            , e = parseInt(ee(this._container, "marginBottom"), 10) || 0
            , i = this._container.offsetHeight + e
            , n = this._containerWidth
            , o = new S(this._containerLeft, -i - this._containerBottom);
          o._add(fe(this._container));
          var s = t.layerPointToContainerPoint(o)
            , r = B(this.options.autoPanPadding)
            , a = B(this.options.autoPanPaddingTopLeft || r)
            , h = B(this.options.autoPanPaddingBottomRight || r)
            , l = t.getSize()
            , u = 0
            , c = 0;
          s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x),
            s.x - u - a.x < 0 && (u = s.x - a.x),
            s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y),
            s.y - c - a.y < 0 && (c = s.y - a.y),
            (u || c) && t.fire("autopanstart").panBy([u, c])
        }
      },
      _onCloseButtonClick: function (t) {
        this._close(),
          Oe(t)
      },
      _getAnchor: function () {
        return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
      }
    });
  qe.mergeOptions({
    closePopupOnClick: !0
  }),
    qe.include({
      openPopup: function (t, e, i) {
        return t instanceof Qi || (t = new Qi(i).setContent(t)),
          e && t.setLatLng(e),
          this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
            this._popup = t,
            this.addLayer(t))
      },
      closePopup: function (t) {
        return t && t !== this._popup || (t = this._popup,
          this._popup = null),
          t && this.removeLayer(t),
          this
      }
    }),
    Ti.include({
      bindPopup: function (t, e) {
        return t instanceof Qi ? (_(t, e),
          this._popup = t,
          t._source = this) : (this._popup && !e || (this._popup = new Qi(e, this)),
            this._popup.setContent(t)),
          this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }),
            this._popupHandlersAdded = !0),
          this
      },
      unbindPopup: function () {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }),
          this._popupHandlersAdded = !1,
          this._popup = null),
          this
      },
      openPopup: function (t, e) {
        return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e),
          this._map.openPopup(this._popup, e)),
          this
      },
      closePopup: function () {
        return this._popup && this._popup._close(),
          this
      },
      togglePopup: function (t) {
        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen()
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t),
          this
      },
      getPopup: function () {
        return this._popup
      },
      _openPopup: function (t) {
        var e = t.layer || t.target;
        this._popup && this._map && (Oe(t),
          e instanceof Zi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng)
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t)
      }
    });
  var tn = $i.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function (t) {
      $i.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire("tooltipopen", {
          tooltip: this
        }),
        this._source && this._source.fire("tooltipopen", {
          tooltip: this
        }, !0)
    },
    onRemove: function (t) {
      $i.prototype.onRemove.call(this, t),
        t.fire("tooltipclose", {
          tooltip: this
        }),
        this._source && this._source.fire("tooltipclose", {
          tooltip: this
        }, !0)
    },
    getEvents: function () {
      var t = $i.prototype.getEvents.call(this);
      return wt && !this.options.permanent && (t.preclick = this._close),
        t
    },
    _close: function () {
      this._map && this._map.closeTooltip(this)
    },
    _initLayout: function () {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = ie("div", t)
    },
    _updateLayout: function () { },
    _adjustPan: function () { },
    _setPosition: function (t) {
      var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), r = n.layerPointToContainerPoint(t), a = this.options.direction, h = o.offsetWidth, l = o.offsetHeight, u = B(this.options.offset), c = this._getAnchor();
      "top" === a ? (e = h / 2,
        i = l) : "bottom" === a ? (e = h / 2,
          i = 0) : "center" === a ? (e = h / 2,
            i = l / 2) : "right" === a ? (e = 0,
              i = l / 2) : "left" === a ? (e = h,
                i = l / 2) : r.x < s.x ? (a = "right",
                  e = 0,
                  i = l / 2) : (a = "left",
                    e = h + 2 * (u.x + c.x),
                    i = l / 2),
        t = t.subtract(B(e, i, !0)).add(u).add(c),
        le(o, "leaflet-tooltip-right"),
        le(o, "leaflet-tooltip-left"),
        le(o, "leaflet-tooltip-top"),
        le(o, "leaflet-tooltip-bottom"),
        he(o, "leaflet-tooltip-" + a),
        me(o, t)
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t)
    },
    setOpacity: function (t) {
      this.options.opacity = t,
        this._container && _e(this._container, t)
    },
    _animateZoom: function (t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(e)
    },
    _getAnchor: function () {
      return B(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
    }
  });
  qe.include({
    openTooltip: function (t, e, i) {
      return t instanceof tn || (t = new tn(i).setContent(t)),
        e && t.setLatLng(e),
        this.hasLayer(t) ? this : this.addLayer(t)
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t),
        this
    }
  }),
    Ti.include({
      bindTooltip: function (t, e) {
        return t instanceof tn ? (_(t, e),
          this._tooltip = t,
          t._source = this) : (this._tooltip && !e || (this._tooltip = new tn(e, this)),
            this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
          this
      },
      unbindTooltip: function () {
        return this._tooltip && (this._initTooltipInteractions(!0),
          this.closeTooltip(),
          this._tooltip = null),
          this
      },
      _initTooltipInteractions: function (t) {
        if (t || !this._tooltipHandlersAdded) {
          var e = t ? "off" : "on"
            , i = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
          this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
            i.mouseout = this.closeTooltip,
            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
            wt && (i.click = this._openTooltip)),
            this[e](i),
            this._tooltipHandlersAdded = !t
        }
      },
      openTooltip: function (t, e) {
        return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e),
          this._map.openTooltip(this._tooltip, e),
          this._tooltip.options.interactive && this._tooltip._container && (he(this._tooltip._container, "leaflet-clickable"),
            this.addInteractiveTarget(this._tooltip._container))),
          this
      },
      closeTooltip: function () {
        return this._tooltip && (this._tooltip._close(),
          this._tooltip.options.interactive && this._tooltip._container && (le(this._tooltip._container, "leaflet-clickable"),
            this.removeInteractiveTarget(this._tooltip._container))),
          this
      },
      toggleTooltip: function (t) {
        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen()
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t),
          this
      },
      getTooltip: function () {
        return this._tooltip
      },
      _openTooltip: function (t) {
        var e = t.layer || t.target;
        this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
      },
      _moveTooltip: function (t) {
        var e, i, n = t.latlng;
        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent),
          i = this._map.containerPointToLayerPoint(e),
          n = this._map.layerPointToLatLng(i)),
          this._tooltip.setLatLng(n)
      }
    });
  var en = zi.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function (t) {
      var e = t && "DIV" === t.tagName ? t : document.createElement("div")
        , i = this.options;
      if (i.html instanceof Element ? (oe(e),
        e.appendChild(i.html)) : e.innerHTML = !1 !== i.html ? i.html : "",
        i.bgPos) {
        var n = B(i.bgPos);
        e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
      }
      return this._setIconStyles(e, "icon"),
        e
    },
    createShadow: function () {
      return null
    }
  });
  zi.Default = Ei;
  var nn = Ti.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: gt,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function (t) {
      _(this, t)
    },
    onAdd: function () {
      this._initContainer(),
        this._levels = {},
        this._tiles = {},
        this._resetView(),
        this._update()
    },
    beforeAdd: function (t) {
      t._addZoomLimit(this)
    },
    onRemove: function (t) {
      this._removeAllTiles(),
        ne(this._container),
        t._removeZoomLimit(this),
        this._container = null,
        this._tileZoom = void 0
    },
    bringToFront: function () {
      return this._map && (se(this._container),
        this._setAutoZIndex(Math.max)),
        this
    },
    bringToBack: function () {
      return this._map && (re(this._container),
        this._setAutoZIndex(Math.min)),
        this
    },
    getContainer: function () {
      return this._container
    },
    setOpacity: function (t) {
      return this.options.opacity = t,
        this._updateOpacity(),
        this
    },
    setZIndex: function (t) {
      return this.options.zIndex = t,
        this._updateZIndex(),
        this
    },
    isLoading: function () {
      return this._loading
    },
    redraw: function () {
      return this._map && (this._removeAllTiles(),
        this._update()),
        this
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)),
        t.move = this._onMove),
        this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
    },
    createTile: function () {
      return document.createElement("div")
    },
    getTileSize: function () {
      var t = this.options.tileSize;
      return t instanceof S ? t : new S(t, t)
    },
    _updateZIndex: function () {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
    },
    _setAutoZIndex: function (t) {
      for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
        e = i[o].style.zIndex,
          i[o] !== this._container && e && (n = t(n, +e));
      isFinite(n) && (this.options.zIndex = n + t(-1, 1),
        this._updateZIndex())
    },
    _updateOpacity: function () {
      if (this._map && !Q) {
        _e(this._container, this.options.opacity);
        var t = +new Date
          , e = !1
          , i = !1;
        for (var n in this._tiles) {
          var o = this._tiles[n];
          if (o.current && o.loaded) {
            var s = Math.min(1, (t - o.loaded) / 200);
            _e(o.el, s),
              s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o),
                o.active = !0)
          }
        }
        i && !this._noPrune && this._pruneTiles(),
          e && (M(this._fadeFrame),
            this._fadeFrame = T(this._updateOpacity, this))
      }
    },
    _onOpaqueTile: h,
    _initContainer: function () {
      this._container || (this._container = ie("div", "leaflet-layer " + (this.options.className || "")),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container))
    },
    _updateLevels: function () {
      var t = this._tileZoom
        , e = this.options.maxZoom;
      if (void 0 !== t) {
        for (var i in this._levels)
          i = Number(i),
            this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
              this._onUpdateLevel(i)) : (ne(this._levels[i].el),
                this._removeTilesAtZoom(i),
                this._onRemoveLevel(i),
                delete this._levels[i]);
        var n = this._levels[t]
          , o = this._map;
        return n || ((n = this._levels[t] = {}).el = ie("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
          n.el.style.zIndex = e,
          n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
          n.zoom = t,
          this._setZoomTransform(n, o.getCenter(), o.getZoom()),
          n.el.offsetWidth,
          this._onCreateLevel(n)),
          this._level = n,
          n
      }
    },
    _onUpdateLevel: h,
    _onRemoveLevel: h,
    _onCreateLevel: h,
    _pruneTiles: function () {
      if (this._map) {
        var t, e, i = this._map.getZoom();
        if (i > this.options.maxZoom || i < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (t in this._tiles)
            (e = this._tiles[t]).retain = e.current;
          for (t in this._tiles)
            if ((e = this._tiles[t]).current && !e.active) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t)
        }
      }
    },
    _removeTilesAtZoom: function (t) {
      for (var e in this._tiles)
        this._tiles[e].coords.z === t && this._removeTile(e)
    },
    _removeAllTiles: function () {
      for (var t in this._tiles)
        this._removeTile(t)
    },
    _invalidateAll: function () {
      for (var t in this._levels)
        ne(this._levels[t].el),
          this._onRemoveLevel(Number(t)),
          delete this._levels[t];
      this._removeAllTiles(),
        this._tileZoom = void 0
    },
    _retainParent: function (t, e, i, n) {
      var o = Math.floor(t / 2)
        , s = Math.floor(e / 2)
        , r = i - 1
        , a = new S(+o, +s);
      a.z = +r;
      var h = this._tileCoordsToKey(a)
        , l = this._tiles[h];
      return l && l.active ? (l.retain = !0,
        !0) : (l && l.loaded && (l.retain = !0),
          r > n && this._retainParent(o, s, r, n))
    },
    _retainChildren: function (t, e, i, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++)
        for (var s = 2 * e; s < 2 * e + 2; s++) {
          var r = new S(o, s);
          r.z = i + 1;
          var a = this._tileCoordsToKey(r)
            , h = this._tiles[a];
          h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0),
            i + 1 < n && this._retainChildren(o, s, i + 1, n))
        }
    },
    _resetView: function (t) {
      var e = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
    },
    _animateZoom: function (t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate)
    },
    _clampZoom: function (t) {
      var e = this.options;
      return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
    },
    _setView: function (t, e, i, n) {
      var o = Math.round(e);
      o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o);
      var s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o,
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== o && this._update(t),
        i || this._pruneTiles(),
        this._noPrune = !!i),
        this._setZoomTransforms(t, e)
    },
    _setZoomTransforms: function (t, e) {
      for (var i in this._levels)
        this._setZoomTransform(this._levels[i], t, e)
    },
    _setZoomTransform: function (t, e, i) {
      var n = this._map.getZoomScale(i, t.zoom)
        , o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
      ft ? pe(t.el, o, n) : me(t.el, o)
    },
    _resetGrid: function () {
      var t = this._map
        , e = t.options.crs
        , i = this._tileSize = this.getTileSize()
        , n = this._tileZoom
        , o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
        this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
        this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update()
    },
    _getTiledPixelBounds: function (t) {
      var e = this._map
        , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
        , n = e.getZoomScale(i, this._tileZoom)
        , o = e.project(t, this._tileZoom).floor()
        , s = e.getSize().divideBy(2 * n);
      return new I(o.subtract(s), o.add(s))
    },
    _update: function (t) {
      var e = this._map;
      if (e) {
        var i = this._clampZoom(e.getZoom());
        if (void 0 === t && (t = e.getCenter()),
          void 0 !== this._tileZoom) {
          var n = this._getTiledPixelBounds(t)
            , o = this._pxBoundsToTileRange(n)
            , s = o.getCenter()
            , r = []
            , a = this.options.keepBuffer
            , h = new I(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
            throw new Error("Attempted to load an infinite number of tiles");
          for (var l in this._tiles) {
            var u = this._tiles[l].coords;
            u.z === this._tileZoom && h.contains(new S(u.x, u.y)) || (this._tiles[l].current = !1)
          }
          if (Math.abs(i - this._tileZoom) > 1)
            this._setView(t, i);
          else {
            for (var c = o.min.y; c <= o.max.y; c++)
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d = new S(_, c);
                if (d.z = this._tileZoom,
                  this._isValidTile(d)) {
                  var p = this._tiles[this._tileCoordsToKey(d)];
                  p ? p.current = !0 : r.push(d)
                }
              }
            if (r.sort((function (t, e) {
              return t.distanceTo(s) - e.distanceTo(s)
            }
            )),
              0 !== r.length) {
              this._loading || (this._loading = !0,
                this.fire("loading"));
              var m = document.createDocumentFragment();
              for (_ = 0; _ < r.length; _++)
                this._addTile(r[_], m);
              this._level.el.appendChild(m)
            }
          }
        }
      }
    },
    _isValidTile: function (t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalTileRange;
        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
          return !1
      }
      if (!this.options.bounds)
        return !0;
      var n = this._tileCoordsToBounds(t);
      return D(this.options.bounds).overlaps(n)
    },
    _keyToBounds: function (t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t))
    },
    _tileCoordsToNwSe: function (t) {
      var e = this._map
        , i = this.getTileSize()
        , n = t.scaleBy(i)
        , o = n.add(i);
      return [e.unproject(n, t.z), e.unproject(o, t.z)]
    },
    _tileCoordsToBounds: function (t) {
      var e = this._tileCoordsToNwSe(t)
        , i = new O(e[0], e[1]);
      return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
        i
    },
    _tileCoordsToKey: function (t) {
      return t.x + ":" + t.y + ":" + t.z
    },
    _keyToTileCoords: function (t) {
      var e = t.split(":")
        , i = new S(+e[0], +e[1]);
      return i.z = +e[2],
        i
    },
    _removeTile: function (t) {
      var e = this._tiles[t];
      e && (ne(e.el),
        delete this._tiles[t],
        this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }))
    },
    _initTile: function (t) {
      he(t, "leaflet-tile");
      var e = this.getTileSize();
      t.style.width = e.x + "px",
        t.style.height = e.y + "px",
        t.onselectstart = h,
        t.onmousemove = h,
        Q && this.options.opacity < 1 && _e(t, this.options.opacity),
        it && !nt && (t.style.WebkitBackfaceVisibility = "hidden")
    },
    _addTile: function (t, e) {
      var i = this._getTilePos(t)
        , o = this._tileCoordsToKey(t)
        , s = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
      this._initTile(s),
        this.createTile.length < 2 && T(n(this._tileReady, this, t, null, s)),
        me(s, i),
        this._tiles[o] = {
          el: s,
          coords: t,
          current: !0
        },
        e.appendChild(s),
        this.fire("tileloadstart", {
          tile: s,
          coords: t
        })
    },
    _tileReady: function (t, e, i) {
      e && this.fire("tileerror", {
        error: e,
        tile: i,
        coords: t
      });
      var o = this._tileCoordsToKey(t);
      (i = this._tiles[o]) && (i.loaded = +new Date,
        this._map._fadeAnimated ? (_e(i.el, 0),
          M(this._fadeFrame),
          this._fadeFrame = T(this._updateOpacity, this)) : (i.active = !0,
            this._pruneTiles()),
        e || (he(i.el, "leaflet-tile-loaded"),
          this.fire("tileload", {
            tile: i.el,
            coords: t
          })),
        this._noTilesToLoad() && (this._loading = !1,
          this.fire("load"),
          Q || !this._map._fadeAnimated ? T(this._pruneTiles, this) : setTimeout(n(this._pruneTiles, this), 250)))
    },
    _getTilePos: function (t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
    },
    _wrapCoords: function (t) {
      var e = new S(this._wrapX ? a(t.x, this._wrapX) : t.x, this._wrapY ? a(t.y, this._wrapY) : t.y);
      return e.z = t.z,
        e
    },
    _pxBoundsToTileRange: function (t) {
      var e = this.getTileSize();
      return new I(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
    },
    _noTilesToLoad: function () {
      for (var t in this._tiles)
        if (!this._tiles[t].loaded)
          return !1;
      return !0
    }
  });
  var on = nn.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function (t, e) {
      this._url = t,
        (e = _(this, e)).detectRetina && Tt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2),
          e.zoomReverse ? (e.zoomOffset--,
            e.minZoom++) : (e.zoomOffset++,
              e.maxZoom--),
          e.minZoom = Math.max(0, e.minZoom)),
        "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
        it || this.on("tileunload", this._onTileRemove)
    },
    setUrl: function (t, e) {
      return this._url === t && void 0 === e && (e = !0),
        this._url = t,
        e || this.redraw(),
        this
    },
    createTile: function (t, e) {
      var i = document.createElement("img");
      return Te(i, "load", n(this._tileOnLoad, this, e, i)),
        Te(i, "error", n(this._tileOnError, this, e, i)),
        (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
        i.alt = "",
        i.setAttribute("role", "presentation"),
        i.src = this.getTileUrl(t),
        i
    },
    getTileUrl: function (t) {
      var i = {
        r: Tt ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      if (this._map && !this._map.options.crs.infinite) {
        var n = this._globalTileRange.max.y - t.y;
        this.options.tms && (i.y = n),
          i["-y"] = n
      }
      return m(this._url, e(i, this.options))
    },
    _tileOnLoad: function (t, e) {
      Q ? setTimeout(n(t, this, null, e), 0) : t(null, e)
    },
    _tileOnError: function (t, e, i) {
      var n = this.options.errorTileUrl;
      n && e.getAttribute("src") !== n && (e.src = n),
        t(i, e)
    },
    _onTileRemove: function (t) {
      t.tile.onload = null
    },
    _getZoomForUrl: function () {
      var t = this._tileZoom
        , e = this.options.maxZoom;
      return this.options.zoomReverse && (t = e - t),
        t + this.options.zoomOffset
    },
    _getSubdomain: function (t) {
      var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[e]
    },
    _abortLoading: function () {
      var t, e;
      for (t in this._tiles)
        this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h,
          e.onerror = h,
          e.complete || (e.src = v,
            ne(e),
            delete this._tiles[t]))
    },
    _removeTile: function (t) {
      var e = this._tiles[t];
      if (e)
        return st || e.el.setAttribute("src", v),
          nn.prototype._removeTile.call(this, t)
    },
    _tileReady: function (t, e, i) {
      if (this._map && (!i || i.getAttribute("src") !== v))
        return nn.prototype._tileReady.call(this, t, e, i)
    }
  });
  function sn(t, e) {
    return new on(t, e)
  }
  var rn = on.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function (t, i) {
      this._url = t;
      var n = e({}, this.defaultWmsParams);
      for (var o in i)
        o in this.options || (n[o] = i[o]);
      var s = (i = _(this, i)).detectRetina && Tt ? 2 : 1
        , r = this.getTileSize();
      n.width = r.x * s,
        n.height = r.y * s,
        this.wmsParams = n
    },
    onAdd: function (t) {
      this._crs = this.options.crs || t.options.crs,
        this._wmsVersion = parseFloat(this.wmsParams.version);
      var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
      this.wmsParams[e] = this._crs.code,
        on.prototype.onAdd.call(this, t)
    },
    getTileUrl: function (t) {
      var e = this._tileCoordsToNwSe(t)
        , i = this._crs
        , n = A(i.project(e[0]), i.project(e[1]))
        , o = n.min
        , s = n.max
        , r = (this._wmsVersion >= 1.3 && this._crs === bi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(",")
        , a = on.prototype.getTileUrl.call(this, t);
      return a + d(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
    },
    setParams: function (t, i) {
      return e(this.wmsParams, t),
        i || this.redraw(),
        this
    }
  });
  on.WMS = rn,
    sn.wms = function (t, e) {
      return new rn(t, e)
    }
    ;
  var an = Ti.extend({
    options: {
      padding: .1,
      tolerance: 0
    },
    initialize: function (t) {
      _(this, t),
        s(this),
        this._layers = this._layers || {}
    },
    onAdd: function () {
      this._container || (this._initContainer(),
        this._zoomAnimated && he(this._container, "leaflet-zoom-animated")),
        this.getPane().appendChild(this._container),
        this._update(),
        this.on("update", this._updatePaths, this)
    },
    onRemove: function () {
      this.off("update", this._updatePaths, this),
        this._destroyContainer()
    },
    getEvents: function () {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
        t
    },
    _onAnimZoom: function (t) {
      this._updateTransform(t.center, t.zoom)
    },
    _onZoom: function () {
      this._updateTransform(this._map.getCenter(), this._map.getZoom())
    },
    _updateTransform: function (t, e) {
      var i = this._map.getZoomScale(e, this._zoom)
        , n = fe(this._container)
        , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
        , s = this._map.project(this._center, e)
        , r = this._map.project(t, e).subtract(s)
        , a = o.multiplyBy(-i).add(n).add(o).subtract(r);
      ft ? pe(this._container, a, i) : me(this._container, a)
    },
    _reset: function () {
      for (var t in this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers)
        this._layers[t]._reset()
    },
    _onZoomEnd: function () {
      for (var t in this._layers)
        this._layers[t]._project()
    },
    _updatePaths: function () {
      for (var t in this._layers)
        this._layers[t]._update()
    },
    _update: function () {
      var t = this.options.padding
        , e = this._map.getSize()
        , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
      this._bounds = new I(i, i.add(e.multiplyBy(1 + 2 * t)).round()),
        this._center = this._map.getCenter(),
        this._zoom = this._map.getZoom()
    }
  })
    , hn = an.extend({
      getEvents: function () {
        var t = an.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset,
          t
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0
      },
      onAdd: function () {
        an.prototype.onAdd.call(this),
          this._draw()
      },
      _initContainer: function () {
        var t = this._container = document.createElement("canvas");
        Te(t, "mousemove", this._onMouseMove, this),
          Te(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
          Te(t, "mouseout", this._handleMouseOut, this),
          this._ctx = t.getContext("2d")
      },
      _destroyContainer: function () {
        M(this._redrawRequest),
          delete this._ctx,
          ne(this._container),
          Ce(this._container),
          delete this._container
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in this._redrawBounds = null,
            this._layers)
            this._layers[t]._update();
          this._redraw()
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          an.prototype._update.call(this);
          var t = this._bounds
            , e = this._container
            , i = t.getSize()
            , n = Tt ? 2 : 1;
          me(e, t.min),
            e.width = n * i.x,
            e.height = n * i.y,
            e.style.width = i.x + "px",
            e.style.height = i.y + "px",
            Tt && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update")
        }
      },
      _reset: function () {
        an.prototype._reset.call(this),
          this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
            this._updatePaths())
      },
      _initPath: function (t) {
        this._updateDashArray(t),
          this._layers[s(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e),
          this._drawLast = e,
          this._drawFirst = this._drawFirst || this._drawLast
      },
      _addPath: function (t) {
        this._requestRedraw(t)
      },
      _removePath: function (t) {
        var e = t._order
          , i = e.next
          , n = e.prev;
        i ? i.prev = n : this._drawLast = n,
          n ? n.next = i : this._drawFirst = i,
          delete t._order,
          delete this._layers[s(t)],
          this._requestRedraw(t)
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t)
      },
      _updateStyle: function (t) {
        this._updateDashArray(t),
          this._requestRedraw(t)
      },
      _updateDashArray: function (t) {
        if ("string" == typeof t.options.dashArray) {
          var e, i, n = t.options.dashArray.split(/[, ]+/), o = [];
          for (i = 0; i < n.length; i++) {
            if (e = Number(n[i]),
              isNaN(e))
              return;
            o.push(e)
          }
          t.options._dashArray = o
        } else
          t.options._dashArray = t.options.dashArray
      },
      _requestRedraw: function (t) {
        this._map && (this._extendRedrawBounds(t),
          this._redrawRequest = this._redrawRequest || T(this._redraw, this))
      },
      _extendRedrawBounds: function (t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new I,
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
        }
      },
      _redraw: function () {
        this._redrawRequest = null,
          this._redrawBounds && (this._redrawBounds.min._floor(),
            this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          this._redrawBounds = null
      },
      _clear: function () {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
        } else
          this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(0, 0, this._container.width, this._container.height),
            this._ctx.restore()
      },
      _draw: function () {
        var t, e = this._redrawBounds;
        if (this._ctx.save(),
          e) {
          var i = e.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip()
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          t = n.layer,
            (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1,
          this._ctx.restore()
      },
      _updatePoly: function (t, e) {
        if (this._drawing) {
          var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
          if (a) {
            for (h.beginPath(),
              i = 0; i < a; i++) {
              for (n = 0,
                o = r[i].length; n < o; n++)
                s = r[i][n],
                  h[n ? "lineTo" : "moveTo"](s.x, s.y);
              e && h.closePath()
            }
            this._fillStroke(h, t)
          }
        }
      },
      _updateCircle: function (t) {
        if (this._drawing && !t._empty()) {
          var e = t._point
            , i = this._ctx
            , n = Math.max(Math.round(t._radius), 1)
            , o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          1 !== o && (i.save(),
            i.scale(1, o)),
            i.beginPath(),
            i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
            1 !== o && i.restore(),
            this._fillStroke(i, t)
        }
      },
      _fillStroke: function (t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity,
          t.fillStyle = i.fillColor || i.color,
          t.fill(i.fillRule || "evenodd")),
          i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
            t.globalAlpha = i.opacity,
            t.lineWidth = i.weight,
            t.strokeStyle = i.color,
            t.lineCap = i.lineCap,
            t.lineJoin = i.lineJoin,
            t.stroke())
      },
      _onClick: function (t) {
        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
          (e = o.layer).options.interactive && e._containsPoint(n) && ("click" !== t.type && "preclick" === t.type || !this._map._draggableMoved(e)) && (i = e);
        i && (Ne(t),
          this._fireEvent([i], t))
      },
      _onMouseMove: function (t) {
        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e)
        }
      },
      _handleMouseOut: function (t) {
        var e = this._hoveredLayer;
        e && (le(this._container, "leaflet-interactive"),
          this._fireEvent([e], t, "mouseout"),
          this._hoveredLayer = null,
          this._mouseHoverThrottled = !1)
      },
      _handleMouseHover: function (t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, o, s = this._drawFirst; s; s = s.next)
            (i = s.layer).options.interactive && i._containsPoint(e) && (o = i);
          o !== this._hoveredLayer && (this._handleMouseOut(t),
            o && (he(this._container, "leaflet-interactive"),
              this._fireEvent([o], t, "mouseover"),
              this._hoveredLayer = o)),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
            this._mouseHoverThrottled = !0,
            setTimeout(n((function () {
              this._mouseHoverThrottled = !1
            }
            ), this), 32)
        }
      },
      _fireEvent: function (t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t)
      },
      _bringToFront: function (t) {
        var e = t._order;
        if (e) {
          var i = e.next
            , n = e.prev;
          i && (i.prev = n,
            n ? n.next = i : i && (this._drawFirst = i),
            e.prev = this._drawLast,
            this._drawLast.next = e,
            e.next = null,
            this._drawLast = e,
            this._requestRedraw(t))
        }
      },
      _bringToBack: function (t) {
        var e = t._order;
        if (e) {
          var i = e.next
            , n = e.prev;
          n && (n.next = i,
            i ? i.prev = n : n && (this._drawLast = n),
            e.prev = null,
            e.next = this._drawFirst,
            this._drawFirst.prev = e,
            this._drawFirst = e,
            this._requestRedraw(t))
        }
      }
    });
  function ln(t) {
    return Ct ? new hn(t) : null
  }
  var un = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
        function (t) {
          return document.createElement("<lvml:" + t + ' class="lvml">')
        }
    } catch (t) {
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
      }
    }
  }()
    , cn = {
      _initContainer: function () {
        this._container = ie("div", "leaflet-vml-container")
      },
      _update: function () {
        this._map._animatingZoom || (an.prototype._update.call(this),
          this.fire("update"))
      },
      _initPath: function (t) {
        var e = t._container = un("shape");
        he(e, "leaflet-vml-shape " + (this.options.className || "")),
          e.coordsize = "1 1",
          t._path = un("path"),
          e.appendChild(t._path),
          this._updateStyle(t),
          this._layers[s(t)] = t
      },
      _addPath: function (t) {
        var e = t._container;
        this._container.appendChild(e),
          t.options.interactive && t.addInteractiveTarget(e)
      },
      _removePath: function (t) {
        var e = t._container;
        ne(e),
          t.removeInteractiveTarget(e),
          delete this._layers[s(t)]
      },
      _updateStyle: function (t) {
        var e = t._stroke
          , i = t._fill
          , n = t.options
          , o = t._container;
        o.stroked = !!n.stroke,
          o.filled = !!n.fill,
          n.stroke ? (e || (e = t._stroke = un("stroke")),
            o.appendChild(e),
            e.weight = n.weight + "px",
            e.color = n.color,
            e.opacity = n.opacity,
            n.dashArray ? e.dashStyle = f(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
            e.endcap = n.lineCap.replace("butt", "flat"),
            e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
              t._stroke = null),
          n.fill ? (i || (i = t._fill = un("fill")),
            o.appendChild(i),
            i.color = n.fillColor || n.color,
            i.opacity = n.fillOpacity) : i && (o.removeChild(i),
              t._fill = null)
      },
      _updateCircle: function (t) {
        var e = t._point.round()
          , i = Math.round(t._radius)
          , n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
      },
      _setPath: function (t, e) {
        t._path.v = e
      },
      _bringToFront: function (t) {
        se(t._container)
      },
      _bringToBack: function (t) {
        re(t._container)
      }
    }
    , _n = Et ? un : Y
    , dn = an.extend({
      getEvents: function () {
        var t = an.prototype.getEvents.call(this);
        return t.zoomstart = this._onZoomStart,
          t
      },
      _initContainer: function () {
        this._container = _n("svg"),
          this._container.setAttribute("pointer-events", "none"),
          this._rootGroup = _n("g"),
          this._container.appendChild(this._rootGroup)
      },
      _destroyContainer: function () {
        ne(this._container),
          Ce(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize
      },
      _onZoomStart: function () {
        this._update()
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          an.prototype._update.call(this);
          var t = this._bounds
            , e = t.getSize()
            , i = this._container;
          this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
            i.setAttribute("width", e.x),
            i.setAttribute("height", e.y)),
            me(i, t.min),
            i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
            this.fire("update")
        }
      },
      _initPath: function (t) {
        var e = t._path = _n("path");
        t.options.className && he(e, t.options.className),
          t.options.interactive && he(e, "leaflet-interactive"),
          this._updateStyle(t),
          this._layers[s(t)] = t
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path)
      },
      _removePath: function (t) {
        ne(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[s(t)]
      },
      _updatePath: function (t) {
        t._project(),
          t._update()
      },
      _updateStyle: function (t) {
        var e = t._path
          , i = t.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color),
          e.setAttribute("stroke-opacity", i.opacity),
          e.setAttribute("stroke-width", i.weight),
          e.setAttribute("stroke-linecap", i.lineCap),
          e.setAttribute("stroke-linejoin", i.lineJoin),
          i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"),
          i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
          i.fill ? (e.setAttribute("fill", i.fillColor || i.color),
            e.setAttribute("fill-opacity", i.fillOpacity),
            e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
      },
      _updatePoly: function (t, e) {
        this._setPath(t, X(t._parts, e))
      },
      _updateCircle: function (t) {
        var e = t._point
          , i = Math.max(Math.round(t._radius), 1)
          , n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
          , o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
        this._setPath(t, o)
      },
      _setPath: function (t, e) {
        t._path.setAttribute("d", e)
      },
      _bringToFront: function (t) {
        se(t._path)
      },
      _bringToBack: function (t) {
        re(t._path)
      }
    });
  function pn(t) {
    return zt || Et ? new dn(t) : null
  }
  Et && dn.include(cn),
    qe.include({
      getRenderer: function (t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()),
          this.hasLayer(e) || this.addLayer(e),
          e
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t)
          return !1;
        var e = this._paneRenderers[t];
        return void 0 === e && (e = this._createRenderer({
          pane: t
        }),
          this._paneRenderers[t] = e),
          e
      },
      _createRenderer: function (t) {
        return this.options.preferCanvas && ln(t) || pn(t)
      }
    });
  var mn = Oi.extend({
    initialize: function (t, e) {
      Oi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t))
    },
    _boundsToLatLngs: function (t) {
      return [(t = D(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
    }
  });
  dn.create = _n,
    dn.pointsToPath = X,
    Di.geometryToLayer = Ri,
    Di.coordsToLatLng = ji,
    Di.coordsToLatLngs = Ni,
    Di.latLngToCoords = Ui,
    Di.latLngsToCoords = Hi,
    Di.getFeature = Wi,
    Di.asFeature = Vi,
    qe.mergeOptions({
      boxZoom: !0
    });
  var fn = Qe.extend({
    initialize: function (t) {
      this._map = t,
        this._container = t._container,
        this._pane = t._panes.overlayPane,
        this._resetStateTimeout = 0,
        t.on("unload", this._destroy, this)
    },
    addHooks: function () {
      Te(this._container, "mousedown", this._onMouseDown, this)
    },
    removeHooks: function () {
      Ce(this._container, "mousedown", this._onMouseDown, this)
    },
    moved: function () {
      return this._moved
    },
    _destroy: function () {
      ne(this._pane),
        delete this._pane
    },
    _resetState: function () {
      this._resetStateTimeout = 0,
        this._moved = !1
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
        this._resetStateTimeout = 0)
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
        return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        qt(),
        ve(),
        this._startPoint = this._map.mouseEventToContainerPoint(t),
        Te(document, {
          contextmenu: Oe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this)
    },
    _onMouseMove: function (t) {
      this._moved || (this._moved = !0,
        this._box = ie("div", "leaflet-zoom-box", this._container),
        he(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        this._point = this._map.mouseEventToContainerPoint(t);
      var e = new I(this._point, this._startPoint)
        , i = e.getSize();
      me(this._box, e.min),
        this._box.style.width = i.x + "px",
        this._box.style.height = i.y + "px"
    },
    _finish: function () {
      this._moved && (ne(this._box),
        le(this._container, "leaflet-crosshair")),
        Gt(),
        ye(),
        Ce(document, {
          contextmenu: Oe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this)
    },
    _onMouseUp: function (t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(),
        this._moved)) {
        this._clearDeferredResetState(),
          this._resetStateTimeout = setTimeout(n(this._resetState, this), 0);
        var e = new O(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
        this._map.fitBounds(e).fire("boxzoomend", {
          boxZoomBounds: e
        })
      }
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish()
    }
  });
  qe.addInitHook("addHandler", "boxZoom", fn),
    qe.mergeOptions({
      doubleClickZoom: !0
    });
  var gn = Qe.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this)
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this)
    },
    _onDoubleClick: function (t) {
      var e = this._map
        , i = e.getZoom()
        , n = e.options.zoomDelta
        , o = t.originalEvent.shiftKey ? i - n : i + n;
      "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
    }
  });
  qe.addInitHook("addHandler", "doubleClickZoom", gn),
    qe.mergeOptions({
      dragging: !0,
      inertia: !nt,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: .2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0
    });
  var vn = Qe.extend({
    addHooks: function () {
      if (!this._draggable) {
        var t = this._map;
        this._draggable = new si(t._mapPane, t._container),
          this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this),
          this._draggable.on("predrag", this._onPreDragLimit, this),
          t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this))
      }
      he(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        this._positions = [],
        this._times = []
    },
    removeHooks: function () {
      le(this._map._container, "leaflet-grab"),
        le(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable()
    },
    moved: function () {
      return this._draggable && this._draggable._moved
    },
    moving: function () {
      return this._draggable && this._draggable._moving
    },
    _onDragStart: function () {
      var t = this._map;
      if (t._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var e = D(this._map.options.maxBounds);
        this._offsetLimit = A(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
          this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
      } else
        this._offsetLimit = null;
      t.fire("movestart").fire("dragstart"),
        t.options.inertia && (this._positions = [],
          this._times = [])
    },
    _onDrag: function (t) {
      if (this._map.options.inertia) {
        var e = this._lastTime = +new Date
          , i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(i),
          this._times.push(e),
          this._prunePositions(e)
      }
      this._map.fire("move", t).fire("drag", t)
    },
    _prunePositions: function (t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50;)
        this._positions.shift(),
          this._times.shift()
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2)
        , e = this._map.latLngToLayerPoint([0, 0]);
      this._initialWorldOffset = e.subtract(t).x,
        this._worldWidth = this._map.getPixelWorldBounds().getSize().x
    },
    _viscousLimit: function (t, e) {
      return t - (t - e) * this._viscosity
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos)
          , e = this._offsetLimit;
        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
          t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
          t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
          t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
          this._draggable._newPos = this._draggable._startPos.add(t)
      }
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth
        , e = Math.round(t / 2)
        , i = this._initialWorldOffset
        , n = this._draggable._newPos.x
        , o = (n - e + i) % t + e - i
        , s = (n + e + i) % t - e - i
        , r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
      this._draggable._absPos = this._draggable._newPos.clone(),
        this._draggable._newPos.x = r
    },
    _onDragEnd: function (t) {
      var e = this._map
        , i = e.options
        , n = !i.inertia || this._times.length < 2;
      if (e.fire("dragend", t),
        n)
        e.fire("moveend");
      else {
        this._prunePositions(+new Date);
        var o = this._lastPos.subtract(this._positions[0])
          , s = (this._lastTime - this._times[0]) / 1e3
          , r = i.easeLinearity
          , a = o.multiplyBy(r / s)
          , h = a.distanceTo([0, 0])
          , l = Math.min(i.inertiaMaxSpeed, h)
          , u = a.multiplyBy(l / h)
          , c = l / (i.inertiaDeceleration * r)
          , _ = u.multiplyBy(-c / 2).round();
        _.x || _.y ? (_ = e._limitOffset(_, e.options.maxBounds),
          T((function () {
            e.panBy(_, {
              duration: c,
              easeLinearity: r,
              noMoveStart: !0,
              animate: !0
            })
          }
          ))) : e.fire("moveend")
      }
    }
  });
  qe.addInitHook("addHandler", "dragging", vn),
    qe.mergeOptions({
      keyboard: !0,
      keyboardPanDelta: 80
    });
  var yn = Qe.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function (t) {
      this._map = t,
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta)
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        Te(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this),
        this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this)
    },
    removeHooks: function () {
      this._removeHooks(),
        Ce(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this),
        this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this)
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var t = document.body
          , e = document.documentElement
          , i = t.scrollTop || e.scrollTop
          , n = t.scrollLeft || e.scrollLeft;
        this._map._container.focus(),
          window.scrollTo(n, i)
      }
    },
    _onFocus: function () {
      this._focused = !0,
        this._map.fire("focus")
    },
    _onBlur: function () {
      this._focused = !1,
        this._map.fire("blur")
    },
    _setPanDelta: function (t) {
      var e, i, n = this._panKeys = {}, o = this.keyCodes;
      for (e = 0,
        i = o.left.length; e < i; e++)
        n[o.left[e]] = [-1 * t, 0];
      for (e = 0,
        i = o.right.length; e < i; e++)
        n[o.right[e]] = [t, 0];
      for (e = 0,
        i = o.down.length; e < i; e++)
        n[o.down[e]] = [0, t];
      for (e = 0,
        i = o.up.length; e < i; e++)
        n[o.up[e]] = [0, -1 * t]
    },
    _setZoomDelta: function (t) {
      var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
      for (e = 0,
        i = o.zoomIn.length; e < i; e++)
        n[o.zoomIn[e]] = t;
      for (e = 0,
        i = o.zoomOut.length; e < i; e++)
        n[o.zoomOut[e]] = -t
    },
    _addHooks: function () {
      Te(document, "keydown", this._onKeyDown, this)
    },
    _removeHooks: function () {
      Ce(document, "keydown", this._onKeyDown, this)
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var e, i = t.keyCode, n = this._map;
        if (i in this._panKeys)
          n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i],
            t.shiftKey && (e = B(e).multiplyBy(3)),
            n.panBy(e),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
        else if (i in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
        else {
          if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup()
        }
        Oe(t)
      }
    }
  });
  qe.addInitHook("addHandler", "keyboard", yn),
    qe.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60
    });
  var xn = Qe.extend({
    addHooks: function () {
      Te(this._map._container, "wheel", this._onWheelScroll, this),
        this._delta = 0
    },
    removeHooks: function () {
      Ce(this._map._container, "wheel", this._onWheelScroll, this)
    },
    _onWheelScroll: function (t) {
      var e = Fe(t)
        , i = this._map.options.wheelDebounceTime;
      this._delta += e,
        this._lastMousePos = this._map.mouseEventToContainerPoint(t),
        this._startTime || (this._startTime = +new Date);
      var o = Math.max(i - (+new Date - this._startTime), 0);
      clearTimeout(this._timer),
        this._timer = setTimeout(n(this._performZoom, this), o),
        Oe(t)
    },
    _performZoom: function () {
      var t = this._map
        , e = t.getZoom()
        , i = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel)
        , o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
        , s = i ? Math.ceil(o / i) * i : o
        , r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
      this._delta = 0,
        this._startTime = null,
        r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
    }
  });
  qe.addInitHook("addHandler", "scrollWheelZoom", xn),
    qe.mergeOptions({
      tap: !0,
      tapTolerance: 15
    });
  var Ln = Qe.extend({
    addHooks: function () {
      Te(this._map._container, "touchstart", this._onDown, this)
    },
    removeHooks: function () {
      Ce(this._map._container, "touchstart", this._onDown, this)
    },
    _onDown: function (t) {
      if (t.touches) {
        if (Ae(t),
          this._fireClick = !0,
          t.touches.length > 1)
          return this._fireClick = !1,
            void clearTimeout(this._holdTimeout);
        var e = t.touches[0]
          , i = e.target;
        this._startPos = this._newPos = new S(e.clientX, e.clientY),
          i.tagName && "a" === i.tagName.toLowerCase() && he(i, "leaflet-active"),
          this._holdTimeout = setTimeout(n((function () {
            this._isTapValid() && (this._fireClick = !1,
              this._onUp(),
              this._simulateEvent("contextmenu", e))
          }
          ), this), 1e3),
          this._simulateEvent("mousedown", e),
          Te(document, {
            touchmove: this._onMove,
            touchend: this._onUp
          }, this)
      }
    },
    _onUp: function (t) {
      if (clearTimeout(this._holdTimeout),
        Ce(document, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this),
        this._fireClick && t && t.changedTouches) {
        var e = t.changedTouches[0]
          , i = e.target;
        i && i.tagName && "a" === i.tagName.toLowerCase() && le(i, "leaflet-active"),
          this._simulateEvent("mouseup", e),
          this._isTapValid() && this._simulateEvent("click", e)
      }
    },
    _isTapValid: function () {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
    },
    _onMove: function (t) {
      var e = t.touches[0];
      this._newPos = new S(e.clientX, e.clientY),
        this._simulateEvent("mousemove", e)
    },
    _simulateEvent: function (t, e) {
      var i = document.createEvent("MouseEvents");
      i._simulated = !0,
        e.target._simulatedClick = !0,
        i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
        e.target.dispatchEvent(i)
    }
  });
  !wt || Lt && !lt || qe.addInitHook("addHandler", "tap", Ln),
    qe.mergeOptions({
      touchZoom: wt && !nt,
      bounceAtZoomLimits: !0
    });
  var wn = Qe.extend({
    addHooks: function () {
      he(this._map._container, "leaflet-touch-zoom"),
        Te(this._map._container, "touchstart", this._onTouchStart, this)
    },
    removeHooks: function () {
      le(this._map._container, "leaflet-touch-zoom"),
        Ce(this._map._container, "touchstart", this._onTouchStart, this)
    },
    _onTouchStart: function (t) {
      var e = this._map;
      if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
        var i = e.mouseEventToContainerPoint(t.touches[0])
          , n = e.mouseEventToContainerPoint(t.touches[1]);
        this._centerPoint = e.getSize()._divideBy(2),
          this._startLatLng = e.containerPointToLatLng(this._centerPoint),
          "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
          this._startDist = i.distanceTo(n),
          this._startZoom = e.getZoom(),
          this._moved = !1,
          this._zooming = !0,
          e._stop(),
          Te(document, "touchmove", this._onTouchMove, this),
          Te(document, "touchend", this._onTouchEnd, this),
          Ae(t)
      }
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var e = this._map
          , i = e.mouseEventToContainerPoint(t.touches[0])
          , o = e.mouseEventToContainerPoint(t.touches[1])
          , s = i.distanceTo(o) / this._startDist;
        if (this._zoom = e.getScaleZoom(s, this._startZoom),
          !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)),
          "center" === e.options.touchZoom) {
          if (this._center = this._startLatLng,
            1 === s)
            return
        } else {
          var r = i._add(o)._divideBy(2)._subtract(this._centerPoint);
          if (1 === s && 0 === r.x && 0 === r.y)
            return;
          this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
        }
        this._moved || (e._moveStart(!0, !1),
          this._moved = !0),
          M(this._animRequest);
        var a = n(e._move, e, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = T(a, this, !0),
          Ae(t)
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming ? (this._zooming = !1,
        M(this._animRequest),
        Ce(document, "touchmove", this._onTouchMove, this),
        Ce(document, "touchend", this._onTouchEnd, this),
        this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
    }
  });
  qe.addInitHook("addHandler", "touchZoom", wn),
    qe.BoxZoom = fn,
    qe.DoubleClickZoom = gn,
    qe.Drag = vn,
    qe.Keyboard = yn,
    qe.ScrollWheelZoom = xn,
    qe.Tap = Ln,
    qe.TouchZoom = wn,
    t.version = "1.7.1",
    t.Control = Ge,
    t.control = Ke,
    t.Browser = St,
    t.Evented = k,
    t.Mixin = ei,
    t.Util = C,
    t.Class = z,
    t.Handler = Qe,
    t.extend = e,
    t.bind = n,
    t.stamp = s,
    t.setOptions = _,
    t.DomEvent = We,
    t.DomUtil = Pe,
    t.PosAnimation = Ve,
    t.Draggable = si,
    t.LineUtil = fi,
    t.PolyUtil = vi,
    t.Point = S,
    t.point = B,
    t.Bounds = I,
    t.bounds = A,
    t.Transformation = V,
    t.transformation = q,
    t.Projection = Li,
    t.LatLng = R,
    t.latLng = F,
    t.LatLngBounds = O,
    t.latLngBounds = D,
    t.CRS = N,
    t.GeoJSON = Di,
    t.geoJSON = Gi,
    t.geoJson = Ki,
    t.Layer = Ti,
    t.LayerGroup = Mi,
    t.layerGroup = function (t, e) {
      return new Mi(t, e)
    }
    ,
    t.FeatureGroup = Ci,
    t.featureGroup = function (t, e) {
      return new Ci(t, e)
    }
    ,
    t.ImageOverlay = Yi,
    t.imageOverlay = function (t, e, i) {
      return new Yi(t, e, i)
    }
    ,
    t.VideoOverlay = Xi,
    t.videoOverlay = function (t, e, i) {
      return new Xi(t, e, i)
    }
    ,
    t.SVGOverlay = Ji,
    t.svgOverlay = function (t, e, i) {
      return new Ji(t, e, i)
    }
    ,
    t.DivOverlay = $i,
    t.Popup = Qi,
    t.popup = function (t, e) {
      return new Qi(t, e)
    }
    ,
    t.Tooltip = tn,
    t.tooltip = function (t, e) {
      return new tn(t, e)
    }
    ,
    t.Icon = zi,
    t.icon = function (t) {
      return new zi(t)
    }
    ,
    t.DivIcon = en,
    t.divIcon = function (t) {
      return new en(t)
    }
    ,
    t.Marker = Si,
    t.marker = function (t, e) {
      return new Si(t, e)
    }
    ,
    t.TileLayer = on,
    t.tileLayer = sn,
    t.GridLayer = nn,
    t.gridLayer = function (t) {
      return new nn(t)
    }
    ,
    t.SVG = dn,
    t.svg = pn,
    t.Renderer = an,
    t.Canvas = hn,
    t.canvas = ln,
    t.Path = Zi,
    t.CircleMarker = Bi,
    t.circleMarker = function (t, e) {
      return new Bi(t, e)
    }
    ,
    t.Circle = Ii,
    t.circle = function (t, e, i) {
      return new Ii(t, e, i)
    }
    ,
    t.Polyline = Ai,
    t.polyline = function (t, e) {
      return new Ai(t, e)
    }
    ,
    t.Polygon = Oi,
    t.polygon = function (t, e) {
      return new Oi(t, e)
    }
    ,
    t.Rectangle = mn,
    t.rectangle = function (t, e) {
      return new mn(t, e)
    }
    ,
    t.Map = qe,
    t.map = function (t, e) {
      return new qe(t, e)
    }
    ;
  var bn = window.L;
  t.noConflict = function () {
    return window.L = bn,
      this
  }
    ,
    window.L = t
}
)),
  L.Control.Coordinates = L.Control.extend({
    options: {
      position: "bottomright",
      decimals: 4,
      decimalSeparator: ".",
      labelTemplateLat: "X: {y}",
      labelTemplateLng: "Y: {x}",
      labelFormatterLat: void 0,
      labelFormatterLng: void 0,
      enableUserInput: !0,
      useLatLngOrder: !1,
      centerUserCoordinates: !1
    },
    onAdd: function (t) {
      this._map = t;
      const e = this._container = L.DomUtil.create("div", "leaflet-control-coordinates")
        , i = this.options;
      let n, o;
      return this._labelcontainer = L.DomUtil.create("div", "uiElement label", e),
        this._label = L.DomUtil.create("span", "labelFirst", this._labelcontainer),
        this._inputcontainer = L.DomUtil.create("div", "uiElement input uiHidden", e),
        i.useLatLngOrder ? (o = L.DomUtil.create("span", "", this._inputcontainer),
          this._inputY = this._createInput("inputY", this._inputcontainer),
          n = L.DomUtil.create("span", "", this._inputcontainer),
          this._inputX = this._createInput("inputX", this._inputcontainer)) : (n = L.DomUtil.create("span", "", this._inputcontainer),
            this._inputX = this._createInput("inputX", this._inputcontainer),
            o = L.DomUtil.create("span", "", this._inputcontainer),
            this._inputY = this._createInput("inputY", this._inputcontainer)),
        n.innerHTML = i.labelTemplateLng.replace("{x}", ""),
        o.innerHTML = i.labelTemplateLat.replace("{y}", ""),
        L.DomEvent.on(this._inputX, "keyup", this._handleKeypress, this),
        L.DomEvent.on(this._inputY, "keyup", this._handleKeypress, this),
        t.on("mousemove", this._update, this),
        t.on("dragstart", this.collapse, this),
        t.whenReady(this._update, this),
        this._showsCoordinates = !0,
        i.enableUserInput && L.DomEvent.addListener(this._container, "click", this._switchUI, this),
        e
    },
    _createInput: function (t, e) {
      const i = L.DomUtil.create("input", t, e);
      return L.DomEvent.disableClickPropagation(i),
        i
    },
    _clearMarker: function () {
      this._map.removeLayer(this._marker)
    },
    _handleKeypress: function (t) {
    },
    _handleSubmit: function () {
      const t = L.NumberFormatter.createValidNumber(this._inputX.value, this.options.decimalSeparator)
        , e = L.NumberFormatter.createValidNumber(this._inputY.value, this.options.decimalSeparator);
      if (void 0 !== t && void 0 !== e) {
        const i = this._marker;
        i || (i = this._marker = L.marker(),
          i.on("click", this._clearMarker, this));
        const n = new L.LatLng(e, t);
        i.setLatLng(n),
          i.addTo(this._map),
          this.options.centerUserCoordinates && this._map.setView(n, this._map.getZoom())
      }
    },
    expand: function () {
      this._showsCoordinates = !1,
        this._map.off("mousemove", this._update, this),
        L.DomEvent.addListener(this._container, "mousemove", L.DomEvent.stop),
        L.DomEvent.removeListener(this._container, "click", this._switchUI, this),
        L.DomUtil.addClass(this._labelcontainer, "uiHidden"),
        L.DomUtil.removeClass(this._inputcontainer, "uiHidden")
    },
    _createCoordinateLabel: function (t) {
      const e = this.options;
      let i, n;
      return i = e.labelFormatterLng ? e.labelFormatterLng(t.x) : L.Util.template(e.labelTemplateLng, {
        x: this._getNumber(t.x, e)
      }),
        n = e.labelFormatterLat ? e.labelFormatterLat(t.y) : L.Util.template(e.labelTemplateLat, {
          y: this._getNumber(t.y, e)
        }),
        e.useLatLngOrder ? n + " " + i : i + " " + n
    },
    _getNumber: function (t, e) {
      return L.NumberFormatter.round(t, e.decimals, e.decimalSeparator)
    },
    collapse: function () {
      if (!this._showsCoordinates && (this._map.on("mousemove", this._update, this),
        this._showsCoordinates = !0,
        L.DomEvent.addListener(this._container, "click", this._switchUI, this),
        L.DomEvent.removeListener(this._container, "mousemove", L.DomEvent.stop),
        L.DomUtil.addClass(this._inputcontainer, "uiHidden"),
        L.DomUtil.removeClass(this._labelcontainer, "uiHidden"),
        this._marker)) {
        const t = L.marker()
          , e = this._marker.getLatLng();
        t.setLatLng(e);
        const i = L.DomUtil.create("div", "");
        L.DomUtil.create("div", "", i).innerHTML = this._createCoordinateLabel(e);
        const n = L.DomUtil.create("a", "", i);
        n.textContent = "Remove",
          n.href = "#";
        const o = L.DomEvent.stopPropagation;
        L.DomEvent.on(n, "click", o).on(n, "mousedown", o).on(n, "dblclick", o).on(n, "click", L.DomEvent.preventDefault).on(n, "click", (function () {
          this._map.removeLayer(t)
        }
        ), this),
          t.bindPopup(i),
          t.addTo(this._map),
          this._map.removeLayer(this._marker),
          this._marker = null
      }
    },
    _switchUI: function (t) {
      L.DomEvent.stop(t),
        L.DomEvent.stopPropagation(t),
        L.DomEvent.preventDefault(t),
        this._showsCoordinates ? this.expand() : this.collapse()
    },
    onRemove: function (t) {
      t.off("mousemove", this._update, this)
    },
    _update: function (t) {
      let e = t.latlng;
      const i = this.options;
      e && (e = e.wrap(),
        this._currentPos = e,
        this._inputY.value = L.NumberFormatter.round(e.lat, i.decimals, i.decimalSeparator),
        this._inputX.value = L.NumberFormatter.round(e.lng, i.decimals, i.decimalSeparator),
        this._label.innerHTML = this._createCoordinateLabel(this._map.project(t.latlng, 0)))
    }
  }),
  L.control.coordinates = function (t) {
    return new L.Control.Coordinates(t)
  }
  ,
  L.Map.mergeOptions({
    coordinateControl: !1
  }),
  L.Map.addInitHook((function () {
    this.options.coordinateControl && (this.coordinateControl = new L.Control.Coordinates,
      this.addControl(this.coordinateControl))
  }
  )),
  L.NumberFormatter = {
    round: function (t, e, i) {
      let n = L.Util.formatNum(t, e) + "";
      const o = n.split(".");
      if (o[1]) {
        let t = e - o[1].length;
        for (; t > 0; t--)
          o[1] += "0";
        n = o.join(i || ".")
      }
      return n
    },
    createValidNumber: function (t, e) {
      if (t && t.length > 0) {
        const i = t.split(e || ".");
        try {
          const t = Number(i.join("."));
          if (isNaN(t))
            return;
          return t
        } catch (t) {
          return
        }
      }
    }
  },
  L.Crosshairs = L.LayerGroup.extend({
    options: {
      style: {
        opacity: 1,
        fillOpacity: 0,
        weight: 2,
        color: "#333",
        clickable: !1,
        pointerEvents: "none"
      }
    },
    exiva: !1,
    initialize: function (t) {
      for (var e in L.LayerGroup.prototype.initialize.call(this),
        L.Util.setOptions(this, t),
        this.crosshair = {
          rectangle: this.calculateExivaRectangle(0, this.options.style),
          longitude_line_north: L.polyline([], this.options.style),
          longitude_line_south: L.polyline([], this.options.style),
          latitude_line_east: L.polyline([], this.options.style),
          latitude_line_west: L.polyline([], this.options.style),
          exiva_rectangle_100: this.calculateExivaRectangle(100, this.options.style),
          exiva_rectangle_250: this.calculateExivaRectangle(250, this.options.style),
          exiva_line_northeast_1: L.polyline([], this.options.style),
          exiva_line_northeast_2: L.polyline([], this.options.style),
          exiva_line_southeast_1: L.polyline([], this.options.style),
          exiva_line_southeast_2: L.polyline([], this.options.style),
          exiva_line_southwest_1: L.polyline([], this.options.style),
          exiva_line_southwest_2: L.polyline([], this.options.style),
          exiva_line_northwest_1: L.polyline([], this.options.style),
          exiva_line_northwest_2: L.polyline([], this.options.style)
        },
        this.crosshair)
        this.addLayer(this.crosshair[e]);
      this._hideExiva()
    },
    calculateExivaBounds: function (t, e, i) {
      return L.latLngBounds(this._map.unproject([e - t, i - t], 0), this._map.unproject([e + t + 1, i + t + 1], 0))
    },
    calculateExivaRectangle: function (t, e) {
      return L.rectangle([[-t, -t], [t + 1, t + 1]], e)
    },
    onAdd: function (t) {
      this._map = t,
        this._moveCrosshairs({
          latlng: this._map.getCenter()
        }),
        this._map.on("click", this._moveCrosshairs.bind(this)),
        this._map.on("move", this._moveCrosshairs.bind(this)),
        this._map.on("zoomend", this._moveCrosshairs.bind(this)),
        this._map.on("mouseover", this._show.bind(this)),
        this.eachLayer(t.addLayer, t)
    },
    onRemove: function (t) {
      this._map.off("click", this._moveCrosshairs),
        this._map.off("zoomend", this._moveCrosshairs),
        this.eachLayer(this.removeLayer, this)
    },
    _show: function () {
      this.eachLayer((function (t) {
        this._map.addLayer(t)
      }
      ), this)
    },
    _hide: function () {
      this.eachLayer((function (t) {
        this._map.removeLayer(t)
      }
      ), this)
    },
    _exivaLayers: {
      show: ["exiva_rectangle_100", "exiva_rectangle_250", "exiva_line_northeast_1", "exiva_line_northeast_2", "exiva_line_southeast_1", "exiva_line_southeast_2", "exiva_line_southwest_1", "exiva_line_southwest_2", "exiva_line_northwest_1", "exiva_line_northwest_2"],
      hide: ["longitude_line_north", "longitude_line_south", "latitude_line_east", "latitude_line_west"]
    },
    _showExiva: function () {
      this.exiva = !0;
      for (const t of this._exivaLayers.show)
        this.addLayer(this.crosshair[t]);
      for (const t of this._exivaLayers.hide)
        this.removeLayer(this.crosshair[t])
    },
    _hideExiva: function () {
      this.exiva = !1;
      for (const t of this._exivaLayers.hide)
        this.addLayer(this.crosshair[t]);
      for (const t of this._exivaLayers.show)
        this.removeLayer(this.crosshair[t])
    },
    _toggleExiva: function () {
      this.exiva ? this._hideExiva() : this._showExiva()
    },
    _moveCrosshairs: function (t) {
      var e, i, n;
      if (t.latlng) {
        var o = this._map.project(t.latlng, 0)
          , s = Math.floor(o.x)
          , r = Math.floor(o.y);
        e = this.calculateExivaBounds(0, s, r),
          i = this.calculateExivaBounds(100, s, r),
          n = this.calculateExivaBounds(250, s, r)
      } else
        e = this.crosshair.rectangle.getBounds(),
          i = this.crosshair.exiva_rectangle_100.getBounds(),
          n = this.crosshair.exiva_rectangle_250.getBounds();
      var a = e.getCenter();
      this.crosshair.rectangle.setBounds(e),
        this.crosshair.exiva_rectangle_100.setBounds(i),
        this.crosshair.exiva_rectangle_250.setBounds(n);
      var h = this._map.project(a);
      this.crosshair.longitude_line_north.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x, this._map.getPixelBounds().min.y])]),
        this.crosshair.longitude_line_south.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x, this._map.getPixelBounds().max.y])]),
        this.crosshair.latitude_line_east.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([this._map.getPixelBounds().min.x, h.y])]),
        this.crosshair.latitude_line_west.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([this._map.getPixelBounds().max.x, h.y])]);
      var l = 102360
        , u = 247711.19999999998;
      this.crosshair.exiva_line_northeast_1.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x + l, h.y - u])]),
        this.crosshair.exiva_line_northeast_2.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x + u, h.y - l])]),
        this.crosshair.exiva_line_southeast_1.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x + u, h.y + l])]),
        this.crosshair.exiva_line_southeast_2.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x + l, h.y + u])]),
        this.crosshair.exiva_line_southwest_1.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x - l, h.y + u])]),
        this.crosshair.exiva_line_southwest_2.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x - u, h.y + l])]),
        this.crosshair.exiva_line_northwest_1.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x - u, h.y - l])]),
        this.crosshair.exiva_line_northwest_2.setLatLngs([this._map.unproject([h.x, h.y]), this._map.unproject([h.x - l, h.y - u])])
    }
  }),
  L.crosshairs = function (t) {
    return new L.Crosshairs(t)
  }
  ,
  L.LevelButtons = L.Control.extend({
    options: {
      position: "topleft",
      autoZIndex: !0
    },
    onAdd: function (t) {
      this._map = t;
      const e = L.DomUtil.create("div", "leaflet-control-level-buttons-panel leaflet-bar")
        , i = L.DomUtil.create("a", "leaflet-control-level-buttons-a", e);
      i.textContent = "▲",
        i.href = "#",
        L.DomEvent.addListener(i, "click", this._onUpButton, this),
        L.DomEvent.disableClickPropagation(i),
        e.appendChild(i);
      const n = L.DomUtil.create("span", "leaflet-control-level-buttons-span", e);
      n.id = "floor_button",
        e.appendChild(n);
      const o = L.DomUtil.create("a", "leaflet-control-level-buttons-a", e);
      return o.textContent = "▼",
        o.href = "#",
        L.DomEvent.addListener(o, "click", this._onDownButton, this),
        L.DomEvent.disableClickPropagation(o),
        e.appendChild(o),
        L.DomEvent.addListener(document.documentElement, "keydown", (function (t) {
        }
        ), this),
        e
    },
    onRemove: function () { },
    _onUpButton: function (t) {
      const e = this._tibia_map_obj.floor - 1;
      e >= 0 && (this._bringToFront(e),
        this._setFloor(e),
        this._updateUrl(e)),
        t.preventDefault()
    },
    _onDownButton: function (t) {
      const e = this._tibia_map_obj.floor + 1;
      e <= 15 && (this._bringToFront(e),
        this._setFloor(e),
        this._updateUrl(e)),
        t.preventDefault()
    },
    setTibiaMap: function (t) {
      this._tibia_map_obj = t,
        this._setFloor(this._tibia_map_obj.floor)
    },
    _bringToFront: function (t) {
      this.options.layers_widget._layerControlInputs[t].click()
    },
    _setFloor: function (t) {
    },
    _updateUrl: function (t) {
      const e = this._tibia_map_obj.getUrlPosition();
      e.floor = t,
        this._tibia_map_obj.setUrlPosition(e, !0)
    }
  }),
  L.levelButtons = function (t) {
    return new L.LevelButtons(t)
  }
  ,
  L.ExivaButton = L.Control.extend({
    options: {
      position: "topleft",
      autoZIndex: !0,
      crosshairs: null
    },
    onAdd: function (t) {
      this._map = t;
      const e = L.DomUtil.create("div", "leaflet-control-exiva-button-panel leaflet-bar leaflet-control")
        , i = L.DomUtil.create("a", "leaflet-control-exiva-button leaflet-bar-part", e);
      return i.textContent = "E",
        i.title = "Toggle exiva overlay",
        i.href = "#",
        L.DomEvent.addListener(i, "click", this._onClick, this),
        L.DomEvent.disableClickPropagation(i),
        e
    },
    _onClick: function (t) {
      L.DomEvent.stopPropagation(t),
        L.DomEvent.preventDefault(t),
        this.options.crosshairs._toggleExiva()
    }
  }),
  L.exivaButton = function (t) {
    return new L.ExivaButton(t)
  }
  ,
  L.Control.Fullscreen = L.Control.extend({
    options: {
      position: "topleft",
      title: {
        false: "View Fullscreen",
        true: "Exit Fullscreen"
      }
    },
    onAdd: function (t) {
      var e = L.DomUtil.create("div", "leaflet-control-fullscreen leaflet-bar leaflet-control");
      return this.link = L.DomUtil.create("a", "leaflet-control-fullscreen-button leaflet-bar-part", e),
        this.link.href = "#",
        this._map = t,
        this._map.on("fullscreenchange", this._toggleTitle, this),
        this._toggleTitle(),
        L.DomEvent.on(this.link, "click", this._click, this),
        e
    },
    _click: function (t) {
      L.DomEvent.stopPropagation(t),
        L.DomEvent.preventDefault(t),
        this._map.toggleFullscreen(this.options)
    },
    _toggleTitle: function () {
      this.link.title = this.options.title[this._map.isFullscreen()]
    }
  }),
  L.Map.include({
    isFullscreen: function () {
      return this._isFullscreen || !1
    },
    toggleFullscreen: function (t) {
      var e = this.getContainer();
      this.isFullscreen() ? t && t.pseudoFullscreen ? this._disablePseudoFullscreen(e) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this._disablePseudoFullscreen(e) : t && t.pseudoFullscreen ? this._enablePseudoFullscreen(e) : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen ? e.msRequestFullscreen() : this._enablePseudoFullscreen(e)
    },
    _enablePseudoFullscreen: function (t) {
      L.DomUtil.addClass(t, "leaflet-pseudo-fullscreen"),
        this._setFullscreen(!0),
        this.fire("fullscreenchange")
    },
    _disablePseudoFullscreen: function (t) {
      L.DomUtil.removeClass(t, "leaflet-pseudo-fullscreen"),
        this._setFullscreen(!1),
        this.fire("fullscreenchange")
    },
    _setFullscreen: function (t) {
      this._isFullscreen = t;
      var e = this.getContainer();
      t ? L.DomUtil.addClass(e, "leaflet-fullscreen-on") : L.DomUtil.removeClass(e, "leaflet-fullscreen-on"),
        this.invalidateSize()
    },
    _onFullscreenChange: function (t) {
      var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      e !== this.getContainer() || this._isFullscreen ? e !== this.getContainer() && this._isFullscreen && (this._setFullscreen(!1),
        this.fire("fullscreenchange")) : (this._setFullscreen(!0),
          this.fire("fullscreenchange"))
    }
  }),
  L.Map.mergeOptions({
    fullscreenControl: !1
  }),
  L.Map.addInitHook((function () {
    var t;
    if (this.options.fullscreenControl && (this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl),
      this.addControl(this.fullscreenControl)),
      "onfullscreenchange" in document ? t = "fullscreenchange" : "onmozfullscreenchange" in document ? t = "mozfullscreenchange" : "onwebkitfullscreenchange" in document ? t = "webkitfullscreenchange" : "onmsfullscreenchange" in document && (t = "MSFullscreenChange"),
      t) {
      var e = L.bind(this._onFullscreenChange, this);
      this.whenReady((function () {
        L.DomEvent.on(document, t, e)
      }
      )),
        this.on("unload", (function () {
          L.DomEvent.off(document, t, e)
        }
        ))
    }
  }
  )),
  L.control.fullscreen = function (t) {
    return new L.Control.Fullscreen(t)
  }
  ,
  function () {
    function t() {
      this.map = null,
        this.crosshairs = null,
        this.floor = 7,
        this.mapFloors = [],
        this.mapDataStore = [],
        this.waypoints = []
    }
    const e = "https://tibiamaps.github.io/tibia-map-data/mapper/";
    let i = null;
    !function () {
      const t = new XMLHttpRequest;
      t.open("GET", e + "tiles.json", !0),
        t.responseType = "json",
        t.onload = function () {
          200 === t.status && (i = new Set(t.response))
        }
        ,
        t.send()
    }();
    const n = -1 !== location.pathname.indexOf("/embed")
      , o = function (t, e) {
        const i = "#" + t.x + "," + t.y + "," + t.floor + ":" + t.zoom;
        e && location.hash != i && window.history.pushState(null, null, i)
      };
    t.prototype.setUrlPosition = o;
    const s = function () {
      const t = {
        x: 32368,
        y: 32198,
        floor: 7,
        zoom: 0
      };
      let e, i = window.location.hash.slice(1);
      if (i.includes("%20"))
        return i = decodeURIComponent(i),
          e = i.replace(/[^0-9,]/g, "").split(","),
          t.x = parseInt(e[0], 10),
          t.y = parseInt(e[1], 10),
          t.floor = parseInt(e[2], 10),
          t;
      if (e = i.split(":"),
        e[0]) {
        const i = e[0].split(",");
        3 == i.length && (t.x = parseInt(i[0], 10),
          t.y = parseInt(i[1], 10),
          t.floor = parseInt(i[2], 10))
      }
      return e[1] && (t.zoom = parseInt(e[1], 10)),
        t
    };
    t.prototype.getUrlPosition = s;
    t.prototype._createMapFloorLayer = function (t) {
      const n = this.mapFloors[t] = new L.GridLayer({
        floor: t
      });
      return n.getTileSize = function () {
        const t = L.GridLayer.prototype.getTileSize.call(this)
          , e = this._tileZoom;
        return e > 0 ? t.divideBy(this._map.getZoomScale(0, e)).round() : t
      }
        ,
        n._setZoomTransform = function (t, e, i) {
          const n = s();
          n.zoom = i,
            o(n, !0);
          const r = this._map.getZoomScale(i, t.zoom)
            , a = t.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(e, i)).round();
          L.DomUtil.setTransform(t.el, a, r)
        }
        ,
        n.createTile = function (t, n) {
          const o = document.createElement("canvas")
            , s = o.getContext("2d");
          o.width = o.height = 256;
          const r = this._map.project({
            lng: t.x,
            lat: t.y
          }, 0);
          Object.keys(r).map((function (t) {
            r[t] = Math.abs(r[t])
          }
          ));
          const a = r.x + "_" + r.y + "_" + this.options.floor;
          if (i && !i.has(a))
            return s.fillStyle = "#000",
              s.fillRect(0, 0, 256, 256),
              o;
          s.imageSmoothingEnabled = !1;
          const h = new Image;
          return h.onload = function () {
            s.drawImage(h, 0, 0, 256, 256),
              n(null, o)
          }
            ,
            h.src = e + "Minimap_Color_" + a + ".png",
            o
        }
        ,
        n
    }
      ,
      t.prototype._showHoverTile = function () {
        const t = this.map
          , e = this;
        t.on("mouseout", (function (t) {
          e.hoverTile.setBounds([[0, 0], [0, 0]])
        }
        )),
          t.on("mousemove", (function (i) {
            const n = t.project(i.latlng, 0)
              , o = Math.floor(n.x)
              , s = Math.floor(n.y)
              , r = [t.unproject([o, s], 0), t.unproject([o + 1, s + 1], 0)];
            e.hoverTile ? e.hoverTile.setBounds(r) : e.hoverTile = L.rectangle(r, {
              color: "#009eff",
              weight: 1,
              clickable: !1,
              pointerEvents: "none"
            }).addTo(t)
          }
          ))
      }
      ,
      t.prototype.init = function () {
        const t = this;
        L.CRS.CustomZoom = L.extend({}, L.CRS.Simple, {
          scale: function (t) {
            switch (t) {
              case 0:
              default:
                return 256;
              case 1:
                return 512;
              case 2:
                return 1792;
              case 3:
                return 5120;
              case 4:
                return 10240
            }
          },
          latLngToPoint: function (t, e) {
            const i = this.projection.project(t)
              , n = this.scale(e);
            return this.transformation._transform(i, n)
          },
          pointToLatLng: function (t, e) {
            const i = this.scale(e)
              , n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
          }
        });
        const e = 124
          , i = 133
          , r = 121
          , a = 128
          , h = window.innerWidth / 256 / 2
          , l = window.innerHeight / 256 / 2
          , u = r - l
          , c = e - h
          , _ = a + 1 + l
          , d = i + 1 + h
          , p = L.latLngBounds(L.latLng(-u, c), L.latLng(-_, d))
          , m = t.map = L.map("map", {
            attributionControl: !1,
            crs: L.CRS.CustomZoom,
            fadeAnimation: !1,
            keyboardPanOffset: 400,
            maxBounds: p,
            maxNativeZoom: 0,
            maxZoom: 4,
            minZoom: 0,
            scrollWheelZoom: !n,
            unloadInvisibleTiles: !1,
            updateWhenIdle: !0,
            zoomAnimationThreshold: 4,
            touchZoom: !1
          });
        L.control.fullscreen({
          title: {
            false: n ? "Explore this area in the map viewer" : "View fullscreen",
            true: "Exit fullscreen"
          },
          pseudoFullscreen: !0
        }).addTo(m);
        const f = {
          "Floor +7": t._createMapFloorLayer(0),
          "Floor +6": t._createMapFloorLayer(1),
          "Floor +5": t._createMapFloorLayer(2),
          "Floor +4": t._createMapFloorLayer(3),
          "Floor +3": t._createMapFloorLayer(4),
          "Floor +2": t._createMapFloorLayer(5),
          "Floor +1": t._createMapFloorLayer(6),
          "Ground floor": t._createMapFloorLayer(7),
          "Floor -1": t._createMapFloorLayer(8),
          "Floor -2": t._createMapFloorLayer(9),
          "Floor -3": t._createMapFloorLayer(10),
          "Floor -4": t._createMapFloorLayer(11),
          "Floor -5": t._createMapFloorLayer(12),
          "Floor -6": t._createMapFloorLayer(13),
          "Floor -7": t._createMapFloorLayer(14),
          "Floor -8": t._createMapFloorLayer(15)
        }
          , g = L.control.layers(f, {}).addTo(m)
          , v = s();
        t.floor = v.floor,
          m.setView(m.unproject([v.x, v.y], 0), v.zoom),
          t.mapFloors[v.floor].addTo(m),
          window.addEventListener("popstate", (function (e) {
            const i = s();
            i.floor !== t.floor && (t.floor = i.floor,
              t.mapFloors[t.floor].addTo(m)),
              i.zoom !== m.getZoom() && m.setZoom(i.zoom),
              m.panTo(m.unproject([i.x, i.y], 0))
          }
          )),
          m.on("baselayerchange", (function (e) {
            t.floor = e.layer.options.floor
          }
          )),
          m.on("click", (function (e) {
            const i = L.CRS.CustomZoom.latLngToPoint(e.latlng, 0)
              , n = m.getZoom()
              , s = Math.floor(Math.abs(i.x))
              , r = Math.floor(Math.abs(i.y))
              , a = t.floor;
            if (o({
              x: s,
              y: r,
              floor: a,
              zoom: n
            }, !0),
              window.console) {
              const t = 256 * Math.floor(s / 256) + "_" + 256 * Math.floor(r / 256) + "_" + a;
              console.log(t)
            }
          }
          )),
          this.crosshairs = L.crosshairs().addTo(m),
          L.control.coordinates({
            position: "bottomleft",
            enableUserInput: !1,
            labelFormatterLat: function (e) {
              return "<b>Y</b>: " + Math.floor(e) + " <b>Z</b>: " + t.floor
            },
            labelFormatterLng: function (t) {
              return "<b>X</b>: " + Math.floor(t)
            }
          }).addTo(m),
          L.LevelButtons.btns = L.levelButtons({
            layers_widget: g
          }).addTo(m),
          L.ExivaButton.btns = L.exivaButton({
            crosshairs: this.crosshairs
          }).addTo(m),
          t._showHoverTile()
      }
      ;
    const r = new t;
    r.init(),
      L.LevelButtons.btns.setTibiaMap(r);
    const a = function (t) {
      return t.replace("/embed", "")
    }
      , h = document.querySelector(".leaflet-control-fullscreen-button");
    n ? (h.href = a(location.href),
      h.addEventListener("click", (function (t) {
        window.top.location = a(location.href),
          t.stopPropagation()
      }
      ))) : (h.href = "javascript:null",
        document.documentElement.addEventListener("keydown", (function (t) { }
        )))
  }();
