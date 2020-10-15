// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ### Installation
  ${data.installGuide}
  ### Usage
  ${data.usageGuide}
  #### License
  ${data.selectedLicense}
  #### Questions?
  You can reach out to me via GitHub here ${data.creatorGithub} or through email here ${data.creatorEmail}
  ##### Credits
  ${data.collaborators}
`;
}

module.exports = {generateMarkdown}
