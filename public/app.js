const editions = {
  drop: { kicker: 'THE CONVERSATION', title: 'What people are actually saying about AI — and what matters.', summary: 'A smart read on the launches, workplace shifts, and ideas lighting up the feed. Zero breathless hype; enough context to sound informed in the meeting.', image: 'drop-image', label: 'Editorial image for The Drop', link: 'https://www.therundown.ai/', linkText: 'See today’s AI conversation ↗', briefLabel: 'IN BRIEF', one: ['Research, without the PhD-level headache', 'What changed in the labs — plus the one sentence that connects it to real life.', 'https://huggingface.co/papers', 'Hugging Face Papers ↗'], two: ['Policy, explained like a human conversation', 'The rules, safety debates, and social stakes behind the headline.', 'https://hai.stanford.edu/news', 'Stanford HAI ↗'] },
  research: { kicker: 'RESEARCH DESK', title: 'The papers behind the next wave of AI.', summary: 'A slower, clearer look at what labs are testing: new methods, reliable evaluations, and the questions that deserve more than a launch-day headline.', image: 'research-image', label: 'Editorial image for Research', link: 'https://huggingface.co/papers', linkText: 'Explore recent papers ↗', briefLabel: 'FIELD NOTES', one: ['What makes a research result useful?', 'Look for a clear method, an honest evaluation, and a result someone else can test.', 'https://arxiv.org/list/cs.AI/recent', 'Read recent AI papers ↗'], two: ['The long view on AI progress', 'Independent reporting keeps the newest research in proportion.', 'https://hai.stanford.edu/ai-index', 'Stanford AI Index ↗'] },
  work: { kicker: 'WORK & BEHAVIOR', title: 'AI is changing the meeting before it changes the job title.', summary: 'The real story is human: new norms, new handoffs, and the practical choices managers make when AI joins everyday work.', image: 'work-image', label: 'Editorial image for Work and Behavior', link: 'https://www.technologyreview.com/topic/artificial-intelligence/', linkText: 'Read the work angle ↗', briefLabel: 'THE HUMAN SIDE', one: ['The etiquette is still being invented.', 'Good teams make expectations visible: where AI helps, where judgment stays human, and how to give credit.', 'https://www.technologyreview.com/topic/artificial-intelligence/', 'Work and AI coverage ↗'], two: ['Move from hype to habits.', 'The useful question is not “can it?” but “what do we do differently now?”', 'https://www.deeplearning.ai/the-batch/', 'The Batch ↗'] },
  policy: { kicker: 'POLICY WATCH', title: 'The rules around AI are becoming part of the product.', summary: 'A grounded read on governance, safety, and social impact—so the policy conversation feels useful, not like a wall of acronyms.', image: 'policy-image', label: 'Editorial image for Policy', link: 'https://hai.stanford.edu/news', linkText: 'Read the policy context ↗', briefLabel: 'WHY IT MATTERS', one: ['Trust needs evidence, not slogans.', 'Good governance connects oversight to the choices people make when building and using AI.', 'https://www.nist.gov/itl/ai-risk-management-framework', 'NIST AI Risk Management ↗'], two: ['The cultural story is policy, too.', 'Who benefits, who is represented, and who answers when things go wrong are not side questions.', 'https://hai.stanford.edu/news', 'Stanford HAI news ↗'] }
};
Object.assign(editions, {
  latam: { kicker: 'LATAM DESK', title: 'AI in Mexico and Colombia: the regional conversation, in context.', summary: 'A focused view of public policy, university research, and the builders shaping AI across Mexico and Colombia.', image: 'policy-image', label: 'Editorial image for LATAM', link: 'https://www.uniandes.edu.co/es/noticias/inteligencia-artificial', linkText: 'Read LATAM AI news ↗', briefLabel: 'MEXICO & COLOMBIA', one: ['Mexico: policy and public life', 'Follow the Mexican AI policy conversation alongside research and public-sector developments.', 'https://canaldelcongreso.gob.mx/noticias/10195', 'Mexico AI policy watch ↗'], two: ['Colombia: research meets society', 'Uniandes and Colombian public institutions are putting AI research and governance into practice.', 'https://www.uniandes.edu.co/es/noticias/inteligencia-artificial', 'Uniandes AI news ↗'] },
  university: { kicker: 'UNIVERSITY DESK', title: 'Where AI is being researched, debated, and taught.', summary: 'A campus view from the institutions helping set the terms of the AI conversation—before it reaches the product launch.', image: 'research-image', label: 'Editorial image for University News', link: 'https://hai.stanford.edu/news', linkText: 'Read university AI news ↗', briefLabel: 'CAMPUS WATCH', one: ['Stanford HAI', 'Human-centered AI research, policy, and the annual AI Index.', 'https://hai.stanford.edu/news', 'Stanford HAI ↗'], two: ['MIT and the research frontier', 'Research, publications, and the people asking the hard questions about AI.', 'https://www.csail.mit.edu/research/artificial-intelligence', 'MIT CSAIL AI ↗'] },
  social: { kicker: 'SOCIAL WATCH', title: 'The AI conversation—without confusing a post for proof.', summary: 'A place to see what is moving across the feeds, with enough sourcing discipline to separate a real story from a loud one.', image: 'work-image', label: 'Editorial image for Social Watch', link: 'https://www.reddit.com/r/artificial/', linkText: 'See the social conversation ↗', briefLabel: 'FOLLOW THE SIGNALS', one: ['Instagram & X', 'Creators, researchers, and organizations often surface an early signal here. We verify before we feature it.', 'https://x.com/search?q=%23AI&src=typed_query', 'Search #AI on X ↗'], two: ['Reddit', 'Useful for community context, product reactions, and informed skepticism—not as a sole source.', 'https://www.reddit.com/r/artificial/', 'Open r/artificial ↗'] }
});
const spanishEditions = {
  latam: { kicker: 'MESA LATAM', title: 'IA en México y Colombia: la conversación regional con contexto.', summary: 'Una mirada enfocada en política pública, investigación universitaria y las personas que impulsan la IA en México y Colombia.', image: 'policy-image', label: 'Imagen editorial para LATAM', link: 'https://www.uniandes.edu.co/es/noticias/inteligencia-artificial', linkText: 'Leer noticias de IA en LATAM ↗', briefLabel: 'MÉXICO Y COLOMBIA', one: ['México: política y vida pública', 'Sigue la conversación sobre política de IA en México, investigación y sector público.', 'https://canaldelcongreso.gob.mx/noticias/10195', 'Vigilar política de IA en México ↗'], two: ['Colombia: investigación y sociedad', 'Uniandes e instituciones colombianas llevan la investigación y gobernanza de IA a la práctica.', 'https://www.uniandes.edu.co/es/noticias/inteligencia-artificial', 'Noticias de IA en Uniandes ↗'] },
  university: { kicker: 'MESA UNIVERSITARIA', title: 'Dónde se investiga, debate y enseña la IA.', summary: 'Una mirada universitaria desde instituciones que ayudan a definir la conversación sobre IA antes de que llegue al lanzamiento del producto.', image: 'research-image', label: 'Imagen editorial para noticias universitarias', link: 'https://hai.stanford.edu/news', linkText: 'Leer noticias universitarias de IA ↗', briefLabel: 'VIGILANCIA UNIVERSITARIA', one: ['Stanford HAI', 'Investigación sobre IA centrada en las personas, política pública y el AI Index anual.', 'https://hai.stanford.edu/news', 'Stanford HAI ↗'], two: ['MIT y la frontera de investigación', 'Investigación, publicaciones y personas que hacen las preguntas difíciles sobre IA.', 'https://www.csail.mit.edu/research/artificial-intelligence', 'MIT CSAIL IA ↗'] },
  social: { kicker: 'VIGILANCIA SOCIAL', title: 'La conversación sobre IA, sin confundir una publicación con una prueba.', summary: 'Un espacio para observar lo que se mueve en las redes con disciplina suficiente para separar una historia real de una muy ruidosa.', image: 'work-image', label: 'Imagen editorial para vigilancia social', link: 'https://www.reddit.com/r/artificial/', linkText: 'Ver la conversación social ↗', briefLabel: 'SIGUE LAS SEÑALES', one: ['Instagram y X', 'Creadores, investigadores y organizaciones suelen detectar una señal temprana aquí. La verificamos antes de destacarla.', 'https://x.com/search?q=%23AI&src=typed_query', 'Buscar #AI en X ↗'], two: ['Reddit', 'Útil para contexto comunitario, reacciones a productos y escepticismo informado; no como única fuente.', 'https://www.reddit.com/r/artificial/', 'Abrir r/artificial ↗'] }
};
Object.assign(spanishEditions, {
  drop: { kicker: 'LA CONVERSACIÓN', title: 'Lo que la gente realmente dice sobre IA y lo que importa.', summary: 'Una lectura inteligente sobre lanzamientos, cambios en el trabajo e ideas que están moviendo la conversación; suficiente contexto para llegar preparado a la reunión.', image: 'drop-image', label: 'Imagen editorial para La señal del día', link: 'https://www.therundown.ai/', linkText: 'Ver la conversación de IA de hoy ↗', briefLabel: 'EN BREVE', one: ['Investigación sin dolor de cabeza', 'Qué cambió en los laboratorios y la frase que conecta la novedad con la vida real.', 'https://huggingface.co/papers', 'Papers de Hugging Face ↗'], two: ['Política explicada como conversación humana', 'Reglas, debates de seguridad e implicaciones sociales detrás del titular.', 'https://hai.stanford.edu/news', 'Stanford HAI ↗'] },
  research: { kicker: 'MESA DE INVESTIGACIÓN', title: 'Los papers detrás de la próxima ola de IA.', summary: 'Una mirada más lenta y clara a lo que prueban los laboratorios: nuevos métodos, evaluaciones confiables y preguntas que merecen más que un titular.', image: 'research-image', label: 'Imagen editorial para Investigación', link: 'https://huggingface.co/papers', linkText: 'Explorar papers recientes ↗', briefLabel: 'NOTAS DE CAMPO', one: ['¿Qué hace útil a un resultado?', 'Busca un método claro, evaluación honesta y un resultado que otra persona pueda probar.', 'https://arxiv.org/list/cs.AI/recent', 'Leer papers recientes ↗'], two: ['La vista de largo plazo', 'El reporte independiente pone la investigación más reciente en proporción.', 'https://hai.stanford.edu/ai-index', 'Stanford AI Index ↗'] },
  work: { kicker: 'TRABAJO Y COMPORTAMIENTO', title: 'La IA cambia la reunión antes de cambiar el puesto.', summary: 'La historia real es humana: nuevas normas, nuevas transiciones y decisiones prácticas de liderazgo cuando la IA se suma al trabajo diario.', image: 'work-image', label: 'Imagen editorial para Trabajo y comportamiento', link: 'https://www.technologyreview.com/topic/artificial-intelligence/', linkText: 'Leer el ángulo de trabajo ↗', briefLabel: 'EL LADO HUMANO', one: ['La etiqueta todavía se está inventando.', 'Los buenos equipos hacen visibles las expectativas: dónde ayuda la IA, dónde queda el juicio humano y cómo dar crédito.', 'https://www.technologyreview.com/topic/artificial-intelligence/', 'Cobertura sobre trabajo e IA ↗'], two: ['De la expectativa a los hábitos.', 'La pregunta útil no es “¿puede?”, sino “¿qué hacemos distinto ahora?”.', 'https://www.deeplearning.ai/the-batch/', 'The Batch ↗'] },
  policy: { kicker: 'VIGILANCIA DE POLÍTICA', title: 'Las reglas de IA ya son parte del producto.', summary: 'Una lectura clara sobre gobernanza, seguridad e impacto social para que la conversación de política sea útil y no una pared de siglas.', image: 'policy-image', label: 'Imagen editorial para Política', link: 'https://hai.stanford.edu/news', linkText: 'Leer el contexto de política ↗', briefLabel: 'POR QUÉ IMPORTA', one: ['La confianza necesita evidencia, no eslóganes.', 'La buena gobernanza conecta supervisión con las decisiones de construcción y uso de IA.', 'https://www.nist.gov/itl/ai-risk-management-framework', 'Gestión de riesgos NIST ↗'], two: ['La historia cultural también es política.', 'Quién se beneficia, quién está representado y quién responde cuando algo falla no son preguntas secundarias.', 'https://hai.stanford.edu/news', 'Noticias de Stanford HAI ↗'] }
});
let currentEdition = 'drop';
let liveEdition = null;
const setText = (id, value) => document.getElementById(id).textContent = value;
const setLink = (id, href, label) => { const node = document.getElementById(id); node.href = href; node.textContent = label; };
const liveSections = { drop: 'news', research: 'research', work: 'work', policy: 'policy', latam: 'latam', university: 'university', social: 'social' };
function storyForSection(key) {
  if (!liveEdition?.stories?.length) return null;
  return liveEdition.stories.find(story => story.section === liveSections[key]) || liveEdition.stories[0];
}
function renderLiveClippings() {
  if (!liveEdition?.stories?.length) return;
  const slots = ['one', 'two', 'three'];
  liveEdition.stories.slice(0, 3).forEach((story, index) => {
    const slot = slots[index];
    setText(`clip-${slot}-kicker`, `${story.section.toUpperCase()} · VERIFIED SOURCE`);
    setText(`clip-${slot}-title`, story.title);
    setText(`clip-${slot}-copy`, story.summary);
    setLink(`clip-${slot}-link`, story.url, `${story.source} ↗`);
  });
}
function renderLiveMarkets() {
  if (!liveEdition?.market?.length) return;
  liveEdition.market.forEach(item => {
    const target = document.getElementById(`market-${item.symbol.toLowerCase()}`);
    if (!target) return;
    target.textContent = `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`;
    target.classList.toggle('down', item.changePercent < 0);
  });
  const index = liveEdition.market.reduce((total, item) => total + item.changePercent, 0) / liveEdition.market.length;
  const indexNode = document.getElementById('market-index');
  indexNode.textContent = `${index >= 0 ? '+' : ''}${index.toFixed(2)}%`;
  indexNode.classList.toggle('down', index < 0);
  document.getElementById('market-note').textContent = `market data checked ${formatter.format(new Date(liveEdition.generatedAt))}`;
}
function selectEdition(key) {
  currentEdition = key;
  const base = language === 'es' && spanishEditions[key] ? spanishEditions[key] : editions[key];
  const liveStory = storyForSection(key);
  const item = liveStory ? { ...base, kicker: `${base.kicker} · LIVE`, title: liveStory.title, summary: liveStory.summary, link: liveStory.url, linkText: `${liveStory.source} ↗` } : base;
  setText('lead-kicker', item.kicker); setText('lead-title', item.title); setText('lead-summary', item.summary); setText('briefing-label', item.briefLabel);
  setLink('lead-link', item.link, item.linkText);
  setText('brief-one-title', item.one[0]); setText('brief-one-copy', item.one[1]); setLink('brief-one-link', item.one[2], item.one[3]);
  setText('brief-two-title', item.two[0]); setText('brief-two-copy', item.two[1]); setLink('brief-two-link', item.two[2], item.two[3]);
  const image = document.getElementById('feature-image'); image.className = `feature-image ${item.image}`; image.setAttribute('aria-label', item.label);
  document.querySelectorAll('[data-page]').forEach(button => button.classList.toggle('active', button.dataset.page === key));
}
document.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => selectEdition(button.dataset.page)));
const formatter = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
document.getElementById('date').textContent = formatter.format(new Date()).toUpperCase();
const theme = document.getElementById('theme'); theme.addEventListener('click', () => { document.body.classList.toggle('night'); theme.textContent = document.body.classList.contains('night') ? 'Day edition' : 'Night edition'; });
const lastUpdate = document.getElementById('last-update');
const refresh = document.getElementById('refresh');
const localUpdateKey = 'the-signal-local-update';
function renderLocalStatus() {
  const recorded = localStorage.getItem(localUpdateKey);
  lastUpdate.textContent = recorded
    ? `Local view checked ${formatter.format(new Date(recorded))}. External source sync is not connected yet.`
    : 'This is a local preview. Connect approved sources before treating it as a live briefing.';
}
renderLocalStatus();
refresh.addEventListener('click', () => {
  refresh.disabled = true;
  refresh.textContent = 'Checking local edition…';
  window.setTimeout(() => {
    localStorage.setItem(localUpdateKey, new Date().toISOString());
    renderLocalStatus();
    loadLiveEdition();
    refresh.textContent = 'Checked locally ✓';
    window.setTimeout(() => { refresh.textContent = 'Check for updates ↻'; refresh.disabled = false; }, 1800);
  }, 500);
});

