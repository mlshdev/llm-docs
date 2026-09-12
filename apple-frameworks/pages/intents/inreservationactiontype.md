> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservationactiontype](https://developer.apple.com/documentation/intents/inreservationactiontype)

# INReservationActionType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the type of reservation action.

## Declaration

```swift
enum INReservationActionType
```

## Topics

### Action Type

- [INReservationActionType.unknown](inreservationactiontype/unknown.md): An unknown state.
- [INReservationActionType.checkIn](inreservationactiontype/checkin.md): A check-in action.

### Initializers

- [init(rawValue:)](inreservationactiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Reservation Action Information

- [type](inreservationaction/type.md): The type of action for the reservation.
- [userActivity](inreservationaction/useractivity.md): The user activity object used when launching your app.
- [validDuration](inreservationaction/validduration.md): The date and time range that the action is valid.

# INReservationActionType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the type of reservation action.

## Declaration

```objectivec
enum INReservationActionType : NSInteger;
```

## Topics

### Action Type

- [INReservationActionTypeUnknown](inreservationactiontype/unknown.md): An unknown state.
- [INReservationActionTypeCheckIn](inreservationactiontype/checkin.md): A check-in action.

## See Also

### Getting the Reservation Action Information

- [type](inreservationaction/type.md): The type of action for the reservation.
- [userActivity](inreservationaction/useractivity.md): The user activity object used when launching your app.
- [validDuration](inreservationaction/validduration.md): The date and time range that the action is valid.
