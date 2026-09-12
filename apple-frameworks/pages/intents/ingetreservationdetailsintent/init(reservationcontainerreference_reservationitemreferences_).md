> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintent/init(reservationcontainerreference:reservationitemreferences:)](https://developer.apple.com/documentation/intents/ingetreservationdetailsintent/init(reservationcontainerreference:reservationitemreferences:))

# init(reservationContainerReference:reservationItemReferences:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the reservation.

## Declaration

```swift
init(reservationContainerReference: INSpeakableString?, reservationItemReferences: [INSpeakableString]?)
```

## Parameters

- `reservationContainerReference`: An [INSpeakableString](../inspeakablestring.md) that uniquely identifies the [reservationItemReferences](reservationitemreferences.md) array.
- `reservationItemReferences`: An array of [INSpeakableString](../inspeakablestring.md) objects in which each object uniquely identifies a single reservation.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INGetReservationDetailsIntent](../ingetreservationdetailsintent.md) object should include information about the reservation that accurately represents the content, where to find it, and where to add it.

# initWithReservationContainerReference:reservationItemReferences: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the reservation.

## Declaration

```objectivec
- (instancetype) initWithReservationContainerReference:(INSpeakableString *) reservationContainerReference reservationItemReferences:(NSArray<INSpeakableString *> *) reservationItemReferences;
```

## Parameters

- `reservationContainerReference`: An [INSpeakableString](../inspeakablestring.md) that uniquely identifies the [reservationItemReferences](reservationitemreferences.md) array.
- `reservationItemReferences`: An array of [INSpeakableString](../inspeakablestring.md) objects in which each object uniquely identifies a single reservation.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INGetReservationDetailsIntent](../ingetreservationdetailsintent.md) object should include information about the reservation that accurately represents the content, where to find it, and where to add it.
