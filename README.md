# html-parts-form

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

## Bestanden
 * content/sass/components/_search.scss
 * scripts/fw.search.js
 * content/img/icons/button-search.png

## Voorbeelden

### Html
 	<div class="searchform">
        <form action="#">
            <input type="text" autocomplete="off" placeholder="Vul hier uw zoekterm in" name="search" value="">
            <button title="Zoeken" type="submit"><span>Zoeken</span></button>
            <div class="searchform__suggests visuallyhidden">
                <ul></ul>
                <div class="message visuallyhidden">Er zijn geen resultaten gevonden.</div>
                <div class="suggests__bottom">
                    <input value="Alle zoekresultaten weergeven" title="Zoeken" type="submit">
                    <span class="searchform__close">Sluiten</span>
                </div>
            </div>
        </form>
    </div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>
        head.js(
            { search: 'scripts/fw.search.js' }
        );
    </script>

### Scss
###### _settings.scss
    $colors: (
        form: (
            error: #C00
        )
    )

### zoeken.json
    [
        {
            "titel": "Nieuwstitel",
            "section": "Nieuws",
            "url": "/nieuws/nieuwsitem/",
            "sectionhandle": "nieuws",
            "searchstring": "Ditisdestringwaaringezochtwordtmetnieuwscontent"
        },
        {
            "titel": "Product titel",
            "section": "Products",
            "url": "/products/productitem/",
            "sectionhandle": "products",
            "searchstring": "Ditisdestringwaaringezochtwordtmetproductcontent"
        }
    ]