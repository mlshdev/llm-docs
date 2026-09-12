> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode/castandcrew-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvepisode/castandcrew-data.dictionary)

# TvEpisode.CastAndCrew

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a cast or crew member, including translations of their name.

## Declaration

```
object TvEpisode.CastAndCrew
```

## Properties

- `birthday` — `date`: The birth date of the cast or crew member, in YYYY-MM-DD format.
- `character` — `string`: The name of the character played by a cast member.
- `name` — `TvEpisode.CastAndCrew.Name`: **(Required)** A mapping of locale to localized names for the cast or crew member.
- `role` — `string`: The role of the cast or crew member, for example, `Actor` or `Director`.

## Topics

### Related objects

- [TvEpisode.CastAndCrew.Name](castandcrew-data.dictionary/name-data.dictionary.md): A mapping of locale to localized names for the cast or crew member.

## See Also

### Related objects

- [TvEpisode.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvEpisode.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV episode.
- [TvEpisode.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvEpisode.Genre](genre.md): A genre name and its structure.
- [TvEpisode.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvEpisode.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
