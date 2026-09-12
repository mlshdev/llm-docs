> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason/prices-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvseason/prices-data.dictionary)

# TvSeason.Prices

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of storefront to pricing information and availability.

## Declaration

```
object TvSeason.Prices
```

## Properties

- `prices` — `[TvSeason.Prices.Price]`: A list of localized pricing information for the content.
- `storefront` — `string`: The two-letter country code that serves as the key for the map of values.

## Topics

### Related objects

- [TvSeason.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [TvSeason.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvSeason.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvSeason.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvSeason.Genre](genre.md): A genre name and its structure.
- [TvSeason.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvSeason.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
