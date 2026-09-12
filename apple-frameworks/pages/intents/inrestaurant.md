> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurant](https://developer.apple.com/documentation/intents/inrestaurant)

# INRestaurant (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A restaurant for which your app can make and manage reservations.

## Declaration

```swift
class INRestaurant
```

<a id="overview"></a>

## Overview

An [INRestaurant](inrestaurant.md) object contains identifying information for a restaurant. You must work with Apple to integrate your restaurant-specific information into the back-end database. Later, when the user selects a restaurant and tries to book a reservation, Apple packages the information you provided into a restaurant object and delivers it to your Intents extension. You use that information to look up the restaurant on your own server and retrieve any necessary information about it.

## Topics

### Initializing a Restaurant Object

- [init(location:name:vendorIdentifier:restaurantIdentifier:)](inrestaurant/init%28location_name_vendoridentifier_restaurantidentifier_%29.md): Initializes a restaurant object with some identifying information.

### Accessing the Restaurant Information

- [name](inrestaurant/name.md): The name of the restaurant.
- [location](inrestaurant/location.md): The location of the restaurant.
- [restaurantIdentifier](inrestaurant/restaurantidentifier.md): A unique identifier for the restaurant.
- [vendorIdentifier](inrestaurant/vendoridentifier.md): The provider of the restaurant data.

### Initializers

- [init(coder:)](inrestaurant/init%28coder_%29.md)

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

- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.

# INRestaurant (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A restaurant for which your app can make and manage reservations.

## Declaration

```objectivec
@interface INRestaurant : NSObject
```

<a id="overview"></a>

## Overview

An [INRestaurant](inrestaurant.md) object contains identifying information for a restaurant. You must work with Apple to integrate your restaurant-specific information into the back-end database. Later, when the user selects a restaurant and tries to book a reservation, Apple packages the information you provided into a restaurant object and delivers it to your Intents extension. You use that information to look up the restaurant on your own server and retrieve any necessary information about it.

## Topics

### Initializing a Restaurant Object

- [initWithLocation:name:vendorIdentifier:restaurantIdentifier:](inrestaurant/init%28location_name_vendoridentifier_restaurantidentifier_%29.md): Initializes a restaurant object with some identifying information.

### Accessing the Restaurant Information

- [name](inrestaurant/name.md): The name of the restaurant.
- [location](inrestaurant/location.md): The location of the restaurant.
- [restaurantIdentifier](inrestaurant/restaurantidentifier.md): A unique identifier for the restaurant.
- [vendorIdentifier](inrestaurant/vendoridentifier.md): The provider of the restaurant data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRestaurantGuest](inrestaurantguest.md): The person assigned to a reservation.
- [INRestaurantGuestDisplayPreferences](inrestaurantguestdisplaypreferences.md): Options about how to display guest information from system interfaces.
- [INRestaurantOffer](inrestaurantoffer.md): Information about special offers made by a restaurant.
- [INRestaurantReservationBooking](inrestaurantreservationbooking.md): A potential reservation that a user can book.
- [INRestaurantReservationUserBooking](inrestaurantreservationuserbooking.md): A reservation created by a user.
- [INTermsAndConditions](intermsandconditions.md): The terms and conditions of service when making restaurant reservations.
- [INRestaurantReservationUserBookingStatus](inrestaurantreservationuserbookingstatus.md): Constants indicating the status of a user reservation.
