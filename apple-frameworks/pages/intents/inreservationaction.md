> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservationaction](https://developer.apple.com/documentation/intents/inreservationaction)

# INReservationAction (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An action a user can perform that’s relevant to a reservation.

## Declaration

```swift
class INReservationAction
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

## Topics

### Creating a Reservation Action

- [init(type:validDuration:userActivity:)](inreservationaction/init%28type_validduration_useractivity_%29.md): Creates a new reservation action.

### Getting the Reservation Action Information

- [type](inreservationaction/type.md): The type of action for the reservation.
- [INReservationActionType](inreservationactiontype.md): Constants that describe the type of reservation action.
- [userActivity](inreservationaction/useractivity.md): The user activity object used when launching your app.
- [validDuration](inreservationaction/validduration.md): The date and time range that the action is valid.

### Initializers

- [init(coder:)](inreservationaction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common Reservation Data Objects

- [INReservation](inreservation.md): An object that describes a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.

# INReservationAction (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An action a user can perform that’s relevant to a reservation.

## Declaration

```objectivec
@interface INReservationAction : NSObject
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

## Topics

### Creating a Reservation Action

- [initWithType:validDuration:userActivity:](inreservationaction/init%28type_validduration_useractivity_%29.md): Creates a new reservation action.

### Getting the Reservation Action Information

- [type](inreservationaction/type.md): The type of action for the reservation.
- [INReservationActionType](inreservationactiontype.md): Constants that describe the type of reservation action.
- [userActivity](inreservationaction/useractivity.md): The user activity object used when launching your app.
- [validDuration](inreservationaction/validduration.md): The date and time range that the action is valid.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common Reservation Data Objects

- [INReservation](inreservation.md): An object that describes a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.
