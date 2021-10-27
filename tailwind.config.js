module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        // backgroundColor: theme => ({
        //     'my_green': '#28A745',
        //     'secondary': '#ffed4a',
        //     'danger': '#e3342f',
        // })
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
