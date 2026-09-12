> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inticketedevent/location](https://developer.apple.com/documentation/intents/inticketedevent/location)

# location (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The name and location of the ticketed event.

## Declaration

```swift
@NSCopying var location: CLPlacemark? { get }
```

## See Also

### Getting Ticketed Event Information

- [category](category.md): The type of ticketed event.
- [INTicketedEventCategory](../inticketedeventcategory.md): Constants that define the type of ticketed event.
- [eventDuration](eventduration.md): The date and time range that indicates the beginning and end of the event.
- [name](name.md): The name of the event.

# location (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The name and location of the ticketed event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * location;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * location;
```

## See Also

### Getting Ticketed Event Information

- [category](category.md): The type of ticketed event.
- [INTicketedEventCategory](../inticketedeventcategory.md): Constants that define the type of ticketed event.
- [eventDuration](eventduration.md): The date and time range that indicates the beginning and end of the event.
- [name](name.md): The name of the event.
