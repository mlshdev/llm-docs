> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation/reservationnumber](https://developer.apple.com/documentation/intents/inreservation/reservationnumber)

# reservationNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The reservation number.

## Declaration

```swift
var reservationNumber: String? { get }
```

<a id="Discussion"></a>

## Discussion

Provide your system’s reference number for the reservation. Use a consistent, unique identifier for each reservation. If you also provide reservation information with [Siri Event Suggestions Markup](https://developer.apple.com/documentation/sirieventsuggestionsmarkup) on your website or in emails, use the same value for the [reservationId](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/reservationid) in the reservation markup.

For a multipart booking, such as round-trip travel, you may provide the same `reservationNumber` for each reservation.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [url](url.md): A webpage the user can access to view reservation details.

# reservationNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The reservation number.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * reservationNumber;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * reservationNumber;
```

<a id="Discussion"></a>

## Discussion

Provide your system’s reference number for the reservation. Use a consistent, unique identifier for each reservation. If you also provide reservation information with [Siri Event Suggestions Markup](https://developer.apple.com/documentation/sirieventsuggestionsmarkup) on your website or in emails, use the same value for the [reservationId](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/reservationid) in the reservation markup.

For a multipart booking, such as round-trip travel, you may provide the same `reservationNumber` for each reservation.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [itemReference](itemreference.md): A unique reference for the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [URL](url.md): A webpage the user can access to view reservation details.
