const GIPHY_KEY = 'G37gLaEizhTkiBREF1bLvhKf1kKCAPhC';

(function () {
    function giphySearch(keyword) {
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=10`)
        .then(response => response.json());
    }
  
    function appendImage(img) {
      let $div = $('<div class="img-wrapper"></div>');
      $('<div class="inner"></div>').append(img).appendTo($div);
      $('#thumbs').append($div)
    }
  
    (function listenOnFormSubmit() {
      $('#searchForm').submit((ev) => {
        ev.preventDefault();
        let $input = $('#searchInput');
  
        main($input.val());
      });
    })();
  
    async function main(searchKeyword) {
      const result = await giphySearch(searchKeyword);
      $('#thumbs').html('');
      result.data.forEach(gif => {
        let img = new Image();
        img.src = gif.images.original.url;
        appendImage(img);
      })
    }
  })();
