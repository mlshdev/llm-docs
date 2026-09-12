> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponse](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponse)

# INGetUserCurrentRestaurantReservationBookingsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get user current restaurant reservation bookings intent.

## Declaration

```swift
class INGetUserCurrentRestaurantReservationBookingsIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object contains the current reservations associated with the user and matching the search criteria in the corresponding [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object. You create instances of this class when confirming or handling an intent object of that type.

You create an [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object in the [confirm(getUserCurrentRestaurantReservationBookings:completion:)](ingetusercurrentrestaurantreservationbookingsintenthandling/confirm%28getusercurrentrestaurantreservationbookings_completion_%29.md) and [handle(getUserCurrentRestaurantReservationBookings:completion:)](ingetusercurrentrestaurantreservationbookingsintenthandling/handle%28getusercurrentrestaurantreservationbookings_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(userCurrentBookings:code:userActivity:)](ingetusercurrentrestaurantreservationbookingsintentresponse/init%28usercurrentbookings_code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetusercurrentrestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode](ingetusercurrentrestaurantreservationbookingsintentresponsecode.md): Constants indicating the state of the response.

### Specifying the User’s Current Reservations

- [userCurrentBookings](ingetusercurrentrestaurantreservationbookingsintentresponse/usercurrentbookings.md): An array of the user’s current reservations.

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

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md): The handler interface for fetching and delivering the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md): A request for the list of the user’s current reservations.

# INGetUserCurrentRestaurantReservationBookingsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get user current restaurant reservation bookings intent.

## Declaration

```objectivec
@interface INGetUserCurrentRestaurantReservationBookingsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object contains the current reservations associated with the user and matching the search criteria in the corresponding [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object. You create instances of this class when confirming or handling an intent object of that type.

You create an [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object in the [confirmGetUserCurrentRestaurantReservationBookings:completion:](ingetusercurrentrestaurantreservationbookingsintenthandling/confirm%28getusercurrentrestaurantreservationbookings_completion_%29.md) and [handleGetUserCurrentRestaurantReservationBookings:completion:](ingetusercurrentrestaurantreservationbookingsintenthandling/handle%28getusercurrentrestaurantreservationbookings_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithUserCurrentBookings:code:userActivity:](ingetusercurrentrestaurantreservationbookingsintentresponse/init%28usercurrentbookings_code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetusercurrentrestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode](ingetusercurrentrestaurantreservationbookingsintentresponsecode.md): Constants indicating the state of the response.

### Specifying the User’s Current Reservations

- [userCurrentBookings](ingetusercurrentrestaurantreservationbookingsintentresponse/usercurrentbookings.md): An array of the user’s current reservations.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md): The handler interface for fetching and delivering the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md): A request for the list of the user’s current reservations.
