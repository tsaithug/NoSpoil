// Raccourci clavier (Alt+Shift+S par défaut) : bascule le masquage global.
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "toggle-nospoil") return;
  const { enabled = true } = await chrome.storage.sync.get("enabled");
  await chrome.storage.sync.set({ enabled: !enabled });
});
