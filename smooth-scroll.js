// Keep native touch scrolling and honor the visitor's reduced-motion setting.
if (typeof Lenis === 'function') {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false,
    stopInertiaOnNavigate: true,
    prevent: node => Boolean(node.closest?.('dialog'))
  });

  window.siteLenis = lenis;

  const dialog = document.getElementById('detail-dialog');
  if (dialog) {
    const syncDialog = () => dialog.open ? lenis.stop() : lenis.start();
    new MutationObserver(syncDialog).observe(dialog, {
      attributes: true,
      attributeFilter: ['open']
    });
    syncDialog();
  }
}
