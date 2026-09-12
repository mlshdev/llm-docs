> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling)

# INGetAvailableRestaurantReservationBookingsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for generating a list of potential reservation times from which the user can select.

## Declaration

```swift
protocol INGetAvailableRestaurantReservationBookingsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md) protocol to resolve, confirm, and handle requests for an initial set of reservation times from which to select. The system delivers an [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object to your handler with information about the user’s party and preferred reservation time. Use that intent object to generate a list of potential reservation times from which the user can select.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePartySize(for:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.
- [resolvePreferredBookingDateComponents(for:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.

### Confirming the Response

- [confirm(getAvailableRestaurantReservationBookings:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/confirm%28getavailablerestaurantreservationbookings_completion_%29.md): Confirms whether you can provide a set of potential reservation times.

### Handling the Intent

- [handle(getAvailableRestaurantReservationBookings:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/handle%28getavailablerestaurantreservationbookings_completion_%29.md): Handles generating the list of potential reservation times.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md): A request for the time slots available for making a reservation.
- [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md): Your app’s response to a get available restaurant reservation bookings intent.

# INGetAvailableRestaurantReservationBookingsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for generating a list of potential reservation times from which the user can select.

## Declaration

```objectivec
@protocol INGetAvailableRestaurantReservationBookingsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md) protocol to resolve, confirm, and handle requests for an initial set of reservation times from which to select. The system delivers an [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object to your handler with information about the user’s party and preferred reservation time. Use that intent object to generate a list of potential reservation times from which the user can select.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurantForGetAvailableRestaurantReservationBookings:withCompletion:](ingetavailablerestaurantreservationbookingsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePartySizeForGetAvailableRestaurantReservationBookings:withCompletion:](ingetavailablerestaurantreservationbookingsintenthandling/resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.
- [resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings:withCompletion:](ingetavailablerestaurantreservationbookingsintenthandling/resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.

### Confirming the Response

- [confirmGetAvailableRestaurantReservationBookings:completion:](ingetavailablerestaurantreservationbookingsintenthandling/confirm%28getavailablerestaurantreservationbookings_completion_%29.md): Confirms whether you can provide a set of potential reservation times.

### Handling the Intent

- [handleGetAvailableRestaurantReservationBookings:completion:](ingetavailablerestaurantreservationbookingsintenthandling/handle%28getavailablerestaurantreservationbookings_completion_%29.md): Handles generating the list of potential reservation times.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md): A request for the time slots available for making a reservation.
- [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md): Your app’s response to a get available restaurant reservation bookings intent.
