function generateMarkdown(data) {
  let collabBadges
  if (data.collaborators.trim() !== "") {
    const collabs = data.collaborators.split(/[\,,;,:,\/, ,*,]/);
    collabBadges = collabs.map(ghName => {
      return `[![GitHub Link](https://img.shields.io/badge/Github-${ghName}-lightgrey.svg)](https://github.com/${ghName})<br>`
    })
  } else {
    collabBadges = "";
  }
  return `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Questions](#Questions)
    * [Collaborators](#Collaborators)
    * [Additional Information](#Additional Information)
    
    ### Installation
    ${data.installGuide}
  
    ### Usage
    ${data.usage}
  
    #### License
    ${data.selectedLicense}
  
    #### Questions?
    You can reach out to me via Github [![GitHub Link](https://img.shields.io/badge/Github-${data.creatorGithub}-lightgrey.svg)](https://github.com/${data.creatorGithub})
    Alternatively, my email is: ${data.creatorEmail}
  
    ### Collaborators
    ${collabBadges}
  
    #### Additional Information
    ${data.additInfo}
    `
}

module.exports = { generateMarkdown }
