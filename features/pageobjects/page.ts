import { browser } from "@wdio/globals";
import { $ } from "@wdio/globals";

export default class Page {
    public openKinopoisk() {
        return browser.url(`https://www.kinopoisk.ru/`);
    }
    public get Article() {
        return $(
            '//article[@data-tid="7922faf6"]//span//a[@href="/media/article/4008070/"]'
        );
    }
    public get ArticleTitle() {
        return $('//span[@itemprop="headline"]');
    }
    public ArticleClick() {
        return this.Article.click();
    }
    public openFilmPage() {
        return browser.url(
            "https://www.kinopoisk.ru/lists/categories/movies/1/"
        );
    }
    public get Movie() {
        return $('//a[@href="/film/4948328/"]//span[@data-tid="ecca3393"]');
    }
    public get NameMovie() {
        return $('//h1[@itemprop="name"]//span');
    }
    public OpenMovie() {
        return this.Movie.click();
    }
}
