module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkbrown: '#211007',
        lightbrown: '#331808',
        tea: '#99420F'
      },
      backgroundImage: theme => ({
        'cafebg': "url('img/Cafe7.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
