> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling)

# INGetUserCurrentRestaurantReservationBookingsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for fetching and delivering the user’s current reservations.

## Declaration

```swift
protocol INGetUserCurrentRestaurantReservationBookingsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md) protocol to resolve, confirm, and handle requests to get the reservations associated with the current user. The system delivers an [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object to your handler when it needs the user’s reservations. Use that intent object to determine whether to retrieve all of the user’s reservations or only some of them. Your Intents extension must be able to fetch the user’s reservations from your systems.

Maps does not require you to resolve or confirm the contents of a get user current restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](ingetusercurrentrestaurantreservationbookingsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when searching for reservations.

### Confirming the Response

- [confirm(getUserCurrentRestaurantReservationBookings:completion:)](ingetusercurrentrestaurantreservationbookingsintenthandling/confirm%28getusercurrentrestaurantreservationbookings_completion_%29.md): Confirms whether you can get the user’s current reservations.

### Handling the Intent

- [handle(getUserCurrentRestaurantReservationBookings:completion:)](ingetusercurrentrestaurantreservationbookingsintenthandling/handle%28getusercurrentrestaurantreservationbookings_completion_%29.md): Handles fetching the user’s current reservations.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md): A request for the list of the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md): Your app’s response to a get user current restaurant reservation bookings intent.

# INGetUserCurrentRestaurantReservationBookingsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for fetching and delivering the user’s current reservations.

## Declaration

```objectivec
@protocol INGetUserCurrentRestaurantReservationBookingsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md) protocol to resolve, confirm, and handle requests to get the reservations associated with the current user. The system delivers an [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object to your handler when it needs the user’s reservations. Use that intent object to determine whether to retrieve all of the user’s reservations or only some of them. Your Intents extension must be able to fetch the user’s reservations from your systems.

Maps does not require you to resolve or confirm the contents of a get user current restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurantForGetUserCurrentRestaurantReservationBookings:withCompletion:](ingetusercurrentrestaurantreservationbookingsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when searching for reservations.

### Confirming the Response

- [confirmGetUserCurrentRestaurantReservationBookings:completion:](ingetusercurrentrestaurantreservationbookingsintenthandling/confirm%28getusercurrentrestaurantreservationbookings_completion_%29.md): Confirms whether you can get the user’s current reservations.

### Handling the Intent

- [handleGetUserCurrentRestaurantReservationBookings:completion:](ingetusercurrentrestaurantreservationbookingsintenthandling/handle%28getusercurrentrestaurantreservationbookings_completion_%29.md): Handles fetching the user’s current reservations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md): A request for the list of the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md): Your app’s response to a get user current restaurant reservation bookings intent.
