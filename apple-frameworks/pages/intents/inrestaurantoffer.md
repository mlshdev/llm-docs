> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantoffer](https://developer.apple.com/documentation/intents/inrestaurantoffer)

# INRestaurantOffer (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about special offers made by a restaurant.

## Declaration

```swift
class INRestaurantOffer
```

<a id="overview"></a>

## Overview

An [INRestaurantOffer](inrestaurantoffer.md) object provides information about a special offer made by a restaurant. Restaurants might offer special pricing as part of a promotion or advertisement. This object captures the details of an offer, which the system then displays to the user during the reservation selection process. When booking the reservation, you include the offer selected by the user with the information you provide to the restaurant.

When creating a response to a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) intent, you create [INRestaurantReservationBooking](inrestaurantreservationbooking.md) objects with information about the time slots available to the user. If a restaurant offers special deals in a given time slot, create one or more instances of this class, populate them with the details of the offers, and assign them to the corresponding [INRestaurantReservationBooking](inrestaurantreservationbooking.md) objects.

You are responsible for obtaining the information about special offers from the restaurants you support. Including special offers with reservations is not required.

## Topics

### Accessing the Offer Details

- [offerTitleText](inrestaurantoffer/offertitletext.md): The user-readable text that summarizes the offer.
- [offerDetailText](inrestaurantoffer/offerdetailtext.md): The user-readable text containing the details of the offer.
- [offerIdentifier](inrestaurantoffer/offeridentifier.md): The unique identifier associated with the offer.

### Initializers

- [init(coder:)](inrestaurantoffer/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurantOffer (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about special offers made by a restaurant.

## Declaration

```objectivec
@interface INRestaurantOffer : NSObject
```

<a id="overview"></a>

## Overview

An [INRestaurantOffer](inrestaurantoffer.md) object provides information about a special offer made by a restaurant. Restaurants might offer special pricing as part of a promotion or advertisement. This object captures the details of an offer, which the system then displays to the user during the reservation selection process. When booking the reservation, you include the offer selected by the user with the information you provide to the restaurant.

When creating a response to a [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) intent, you create [INRestaurantReservationBooking](inrestaurantreservationbooking.md) objects with information about the time slots available to the user. If a restaurant offers special deals in a given time slot, create one or more instances of this class, populate them with the details of the offers, and assign them to the corresponding [INRestaurantReservationBooking](inrestaurantreservationbooking.md) objects.

You are responsible for obtaining the information about special offers from the restaurants you support. Including special offers with reservations is not required.

## Topics

### Accessing the Offer Details

- [offerTitleText](inrestaurantoffer/offertitletext.md): The user-readable text that summarizes the offer.
- [offerDetailText](inrestaurantoffer/offerdetailtext.md): The user-readable text containing the details of the offer.
- [offerIdentifier](inrestaurantoffer/offeridentifier.md): The unique identifier associated with the offer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurant](inrestaurant.md): A restaurant for which your app can make and manage reservations.
- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
