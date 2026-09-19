> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intrainreservation/reservedseat

# reservedSeat (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The seat reserved for the user.

## Declaration

```swift
@NSCopying var reservedSeat: INSeat? { get }
```

## See Also

### Getting the Train Reservation Information

- [trainTrip](traintrip.md): An object containing the detailed information about the train trip.
- [INTrainTrip](../intraintrip.md): The information that describes a train trip.

# reservedSeat (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The seat reserved for the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSeat * reservedSeat;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSeat * reservedSeat;
```

## See Also

### Getting the Train Reservation Information

- [trainTrip](traintrip.md): An object containing the detailed information about the train trip.
- [INTrainTrip](../intraintrip.md): The information that describes a train trip.
