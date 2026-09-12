> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/genre](https://developer.apple.com/documentation/appletvfeed/movie/genre)

# Movie.Genre

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A genre name and its structure.

## Declaration

```
object Movie.Genre
```

## Properties

- `name` — `string`: The name of the genre.
- `path` — `[string]`: A list of genres in hierarchical order. Each item in the list is a subgenre of the previous item.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
