> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguest](https://developer.apple.com/documentation/intents/inrestaurantguest)

# INRestaurantGuest (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The person assigned to a reservation.

## Declaration

```swift
class INRestaurantGuest
```

<a id="overview"></a>

## Overview

An [INRestaurantGuest](inrestaurantguest.md) object identifies the user assigned to a reservation and includes contact information used to communicate changes or updates to the reservation. During the creation of a reservation, the system sends a [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) intent to your Intents extension and asks it to provide the identity of the guest to assign to the reservation. You create an instance of this class and associate it with your response to that intent.

Depending on the preferences you return to the system about how to display guest information, the user might have the option of changing the name and contact info assigned to a reservation. When that happens, the system may return a new instance of this class during the final booking stages of the reservation with the revised guest information.

## Topics

### Initializing a Restaurant Guest

- [init(nameComponents:phoneNumber:emailAddress:)](inrestaurantguest/init%28namecomponents_phonenumber_emailaddress_%29.md): Initializes the object with the specified name and contact information for the user.

### Accessing the Guest Information

- [phoneNumber](inrestaurantguest/phonenumber.md): The phone number to use when contacting the user about reservations.
- [emailAddress](inrestaurantguest/emailaddress.md): The email address to use when contacting the user about reservations.

## Relationships

### Inherits From

- [INPerson](inperson.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INSpeakable](inspeakable.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurantGuest (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The person assigned to a reservation.

## Declaration

```objectivec
@interface INRestaurantGuest : INPerson
```

<a id="overview"></a>

## Overview

An [INRestaurantGuest](inrestaurantguest.md) object identifies the user assigned to a reservation and includes contact information used to communicate changes or updates to the reservation. During the creation of a reservation, the system sends a [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) intent to your Intents extension and asks it to provide the identity of the guest to assign to the reservation. You create an instance of this class and associate it with your response to that intent.

Depending on the preferences you return to the system about how to display guest information, the user might have the option of changing the name and contact info assigned to a reservation. When that happens, the system may return a new instance of this class during the final booking stages of the reservation with the revised guest information.

## Topics

### Initializing a Restaurant Guest

- [initWithNameComponents:phoneNumber:emailAddress:](inrestaurantguest/init%28namecomponents_phonenumber_emailaddress_%29.md): Initializes the object with the specified name and contact information for the user.

### Accessing the Guest Information

- [phoneNumber](inrestaurantguest/phonenumber.md): The phone number to use when contacting the user about reservations.
- [emailAddress](inrestaurantguest/emailaddress.md): The email address to use when contacting the user about reservations.

## Relationships

### Inherits From

- [INPerson](inperson.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
