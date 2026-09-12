> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintent/reservationitemreferences](https://developer.apple.com/documentation/intents/ingetreservationdetailsintent/reservationitemreferences)

# reservationItemReferences (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array of unique identifiers for previously created reservations.

## Declaration

```swift
var reservationItemReferences: [INSpeakableString]? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of unique identifiers for user-created reservations. You can provide a textual representation for this property, such as “Flight to Los Angeles” to describe an airline reservation.

## See Also

### Accessing a Reservation

- [reservationContainerReference](reservationcontainerreference.md): A unique identifier for the array containing the reservation objects.

# reservationItemReferences (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array of unique identifiers for previously created reservations.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INSpeakableString *> * reservationItemReferences;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INSpeakableString *> * reservationItemReferences;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of unique identifiers for user-created reservations. You can provide a textual representation for this property, such as “Flight to Los Angeles” to describe an airline reservation.

## See Also

### Accessing a Reservation

- [reservationContainerReference](reservationcontainerreference.md): A unique identifier for the array containing the reservation objects.
