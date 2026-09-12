> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct)

# SpotlightSearchTool.ContentDomain.Calendar

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the calendar domain.

## Declaration

```swift
struct Calendar
```

## Topics

### Configuring the domain

- [init(organizer:attendees:location:date:)](calendar-swift.struct/init%28organizer_attendees_location_date_%29.md)

### Getting the domain attributes

- [attendees](calendar-swift.struct/attendees.md): Attributes queried for attendees/participants. Default: [participants](../../searchableitemattribute/participants.md)
- [date](calendar-swift.struct/date.md): Attributes queried for the event date. Default: [dueDate](../../searchableitemattribute/duedate.md)
- [location](calendar-swift.struct/location.md): Attributes queried for the event location. Default: [namedLocation](../../searchableitemattribute/namedlocation.md), [city](../../searchableitemattribute/city.md), [stateOrProvince](../../searchableitemattribute/stateorprovince.md)
- [organizer](calendar-swift.struct/organizer.md): Attributes queried for the event organizer/host.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the calendar domain

- [calendar](calendar-swift.type.property.md): Calendar events, meetings, and scheduled items.
- [calendar(\_:)](calendar%28__%29.md): Calendar events, meetings, and scheduled items with custom attribute mapping.
