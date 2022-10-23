function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}

AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
!(function () {
  function E(E) {
    for (var _ = [].slice.call(E), e = [], n = [], R = 0; R < _.length; R++)
      n.push(t(S(_[R]))), e.push(N(_[R]));
    return { complexities: e, stringifiedArguments: n };
  }
  function _(E) {
    try {
      return null === E ? O : void 0 === E ? o : e(E) ? T : {}.toString.call(E);
    } catch (_) {
      return i;
    }
  }
  function e(E) {
    return !!(
      E &&
      "object" == typeof E &&
      "nodeType" in E &&
      1 === E.nodeType &&
      E.outerHTML
    );
  }
  function N(E) {
    var e;
    switch (_(E)) {
      case O:
      case o:
      case D:
      case a:
      case I:
      case s:
        return u;
      case i:
      case P:
      case L:
      case A:
        return l;
      case T:
        return H;
      case C:
      case r:
      case c:
        for (var N = 0; N < E.length; N++) {
          var t,
            n = _(E[N]);
          if (n === P || n === i || n === r) return l;
        }
        return u;
      default:
        return l;
    }
  }
  function t(E) {
    return E.length > R ? E.slice(0, R) + "\u2026" : E;
  }
  function n(E) {
    let _ = typeof E;
    return "function" === _ || "symbol" === _
      ? E.toString()
      : "bigint" === _ && `${E.toString()}n`;
  }
  function S(E) {
    try {
      var e = _(E),
        N = {};
      switch (e) {
        case O:
          return "null";
        case o:
          return "undefined";
        case D:
          return "" + E;
        case a:
          return `${E.toString()}n`;
        case I:
          return E ? "true" : "false";
        case T:
          return E.outerHTML;
        case L:
        case P:
          return E.toString();
        case s:
          return '"' + E.replace(/"/g, "'") + '"';
        case c:
          return `// ${e} (${
            (E = Array.prototype.slice.call(E, 0)).length
          })\n[${E.map((E) =>
            E.tagName
              ? `"<${E.tagName.toLowerCase()}/>"`
              : `"${E.nodeName.toLowerCase()}"`
          )}]`;
        case r:
          return `// ${e} (${E.length})\n[${E.map(S)}]`;
        case C:
          return `// ${e} (${(E = Array.from(E)).length})\n{${E.map(S)}}`;
        case i:
          return (
            Object.keys(E).map((_) => {
              let e, t;
              "function" == typeof Object.getOwnPropertyDescriptor(E, _).get
                ? (e = "\u2026")
                : n((e = E[_])) && (e = n(e)),
                (N[_] = e);
            }),
            `// ${e} \n${JSON.stringify(N, null, 2)}`
          );
        default:
          return n(E) ? n(E) : `// ${e} \n${JSON.stringify(E, null, 2)}`;
      }
    } catch (t) {
      return "/* Log Skipped: Sorry, this log cannot be shown. You might need to use the browser console instead. */";
    }
  }
  const R = 2e3,
    O = "TYPE_NULL",
    o = "TYPE_UNDEFINED",
    T = "TYPE_ELEMENT_NODE",
    r = "[object Array]",
    c = "[object NodeList]",
    I = "[object Boolean]",
    P = "[object Function]",
    A = "[object global]",
    D = "[object Number]",
    a = "[object BigInt]",
    i = "[object Object]",
    s = "[object String]",
    L = "[object Symbol]",
    C = "[object Set]";
  window.__cpConsoleSafeStringify = E;
  const u = 1,
    l = 2,
    H = 3;
})(),
  (window.HUB_EVENTS = {
    ASSET_ADDED: "ASSET_ADDED",
    ASSET_DELETED: "ASSET_DELETED",
    ASSET_DESELECTED: "ASSET_DESELECTED",
    ASSET_SELECTED: "ASSET_SELECTED",
    ASSET_UPDATED: "ASSET_UPDATED",
    CONSOLE_CHANGE: "CONSOLE_CHANGE",
    CONSOLE_CLOSED: "CONSOLE_CLOSED",
    CONSOLE_EVENT: "CONSOLE_EVENT",
    CONSOLE_OPENED: "CONSOLE_OPENED",
    CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
    CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
    EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
    EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
    EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
    EMBED_RESHOWN: "EMBED_RESHOWN",
    FORMAT_FINISH: "FORMAT_FINISH",
    FORMAT_ERROR: "FORMAT_ERROR",
    FORMAT_START: "FORMAT_START",
    IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
    IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
    KEY_PRESS: "KEY_PRESS",
    LINTER_FINISH: "LINTER_FINISH",
    LINTER_START: "LINTER_START",
    PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
    PEN_CHANGE: "PEN_CHANGE",
    PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
    PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
    PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
    PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
    PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
    PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
    PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
    PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
    PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
    PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
    PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
    PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
    PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
    PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
    PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
    PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
    PEN_ERRORS: "PEN_ERRORS",
    PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
    PEN_LOGS: "PEN_LOGS",
    PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
    PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
    PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
    PEN_PREVIEW_START: "PEN_PREVIEW_START",
    PEN_SAVED: "PEN_SAVED",
    POPUP_CLOSE: "POPUP_CLOSE",
    POPUP_OPEN: "POPUP_OPEN",
    POST_CHANGE: "POST_CHANGE",
    POST_SAVED: "POST_SAVED",
    PROCESSING_FINISH: "PROCESSING_FINISH",
    PROCESSING_START: "PROCESSED_STARTED",
  }),
  (function () {
    function E() {
      if (window.console)
        for (let E = 0; E < N.length; E++)
          !(function e() {
            const e = N[E];
            window.console[e] &&
              (window.console[e] = function () {
                this.apply(console, arguments), _(e, arguments);
              }.bind(console[e]));
          })();
    }
    function _(E, _) {
      const e = window.__cpConsoleSafeStringify(_),
        { complexities: N, stringifiedArguments: t } = e,
        n = {
          topic: HUB_EVENTS.CONSOLE_EVENT,
          data: {
            function: E,
            arguments: t,
            complexity: Math.max.apply(null, N),
          },
        };
      window.parent.postMessage(n, "*");
    }
    function e(E) {
      const { topic: _, data: e } = "object" == typeof E.data ? E.data : {};
      if (_ === HUB_EVENTS.CONSOLE_RUN_COMMAND)
        try {
          const E = window.eval(e.command);
          console.log(E);
        } catch (N) {
          return void console.error(N.message);
        }
    }
    const N = [
      "clear",
      "count",
      "debug",
      "error",
      "info",
      "log",
      "table",
      "time",
      "timeEnd",
      "warn",
    ];
    E(), window.addEventListener("message", e, !1);
  })();
(window.HUB_EVENTS = {
  ASSET_ADDED: "ASSET_ADDED",
  ASSET_DELETED: "ASSET_DELETED",
  ASSET_DESELECTED: "ASSET_DESELECTED",
  ASSET_SELECTED: "ASSET_SELECTED",
  ASSET_UPDATED: "ASSET_UPDATED",
  CONSOLE_CHANGE: "CONSOLE_CHANGE",
  CONSOLE_CLOSED: "CONSOLE_CLOSED",
  CONSOLE_EVENT: "CONSOLE_EVENT",
  CONSOLE_OPENED: "CONSOLE_OPENED",
  CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
  CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
  EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
  EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
  EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
  EMBED_RESHOWN: "EMBED_RESHOWN",
  FORMAT_FINISH: "FORMAT_FINISH",
  FORMAT_ERROR: "FORMAT_ERROR",
  FORMAT_START: "FORMAT_START",
  IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
  IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
  KEY_PRESS: "KEY_PRESS",
  LINTER_FINISH: "LINTER_FINISH",
  LINTER_START: "LINTER_START",
  PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
  PEN_CHANGE: "PEN_CHANGE",
  PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
  PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
  PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
  PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
  PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
  PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
  PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
  PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
  PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
  PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
  PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
  PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
  PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
  PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
  PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
  PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
  PEN_ERRORS: "PEN_ERRORS",
  PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
  PEN_LOGS: "PEN_LOGS",
  PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
  PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
  PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
  PEN_PREVIEW_START: "PEN_PREVIEW_START",
  PEN_SAVED: "PEN_SAVED",
  POPUP_CLOSE: "POPUP_CLOSE",
  POPUP_OPEN: "POPUP_OPEN",
  POST_CHANGE: "POST_CHANGE",
  POST_SAVED: "POST_SAVED",
  PROCESSING_FINISH: "PROCESSING_FINISH",
  PROCESSING_START: "PROCESSED_STARTED",
}),
  (function () {
    const E = 30,
      _ = [
        "css_pre_processor",
        "css_prefix",
        "css_starter",
        "description",
        "head",
        "html_classes",
        "html_pre_processor",
        "js_pre_processor",
        "js_library",
        "resources",
        "title",
      ],
      N = { DEPENDENCIES: "DEPENDENCIES", IMPORTS: "IMPORTS" },
      S = [
        "css_pre_processor",
        "css_prefix",
        "css_starter",
        "css",
        "description",
        "editor_settings",
        "head",
        "html_classes",
        "html_pre_processor",
        "html",
        "id",
        "js_pre_processor",
        "js_library",
        "js",
        "newTags",
        "parent_id",
        "private",
        "resources",
        "slug_hash_private",
        "slug_hash",
        "tags",
        "team_id",
        "template",
        "title",
        "user_id",
      ],
      R = [
        "css_pre_processor",
        "css_prefix",
        "css_starter",
        "css",
        "head",
        "html_classes",
        "html_pre_processor",
        "html",
        "js_pre_processor",
        "js_library",
        "js",
        "resources",
      ],
      T = ["html", "css", "js"],
      I = "INLINE_PEN_STYLESHEET_ID",
      O = 50;
    window.PEN_CONSTANTS = {
      CANONICAL_IMPORTS: N,
      COLLAB_SYNC_ATTRIBUTES: _,
      DATA_ATTRIBUTES: S,
      INLINE_PEN_STYLESHEET_ID: I,
      MAX_DEPENDENCIES: E,
      MAX_PACKAGE_VERSIONS: O,
      PREVIEW_ATTRIBUTES: R,
      TYPES: T,
    };
  })(),
  (function () {
    function E(E) {
      const S = _(E),
        { action: R, css: T } = S;
      HUB_EVENTS.IFRAME_PREVIEW_RELOAD_CSS === R && N(T);
    }
    function _(E) {
      return "object" == typeof E.data ? E.data : {};
    }
    function N(E) {
      const _ = R();
      S(E),
        _ && _.parentNode.removeChild(_),
        window.PrefixFree && StyleFix.process();
    }
    function S(E) {
      const _ = document.createElement("style");
      (_.type = "text/css"),
        (_.className = PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID),
        _.styleSheet
          ? (_.styleSheet.cssText = E)
          : _.appendChild(document.createTextNode(E)),
        T.appendChild(_);
    }
    function R() {
      const E = Array.from(document.getElementsByTagName("style"));
      return E.find(
        (E) => PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID === E.className
      );
    }
    const T = document.head || document.getElementsByTagName("head")[0];
    window.addEventListener("message", E, !1);
  })();
