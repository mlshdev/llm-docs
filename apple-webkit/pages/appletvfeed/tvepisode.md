> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode](https://developer.apple.com/documentation/appletvfeed/tvepisode)

# TvEpisode

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

The data structure that represents a TV episode resource.

## Declaration

```
object TvEpisode
```

## Properties

- `artworks` — `TvEpisode.Artworks`: **(Required)** A mapping of locale to localized artwork.
- `castAndCrew` — `[TvEpisode.CastAndCrew]`: **(Required)** A list of cast and crew for the TV episode.
- `description` — `TvEpisode.Description`: **(Required)** A mapping of locale to localized descriptions of the TV episode.
- `durationInMillis` — `int64`: The length of the episode in milliseconds.
- `episodeNumber` — `integer`: The sequence number of the TV episode in the TV season it belongs to.
- `externalContentIds` — `[TvEpisode.ExternalContentId]`: **(Required)** A list of unique identifiers for the TV episode in the catalog of another provider.
- `genres` — `[TvEpisode.Genre]`: **(Required)** A list of genres associated with the TV episode.
- `id` — `string`: **(Required)** The unique identifier for the TV episode.
- `lastModifiedTime` — `date-time`: The time, in ISO 8601 format, of the entity’s most recent update.
- `name` — `TvEpisode.Name`: **(Required)** A mapping of locale to localized names for the TV episode.
- `originalAirDate` — `string`: The date when the episode first aired in YYYY-MM-DD format.
- `prices` — `TvEpisode.Prices`: **(Required)** A mapping of storefront to pricing information and availability.
- `rating` — `[TvEpisode.Rating]`: **(Required)** A list of ratings for the TV episode in different rating systems.
- `seasonId` — `string`: The unique identifier for the TV season that the episode belongs to.
- `seasonNumber` — `integer`: The sequence number of the TV season.
- `showId` — `string`: The unique identifier for the TV show that the episode belongs to.
- `url` — `TvEpisode.Url`: **(Required)** A mapping of two-letter country code to URLs for the TV episode.

## Topics

### Related objects

- [TvEpisode.Artworks](tvepisode/artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvEpisode.CastAndCrew](tvepisode/castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvEpisode.Description](tvepisode/description-data.dictionary.md): A mapping of locale to localized descriptions of the TV episode.
- [TvEpisode.ExternalContentId](tvepisode/externalcontentid.md): Information about an external content ID.
- [TvEpisode.Genre](tvepisode/genre.md): A genre name and its structure.
- [TvEpisode.Name](tvepisode/name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Prices](tvepisode/prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvEpisode.Rating](tvepisode/rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](tvepisode/url-data.dictionary.md): A mapping of locale to localized URLs for the content.

## See Also

### Objects

- [Movie](movie.md): The data structure that represents a movie resource.
- [TvSeason](tvseason.md): The data structure that represents a TV season resource.
- [TvShow](tvshow.md): The data structure that represents a TV show resource.
- [SportingEvent](sportingevent.md): The data structure that represents a sporting event resource.
