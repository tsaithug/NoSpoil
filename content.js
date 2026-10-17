// Le CSS masque tout par défaut (pas de flash de la durée au chargement).
// Ce script ajoute la classe "nospoil-off" sur <html> quand le masquage est désactivé.
const SITE = location.hostname.includes("twitch") ? "twitch" : "youtube";
const DEFAULTS = { enabled: true, youtube: true, twitch: true };

function apply(settings) {
  const on = settings.enabled && settings[SITE];
  document.documentElement.classList.toggle("nospoil-off", !on);
}

chrome.storage.sync.get(DEFAULTS, apply);
chrome.storage.onChanged.addListener(() => chrome.storage.sync.get(DEFAULTS, apply));
