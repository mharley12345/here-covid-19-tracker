const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\covid-2019-react-app\\here-covid-19-tracker\\covid-map\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\covid-2019-react-app\\here-covid-19-tracker\\covid-map\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\covid-2019-react-app\\here-covid-19-tracker\\covid-map\\src\\pages\\index.js")))
}

