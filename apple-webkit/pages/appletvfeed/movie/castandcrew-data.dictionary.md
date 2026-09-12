> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/castandcrew-data.dictionary](https://developer.apple.com/documentation/appletvfeed/movie/castandcrew-data.dictionary)

# Movie.CastAndCrew

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a cast or crew member, including translations of their name.

## Declaration

```
object Movie.CastAndCrew
```

## Properties

- `birthday` — `date`: The birth date of the cast or crew member, in YYYY-MM-DD format.
- `character` — `string`: The name of the character played by a cast member.
- `name` — `Movie.CastAndCrew.Name`: **(Required)** A mapping of locale to localized names for the cast or crew member.
- `role` — `string`: The role of the cast or crew member, for example, `Actor` or `Director`.

## Topics

### Related objects

- [Movie.CastAndCrew.Name](castandcrew-data.dictionary/name-data.dictionary.md): A mapping of locale to localized names for the cast or crew member.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
