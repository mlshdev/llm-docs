> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent)

# INBookRestaurantReservationIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request to create a reservation at the specified restaurant.

## Declaration

```swift
class INBookRestaurantReservationIntent
```

<a id="overview"></a>

## Overview

An [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object asks you to book the reservation time selected by the user. Maps sends this intent to your Intents extension when the user selects a reservation time from the available options. Use this intent object to obtain the details of the reservation, including the time slot and any selected special offers. Use those details to confirm the reservation with the restaurant and store the results in your system.

Booking a reservation is the last step in the reservation creation process. By the time the system delivers this intent to your Intents extension, the user has already had an opportunity to view a list of potential reservation times and configure the details of the reservation request. This intent object contains all of the final choices made by the user.

To handle this intent, the handler object in your Intents extension must adopt the [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object with the status of the reservation.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(restaurant:booking:partySize:bookingIdentifier:guest:selectedOffer:guestProvidedSpecialRequestText:)](inbookrestaurantreservationintent/init%28restaurant_booking_partysize_bookingidentifier_guest_selectedoffer_guestprovidedspecialrequesttext_%29.md): Initializes the intent object with the specified booking information.

### Getting the Restaurant Information

- [restaurant](inbookrestaurantreservationintent/restaurant.md): The restaurant to contact regarding the booking.

### Getting the Booking Details

- [bookingDateComponents](inbookrestaurantreservationintent/bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](inbookrestaurantreservationintent/bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](inbookrestaurantreservationintent/partysize.md): The total number of people in the user’s party.
- [guest](inbookrestaurantreservationintent/guest.md): The identity of the guest associated with the reservation.

### Getting Special Requests and Offers

- [guestProvidedSpecialRequestText](inbookrestaurantreservationintent/guestprovidedspecialrequesttext.md): Information about any special requests made by the user.
- [selectedOffer](inbookrestaurantreservationintent/selectedoffer.md): The special offer, if any, selected by the user.

### Initializers

- [init(restaurant:bookingDateComponents:partySize:bookingIdentifier:guest:selectedOffer:guestProvidedSpecialRequestText:)](inbookrestaurantreservationintent/init%28restaurant_bookingdatecomponents_partysize_bookingidentifier_guest_selectedoffer_guestprovidedspecialrequesttext_%29.md)

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

### Book Restaurant Reservation

- [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md): The handler interface booking a reservation that the user selected.
- [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md): Your app’s response to a book restaurant reservation intent.

# INBookRestaurantReservationIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request to create a reservation at the specified restaurant.

## Declaration

```objectivec
@interface INBookRestaurantReservationIntent : INIntent
```

<a id="overview"></a>

## Overview

An [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object asks you to book the reservation time selected by the user. Maps sends this intent to your Intents extension when the user selects a reservation time from the available options. Use this intent object to obtain the details of the reservation, including the time slot and any selected special offers. Use those details to confirm the reservation with the restaurant and store the results in your system.

Booking a reservation is the last step in the reservation creation process. By the time the system delivers this intent to your Intents extension, the user has already had an opportunity to view a list of potential reservation times and configure the details of the reservation request. This intent object contains all of the final choices made by the user.

To handle this intent, the handler object in your Intents extension must adopt the [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md) object with the status of the reservation.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithRestaurant:bookingDateComponents:partySize:bookingIdentifier:guest:selectedOffer:guestProvidedSpecialRequestText:](inbookrestaurantreservationintent/init%28restaurant_booking_partysize_bookingidentifier_guest_selectedoffer_guestprovidedspecialrequesttext_%29.md): Initializes the intent object with the specified booking information.

### Getting the Restaurant Information

- [restaurant](inbookrestaurantreservationintent/restaurant.md): The restaurant to contact regarding the booking.

### Getting the Booking Details

- [bookingDateComponents](inbookrestaurantreservationintent/bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](inbookrestaurantreservationintent/bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](inbookrestaurantreservationintent/partysize.md): The total number of people in the user’s party.
- [guest](inbookrestaurantreservationintent/guest.md): The identity of the guest associated with the reservation.

### Getting Special Requests and Offers

- [guestProvidedSpecialRequestText](inbookrestaurantreservationintent/guestprovidedspecialrequesttext.md): Information about any special requests made by the user.
- [selectedOffer](inbookrestaurantreservationintent/selectedoffer.md): The special offer, if any, selected by the user.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Book Restaurant Reservation

- [INBookRestaurantReservationIntentHandling](inbookrestaurantreservationintenthandling.md): The handler interface booking a reservation that the user selected.
- [INBookRestaurantReservationIntentResponse](inbookrestaurantreservationintentresponse.md): Your app’s response to a book restaurant reservation intent.
