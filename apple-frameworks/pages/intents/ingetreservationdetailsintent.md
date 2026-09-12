> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintent](https://developer.apple.com/documentation/intents/ingetreservationdetailsintent)

# INGetReservationDetailsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A request for details about one or more reservations.

## Declaration

```swift
class INGetReservationDetailsIntent
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Create an [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) object when the user makes a request to see the details about one or more reservations in your app. The app creates a new [INInteraction](ininteraction.md) object containing the [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) and [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md) object and donates it to the system.

## Topics

### Creating a Get Reservation Intent

- [init(reservationContainerReference:reservationItemReferences:)](ingetreservationdetailsintent/init%28reservationcontainerreference_reservationitemreferences_%29.md): Creates an intent that describes the reservation.

### Accessing a Reservation

- [reservationContainerReference](ingetreservationdetailsintent/reservationcontainerreference.md): A unique identifier for the array containing the reservation objects.
- [reservationItemReferences](ingetreservationdetailsintent/reservationitemreferences.md): An array of unique identifiers for previously created reservations.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Reservation Details

- [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md): Your app’s response to a request for reservation details.

# INGetReservationDetailsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A request for details about one or more reservations.

## Declaration

```objectivec
@interface INGetReservationDetailsIntent : INIntent
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Create an [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) object when the user makes a request to see the details about one or more reservations in your app. The app creates a new [INInteraction](ininteraction.md) object containing the [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) and [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md) object and donates it to the system.

## Topics

### Creating a Get Reservation Intent

- [initWithReservationContainerReference:reservationItemReferences:](ingetreservationdetailsintent/init%28reservationcontainerreference_reservationitemreferences_%29.md): Creates an intent that describes the reservation.

### Accessing a Reservation

- [reservationContainerReference](ingetreservationdetailsintent/reservationcontainerreference.md): A unique identifier for the array containing the reservation objects.
- [reservationItemReferences](ingetreservationdetailsintent/reservationitemreferences.md): An array of unique identifiers for previously created reservations.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Reservation Details

- [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md): Your app’s response to a request for reservation details.
