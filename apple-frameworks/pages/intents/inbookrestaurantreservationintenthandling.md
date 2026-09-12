> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintenthandling](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintenthandling)

# INBookRestaurantReservationIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface booking a reservation that the user selected.

## Declaration

```swift
protocol INBookRestaurantReservationIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md) protocol to resolve, confirm, and handle requests to book a reservation based on the provided information. The system delivers an [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object to your handler with the reservation details, including the restaurant, date, party size, and any special offers selected by the user. Use that intent object to complete the reservation in your system and to communicate the reservation details to the restaurant itself.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](inbookrestaurantreservationintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponents(for:completion:)](inbookrestaurantreservationintenthandling/resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySize(for:completion:)](inbookrestaurantreservationintenthandling/resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuest(for:completion:)](inbookrestaurantreservationintenthandling/resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.
- [resolveGuestProvidedSpecialRequestText(for:completion:)](inbookrestaurantreservationintenthandling/resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.

### Confirming the Response

- [confirm(bookRestaurantReservation:completion:)](inbookrestaurantreservationintenthandling/confirm%28bookrestaurantreservation_completion_%29.md): Confirms whether you can complete the reservation.

### Handling the Intent

- [handle(bookRestaurantReservation:completion:)](inbookrestaurantreservationintenthandling/handle%28bookrestaurantreservation_completion_%29.md): Handles completing the user’s reservation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Book Restaurant Reservation

- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md): A request to create a reservation at the specified restaurant.
- [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md): Your app’s response to a book restaurant reservation intent.

# INBookRestaurantReservationIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface booking a reservation that the user selected.

## Declaration

```objectivec
@protocol INBookRestaurantReservationIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md) protocol to resolve, confirm, and handle requests to book a reservation based on the provided information. The system delivers an [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object to your handler with the reservation details, including the restaurant, date, party size, and any special offers selected by the user. Use that intent object to complete the reservation in your system and to communicate the reservation details to the restaurant itself.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation bookings intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurantForBookRestaurantReservation:withCompletion:](inbookrestaurantreservationintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponentsForBookRestaurantReservation:withCompletion:](inbookrestaurantreservationintenthandling/resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySizeForBookRestaurantReservation:withCompletion:](inbookrestaurantreservationintenthandling/resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuestForBookRestaurantReservation:withCompletion:](inbookrestaurantreservationintenthandling/resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.
- [resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation:withCompletion:](inbookrestaurantreservationintenthandling/resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.

### Confirming the Response

- [confirmBookRestaurantReservation:completion:](inbookrestaurantreservationintenthandling/confirm%28bookrestaurantreservation_completion_%29.md): Confirms whether you can complete the reservation.

### Handling the Intent

- [handleBookRestaurantReservation:completion:](inbookrestaurantreservationintenthandling/handle%28bookrestaurantreservation_completion_%29.md): Handles completing the user’s reservation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Book Restaurant Reservation

- [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md): A request to create a reservation at the specified restaurant.
- [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md): Your app’s response to a book restaurant reservation intent.
