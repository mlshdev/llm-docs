> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/sportingevent](https://developer.apple.com/documentation/appletvfeed/sportingevent)

# SportingEvent

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

The data structure that represents a sporting event resource.

## Declaration

```
object SportingEvent
```

## Properties

- `artworks` — `SportingEvent.Artworks`: **(Required)** A mapping of locale to localized artwork.
- `castAndCrew` — `[SportingEvent.CastAndCrew]`: **(Required)** A list of cast and crew for the event.
- `competitors` — `[SportingEvent.Competitor]`: **(Required)** A list of competitors in the event.
- `description` — `SportingEvent.Description`: **(Required)** A mapping of locale to localized descriptions of the event.
- `endTime` — `date-time`: The time, in ISO 8601 format, when the event ended.
- `externalContentIds` — `[SportingEvent.ExternalContentId]`: **(Required)** A list of unique identifiers for the sporting event in the catalog of another provider.
- `id` — `string`: **(Required)** The unique identifier for the sporting event.
- `lastModifiedTime` — `date-time`: The time, in ISO 8601 format, of the entity’s most recent update.
- `leagueAbbreviation` — `SportingEvent.LeagueAbbreviation`: A mapping of locale to localized abbreviations for the league of the event.
- `leagueName` — `SportingEvent.LeagueName`: A mapping of locale to localized names for the league of the event.
- `name` — `SportingEvent.Name`: **(Required)** A mapping of locale to localized names for the event.
- `prices` — `SportingEvent.Prices`: **(Required)** A mapping of storefront to pricing information and availability.
- `rating` — `[SportingEvent.Rating]`: **(Required)** A list of ratings for the event in different rating systems.
- `shortName` — `SportingEvent.ShortName`: A mapping of locale to localized short versions of the event name.
- `sportName` — `SportingEvent.SportName`: A mapping of locale to localized names for the sport of the event.
- `startTime` — `date-time`: The time, in ISO 8601 format, when the event started.
- `url` — `SportingEvent.Url`: **(Required)** A mapping of two-letter country code to URLs for the event.
- `venueAddress` — `SportingEvent.VenueAddress`: A mapping of locale to localized addresses for the event venue.
- `venueName` — `SportingEvent.VenueName`: A mapping of locale to localized names for the event venue.

## Topics

### Related objects

- [SportingEvent.Artworks](sportingevent/artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [SportingEvent.CastAndCrew](sportingevent/castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [SportingEvent.Competitor](sportingevent/competitor.md): Information about a competitor.
- [SportingEvent.Description](sportingevent/description-data.dictionary.md): A mapping of locale to localized descriptions of the sporting event.
- [SportingEvent.ExternalContentId](sportingevent/externalcontentid.md): Information about an external content ID.
- [SportingEvent.LeagueAbbreviation](sportingevent/leagueabbreviation-data.dictionary.md): A mapping of locale to localized abbreviations for the league of the sporting event.
- [SportingEvent.LeagueName](sportingevent/leaguename-data.dictionary.md): A mapping of locale to localized names for the league of the sporting event.
- [SportingEvent.Name](sportingevent/name-data.dictionary.md): A mapping of locale to localized names for the sporting event.
- [SportingEvent.Prices](sportingevent/prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [SportingEvent.Rating](sportingevent/rating-data.dictionary.md): Information about a content rating.
- [SportingEvent.ShortName](sportingevent/shortname-data.dictionary.md): A mapping of locale to localized short versions of the sporting event name.
- [SportingEvent.SportName](sportingevent/sportname-data.dictionary.md): A mapping of locale to localized names for the sport of the event.
- [SportingEvent.Url](sportingevent/url-data.dictionary.md): A mapping of locale to localized URLs for the content.
- [SportingEvent.VenueAddress](sportingevent/venueaddress-data.dictionary.md): A mapping of locale to localized addresses for the event venue.
- [SportingEvent.VenueName](sportingevent/venuename-data.dictionary.md): A mapping of locale to localized names for the event venue.

## See Also

### Objects

- [Movie](movie.md): The data structure that represents a movie resource.
- [TvEpisode](tvepisode.md): The data structure that represents a TV episode resource.
- [TvSeason](tvseason.md): The data structure that represents a TV season resource.
- [TvShow](tvshow.md): The data structure that represents a TV show resource.
