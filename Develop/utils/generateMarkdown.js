//function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ### Installation
  ${data.install}
  ### Usage
  ${data.usage}
  #### License
  ${data.selectedLicense}
  #### Questions?
  You can reach out to me via github.com/${data.creatorGithub} or my email ${data.creatorEmail}
  ##### Credits
  ${data.collaborators}`;
}

module.exports = {generateMarkdown}
