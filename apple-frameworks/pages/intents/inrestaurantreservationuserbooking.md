> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking)

# INRestaurantReservationUserBooking (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reservation created by a user.

## Declaration

```swift
class INRestaurantReservationUserBooking
```

<a id="overview"></a>

## Overview

An [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md) object contains information about a reservation placed by a user. When the user actually books a reservation at a restaurant, you create an instance of this class to represent the reservation details. This object contains the specific details of the reservation, including any user-specified information such as selected offers or special requests.

You create instances of this class when providing responses to [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) or [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) objects. After initializing an instance of this class with basic information, fill in any additional properties with details relevant to the reservation before returning it with your response.

For information about additional properties of this class that you can configure for a booking, see [INRestaurantReservationBooking](inrestaurantreservationbooking.md).

## Topics

### Initializing a Reservation

- [init(restaurant:booking:partySize:bookingIdentifier:guest:status:dateStatusModified:)](inrestaurantreservationuserbooking/init%28restaurant_booking_partysize_bookingidentifier_guest_status_datestatusmodified_%29.md): Initializes the reservation object with the specified information and status.

### Accessing the Reservation Information

- [guest](inrestaurantreservationuserbooking/guest.md): The guest associated with the reservation.
- [status](inrestaurantreservationuserbooking/status.md): The current status of the reservation.
- [dateStatusModified](inrestaurantreservationuserbooking/datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](inrestaurantreservationuserbooking/guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

### Accessing Special Offers

- [selectedOffer](inrestaurantreservationuserbooking/selectedoffer.md): The offer selected by the user.
- [advisementText](inrestaurantreservationuserbooking/advisementtext.md): A user-readable string containing policies and information related to the reservation.

### Constants

- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

### Initializers

- [init(restaurant:bookingDate:partySize:bookingIdentifier:guest:status:dateStatusModified:)](inrestaurantreservationuserbooking/init%28restaurant_bookingdate_partysize_bookingidentifier_guest_status_datestatusmodified_%29.md)

## Relationships

### Inherits From

- [INRestaurantReservationBooking](inrestaurantreservationbooking.md)

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

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurantReservationUserBooking (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reservation created by a user.

## Declaration

```objectivec
@interface INRestaurantReservationUserBooking : INRestaurantReservationBooking
```

<a id="overview"></a>

## Overview

An [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md) object contains information about a reservation placed by a user. When the user actually books a reservation at a restaurant, you create an instance of this class to represent the reservation details. This object contains the specific details of the reservation, including any user-specified information such as selected offers or special requests.

You create instances of this class when providing responses to [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) or [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) objects. After initializing an instance of this class with basic information, fill in any additional properties with details relevant to the reservation before returning it with your response.

For information about additional properties of this class that you can configure for a booking, see [INRestaurantReservationBooking](inrestaurantreservationbooking.md).

## Topics

### Initializing a Reservation

- [initWithRestaurant:bookingDate:partySize:bookingIdentifier:guest:status:dateStatusModified:](inrestaurantreservationuserbooking/init%28restaurant_booking_partysize_bookingidentifier_guest_status_datestatusmodified_%29.md): Initializes the reservation object with the specified information and status.

### Accessing the Reservation Information

- [guest](inrestaurantreservationuserbooking/guest.md): The guest associated with the reservation.
- [status](inrestaurantreservationuserbooking/status.md): The current status of the reservation.
- [dateStatusModified](inrestaurantreservationuserbooking/datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](inrestaurantreservationuserbooking/guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

### Accessing Special Offers

- [selectedOffer](inrestaurantreservationuserbooking/selectedoffer.md): The offer selected by the user.
- [advisementText](inrestaurantreservationuserbooking/advisementtext.md): A user-readable string containing policies and information related to the reservation.

### Constants

- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

## Relationships

### Inherits From

- [INRestaurantReservationBooking](inrestaurantreservationbooking.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
