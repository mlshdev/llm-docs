> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/artworks-data.dictionary](https://developer.apple.com/documentation/appletvfeed/movie/artworks-data.dictionary)

# Movie.Artworks

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized artwork.

## Declaration

```
object Movie.Artworks
```

## Properties

- `artwork` — `Movie.Artworks.Artwork`: The artwork related to this content.
- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.

  Note: The locale can contain a wildcard; for example, `-au` matches all languages for Australia, and `en-*` matches all countries that have English as a language.

## Topics

### Related objects

- [Movie.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): The artwork related to this content.

## See Also

### Related objects

- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
