> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation/actions](https://developer.apple.com/documentation/intents/inreservation/actions)

# actions (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array containing actions the user can perform on the reservation.

## Declaration

```swift
var actions: [INReservationAction]? { get }
```

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [url](url.md): A webpage the user can access to view reservation details.

# actions (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array containing actions the user can perform on the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INReservationAction *> * actions;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INReservationAction *> * actions;
```

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [URL](url.md): A webpage the user can access to view reservation details.
