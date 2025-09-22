document.addEventListener('DOMContentLoaded', function () {
  // año en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // control menú móvil (si existe)
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobileMenu');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      mobile.hidden = !isOpen;
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobile.classList.remove('open');
        mobile.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Función preservada: handleSubmit (no eliminar)
function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  const to = "administracion@sanagustinoficial.com";
  const cc = "dr.sergiotrujillo@sanagustinoficial.com";
  const subj = encodeURIComponent("Nueva solicitud desde la web — " + (data.nombre || "Sin nombre"));
  const body = encodeURIComponent(
    "Teléfono/WhatsApp: " + (data.telefono || "") + "\n" +
    "Motivo: " + (data.motivo || "") + "\n\n" +
    "Mensaje:\n" + (data.mensaje || "")
  );
  const mailto = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${subj}&body=${body}`;

  // intenta abrir cliente de correo
  window.location.href = mailto;

  // prepara WhatsApp (número internacional sin signos)
  const waNumber = "522202855303";
  const waText = encodeURIComponent(
    "Hola, soy " + (data.nombre || "") + ".\n" +
    "Motivo: " + (data.motivo || "") + ".\n" +
    "Mensaje: " + (data.mensaje || "") + ".\n" +
    "Mi teléfono: " + (data.telefono || "")
  );
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  setTimeout(() => {
    if (confirm("¿Deseas también enviarnos este mensaje por WhatsApp?")) {
      window.open(waLink, "_blank", "noopener");
    }
  }, 300);

  e.target.reset();
}