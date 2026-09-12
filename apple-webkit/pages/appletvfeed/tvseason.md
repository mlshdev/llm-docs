> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason](https://developer.apple.com/documentation/appletvfeed/tvseason)

# TvSeason

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

The data structure that represents a TV season resource.

## Declaration

```
object TvSeason
```

## Properties

- `artworks` — `TvSeason.Artworks`: **(Required)** A mapping of locale to localized artwork.
- `castAndCrew` — `[TvSeason.CastAndCrew]`: **(Required)** A list of cast and crew for the TV season.
- `description` — `TvSeason.Description`: **(Required)** A mapping of locale to localized descriptions of the TV season.
- `externalContentIds` — `[TvSeason.ExternalContentId]`: **(Required)** A list of unique identifiers for the TV season in the catalog of another provider.
- `genres` — `[TvSeason.Genre]`: **(Required)** A list of genres associated with the TV season.
- `id` — `string`: **(Required)** The unique identifier for the TV season.
- `lastModifiedTime` — `date-time`: The time, in ISO 8601 format, of the entity’s most recent update.
- `name` — `TvSeason.Name`: **(Required)** A mapping of locale to localized names for the TV season.
- `originalPremiereDate` — `string`: The date of the original content release in YYYY-MM-DD format.
- `prices` — `TvSeason.Prices`: **(Required)** A mapping of storefront to pricing information and availability.
- `rating` — `[TvSeason.Rating]`: **(Required)** A list of ratings for the TV season in different rating systems.
- `seasonNumber` — `integer`: The sequence number of the TV season.
- `showId` — `string`: The unique identifier for the TV show that the season belongs to.
- `url` — `TvSeason.Url`: **(Required)** A mapping of two-letter country code to URLs for the TV season.

## Topics

### Related objects

- [TvSeason.Artworks](tvseason/artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvSeason.CastAndCrew](tvseason/castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvSeason.Description](tvseason/description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.ExternalContentId](tvseason/externalcontentid.md): Information about an external content ID.
- [TvSeason.Genre](tvseason/genre.md): A genre name and its structure.
- [TvSeason.Name](tvseason/name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Prices](tvseason/prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvSeason.Rating](tvseason/rating-data.dictionary.md): Information about a content rating.
- [TvSeason.Url](tvseason/url-data.dictionary.md): A mapping of locale to localized URLs for the content.

## See Also

### Objects

- [Movie](movie.md): The data structure that represents a movie resource.
- [TvEpisode](tvepisode.md): The data structure that represents a TV episode resource.
- [TvShow](tvshow.md): The data structure that represents a TV show resource.
- [SportingEvent](sportingevent.md): The data structure that represents a sporting event resource.
