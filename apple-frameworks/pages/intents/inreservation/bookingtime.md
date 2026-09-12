> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation/bookingtime](https://developer.apple.com/documentation/intents/inreservation/bookingtime)

# bookingTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time the user booked the reservation.

## Declaration

```swift
var bookingTime: Date? { get }
```

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [url](url.md): A webpage the user can access to view reservation details.

# bookingTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time the user booked the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * bookingTime;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDate * bookingTime;
```

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [URL](url.md): A webpage the user can access to view reservation details.
