# SynTest Framework - Common Core

[![](https://github.com/syntest-framework/syntest-framework/actions/workflows/node.js.yml/badge.svg)](https://github.com/syntest-framework/syntest-framework/actions/workflows/node.js.yml)

The common core of the [SynTest Framework](https://www.syntest.org).

### What is SynTest?

SynTest is a framework for automating the generation of test cases based on JavaScript. This library is not meant to be used directly. To make use of the framework, please use one of the specific implementation for the different supported languages (e.g., Solidity and JavaScript/Typescript). These implementations can be found in the [SynTest Framework organization](https://github.com/syntest-framework).

### Overview

The common core contains the common interfaces for the code control-flow representation, test case structure, genes, and the implementation for the meta-heuristic search algorithms.

## Installation

When the project reaches a stable state, a NPM package will be released. Until this happens, the library can be used by cloning the project, installing its dependencies, compiling the TypeScript, and requiring it in your project:

* Clone the project

```bash
$ git clone git@github.com:syntest-framework/syntest-framework.git
```

* Install dependencies

```bash
$ npm install
```

* Compile to JavaScript

```bash
$ npm run tsc
```
* Install as npm module in your project

```bash
$ npm install /path/to/syntest-framework
```

## Support

For questions and help with how to use this library, please see [SUPPORT.md](SUPPORT.md).

## Roadmap

* [x] Create and Draw a Control Flow Graph of the code.
* [x] Compute approach level distance using the Control Flow Graph.
* [x] Compute branch distance for:
	* [x] integer comparisons
	* [x] float comparisons
	* [ ] boolean evaluations
	* [ ] strings comparisons
* [x] Find test-cases that cover certain branches.
* [x] Add assertions to the generated test cases.
* [x] Allow the user to configure the algorithm's parameters and other settings
	* [x] set the seed of the randomness object
	* [x] choose the search algorithm and parameters like population_size
	* [x] select stopping criteria
	* [x] choose mutation probabilities
	* [x] configure the log level

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. For more information, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Authors and acknowledgment

- Annibale Panichella (PI)
- Mitchell Olsthoorn (Project Lead)
- Dimitri Stallenberg (Developer)

## License

The content of this project itself is licensed under the [MIT license](LICENSE.md).
