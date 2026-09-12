> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inseat](https://developer.apple.com/documentation/intents/inseat)

# INSeat (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object containing seat information associated with a reservation.

## Declaration

```swift
class INSeat
```

## Topics

### Creating a Seat Object

- [init(seatSection:seatRow:seatNumber:seatingType:)](inseat/init%28seatsection_seatrow_seatnumber_seatingtype_%29.md): Creates a new seat object containing the required seat information.

### Describing a Seat

- [seatSection](inseat/seatsection.md): The seat’s section.
- [seatRow](inseat/seatrow.md): The seat’s row.
- [seatNumber](inseat/seatnumber.md): The seat’s number.
- [seatingType](inseat/seatingtype.md): The seat’s type.

### Initializers

- [init(coder:)](inseat/init%28coder_%29.md)

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
- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.

# INSeat (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object containing seat information associated with a reservation.

## Declaration

```objectivec
@interface INSeat : NSObject
```

## Topics

### Creating a Seat Object

- [initWithSeatSection:seatRow:seatNumber:seatingType:](inseat/init%28seatsection_seatrow_seatnumber_seatingtype_%29.md): Creates a new seat object containing the required seat information.

### Describing a Seat

- [seatSection](inseat/seatsection.md): The seat’s section.
- [seatRow](inseat/seatrow.md): The seat’s row.
- [seatNumber](inseat/seatnumber.md): The seat’s number.
- [seatingType](inseat/seatingtype.md): The seat’s type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common Reservation Data Objects

- [INReservation](inreservation.md): An object that describes a reservation.
- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.
