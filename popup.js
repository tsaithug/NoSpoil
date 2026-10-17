const DEFAULTS = { enabled: true, youtube: true, twitch: true };
const keys = Object.keys(DEFAULTS);

function refreshSubs(enabled) {
  document.querySelectorAll(".sub").forEach((el) => el.classList.toggle("disabled", !enabled));
}

chrome.storage.sync.get(DEFAULTS, (s) => {
  keys.forEach((k) => (document.getElementById(k).checked = s[k]));
  refreshSubs(s.enabled);
});

keys.forEach((k) =>
  document.getElementById(k).addEventListener("change", (e) => {
    chrome.storage.sync.set({ [k]: e.target.checked });
    if (k === "enabled") refreshSubs(e.target.checked);
  })
);

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    document.getElementById("enabled").checked = changes.enabled.newValue;
    refreshSubs(changes.enabled.newValue);
  }
});
