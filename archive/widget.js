/* Christ's Church of Starke: Audio Archive. Built from widget.html; edit that file, not this one. */
(function () {
  "use strict";
  var me = document.currentScript || document.querySelector('script[src*="ccofstarke-messages/archive/widget.js"]');
  var base = me && me.src ? me.src.replace(/[^\/]*(\?.*)?$/, "") : "https://radiallogicllc.github.io/ccofstarke-messages/archive/";
  if (!window.CCOS_ARCHIVE_DATA) window.CCOS_ARCHIVE_DATA = base + "archive.json";
  if (document.getElementById("ccos-archive")) return;
  var mount = document.getElementById("ccos-archive-mount");
  if (!mount) { mount = document.createElement("div"); (me && me.parentNode ? me.parentNode : document.body).insertBefore(mount, me || null); }
  if (!document.getElementById("ccos-archive-css")) {
    var st = document.createElement("style"); st.id = "ccos-archive-css"; st.textContent = "#ccos-archive{--ink:#040404;--muted:#5c5c5c;--rule:#e3e3e3;--gold:#cd9002;--gold-dk:#a67400;--field:#ebebeb;--wash:#faf7f0;\n  font-family:Domine,Georgia,\"Times New Roman\",serif;color:var(--ink);max-width:960px;margin:0 auto;padding:8px 16px 48px;box-sizing:border-box;text-align:left;line-height:1.5;font-size:16px}\n#ccos-archive *,#ccos-archive *::before,#ccos-archive *::after{box-sizing:border-box}\n#ccos-archive [hidden]{display:none!important}\n#ccos-archive .ca-head{text-align:center;margin:0 auto 28px;max-width:640px}\n#ccos-archive .ca-h{font:700 30px/1.5 Domine,Georgia,serif;margin:0 0 6px;color:var(--ink)}\n#ccos-archive .ca-intro{margin:0;font-size:16px;color:var(--ink)}\n#ccos-archive .ca-field{font:400 16px/1.3 Domine,Georgia,serif;color:var(--ink);background:var(--field);border:2px solid #fff;border-radius:0;outline:none;width:100%;-webkit-appearance:none;appearance:none}\n#ccos-archive .ca-field:focus{border-color:var(--gold)}\n#ccos-archive input.ca-field,#ccos-archive select.ca-field{height:44px;padding:0 12px}\n#ccos-archive select.ca-field{padding-right:32px;background-image:linear-gradient(45deg,transparent 50%,var(--ink) 50%),linear-gradient(135deg,var(--ink) 50%,transparent 50%);background-position:calc(100% - 17px) 19px,calc(100% - 12px) 19px;background-size:5px 5px;background-repeat:no-repeat;cursor:pointer;text-overflow:ellipsis}\n#ccos-archive textarea.ca-field{padding:10px 12px;resize:vertical;min-height:80px}\n#ccos-archive .ca-search{height:50px;font-size:17px;padding:0 14px}\n#ccos-archive .ca-filters{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-top:14px}\n#ccos-archive .ca-lab{display:flex;flex-direction:column;gap:4px;font-size:14px;color:var(--ink)}\n#ccos-archive .ca-bar{display:flex;align-items:flex-end;gap:16px;margin:26px 0 0;padding-bottom:10px;border-bottom:1px solid var(--ink)}\n#ccos-archive .ca-count{margin:0;font-size:15px;color:var(--muted)}\n#ccos-archive .ca-sort{margin-left:auto;display:flex;align-items:center;gap:8px;font-size:14px;white-space:nowrap}\n#ccos-archive .ca-sort .ca-field{width:auto;height:36px;font-size:15px}\n#ccos-archive .ca-link{background:none;border:0;padding:0;font:inherit;font-size:15px;color:var(--gold);text-decoration:underline;cursor:pointer}\n#ccos-archive .ca-link:hover{color:var(--gold-dk)}\n#ccos-archive .ca-series-note{margin:12px 0 0;font-size:15px}\n#ccos-archive .ca-list{list-style:none;margin:0;padding:0}\n#ccos-archive .ca-yr{font:700 20px/1 Domine,Georgia,serif;padding:26px 0 10px;border-bottom:1px solid var(--rule);color:var(--ink)}\n#ccos-archive .ca-row{display:grid;grid-template-columns:118px minmax(0,1fr) auto;gap:4px 18px;align-items:center;padding:14px 10px;border-bottom:1px solid var(--rule)}\n#ccos-archive .ca-row:hover{background:var(--wash)}\n#ccos-archive .ca-date{font-size:15px;line-height:1.35}\n#ccos-archive .ca-date small{display:block;font-size:13px;color:var(--muted)}\n#ccos-archive .ca-title{font-size:17px;line-height:1.4;margin:0;font-weight:400;color:var(--ink);overflow-wrap:anywhere}\n#ccos-archive .ca-title.ca-none{color:var(--muted);font-style:italic}\n#ccos-archive .ca-meta{font-size:14px;color:var(--muted);margin-top:2px}\n#ccos-archive .ca-meta .ca-sep{margin:0 6px;color:#b9b9b9}\n#ccos-archive .ca-meta button{background:none;border:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-decoration:underline;text-decoration-color:#c9c9c9;text-underline-offset:3px}\n#ccos-archive .ca-meta button:hover{color:var(--gold-dk);text-decoration-color:currentColor}\n#ccos-archive .ca-btn{font:400 15px/1 Domine,Georgia,serif;border-radius:5px;padding:10px 16px;min-width:104px;cursor:pointer;text-align:center;border:2px solid var(--gold);transition:background .15s,color .15s}\n#ccos-archive .ca-solid{background:var(--gold);color:#fff}\n#ccos-archive .ca-solid:hover{background:var(--gold-dk);border-color:var(--gold-dk)}\n#ccos-archive .ca-outline{background:#fff;color:var(--gold-dk)}\n#ccos-archive .ca-outline:hover{background:var(--gold);color:#fff}\n#ccos-archive .ca-outline.ca-added{border-color:var(--rule);color:var(--muted);background:#fff;cursor:default}\n#ccos-archive .ca-player{grid-column:2/4;display:flex;align-items:center;gap:16px;padding-top:8px}\n#ccos-archive .ca-player audio{flex:1;min-width:0;height:40px}\n#ccos-archive .ca-player a{font-size:14px;color:var(--gold-dk);white-space:nowrap}\n#ccos-archive .ca-err{font-size:14px;color:var(--muted)}\n#ccos-archive .ca-more-wrap{text-align:center;margin-top:24px}\n#ccos-archive .ca-more{min-width:240px;padding:13px 22px}\n#ccos-archive .ca-empty{padding:40px 10px;text-align:center;color:var(--muted)}\n#ccos-archive .ca-request{margin-top:56px;padding-top:28px;border-top:1px solid var(--ink);scroll-margin-top:90px}\n#ccos-archive .ca-h3{font:400 24px/1.4 Domine,Georgia,serif;margin:0 0 6px}\n#ccos-archive .ca-req-intro{margin:0 0 18px;max-width:680px}\n#ccos-archive .ca-form{display:flex;flex-direction:column;gap:14px;max-width:720px}\n#ccos-archive .ca-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}\n#ccos-archive .ca-req{color:#c0392b}\n#ccos-archive .ca-submit{width:100%;padding:13px;font-size:16px}\n#ccos-archive .ca-form-msg{margin:0;font-size:15px;min-height:1em}\n#ccos-archive .ca-flash{animation:ca-flash 1.6s ease-out}\n@keyframes ca-flash{0%{background:#f6e7c2}100%{background:var(--field)}}\n#ccos-archive .ca-tray{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:999;background:#040404;color:#fff;font-size:15px;padding:12px 20px;border-radius:5px;display:flex;gap:18px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:calc(100% - 32px)}\n#ccos-archive .ca-tray-go{color:var(--gold);white-space:nowrap}\n@media (max-width:860px){\n  #ccos-archive .ca-filters{grid-template-columns:repeat(2,minmax(0,1fr))}\n  #ccos-archive .ca-filters .ca-lab:last-child{grid-column:1/-1}\n}\n@media (max-width:600px){\n  #ccos-archive .ca-h{font-size:26px}\n  #ccos-archive .ca-bar{flex-wrap:wrap;gap:8px 16px}\n  #ccos-archive .ca-sort{margin-left:0;width:100%}\n  #ccos-archive .ca-sort .ca-field{flex:1}\n  #ccos-archive .ca-row{grid-template-columns:minmax(0,1fr) auto;padding:14px 4px}\n  #ccos-archive .ca-date{grid-column:1/-1;display:flex;gap:8px;align-items:baseline;font-size:14px}\n  #ccos-archive .ca-date small{display:inline}\n  #ccos-archive .ca-btn{min-width:88px;padding:9px 12px}\n  #ccos-archive .ca-player{grid-column:1/-1;flex-wrap:wrap;gap:8px}\n  #ccos-archive .ca-player audio{flex-basis:100%}\n  #ccos-archive .ca-grid3{grid-template-columns:1fr}\n}";
    document.head.appendChild(st);
  }
  mount.innerHTML = "<section id=\"ccos-archive\" aria-label=\"Audio Archive\">\n  <header class=\"ca-head\">\n    <h2 class=\"ca-h\">Audio Archive</h2>\n    <p class=\"ca-intro\">Messages preached at Christ's Church of Starke, 1983 to today. Messages from 2011 on can be played right here. For earlier messages, choose <strong>Request</strong> and we'll email you a link to listen to that message.</p>\n  </header>\n\n  <div class=\"ca-controls\">\n    <input id=\"ca-q\" class=\"ca-field ca-search\" type=\"search\" autocomplete=\"off\" spellcheck=\"false\"\n           placeholder=\"Search by title, scripture or preacher\" aria-label=\"Search messages\">\n    <div class=\"ca-filters\">\n      <label class=\"ca-lab\">Preacher<select id=\"ca-preacher\" class=\"ca-field\"></select></label>\n      <label class=\"ca-lab\">Book of the Bible<select id=\"ca-book\" class=\"ca-field\"></select></label>\n      <label class=\"ca-lab\">Topic<select id=\"ca-topic\" class=\"ca-field\"></select></label>\n      <label class=\"ca-lab\">Year<select id=\"ca-year\" class=\"ca-field\"></select></label>\n      <label class=\"ca-lab\">Show<select id=\"ca-avail\" class=\"ca-field\">\n        <option value=\"\">All messages</option>\n        <option value=\"listen\">Listen online</option>\n        <option value=\"request\">By request</option>\n      </select></label>\n    </div>\n  </div>\n\n  <div class=\"ca-bar\">\n    <p id=\"ca-count\" class=\"ca-count\" aria-live=\"polite\">Loading messages\u2026</p>\n    <button id=\"ca-clear\" class=\"ca-link\" type=\"button\" hidden>Clear search and filters</button>\n    <label class=\"ca-sort\">Sort<select id=\"ca-sort\" class=\"ca-field\">\n      <option value=\"new\">Newest first</option>\n      <option value=\"old\">Oldest first</option>\n      <option value=\"title\">Title, A to Z</option>\n      <option value=\"bible\">Bible order</option>\n    </select></label>\n  </div>\n  <p id=\"ca-series\" class=\"ca-series-note\" hidden></p>\n\n  <ol id=\"ca-list\" class=\"ca-list\"></ol>\n  <div class=\"ca-more-wrap\"><button id=\"ca-more\" class=\"ca-btn ca-solid ca-more\" type=\"button\" hidden>Show more messages</button></div>\n\n  <section id=\"ca-request\" class=\"ca-request\" aria-labelledby=\"ca-req-h\">\n    <h3 id=\"ca-req-h\" class=\"ca-h3\">Request a Message</h3>\n    <p class=\"ca-req-intro\">Choose <strong>Request</strong> next to any message from before 2011 and it will be added here. Send the form and we'll email you a link to each message you asked for as soon as it's ready. Each link stays active for two weeks.</p>\n    <form id=\"ca-form\" class=\"ca-form\" novalidate>\n      <div class=\"ca-grid3\">\n        <label class=\"ca-lab\"><span>Name <span class=\"ca-req\">*</span></span><input class=\"ca-field\" name=\"name\" required autocomplete=\"name\"></label>\n        <label class=\"ca-lab\">Phone<input class=\"ca-field\" name=\"phone\" type=\"tel\" autocomplete=\"tel\"></label>\n        <label class=\"ca-lab\"><span>Email <span class=\"ca-req\">*</span></span><input class=\"ca-field\" name=\"email\" type=\"email\" required autocomplete=\"email\"></label>\n      </div>\n      <label class=\"ca-lab\"><span>Messages requested <span class=\"ca-req\">*</span></span>\n        <textarea id=\"ca-msgs\" class=\"ca-field\" name=\"messages\" rows=\"4\" required placeholder=\"Choose Request next to a message above, or type the date and title here.\"></textarea></label>\n      <label class=\"ca-lab\">Comments<textarea class=\"ca-field\" name=\"comments\" rows=\"3\"></textarea></label>\n      <button class=\"ca-btn ca-solid ca-submit\" type=\"submit\">Send Request</button>\n      <p id=\"ca-form-msg\" class=\"ca-form-msg\" role=\"status\"></p>\n    </form>\n  </section>\n\n  <div id=\"ca-tray\" class=\"ca-tray\" hidden>\n    <span id=\"ca-tray-text\"></span>\n    <a href=\"#ca-request\" id=\"ca-tray-go\" class=\"ca-tray-go\">Finish your request</a>\n  </div>\n</section>";
})();
(function () {
  "use strict";
  var root = document.getElementById("ccos-archive");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "1";

  var DATA_URL = window.CCOS_ARCHIVE_DATA || "archive.json";
  var SITE_REQUEST_URL = window.CCOS_ARCHIVE_REQUEST_URL || "";
  var AUDIO_BASE = "https://sermons.ccofstarke.com/";
  var PAGE = 50;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var SLOT = { AM: "AM", PM: "PM", SR: "Sunrise", WED: "PM", "AM/PM": "AM & PM" };
  var BOOKS = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
  var ALIAS = { gen: "genesis", ex: "exodus", exod: "exodus", lev: "leviticus", num: "numbers", deut: "deuteronomy", josh: "joshua", judg: "judges", sam: "samuel", kgs: "kings", chr: "chronicles", neh: "nehemiah", esth: "esther", ps: "psalms", psa: "psalms", psalm: "psalms", prov: "proverbs", eccl: "ecclesiastes", ecc: "ecclesiastes", isa: "isaiah", jer: "jeremiah", lam: "lamentations", ezek: "ezekiel", dan: "daniel", hos: "hosea", mic: "micah", hab: "habakkuk", zech: "zechariah", mal: "malachi", mt: "matthew", matt: "matthew", mk: "mark", lk: "luke", jn: "john", rom: "romans", cor: "corinthians", gal: "galatians", eph: "ephesians", phil: "philippians", col: "colossians", thes: "thessalonians", thess: "thessalonians", tim: "timothy", tit: "titus", philem: "philemon", heb: "hebrews", jas: "james", jam: "james", pet: "peter", rev: "revelation", jason: "jason", lester: "lester" };

  var $ = function (id) { return document.getElementById(id); };
  var els = { q: $("ca-q"), preacher: $("ca-preacher"), book: $("ca-book"), topic: $("ca-topic"), year: $("ca-year"), avail: $("ca-avail"),
    sort: $("ca-sort"), count: $("ca-count"), clear: $("ca-clear"), list: $("ca-list"), more: $("ca-more"), series: $("ca-series"),
    msgs: $("ca-msgs"), form: $("ca-form"), formMsg: $("ca-form-msg"), tray: $("ca-tray"), trayText: $("ca-tray-text"), trayGo: $("ca-tray-go"), request: $("ca-request") };

  var ALL = [], view = [], shown = PAGE, seriesFilter = "", openPlayer = null, requested = [];

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) {
    return String(s).toLowerCase().replace(/[.’'`]/g, " ").replace(/(\d)\s*(?=[a-z])/g, "$1 ").split(/[^a-z0-9:]+/)
      .filter(Boolean).map(function (w) { return ALIAS[w] || w; }).join(" ");
  }
  function parseDate(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function chapterVerse(ref) { var m = /(\d+)(?::(\d+))?/.exec(String(ref).replace(/^\d\s+/, "")); return m ? [+m[1], +(m[2] || 0)] : [999, 999]; }
  function label(r) { return (r.t || "Title not recorded") + " (" + r.p + ", " + longDate(r) + ")"; }
  function longDate(r) { var dt = parseDate(r.d); return MONTHS[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear() + (r.s ? " " + (r.s === "WED" ? "Wednesday" : SLOT[r.s] || r.s) : ""); }

  // ------------------------------------------------------------------ data
  function load() {
    fetch(DATA_URL, { cache: "no-cache" }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    }).then(function (data) {
      var f = data.fields;
      ALL = data.rows.map(function (a, i) {
        var r = { i: i };
        for (var k = 0; k < f.length; k++) r[f[k]] = a[k];
        r.y = r.d.slice(0, 4);
        r.bi = r.b ? BOOKS.indexOf(r.b) : 999;
        r.cv = r.r ? chapterVerse(r.r.split(";")[0].replace(r.b, "")) : [999, 999];
        r.hay = " " + norm([r.t, r.p, r.r, r.b, r.se, r.tp, r.y].join(" ")) + " ";
        return r;
      });
      buildSelects();
      restoreState();
      render();
    }).catch(function (err) {
      els.count.textContent = "The message list could not be loaded. Please refresh the page.";
      if (window.console) console.error("Audio Archive:", err);
    });
  }

  // ------------------------------------------------------------------ filters
  var FILTERS = ["preacher", "book", "topic", "year", "avail"];
  function fieldOf(key, r) {
    return key === "preacher" ? r.p : key === "book" ? r.b : key === "topic" ? r.tp : key === "year" ? r.y : (r.f ? "listen" : "request");
  }
  function passes(r, except, terms) {
    for (var k = 0; k < FILTERS.length; k++) {
      var key = FILTERS[k], v = els[key].value;
      if (v && key !== except && fieldOf(key, r) !== v) return false;
    }
    if (seriesFilter && r.se !== seriesFilter) return false;
    for (var t = 0; t < terms.length; t++) if (r.hay.indexOf(terms[t]) < 0) return false;
    return true;
  }
  function terms() { var q = norm(els.q.value.trim()); return q ? q.split(" ") : []; }

  function buildSelects() { refreshOptions(); }
  function refreshOptions() {
    var tm = terms();
    ["preacher", "book", "topic", "year"].forEach(function (key) {
      var sel = els[key], cur = sel.value, counts = {};
      ALL.forEach(function (r) { if (!passes(r, key, tm)) return; var v = fieldOf(key, r); if (v) counts[v] = (counts[v] || 0) + 1; });
      if (cur && !counts[cur]) counts[cur] = 0;
      var keys = Object.keys(counts), html = "";
      var first = { preacher: "All preachers", book: "All books", topic: "All topics", year: "All years" }[key];
      html += '<option value="">' + first + "</option>";
      if (key === "book") {
        keys.sort(function (a, b) { return BOOKS.indexOf(a) - BOOKS.indexOf(b); });
        var ot = keys.filter(function (b) { return BOOKS.indexOf(b) < 39; }), nt = keys.filter(function (b) { return BOOKS.indexOf(b) >= 39; });
        if (ot.length) html += '<optgroup label="Old Testament">' + opts(ot, counts) + "</optgroup>";
        if (nt.length) html += '<optgroup label="New Testament">' + opts(nt, counts) + "</optgroup>";
      } else {
        if (key === "year") keys.sort(function (a, b) { return b - a; });
        else if (key === "preacher") keys.sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });
        else keys.sort();
        html += opts(keys, counts);
      }
      sel.innerHTML = html;
      sel.value = cur;
    });
  }
  function opts(keys, counts) { return keys.map(function (k) { return '<option value="' + esc(k) + '">' + esc(k) + " (" + counts[k] + ")</option>"; }).join(""); }

  function sortRows(rows) {
    var s = els.sort.value, svc = { SR: 0, AM: 1, "AM/PM": 2, PM: 3, WED: 4, "": 5 };
    var byDate = function (a, b) { return a.d < b.d ? -1 : a.d > b.d ? 1 : (svc[a.s] || 0) - (svc[b.s] || 0); };
    if (s === "old") rows.sort(byDate);
    else if (s === "title") rows.sort(function (a, b) { return (!a.t) - (!b.t) || a.t.localeCompare(b.t, undefined, { numeric: true, sensitivity: "base" }) || byDate(a, b); });
    else if (s === "bible") rows.sort(function (a, b) { return a.bi - b.bi || a.cv[0] - b.cv[0] || a.cv[1] - b.cv[1] || byDate(a, b); });
    else rows.sort(function (a, b) { return -byDate(a, b); });
    return rows;
  }

  // ------------------------------------------------------------------ render
  function render(keepPage) {
    var tm = terms();
    view = sortRows(ALL.filter(function (r) { return passes(r, null, tm); }));
    if (!keepPage) shown = PAGE;
    refreshOptions();
    var active = tm.length || seriesFilter || FILTERS.some(function (k) { return els[k].value; });
    els.clear.hidden = !active;
    var listen = 0; view.forEach(function (r) { if (r.f) listen++; });
    var req = view.length - listen;
    els.count.textContent = view.length.toLocaleString() + (view.length === 1 ? " message" : " messages") +
      (listen && req ? " · " + listen.toLocaleString() + " to listen to, " + req.toLocaleString() + " by request" : "");
    els.series.hidden = !seriesFilter;
    if (seriesFilter) els.series.innerHTML = "Showing the series <strong>" + esc(seriesFilter) + "</strong>. " +
      '<button type="button" class="ca-link" data-act="unseries">Show all messages</button>';

    var dateSort = els.sort.value === "new" || els.sort.value === "old";
    var html = "", lastYear = "";
    view.slice(0, shown).forEach(function (r) {
      if (dateSort && r.y !== lastYear) { html += '<li class="ca-yr" aria-hidden="true">' + r.y + "</li>"; lastYear = r.y; }
      html += row(r);
    });
    if (!view.length) html = '<li class="ca-empty">No messages match. Try fewer words, or clear the filters.</li>';
    openPlayer = null;
    els.list.innerHTML = html;
    els.more.hidden = shown >= view.length;
    if (!els.more.hidden) els.more.textContent = "Show more messages (" + (view.length - shown).toLocaleString() + " more)";
    saveState();
  }

  function row(r) {
    var dt = parseDate(r.d);
    var when = DAYS[dt.getDay()] + (r.s ? " " + (SLOT[r.s] || r.s) : "");
    var title = r.t ? esc(r.t) : "Title not recorded";
    var meta = ['<button type="button" data-act="preacher" data-v="' + esc(r.p) + '">' + esc(r.p) + "</button>"];
    if (r.r && norm(r.t).indexOf(norm(r.r.split(";")[0])) < 0) meta.push(esc(r.r));
    if (r.m) meta.push(r.m + " min");
    if (r.se) meta.push('<button type="button" data-act="series" data-v="' + esc(r.se) + '">' + esc(r.se) + "</button>");
    var isAdded = requested.indexOf(r.i) >= 0;
    var action = r.f
      ? '<button type="button" class="ca-btn ca-solid" data-act="listen" aria-expanded="false">Listen</button>'
      : '<button type="button" class="ca-btn ca-outline' + (isAdded ? " ca-added" : "") + '" data-act="request"' + (isAdded ? " disabled" : "") + ">" + (isAdded ? "Added" : "Request") + "</button>";
    return '<li class="ca-row" data-i="' + r.i + '">' +
      '<div class="ca-date">' + MONTHS[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear() + "<small>" + when + "</small></div>" +
      '<div class="ca-main"><p class="ca-title' + (r.t ? "" : " ca-none") + '">' + title + '</p><div class="ca-meta">' +
      meta.join('<span class="ca-sep" aria-hidden="true">·</span>') + "</div></div>" +
      '<div class="ca-act">' + action + "</div></li>";
  }

  function togglePlayer(li, r, btn) {
    var existing = li.querySelector(".ca-player");
    if (openPlayer && openPlayer !== li) closePlayer(openPlayer);
    if (existing) { closePlayer(li); return; }
    var url = AUDIO_BASE + r.f;
    var div = document.createElement("div");
    div.className = "ca-player";
    div.innerHTML = '<audio controls preload="metadata" src="' + esc(url) + '"></audio>' +
      '<a href="' + esc(url) + '" download target="_blank" rel="noopener">Download</a>';
    li.appendChild(div);
    btn.textContent = "Close"; btn.setAttribute("aria-expanded", "true");
    openPlayer = li;
    var audio = div.querySelector("audio");
    audio.addEventListener("error", function () {
      div.innerHTML = '<span class="ca-err">This recording couldn\'t be played here.</span> ' +
        '<a href="' + esc(url) + '" target="_blank" rel="noopener">Open the recording</a>';
    });
    var p = audio.play(); if (p && p.catch) p.catch(function () {});
  }
  function closePlayer(li) {
    var p = li.querySelector(".ca-player");
    if (p) { var a = p.querySelector("audio"); if (a) a.pause(); p.remove(); }
    var b = li.querySelector('[data-act="listen"]'); if (b) { b.textContent = "Listen"; b.setAttribute("aria-expanded", "false"); }
    if (openPlayer === li) openPlayer = null;
  }

  // ------------------------------------------------------------------ request
  // On the church website the page's own Spirelight contact form is used when it has a field labelled
  // "Messages requested"; otherwise the form in this block is used.
  var siteField = null;
  function findSiteField() {
    var labels = document.querySelectorAll("form label, form .dmformLabel, form [class*=label]");
    for (var i = 0; i < labels.length; i++) {
      if (root.contains(labels[i])) continue;
      if (/messages?\s+requested/i.test(labels[i].textContent)) {
        var wrap = labels[i].closest("div, li, p") || labels[i].parentElement;
        var f = wrap && wrap.querySelector("textarea, input[type=text], input:not([type])");
        if (!f && labels[i].htmlFor) f = document.getElementById(labels[i].htmlFor);
        if (f) return f;
      }
    }
    return null;
  }
  function targetField() { return siteField || els.msgs; }
  function addRequest(r, btn) {
    if (requested.indexOf(r.i) >= 0) return;
    requested.push(r.i);
    var f = targetField(), line = label(r);
    f.value = (f.value.trim() ? f.value.replace(/\s+$/, "") + "\n" : "") + line;
    ["input", "change", "keyup"].forEach(function (ev) { f.dispatchEvent(new Event(ev, { bubbles: true })); });
    btn.textContent = "Added"; btn.classList.add("ca-added"); btn.disabled = true;
    var n = requested.length;
    els.trayText.textContent = n === 1 ? "1 message added to your request" : n + " messages added to your request";
    els.tray.hidden = false;
  }
  function goToRequest(e) {
    if (e) e.preventDefault();
    var f = targetField();
    var form = f.closest("form") || f;
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    f.classList.remove("ca-flash"); void f.offsetWidth; f.classList.add("ca-flash");
    els.tray.hidden = true;
    setTimeout(function () {
      var first = form.querySelector("input:not([type=hidden])");
      if (first && !first.value) first.focus({ preventScroll: true });
    }, 600);
  }

  els.form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(els.form), missing = [];
    if (SITE_REQUEST_URL && !siteField) {
      var msgs = String(fd.get("messages") || "").trim();
      if (!msgs) { els.formMsg.textContent = "Please choose at least one message."; return; }
      window.location.href = SITE_REQUEST_URL + "?request=" + encodeURIComponent(msgs.slice(0, 1800));
      return;
    }
    if (!String(fd.get("name") || "").trim()) missing.push("your name");
    var email = String(fd.get("email") || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) missing.push("a valid email");
    if (!String(fd.get("messages") || "").trim()) missing.push("at least one message");
    if (missing.length) { els.formMsg.textContent = "Please add " + missing.join(", ") + "."; return; }
    var handler = window.CCOS_ARCHIVE_SUBMIT;
    if (typeof handler === "function") {
      els.formMsg.textContent = "Sending…";
      Promise.resolve(handler(Object.fromEntries(fd.entries()))).then(function () {
        els.formMsg.textContent = "Thank you. Your request was sent.";
        els.form.reset(); requested = []; render(true);
      }).catch(function () { els.formMsg.textContent = "Something went wrong. Please try again, or use the Contact Us page."; });
    } else {
      els.formMsg.textContent = "Preview: on the church website this form is the Spirelight contact form, so the request lands in the church's form responses and emails the pastor.";
    }
  });

  // ------------------------------------------------------------------ events
  var timer = null;
  els.q.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(function () { render(); }, 120); });
  FILTERS.concat(["sort"]).forEach(function (k) { els[k].addEventListener("change", function () { render(); }); });
  els.clear.addEventListener("click", function () {
    els.q.value = ""; seriesFilter = ""; FILTERS.forEach(function (k) { els[k].value = ""; }); render(); els.q.focus();
  });
  els.more.addEventListener("click", function () { shown += PAGE; render(true); });
  els.trayGo.addEventListener("click", goToRequest);
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]"); if (!b) return;
    var act = b.getAttribute("data-act");
    if (act === "unseries") { seriesFilter = ""; render(); return; }
    var li = b.closest(".ca-row"); var r = li ? ALL[+li.getAttribute("data-i")] : null;
    if (act === "listen" && r) togglePlayer(li, r, b);
    else if (act === "request" && r) addRequest(r, b);
    else if (act === "preacher") { els.preacher.value = b.getAttribute("data-v"); render(); root.scrollIntoView({ behavior: "smooth" }); }
    else if (act === "series") { seriesFilter = b.getAttribute("data-v"); els.q.value = ""; els.sort.value = "old"; render(); root.scrollIntoView({ behavior: "smooth" }); }
  });

  // remember the last search for this visitor (optional; ignored when storage is unavailable)
  var KEY = "ccos-archive-state";
  function saveState() {
    try { sessionStorage.setItem(KEY, JSON.stringify({ q: els.q.value, s: els.sort.value, se: seriesFilter, f: FILTERS.map(function (k) { return els[k].value; }) })); } catch (e) {}
  }
  function restoreState() {
    try {
      var st = JSON.parse(sessionStorage.getItem(KEY) || "null"); if (!st) return;
      els.q.value = st.q || ""; els.sort.value = st.s || "new"; seriesFilter = st.se || "";
      refreshOptions();
      FILTERS.forEach(function (k, i) { els[k].value = (st.f && st.f[i]) || ""; });
    } catch (e) {}
  }

  function init() {
    siteField = findSiteField();
    if (siteField) {
      els.request.hidden = true;
      // arriving from the standalone archive page with messages already chosen
      var pre = new URLSearchParams(window.location.search).get("request");
      if (pre && !siteField.value.trim()) {
        siteField.value = pre;
        ["input", "change", "keyup"].forEach(function (ev) { siteField.dispatchEvent(new Event(ev, { bubbles: true })); });
        setTimeout(goToRequest, 400);
      }
    } else if (SITE_REQUEST_URL) {
      // standalone page: only collect the messages here, then finish on the church website
      Array.prototype.forEach.call(els.form.querySelectorAll(".ca-grid3, .ca-lab"), function (el) {
        if (!el.contains(els.msgs)) el.hidden = true;
      });
      els.form.querySelector(".ca-submit").textContent = "Continue to the request form";
    }
    load();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
