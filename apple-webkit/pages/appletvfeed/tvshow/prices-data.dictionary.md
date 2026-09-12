> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/prices-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvshow/prices-data.dictionary)

# TvShow.Prices

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of storefront to pricing information and availability.

## Declaration

```
object TvShow.Prices
```

## Properties

- `prices` — `[TvShow.Prices.Price]`: A list of localized pricing information for the content.
- `storefront` — `string`: The two-letter country code that serves as the key for the map of values.

## Topics

### Related objects

- [TvShow.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [TvShow.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvShow.Genre](genre.md): A genre name and its structure.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
