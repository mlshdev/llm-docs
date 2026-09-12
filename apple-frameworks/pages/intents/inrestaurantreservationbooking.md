> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking)

# INRestaurantReservationBooking (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A potential reservation that a user can book.

## Declaration

```swift
class INRestaurantReservationBooking
```

<a id="overview"></a>

## Overview

An [INRestaurantReservationBooking](inrestaurantreservationbooking.md) object contains information about a potential unbooked reservation. When handling a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object, create instances of this class for each time slot that you want to offer to the user. The system presents this information to the user, allowing them to choose which time slot they prefer. Each reservation booking contains details about the restaurant, date, and party size. They also contain information about special offers and any requirements needed to complete the reservation.

The creation of an [INRestaurantReservationBooking](inrestaurantreservationbooking.md) object does not constitute the booking of the associated reservation. When the user selects a particular time slot, the system sends a [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object to your Intents extension with the selected reservation booking object. At that time, you use the reservation booking object to complete the reservation process.

## Topics

### Initializing the Reservation Booking Object

- [init(restaurant:booking:partySize:bookingIdentifier:)](inrestaurantreservationbooking/init%28restaurant_booking_partysize_bookingidentifier_%29.md): Initializes the reservation object with the specified information and status.

### Accessing the Reservation Information

- [restaurant](inrestaurantreservationbooking/restaurant.md): The restaurant associated with the reservation.
- [partySize](inrestaurantreservationbooking/partysize.md): The total number of guests in the party.
- [offers](inrestaurantreservationbooking/offers.md): An array of special offers from the restaurant.

### Accessing the Booking Information

- [bookingIdentifier](inrestaurantreservationbooking/bookingidentifier.md): The unique identifier associated with this reservation.
- [isBookingAvailable](inrestaurantreservationbooking/isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](inrestaurantreservationbooking/bookingdate.md): The date and time of the reservation.
- [bookingDescription](inrestaurantreservationbooking/bookingdescription.md): An optional description of the booking.

### Configuring the Required Information

- [requiresName](inrestaurantreservationbooking/requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](inrestaurantreservationbooking/requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](inrestaurantreservationbooking/requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](inrestaurantreservationbooking/requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

### Initializers

- [init(coder:)](inrestaurantreservationbooking/init%28coder_%29.md)
- [init(restaurant:bookingDate:partySize:bookingIdentifier:)](inrestaurantreservationbooking/init%28restaurant_bookingdate_partysize_bookingidentifier_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md)

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
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurantReservationBooking (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A potential reservation that a user can book.

## Declaration

```objectivec
@interface INRestaurantReservationBooking : NSObject
```

<a id="overview"></a>

## Overview

An [INRestaurantReservationBooking](inrestaurantreservationbooking.md) object contains information about a potential unbooked reservation. When handling a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object, create instances of this class for each time slot that you want to offer to the user. The system presents this information to the user, allowing them to choose which time slot they prefer. Each reservation booking contains details about the restaurant, date, and party size. They also contain information about special offers and any requirements needed to complete the reservation.

The creation of an [INRestaurantReservationBooking](inrestaurantreservationbooking.md) object does not constitute the booking of the associated reservation. When the user selects a particular time slot, the system sends a [INBookRestaurantReservationIntent](inbookrestaurantreservationintent.md) object to your Intents extension with the selected reservation booking object. At that time, you use the reservation booking object to complete the reservation process.

## Topics

### Initializing the Reservation Booking Object

- [initWithRestaurant:bookingDate:partySize:bookingIdentifier:](inrestaurantreservationbooking/init%28restaurant_booking_partysize_bookingidentifier_%29.md): Initializes the reservation object with the specified information and status.

### Accessing the Reservation Information

- [restaurant](inrestaurantreservationbooking/restaurant.md): The restaurant associated with the reservation.
- [partySize](inrestaurantreservationbooking/partysize.md): The total number of guests in the party.
- [offers](inrestaurantreservationbooking/offers.md): An array of special offers from the restaurant.

### Accessing the Booking Information

- [bookingIdentifier](inrestaurantreservationbooking/bookingidentifier.md): The unique identifier associated with this reservation.
- [bookingAvailable](inrestaurantreservationbooking/isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](inrestaurantreservationbooking/bookingdate.md): The date and time of the reservation.
- [bookingDescription](inrestaurantreservationbooking/bookingdescription.md): An optional description of the booking.

### Configuring the Required Information

- [requiresName](inrestaurantreservationbooking/requiresname.md): A Boolean indicating whether the reservation requires a guest name before booking.
- [requiresEmailAddress](inrestaurantreservationbooking/requiresemailaddress.md): A Boolean indicating whether the reservation requires an email address before it booking.
- [requiresPhoneNumber](inrestaurantreservationbooking/requiresphonenumber.md): A Boolean indicating whether the reservation requires a phone number before booking.
- [requiresManualRequest](inrestaurantreservationbooking/requiresmanualrequest.md): A Boolean indicating whether the reservation requires manually contacting the restaurant to confirm the details.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
