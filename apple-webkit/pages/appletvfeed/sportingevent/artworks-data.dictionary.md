> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/sportingevent/artworks-data.dictionary](https://developer.apple.com/documentation/appletvfeed/sportingevent/artworks-data.dictionary)

# SportingEvent.Artworks

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized artwork.

## Declaration

```
object SportingEvent.Artworks
```

## Properties

- `artwork` — `SportingEvent.Artworks.Artwork`: The artwork related to this content.
- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.

  Note: The locale can contain a wildcard; for example, `-au` matches all languages for Australia, and `en-*` matches all countries that have English as a language.

## Topics

### Related objects

- [SportingEvent.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): The artwork related to this content.

## See Also

### Related objects

- [SportingEvent.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
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
