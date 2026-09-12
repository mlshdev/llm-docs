> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/castandcrew-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvshow/castandcrew-data.dictionary)

# TvShow.CastAndCrew

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a cast or crew member, including translations of their name.

## Declaration

```
object TvShow.CastAndCrew
```

## Properties

- `birthday` — `date`: The birth date of the cast or crew member, in YYYY-MM-DD format.
- `character` — `string`: The name of the character played by a cast member.
- `name` — `TvShow.CastAndCrew.Name`: **(Required)** A mapping of locale to localized names for the cast or crew member.
- `role` — `string`: The role of the cast or crew member, for example, `Actor` or `Director`.

## Topics

### Related objects

- [TvShow.CastAndCrew.Name](castandcrew-data.dictionary/name-data.dictionary.md): A mapping of locale to localized names for the cast or crew member.

## See Also

### Related objects

- [TvShow.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvShow.Genre](genre.md): A genre name and its structure.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
