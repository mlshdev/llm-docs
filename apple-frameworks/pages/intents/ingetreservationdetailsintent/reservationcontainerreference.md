> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintent/reservationcontainerreference](https://developer.apple.com/documentation/intents/ingetreservationdetailsintent/reservationcontainerreference)

# reservationContainerReference (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A unique identifier for the array containing the reservation objects.

## Declaration

```swift
@NSCopying var reservationContainerReference: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an [INSpeakableString](../inspeakablestring.md) that serves as an identifier for the list of reservations about which the user requested details. Set the [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property to a string that uniquely identifies the group of reservations within your app and the [spokenPhrase](../inspeakable/spokenphrase.md) property to a string that makes sense to the user when displayed.

## See Also

### Accessing a Reservation

- [reservationItemReferences](reservationitemreferences.md): An array of unique identifiers for previously created reservations.

# reservationContainerReference (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A unique identifier for the array containing the reservation objects.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * reservationContainerReference;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * reservationContainerReference;
```

<a id="Discussion"></a>

## Discussion

This property contains an [INSpeakableString](../inspeakablestring.md) that serves as an identifier for the list of reservations about which the user requested details. Set the [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property to a string that uniquely identifies the group of reservations within your app and the [spokenPhrase](../inspeakable/spokenphrase.md) property to a string that makes sense to the user when displayed.

## See Also

### Accessing a Reservation

- [reservationItemReferences](reservationitemreferences.md): An array of unique identifiers for previously created reservations.
