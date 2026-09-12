> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintent](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintent)

# INGetAvailableRestaurantReservationBookingDefaultsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the default values to use when fetching potential reservation options.

## Declaration

```swift
class INGetAvailableRestaurantReservationBookingDefaultsIntent
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object asks you to provide the set of default options to use when fetching possible reservation times for the specified restaurant. Because restaurants may have different requirements for booking reservations, this intent lets you provide a set of reasonable default values that reflect any restaurant-specific requirements or user tendencies. For example, you use this intent to return the minimum or maximum party size supported by the restaurant.

To handle this intent, the handler object in your Intents extension must adopt the [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object with the found results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(restaurant:)](ingetavailablerestaurantreservationbookingdefaultsintent/init%28restaurant_%29.md): Initializes the intent object with the specified restaurant.

### Accessing the Restaurant Details

- [restaurant](ingetavailablerestaurantreservationbookingdefaultsintent/restaurant.md): The restaurant to use when determining any default values.

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

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md): The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md): Your app’s response to a get available restaurant reservation booking defaults intent.

# INGetAvailableRestaurantReservationBookingDefaultsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the default values to use when fetching potential reservation options.

## Declaration

```objectivec
@interface INGetAvailableRestaurantReservationBookingDefaultsIntent : INIntent
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object asks you to provide the set of default options to use when fetching possible reservation times for the specified restaurant. Because restaurants may have different requirements for booking reservations, this intent lets you provide a set of reasonable default values that reflect any restaurant-specific requirements or user tendencies. For example, you use this intent to return the minimum or maximum party size supported by the restaurant.

To handle this intent, the handler object in your Intents extension must adopt the [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object with the found results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithRestaurant:](ingetavailablerestaurantreservationbookingdefaultsintent/init%28restaurant_%29.md): Initializes the intent object with the specified restaurant.

### Accessing the Restaurant Details

- [restaurant](ingetavailablerestaurantreservationbookingdefaultsintent/restaurant.md): The restaurant to use when determining any default values.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md): The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md): Your app’s response to a get available restaurant reservation booking defaults intent.
