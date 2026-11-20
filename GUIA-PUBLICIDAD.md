# 🚀 Estrategia de Publicidad - Clínica San Agustín

## 📊 Presupuesto Recomendado Inicial
- **Mínimo**: $5,000 - $10,000 MXN/mes
- **Óptimo**: $15,000 - $25,000 MXN/mes
- **Agresivo**: $30,000+ MXN/mes

---

## 1️⃣ GOOGLE ADS (PRIORIDAD #1)

### 🎯 Por qué Google Ads
- **Intención alta**: La gente busca activamente "clínica rehabilitación Puebla"
- **Resultados inmediatos**: Apareces arriba en 24-48 hrs
- **Solo pagas por clic**: No por impresiones
- **Medible**: Sabes exactamente qué genera llamadas

### 📱 Tipos de Campañas a Crear

#### A) Campaña de Búsqueda (70% del presupuesto)
**Palabras clave principales:**
```
[clínica rehabilitación puebla]
[tratamiento adicciones puebla]
[centro desintoxicación puebla]
[rehabilitación alcoholismo puebla]
[clínica psiquiátrica puebla]
[internamiento por adicciones puebla]
[ayuda para adicciones puebla]
[tratamiento drogas puebla]
```

**Palabras clave long-tail (más baratas, mejor conversión):**
```
"dónde tratar adicciones en puebla"
"clínica para alcoholismo puebla"
"centro rehabilitación cerca de mí"
"tratamiento residencial adicciones puebla"
"ayuda para familiar con adicciones"
"evaluación psiquiátrica puebla"
```

**Estructura de Anuncios:**

```
Título 1: Clínica de Rehabilitación Puebla
Título 2: Tratamiento de Adicciones 24/7
Título 3: Agenda Tu Evaluación Gratuita

Descripción 1: Centro especializado en rehabilitación de adicciones. 
Atención profesional, confidencial y humana. WhatsApp 220 285 5303

Descripción 2: Programas de desintoxificación, terapia individual, 
hospitalización y consulta externa. Instalaciones en Puebla.

Extensiones:
✓ Llamada: +52 220 285 5303
✓ WhatsApp
✓ Ubicación: Magnolias 13, Puebla
✓ Enlaces: Servicios | Testimonios | Contacto
✓ Texto destacado: "Evaluación Gratuita" | "Atención 24/7" | "Terapia Familiar"
```

**Presupuesto sugerido:** $100-300 MXN/día = $3,000-9,000/mes

---

#### B) Campaña de Display/Remarketing (15% del presupuesto)
- Mostrar anuncios a personas que visitaron tu web
- Banner: "¿Necesitas ayuda? Agenda tu evaluación gratuita"
- Aumenta conversiones 30-40%

**Presupuesto:** $50-100 MXN/día = $1,500-3,000/mes

---

#### C) Google Local Services Ads (Si está disponible)
- Apareces antes que Google Ads
- Insignia "Google Verified"
- Pagas por llamada, no por clic
- **MUY efectivo para servicios locales**

---

### 🎯 Configuración Óptima Google Ads

**Segmentación:**
- **Ubicación**: Radio 50km alrededor de Puebla
- **Idioma**: Español
- **Dispositivos**: Móvil (70%), Desktop (30%)
- **Horario**: Lunes-Domingo 8:00-22:00 (o 24/7 si tienes WhatsApp Business)

**Estrategia de Puja:**
- Inicio: "Maximizar clics" (2 semanas)
- Después: "Maximizar conversiones" o CPA objetivo
- CPA objetivo: $500-800 MXN por lead

**Conversiones a rastrear:**
- ✅ Envío de formulario
- ✅ Clic en WhatsApp
- ✅ Llamada telefónica (duración >30 seg)
- ✅ Clic en "Cómo llegar" (Google Maps)

---

## 2️⃣ META ADS (Facebook/Instagram) (PRIORIDAD #2)

### 🎯 Por qué Meta Ads
- **Alcance masivo**: Llega a familiares que buscan ayuda
- **Targeting preciso**: Edad, intereses, comportamientos
- **Más económico** que Google (CPC más bajo)
- **Awareness**: Genera conocimiento de marca

### 📱 Tipos de Campañas

#### A) Campaña de Generación de Leads (50% presupuesto Meta)
**Objetivo:** Formulario de contacto directo en Facebook/Instagram