async function loadLiveEdition() {
  try {
    const response = await fetch(`data/live-edition.json?edition=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Live edition unavailable');
    const payload = await response.json();
    if (!payload.generatedAt || !payload.stories?.length) return;
    liveEdition = payload;
    document.getElementById('sync-status').textContent = `LIVE · ${payload.stories.length} VERIFIED STORIES`;
    lastUpdate.textContent = `Source desk checked ${formatter.format(new Date(payload.generatedAt))}. Pilot updates every three hours.`;
    refresh.textContent = 'Reload live edition ↻';
    renderLiveMarkets();
    renderLiveClippings();
    selectEdition(currentEdition);
  } catch {
    // The preview remains usable even when the first pilot feed has not published.
  }
}
loadLiveEdition();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(() => {}));
}

const translations = {
  en: { deck: 'The AI briefing for curious people with actual work to do', drop: 'The drop', research: 'Research', work: 'Work & behavior', policy: 'Policy', resources: 'Your resources', regionalTitle: 'REGIONAL & CAMPUS DESKS', regionalNote: 'Local reporting, research, and responsible social signals', mexicoTitle: 'AI in Mexico', mexicoCopy: 'Policy, public-sector developments, and research stories rooted in Mexico.', colombiaTitle: 'AI in Colombia', colombiaCopy: 'University research, government policy, and the people shaping Colombia’s AI conversation.', universityTitle: 'Campus & research news', universityCopy: 'What universities are testing, teaching, and debating before it reaches the headlines.', socialTitle: 'The AI conversation', socialCopy: 'Follow the conversation, then verify the story. Social posts are a lead—not the evidence.', footer: 'Editor Ivan A.I Espino · current enough for the group chat, useful enough for work.' },
  es: { deck: 'El resumen de IA para personas curiosas que tienen trabajo de verdad que hacer', drop: 'La señal del día', research: 'Investigación', work: 'Trabajo y comportamiento', policy: 'Política', resources: 'Tus recursos', regionalTitle: 'MESAS REGIONALES Y UNIVERSITARIAS', regionalNote: 'Noticias locales, investigación y señales sociales responsables', mexicoTitle: 'IA en México', mexicoCopy: 'Política, sector público e investigación desde México.', colombiaTitle: 'IA en Colombia', colombiaCopy: 'Investigación universitaria, política pública y las personas que forman la conversación de IA en Colombia.', universityTitle: 'Noticias universitarias y de investigación', universityCopy: 'Lo que las universidades prueban, enseñan y debaten antes de llegar a los titulares.', socialTitle: 'La conversación sobre IA', socialCopy: 'Sigue la conversación y luego verifica la historia. Las redes son una pista, no la evidencia.', footer: 'Editor Ivan A.I Espino · lo bastante actual para el chat del grupo, lo bastante útil para el trabajo.' }
};
let language = 'en';
const staticSpanish = {
  'THE CONTINENTAL EDITION': 'EDICIÓN CONTINENTAL', 'MARKETS': 'MERCADOS', 'THE PULSE CHECK': 'PULSO DEL DÍA', 'Refresh view ↻': 'Actualizar vista ↻', 'WORK BEHAVIOR': 'TRABAJO Y COMPORTAMIENTO', 'The new office etiquette is being written in real time.': 'La nueva etiqueta de oficina se escribe en tiempo real.', 'Who uses AI openly, who quietly does, and what managers need to make the shift feel fair.': 'Quién usa IA abiertamente, quién lo hace en silencio y qué necesitan los líderes para que el cambio sea justo.', 'The work angle ↗': 'El ángulo de trabajo ↗', 'LAB NOTES': 'NOTAS DE LABORATORIO', 'Beyond the demo: what researchers are testing now.': 'Más allá de la demo: lo que investigadores prueban ahora.', 'One credible paper or lab update, translated into why a curious professional should care.': 'Un paper o actualización confiable, explicado para entender por qué importa.', 'Read the research ↗': 'Leer la investigación ↗', 'SOURCE STANDARD': 'ESTÁNDAR DE FUENTES', 'Smart conversation, checked before it’s shared.': 'Conversación inteligente, verificada antes de compartirse.', 'News can begin in the social feed; it only runs here after a credible reporting, research, or primary source is attached.': 'Una noticia puede nacer en redes; solo aparece aquí con una fuente periodística, de investigación o primaria confiable.', 'Our sourcing lens ↗': 'Nuestro criterio de fuentes ↗', 'YOUR RESOURCE DESK': 'TU MESA DE RECURSOS', 'Shortcuts that stay with every edition': 'Accesos que se mantienen en cada edición', 'Your AI market watchlist': 'Tu lista de mercado de IA', 'Longer ideas, saved for later': 'Ideas largas, guardadas para después', 'Keep one calm place for deeper perspectives beyond the news cycle.': 'Un espacio tranquilo para perspectivas más profundas más allá del ciclo de noticias.', 'Open market view ↗': 'Abrir mercados ↗', 'Open AI on Medium ↗': 'Abrir IA en Medium ↗', 'Salesforce AI update ticket': 'Ticket de actualización de IA de Salesforce', 'One dedicated doorway for your Salesforce AI work, updates, and follow-ups.': 'Un acceso dedicado para tu trabajo, actualizaciones y seguimiento de IA en Salesforce.', 'Ready to connect': 'Listo para conectar', 'Add your Salesforce record link here': 'Agrega aquí tu enlace de Salesforce', 'Open Salesforce AI ↗': 'Abrir IA de Salesforce ↗', 'Day edition': 'Edición diurna', 'Night edition': 'Edición nocturna'
};
function translateStaticPage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node; node = walker.nextNode();) {
    if (node.parentElement.closest('#lead-kicker, #lead-title, #lead-summary, #lead-link, #briefing-label, #brief-one-title, #brief-one-copy, #brief-one-link, #brief-two-title, #brief-two-copy, #brief-two-link')) continue;
    const english = node.datasetEnglish || node.nodeValue;
    node.datasetEnglish = english;
    const trimmed = english.trim();
    if (language === 'es' && staticSpanish[trimmed]) node.nodeValue = english.replace(trimmed, staticSpanish[trimmed]);
    if (language === 'en') node.nodeValue = english;
  }
}
document.getElementById('language').addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  language = language === 'en' ? 'es' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(node => node.textContent = translations[language][node.dataset.i18n]);
  const button = document.getElementById('language'); button.textContent = language === 'en' ? 'ES' : 'EN'; button.setAttribute('aria-label', language === 'en' ? 'Cambiar a español' : 'Switch to English');
  selectEdition(currentEdition);
  translateStaticPage();
});
document.querySelector('.regional')?.remove();
