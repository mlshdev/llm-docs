> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentresponse](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentresponse)

# INBookRestaurantReservationIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a book restaurant reservation intent.

## Declaration

```swift
class INBookRestaurantReservationIntentResponse
```

<a id="overview"></a>

## Overview

An [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object contains final reservation booking information. You create an instance of this class when confirming or handling an [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object, which contains the details of the reservation that you need to book.

You create an [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object in the [confirm(bookRestaurantReservation:completion:)](inbookrestaurantreservationintenthandling/confirm%28bookrestaurantreservation_completion_%29.md) and [handle(bookRestaurantReservation:completion:)](inbookrestaurantreservationintenthandling/handle%28bookrestaurantreservation_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inbookrestaurantreservationintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Accessing the Response Information

- [code](inbookrestaurantreservationintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INBookRestaurantReservationIntentCode](inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.
- [userBooking](inbookrestaurantreservationintentresponse/userbooking.md): The detailed information about the reservation.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Book Restaurant Reservation

- [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md): The handler interface booking a reservation that the user selected.
- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md): A request to create a reservation at the specified restaurant.

# INBookRestaurantReservationIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a book restaurant reservation intent.

## Declaration

```objectivec
@interface INBookRestaurantReservationIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object contains final reservation booking information. You create an instance of this class when confirming or handling an [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object, which contains the details of the reservation that you need to book.

You create an [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object in the [confirmBookRestaurantReservation:completion:](inbookrestaurantreservationintenthandling/confirm%28bookrestaurantreservation_completion_%29.md) and [handleBookRestaurantReservation:completion:](inbookrestaurantreservationintenthandling/handle%28bookrestaurantreservation_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inbookrestaurantreservationintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Accessing the Response Information

- [code](inbookrestaurantreservationintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INBookRestaurantReservationIntentCode](inbookrestaurantreservationintentcode.md): Constants indicating the state of the response.
- [userBooking](inbookrestaurantreservationintentresponse/userbooking.md): The detailed information about the reservation.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Book Restaurant Reservation

- [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md): The handler interface booking a reservation that the user selected.
- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md): A request to create a reservation at the specified restaurant.
