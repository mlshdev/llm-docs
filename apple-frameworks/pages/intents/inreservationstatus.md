> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservationstatus](https://developer.apple.com/documentation/intents/inreservationstatus)

# INReservationStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the current status of the reservation.

## Declaration

```swift
enum INReservationStatus
```

## Topics

### Reservation Status

- [INReservationStatus.unknown](inreservationstatus/unknown.md): The current reservation is unknown.
- [INReservationStatus.canceled](inreservationstatus/canceled.md): The user or business canceled the reservation.
- [INReservationStatus.pending](inreservationstatus/pending.md): The reservation confirmation is pending.
- [INReservationStatus.hold](inreservationstatus/hold.md): The reservation is on hold.
- [INReservationStatus.confirmed](inreservationstatus/confirmed.md): The reservation is confirmed.

### Initializers

- [init(rawValue:)](inreservationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common Reservation Data Objects

- [INReservation](inreservation.md): An object that describes a reservation.
- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.

# INReservationStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the current status of the reservation.

## Declaration

```objectivec
enum INReservationStatus : NSInteger;
```

## Topics

### Reservation Status

- [INReservationStatusUnknown](inreservationstatus/unknown.md): The current reservation is unknown.
- [INReservationStatusCanceled](inreservationstatus/canceled.md): The user or business canceled the reservation.
- [INReservationStatusPending](inreservationstatus/pending.md): The reservation confirmation is pending.
- [INReservationStatusHold](inreservationstatus/hold.md): The reservation is on hold.
- [INReservationStatusConfirmed](inreservationstatus/confirmed.md): The reservation is confirmed.

## See Also

### Common Reservation Data Objects

- [INReservation](inreservation.md): An object that describes a reservation.
- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.
