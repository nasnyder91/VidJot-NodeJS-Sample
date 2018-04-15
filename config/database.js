if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Nick:Nick@ds053438.mlab.com:53438/vidjot-prod'}
} else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
