> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason/castandcrew-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvseason/castandcrew-data.dictionary)

# TvSeason.CastAndCrew

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a cast or crew member, including translations of their name.

## Declaration

```
object TvSeason.CastAndCrew
```

## Properties

- `birthday` — `date`: The birth date of the cast or crew member, in YYYY-MM-DD format.
- `character` — `string`: The name of the character played by a cast member.
- `name` — `TvSeason.CastAndCrew.Name`: **(Required)** A mapping of locale to localized names for the cast or crew member.
- `role` — `string`: The role of the cast or crew member, for example, `Actor` or `Director`.

## Topics

### Related objects

- [TvSeason.CastAndCrew.Name](castandcrew-data.dictionary/name-data.dictionary.md): A mapping of locale to localized names for the cast or crew member.

## See Also

### Related objects

- [TvSeason.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvSeason.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvSeason.Genre](genre.md): A genre name and its structure.
- [TvSeason.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvSeason.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvSeason.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
