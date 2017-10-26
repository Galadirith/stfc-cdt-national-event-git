require '../scss/index.scss'

Reveal.initialize
  controls: true,
  progress: true,
  history: true,
  center: false,
  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 1,
  maxScale: 1,
  fragments: false,
  dependencies: [{
    # Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/lib/js/classList.js'
    condition: -> !document.body.classList
  }, {
    # Interpret Markdown in <section> elements
    src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/markdown/marked.js'
    condition: -> !!document.querySelector('[data-markdown]'),
  }, {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/markdown/markdown.js'
    condition: -> !!document.querySelector('[data-markdown]')
  }]

Reveal.addEventListener 'fragmentshown', (event) ->
  event.fragment.parentNode.scrollTop = event.fragment.parentNode.scrollHeight
