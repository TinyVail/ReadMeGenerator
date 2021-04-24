// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const url = `https://img.shields.io/static/v1?label=license&message=${license.replace(new RegExp(" ", "g"), "%20")}&color=green`;
  return `![license](${url})`;
}

/**
Regex Explaination:

const regex = "abcd";

"123abcd".replace(regex, "hi"); -> 123hi

*/


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    "BSD 3-Clause \"New\" or \"Revised\" license": "https://opensource.org/licenses/BSD-3-Clause",
    'BSD 2-Clause "Simplified" or "FreeBSD" license': "https://opensource.org/licenses/BSD-2-Clause",
    'GNU General Public License (GPL)': "https://opensource.org/licenses/gpl-license",
    'GNU Library or "Lesser" General Public License (LGPL)': "https://opensource.org/licenses/lgpl-license",
    'MIT license': "https://opensource.org/licenses/lgpl-license",
    'Mozilla Public License 2.0': "https://opensource.org/licenses/MPL-2.0",
    'Common Development and Distribution License': "https://opensource.org/licenses/CDDL-1.0",
    'Eclipse Public License version 2.0': "https://opensource.org/licenses/EPL-2.0"
  };
  // If license is Apache License 2.0 then return:
  // [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)
  return `[${license}](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return `${renderLicenseBadge(license)}\n\n${renderLicenseLink(license)}`;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  Table of Contents
  1. [Description](#description)
  2. [Installation](#installation-instructions)
  3. [Usage Info](#usage-info)
  4. [Contribution Guide](#contribution-guidelines)
  5. [Testing Info](#testing-instructions)
  6. [Licensing](#licensing-info)
  7. [Questions](#questions)


  ## Description
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage Info
  ${data.usageInfo}
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  ## Testing Instruction 
  ${data.testInstructions}
  ## Licensing info
  ${renderLicenseSection(data.license)}
  ## Questions
  You can view my Github page here! → [Github Link](https://github.com/${data.githubUsername}) 

  Feel free to reach out to me @${data.email}
  
  `;
}



module.exports = generateMarkdown;
