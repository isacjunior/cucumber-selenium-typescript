import reporter from 'cucumber-html-reporter'

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  screenshotsDirectory: 'screenshots/',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0'
  }
}

reporter.generate(options, () => process.exit())
