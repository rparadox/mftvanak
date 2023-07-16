let str = "";
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
    type: "json",
    data: {},
    success: function (res) {
        res.map((elem) => {
            str += `
       <div>
       <h1>${elem.id}</h1>
       <h2>${elem.title}</h2>
       <p>${elem.body}</p>
       <hr>
</div>
      
        `
        });
        $("div#root").html(str)
    }
});