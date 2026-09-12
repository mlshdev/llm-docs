> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation/url](https://developer.apple.com/documentation/intents/inreservation/url)

# url (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

A webpage the user can access to view reservation details.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

Provide a URL in your reservations so that the user can access reservation details from a device on which your app is unavailable.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.

# URL (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

A webpage the user can access to view reservation details.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * URL;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Provide a URL in your reservations so that the user can access reservation details from a device on which your app is unavailable.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
