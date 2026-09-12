> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/description-data.dictionary](https://developer.apple.com/documentation/appletvfeed/movie/description-data.dictionary)

# Movie.Description

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized descriptions of the movie.

## Declaration

```
object Movie.Description
```

## Properties

- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.
- `short` — `string`: The short-form localized description of the content.
- `standard` — `string`: The full localized description of the content.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
