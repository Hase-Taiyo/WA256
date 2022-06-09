window.addEventListener("DOMContentLoaded", () => {
    const json = {
        data: [
            {
                title: "SOMPO美術館",
                url: "https://www.sompo-museum.org/",
            },
            {
                title: "新宿中央公園",
                url: "http://www.city.shinjuku.lg.jp/seikatsu/file15_02_00001.html",
            },
        ],
    };

    for (const item of json.data) {
        axios
            .get(`https://ogp-parse-api.herokuapp.com/?url=${item.url}`)
            .then(function (res) {
                const container = document.createElement("div");
                const title = document.createElement("h2");
                const description = document.createElement("p");
                const image = document.createElement("img");
                const link = document.createElement("a");

                // sompo美術館
                title.innerText = item.title;
                description.innerText = res.data.description;
                link.innerText = "詳しく見る";
                link.href = item.url;
                image.src = res.data.image;

                container.appendChild(title);
                container.appendChild(description);
                container.appendChild(image);
                container.appendChild(link);

                document.querySelector(".result").appendChild(container);
            });
    }
});
