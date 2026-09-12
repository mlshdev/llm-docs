> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/sportingevent/externalcontentid](https://developer.apple.com/documentation/appletvfeed/sportingevent/externalcontentid)

# SportingEvent.ExternalContentId

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about an external content ID.

## Declaration

```
object SportingEvent.ExternalContentId
```

## Properties

- `catalogId` — `string`: **(Required)** The unique identifier for the external catalog. The possible values are `iTunes ADAM ID`, `TMS ID`, `TMDb`, `Gracenote TMS ID`, and `atvtp (Apple TV+ ID)`.
- `id` — `string`: **(Required)** The unique identifier of the content in the specified catalog.

## See Also

### Related objects

- [SportingEvent.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [SportingEvent.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [SportingEvent.Competitor](competitor.md): Information about a competitor.
- [SportingEvent.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the sporting event.
- [SportingEvent.LeagueAbbreviation](leagueabbreviation-data.dictionary.md): A mapping of locale to localized abbreviations for the league of the sporting event.
- [SportingEvent.LeagueName](leaguename-data.dictionary.md): A mapping of locale to localized names for the league of the sporting event.
- [SportingEvent.Name](name-data.dictionary.md): A mapping of locale to localized names for the sporting event.
- [SportingEvent.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [SportingEvent.Rating](rating-data.dictionary.md): Information about a content rating.
- [SportingEvent.ShortName](shortname-data.dictionary.md): A mapping of locale to localized short versions of the sporting event name.
- [SportingEvent.SportName](sportname-data.dictionary.md): A mapping of locale to localized names for the sport of the event.
- [SportingEvent.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
- [SportingEvent.VenueAddress](venueaddress-data.dictionary.md): A mapping of locale to localized addresses for the event venue.
- [SportingEvent.VenueName](venuename-data.dictionary.md): A mapping of locale to localized names for the event venue.
