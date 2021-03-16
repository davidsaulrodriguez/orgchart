# OrgChart

<span align="center">


![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/orgchart)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/orgchart.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/orgchart)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/orgchart)](https://github.com/davidsaulrodriguez/orgchart)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/orgchart)](https://github.com/davidsaulrodriguez/orgchart/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/orgchart)](https://github.com/davidsaulrodriguez/orgchart/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/orgchart)](https://github.com/davidsaulrodriguez/orgchart/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/orgchart)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_orgchart&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_orgchart)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_orgchart&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_orgchart)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_orgchart&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_orgchart)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_orgchart&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_orgchart)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/orgchart/latest/main)


</span>

Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Dependencies](#dependdencies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**OrgChart** is an example of a modern employee directory web application (frontend) that is written with React.

This application was created using `create-react-app` in combination with my [NodeJS Repo Template][noderepotemp] project.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**

- "@material-ui/core": "^4.11.3",
- "@material-ui/icons": "^4.11.2",
- "@testing-library/jest-dom": "^5.11.9",
- "@testing-library/react": "^11.2.5",
- "@testing-library/user-event": "^12.8.3",
- "gh-pages": "^3.1.0",
- "react": "^17.0.1",
- "react-dom": "^17.0.1",
- "react-scripts": "4.0.3",
- "web-vitals": "^1.1.1"

**Development Dependencies**

- "eslint": "^7.21.0",
- "prettier": "^2.2.1"

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/orgchart.git
cd orgchart/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

To start **orgchart** simply run:

```shell
npm run start
```

## Development

While working and developing on the source code, you can run a live development server with:

```shell
npm start
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project is an ephemeral homework assignment and will not be worked on past its release (due date). Hence the week-long support life cycle.

| Release | Status             | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| ------- | ------------------ | --------------- | ---------------- | --------------------- | ----------- |
| develop | Unstable           | -               | -                | -                     | -           |
| v1      | :heavy_check_mark: | 2021-03-23      | -                | -                     | 2021-03-30  |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/orgchart/archive/main.zip
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/orgchart/issues/new/choose
[license]: ./LICENSE
[noderepotemp]: https://github.com/davidsaulrodriguez/nodejs-repo-template
