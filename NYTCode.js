function usersearch() {
    var searchterm = $(this).attr("search-term");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?id=52ac263a-6ddc-4c02-80c7-29ccbca075ff&api-key=ISIuRoxErOd0pVSE6l9jL9V52oWkuhFP";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        //         (this).attr
        // search - term.val.trim()
        console.log(res)
            ;
    }

    )

    $("#run-search").on("click", function () {
        var searchterm = $("#seach-term").val().trim();
        var startyear = $("#start-year").val().trim();
        var endyear = $("#end-year").val().trim();

        console.log(searchterm);
        console.log(startyear);
        console.log(endyear);
    });

};


usersearch()

