> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode/prices-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvepisode/prices-data.dictionary)

# TvEpisode.Prices

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of storefront to pricing information and availability.

## Declaration

```
object TvEpisode.Prices
```

## Properties

- `prices` — `[TvEpisode.Prices.Price]`: A list of localized pricing information for the content.
- `storefront` — `string`: The two-letter country code that serves as the key for the map of values.

## Topics

### Related objects

- [TvEpisode.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [TvEpisode.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvEpisode.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvEpisode.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV episode.
- [TvEpisode.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvEpisode.Genre](genre.md): A genre name and its structure.
- [TvEpisode.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
