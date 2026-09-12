> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct/organizer](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/calendar-swift.struct/organizer)

# organizer

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attributes queried for the event organizer/host.

## Declaration

```swift
var organizer: [SearchableItemAttribute]?
```

## See Also

### Getting the domain attributes

- [attendees](attendees.md): Attributes queried for attendees/participants. Default: [participants](../../../searchableitemattribute/participants.md)
- [date](date.md): Attributes queried for the event date. Default: [dueDate](../../../searchableitemattribute/duedate.md)
- [location](location.md): Attributes queried for the event location. Default: [namedLocation](../../../searchableitemattribute/namedlocation.md), [city](../../../searchableitemattribute/city.md), [stateOrProvince](../../../searchableitemattribute/stateorprovince.md)
