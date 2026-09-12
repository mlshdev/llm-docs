> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/prices-data.dictionary](https://developer.apple.com/documentation/appletvfeed/movie/prices-data.dictionary)

# Movie.Prices

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of storefront to pricing information and availability.

## Declaration

```
object Movie.Prices
```

## Properties

- `prices` — `[Movie.Prices.Price]`: A list of localized pricing information for the content.
- `storefront` — `string`: The two-letter country code that serves as the key for the map of values.

## Topics

### Related objects

- [Movie.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
