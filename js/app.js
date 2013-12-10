require.config({
  paths: {
    jquery: 'components/jquery/jquery.min',
    underscore: 'components/underscore/underscore-min',
    aerogear: 'components/aerogear/aerogear.min',
    text: 'components/requirejs-text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    }
  }
});

require([ 'main' ]);
