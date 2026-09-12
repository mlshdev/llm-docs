> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct/attendees](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct/attendees)

# attendees

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attributes queried for attendees/participants. Default: [participants](../../../searchableitemattribute/participants.md)

## Declaration

```swift
var attendees: [SearchableItemAttribute]?
```

## See Also

### Getting the domain attributes

- [date](date.md): Attributes queried for the event date. Default: [dueDate](../../../searchableitemattribute/duedate.md)
- [location](location.md): Attributes queried for the event location. Default: [namedLocation](../../../searchableitemattribute/namedlocation.md), [city](../../../searchableitemattribute/city.md), [stateOrProvince](../../../searchableitemattribute/stateorprovince.md)
- [organizer](organizer.md): Attributes queried for the event organizer/host.
