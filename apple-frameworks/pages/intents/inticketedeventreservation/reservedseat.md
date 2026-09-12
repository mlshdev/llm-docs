> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inticketedeventreservation/reservedseat](https://developer.apple.com/documentation/intents/inticketedeventreservation/reservedseat)

# reservedSeat (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s assigned seat for the ticketed event.

## Declaration

```swift
@NSCopying var reservedSeat: INSeat? { get }
```

## See Also

### Getting the Ticketed Event Reservation Information

- [event](event.md): An object containing detailed information about the ticketed event.
- [INTicketedEvent](../inticketedevent.md): The information that describes a ticketed event.

# reservedSeat (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s assigned seat for the ticketed event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSeat * reservedSeat;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSeat * reservedSeat;
```

## See Also

### Getting the Ticketed Event Reservation Information

- [event](event.md): An object containing detailed information about the ticketed event.
- [INTicketedEvent](../inticketedevent.md): The information that describes a ticketed event.
