> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inbusreservation/reservedseat

# reservedSeat (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Seat information for the bus reservation.

## Declaration

```swift
@NSCopying var reservedSeat: INSeat? { get }
```

## See Also

### Getting the Bus Trip Reservation Information

- [busTrip](bustrip.md): Information describing a bus trip.
- [INBusTrip](../inbustrip.md): Information describing a bus trip.

# reservedSeat (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Seat information for the bus reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSeat * reservedSeat;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSeat * reservedSeat;
```

## See Also

### Getting the Bus Trip Reservation Information

- [busTrip](bustrip.md): Information describing a bus trip.
- [INBusTrip](../inbustrip.md): Information describing a bus trip.
