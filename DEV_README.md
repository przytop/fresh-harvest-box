## Dependencies

You must have the LTS version of [Node.js](https://nodejs.org/en/) installed on your computer.

## Before Starting Work

Install all dependencies for the project (this needs to be done only once).

```shell
npm ci
```

### Development

Start the development mode.

```shell
npm run dev
```

Open your browser and go to [http://localhost:1234](http://localhost:1234).

### Deploy

The code will be automatically built and deployed to `GitHub Pages` every time changes are pushed to
the `main branch`. This can happen either directly via a push or after a pull request is merged. For
this to work, you need to change the `homepage` field and `build` script in the `package.json` file
by replacing `username` and `repository_name` with your own.

```json
"homepage": "https://username.github.io/repository_name",
"scripts": {
  "build": "parcel build src/*.html --public-url /repository_name/"
},
```

After a while, the website will be live under the URL specified in the corrected `homepage`
property, for example:
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Files and Folders

- All partial style files should be in the `src/sass` folder and imported into `src/sass/main.scss`.

- Place images in the src/images folder. Make sure to optimize the images before adding them. The
  build system will simply copy the images used, so the system won't need to optimize them, which
  could take a long time on slower computers.