**Audiencia:**
- **Edad**: 25-55 años
- **Ubicación**: Puebla + 40km
- **Intereses**: Salud mental, psicología, autoayuda, AA, desarrollo personal
- **Comportamiento**: Búsquedas recientes de temas de salud

**Creativos (imágenes/videos):**
```
Opción 1: "¿Un familiar necesita ayuda con adicciones?"
- Foto cálida de instalaciones
- CTA: "Agenda evaluación gratuita"

Opción 2: Testimonio en video (30 seg)
- Persona recuperada (con permiso)
- Subtítulos
- Mensaje de esperanza

Opción 3: Carrusel de servicios
- 1. Desintoxificación
- 2. Terapia individual
- 3. Tratamiento residencial
- 4. Consulta externa
```

**Presupuesto:** $100-200 MXN/día = $3,000-6,000/mes

---

#### B) Campaña de Tráfico al Sitio (30% presupuesto Meta)
- Enviar visitas a sanagustinoficial.com
- Retargeting con pixel de Facebook

**Presupuesto:** $50-100 MXN/día = $1,500-3,000/mes

---

#### C) Campaña de Mensajes (WhatsApp/Messenger) (20%)
- Click to WhatsApp ads
- Respuesta automática inicial
- **Alta conversión**: Conversación inmediata

**Presupuesto:** $30-70 MXN/día = $900-2,100/mes

---

## 3️⃣ IMPLEMENTACIÓN TÉCNICA

### 🔧 Código a Agregar en index.html

#### Google Ads Conversion Tracking
```html
<!-- Google Ads Conversion - Agregar en <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>

<!-- Event Snippet - Llamar cuando envíen formulario -->
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/YYYYYY',
    'value': 1.0,
    'currency': 'MXN'
  });
</script>
```

#### Meta Pixel (Facebook)
```html
<!-- Meta Pixel Code - Agregar en <head> -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>

<!-- Event: Lead (cuando envíen formulario) -->
<script>
  fbq('track', 'Lead');
</script>
```

