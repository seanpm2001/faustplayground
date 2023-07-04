# Faust Playground

Faust playground is a Web platform designed to enable children to learn basic audio programming in a simple and graphic way. In particular, it allows them to develop musical instruments for Android smartphones.


## To test it:

To run in development mode:
``` shell
npm install
npm run dev
```

To build and test:

``` shell
npm run build
cd dist
python -m http.server
```

Then open:

	http://127.0.0.1:8000/

## To regenerate examples (in json/ folder)

- create a patch in the platform
- possibly rename it using the the "Edit" button
- save it (regular or precompiled version) using the "Save" button
- rename it with a .json file ending

## To add new Faust modules

In the `faust-modules` folder, add your .dsp files to the `effects` or `generators` folder. Then update `faust-modules/index.json` by hand.

## To rebuild the JavaScript

- install `tsc`: `npm i -g typescript`
- run `make compile`

## Useful links

- [https://faustplayground.grame.fr](https://faustplayground.grame.fr): the official link on the FaustPlayground website.
- [https://github.com/grame-cncm/faustplayground](https://github.com/grame-cncm/faustplayground): the github repository
