> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/originalreleasedate-data.dictionary](https://developer.apple.com/documentation/appletvfeed/movie/originalreleasedate-data.dictionary)

# Movie.OriginalReleaseDate

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized release date.

## Declaration

```
object Movie.OriginalReleaseDate
```

## Properties

- `locale` — `string`: The locale in IETF language tag format, or `default` to indicate the default value.
- `originalReleaseDate` — `string`: The date of the movie release in the locale, in YYYY-MM-DD format.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
