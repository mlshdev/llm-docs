> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/sportingevent/castandcrew-data.dictionary](https://developer.apple.com/documentation/appletvfeed/sportingevent/castandcrew-data.dictionary)

# SportingEvent.CastAndCrew

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a cast or crew member, including translations of their name.

## Declaration

```
object SportingEvent.CastAndCrew
```

## Properties

- `birthday` — `date`: The birth date of the cast or crew member, in YYYY-MM-DD format.
- `character` — `string`: The name of the character played by a cast member.
- `name` — `SportingEvent.CastAndCrew.Name`: **(Required)** A mapping of locale to localized names for the cast or crew member.
- `role` — `string`: The role of the cast or crew member, for example, `Actor` or `Director`.

## Topics

### Related objects

- [SportingEvent.CastAndCrew.Name](castandcrew-data.dictionary/name-data.dictionary.md): A mapping of locale to localized names for the cast or crew member.

## See Also

### Related objects

- [SportingEvent.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [SportingEvent.Competitor](competitor.md): Information about a competitor.
- [SportingEvent.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the sporting event.
- [SportingEvent.ExternalContentId](externalcontentid.md): Information about an external content ID.
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
