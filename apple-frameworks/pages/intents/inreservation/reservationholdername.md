> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inreservation/reservationholdername

# reservationHolderName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The reservation holder’s name.

## Declaration

```swift
var reservationHolderName: String? { get }
```

## See Also

### Describing the Reservation

- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [url](url.md): A webpage the user can access to view reservation details.

# reservationHolderName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The reservation holder’s name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * reservationHolderName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * reservationHolderName;
```

## See Also

### Describing the Reservation

- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [URL](url.md): A webpage the user can access to view reservation details.
