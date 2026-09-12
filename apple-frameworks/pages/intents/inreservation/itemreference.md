> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation/itemreference](https://developer.apple.com/documentation/intents/inreservation/itemreference)

# itemReference (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A unique reference for the reservation.

## Declaration

```swift
@NSCopying var itemReference: INSpeakableString { get }
```

<a id="Discussion"></a>

## Discussion

Provide information that identifies this specific reservation. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) should be specific enough that your app can use it to retrieve and display this reservation’s info later. The [spokenPhrase](../inspeakable/spokenphrase.md) should describe the event to the user. For example, a restaurant reservation might use a phrase like `“Table for 2 at McNeil’s on February 11”` or `“7pm at McNeil’s”`. For a multi-part reservation, such as a round-trip ticket, provide an `itemReference` that is specific to this portion of the overall reservation.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [url](url.md): A webpage the user can access to view reservation details.

# itemReference (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A unique reference for the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INSpeakableString * itemReference;
```

```objectivec
@property (atomic, copy, readonly) INSpeakableString * itemReference;
```

<a id="Discussion"></a>

## Discussion

Provide information that identifies this specific reservation. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) should be specific enough that your app can use it to retrieve and display this reservation’s info later. The [spokenPhrase](../inspeakable/spokenphrase.md) should describe the event to the user. For example, a restaurant reservation might use a phrase like `“Table for 2 at McNeil’s on February 11”` or `“7pm at McNeil’s”`. For a multi-part reservation, such as a round-trip ticket, provide an `itemReference` that is specific to this portion of the overall reservation.

## See Also

### Describing the Reservation

- [reservationHolderName](reservationholdername.md): The reservation holder’s name.
- [reservationNumber](reservationnumber.md): The reservation number.
- [reservationStatus](reservationstatus.md): The current status of the reservation.
- [bookingTime](bookingtime.md): The date and time the user booked the reservation.
- [actions](actions.md): An array containing actions the user can perform on the reservation.
- [URL](url.md): A webpage the user can access to view reservation details.
