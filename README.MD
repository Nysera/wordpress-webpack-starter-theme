# Wordpress Webpack Starter Theme
I got sick of using other wordpress starter themes and not knowing exactly what is happening and how it works because sooner or later you'll run into an error you just can't fix.

After spending hours and hours trying to figure out how to fix errors I decided enough is enough, say hello to Wordpress Webpack Starter Theme.

Wordpress Webpack Starter Theme is a custom theme with webpack set up and ready to go.

## What to configure

1. Run `npm install` in directory to install all npm packages
2. Edit `Theme Name` in style.css to your desired wordpress theme name, optionally you can also add a `Description` in the same area
3. Go to resources > build > webpack.dev.js and change the `proxy` to match your development site URL
4. The starter theme is now ready to start

### Developing locally
To start the project locally run:
```
npm run start
```

### Building for Production
To create an optimized production ready build run:
```
npm run build
```