#### Google Tag Manager (Recomendado - Gestiona todo)
```html
<!-- Google Tag Manager - <head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Google Tag Manager (noscript) - Después de <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

## 4️⃣ LANDING PAGES ESPECÍFICAS (OPCIONAL PERO EFECTIVO)

Crear páginas dedicadas para campañas:

### `/tratamiento-adicciones-puebla.html`
- Optimizada para palabra clave específica
- Sin menú de navegación (menos distracciones)
- Formulario prominente
- Testimonios
- Botón WhatsApp fijo

**Beneficio:** Aumenta conversión 40-60% vs página principal

---

## 5️⃣ PRESUPUESTO COMBINADO SUGERIDO

### Plan Inicial ($10,000 MXN/mes)
```
Google Ads Búsqueda:     $6,000  (60%)
Google Display:          $1,500  (15%)
Meta Ads Leads:          $1,800  (18%)
Meta WhatsApp:           $700    (7%)
TOTAL:                   $10,000
```

### Plan Agresivo ($25,000 MXN/mes)
```
Google Ads Búsqueda:     $15,000 (60%)
Google Display:          $3,000  (12%)
Meta Ads Leads:          $4,500  (18%)
Meta WhatsApp:           $1,500  (6%)
YouTube Pre-roll:        $1,000  (4%)
TOTAL:                   $25,000
```

---

## 6️⃣ MÉTRICAS CLAVE A MONITOREAR

### Google Ads
- **CTR** (Click-Through Rate): >5% es bueno
- **CPC** (Costo por Clic): $8-25 MXN promedio
- **Tasa de conversión**: 5-10% (de clics a leads)
- **CPA** (Costo por Adquisición): $500-1,000 MXN por lead

### Meta Ads
- **CPM**: $80-150 MXN
- **CPC**: $3-8 MXN
- **CTR**: >2%
- **Costo por lead**: $200-500 MXN

### ROI Esperado
- **Lead promedio**: $400-800 MXN
- **Conversión lead→paciente**: 20-30%
- **Valor paciente**: $15,000-50,000+ MXN
- **ROI**: 3-10x en 90 días

---

## 7️⃣ CRONOGRAMA DE IMPLEMENTACIÓN

### Semana 1
- ✅ Crear cuenta Google Ads
- ✅ Crear cuenta Meta Business
- ✅ Instalar píxeles de seguimiento
- ✅ Configurar conversiones

### Semana 2
- 🚀 Lanzar campaña Google Ads Búsqueda
- 🚀 Lanzar campaña Meta Leads
- 📊 Presupuesto bajo para probar ($50/día)

### Semana 3-4
- 📈 Analizar datos
- 🎯 Optimizar palabras clave
- 📊 Pausar anuncios de bajo rendimiento
- 💰 Aumentar presupuesto en ganadores

### Mes 2+
- 🔄 Agregar remarketing
- 📱 Escalar campañas exitosas
- 📹 Crear videos para ads
- 📊 A/B testing de creativos

---

## 8️⃣ ERRORES COMUNES A EVITAR

❌ **No rastrear conversiones**: Sin esto, estás volando a ciegas
❌ **Palabras clave demasiado amplias**: "adicciones" es muy genérico
❌ **No tener página de aterrizaje optimizada**: Pierdes conversiones
❌ **No responder rápido**: Llamadas/mensajes sin responder = dinero perdido
❌ **No probar múltiples anuncios**: A/B testing es clave
❌ **Rendirse muy pronto**: Se necesitan 30-60 días para optimizar

---

## 9️⃣ HERRAMIENTAS ÚTILES

### Gratuitas
- **Google Keyword Planner**: Investigar palabras clave
- **Facebook Audience Insights**: Entender audiencia
- **Google Analytics**: Analizar tráfico
- **Meta Business Suite**: Gestionar campañas

### De Pago (Opcional)
- **SEMrush** ($119 USD/mes): Espiar competencia
- **Hotjar** ($39 USD/mes): Ver cómo usan tu sitio
- **CallRail** ($45 USD/mes): Rastrear llamadas

---

## 🎯 PLAN DE ACCIÓN INMEDIATO

### HOY
1. Crear cuenta Google Ads: https://ads.google.com
2. Crear cuenta Meta Business: https://business.facebook.com
3. Solicitar ayuda para instalar píxeles si lo necesitas

### ESTA SEMANA
1. Configurar primera campaña Google Ads
2. Presupuesto inicial: $100 MXN/día
3. Instalar pixel de Facebook
4. Crear anuncios en Meta

### PRÓXIMOS 30 DÍAS
1. Optimizar campañas diariamente
2. Responder todos los leads en <5 minutos
3. Analizar qué anuncios funcionan mejor
4. Escalar presupuesto en campañas ganadoras

---

## 📞 SISTEMA DE RESPUESTA RÁPIDA

**CRÍTICO**: El 78% de los clientes elige quien responde primero

### Configurar:
1. **WhatsApp Business** con respuestas automáticas
2. **Alertas de formulario** vía email/WhatsApp
3. **Equipo de respuesta** disponible en horarios de campaña
4. **Script de respuesta** estandarizado

**Mensaje automático WhatsApp:**
```
¡Hola! Gracias por contactar Clínica San Agustín 🙏

Estamos aquí para ayudarte. Un especialista te responderá 
en menos de 5 minutos.

Mientras tanto, ¿puedes compartirnos:
1. Tu nombre
2. ¿Para quién es la consulta?
3. ¿Cuál es tu principal preocupación?

Toda nuestra comunicación es 100% confidencial.
```

---

## 💡 BONUS: Optimizaciones Extra

### A) Llamadas Directas desde Google
- Habilitar extensión de llamada
- Número de seguimiento para medir llamadas
- Registrar cada llamada como conversión

### B) Chat en Vivo
- Agregar Tawk.to (gratis) o LiveChat
- Capturar leads que no llaman ni llenan formulario

### C) Prueba Social
- Agregar contador: "Más de 500 familias atendidas"
- Mostrar reseñas de Google en el sitio
- Certificaciones y acreditaciones visibles

---

## 📊 EXPECTATIVAS REALISTAS

### Mes 1
- 50-100 clics/semana
- 5-15 leads/semana
- 1-3 pacientes nuevos

### Mes 3 (optimizado)
- 200-300 clics/semana  
- 20-40 leads/semana
- 5-10 pacientes nuevos

### Mes 6+
- 400+ clics/semana
- 40-80 leads/semana
- 10-20 pacientes nuevos

---

¿Necesitas que te ayude con algo específico?
- ✅ Crear los anuncios de Google Ads
- ✅ Escribir copy para Meta Ads
- ✅ Instalar códigos de seguimiento en tu sitio
- ✅ Crear landing page optimizada
- ✅ Configurar WhatsApp Business
