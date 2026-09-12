> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent)

# INGetUserCurrentRestaurantReservationBookingsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the list of the user’s current reservations.

## Declaration

```swift
class INGetUserCurrentRestaurantReservationBookingsIntent
```

<a id="overview"></a>

## Overview

An [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object asks you to retrieve the current restaurant reservations associated with the user. Maps sends this intent to your Intents extension when it needs information about all of the user’s current reservations, or when it needs information about one or more specific reservations. Use the properties of this object to determine which reservations to return.

When searching for reservations, use the [reservationIdentifier](ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier.md) properties to fetch only the specified reservation, or use the [restaurant](ingetusercurrentrestaurantreservationbookingsintent/restaurant.md) property to fetch pending reservations only at the specified restaurant. If both of those properties are `nil`, retrieve all of the user’s currently pending reservations. After fetching the appropriate set of reservations, use the [maximumNumberOfResults](ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults.md) and [earliestBookingDateForResults](ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults.md) properties to limit the set of results you return as part of your response.

To handle this intent, the handler object in your Intents extension must adopt the [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object using the found results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(restaurant:reservationIdentifier:maximumNumberOfResults:earliestBookingDateForResults:)](ingetusercurrentrestaurantreservationbookingsintent/init%28restaurant_reservationidentifier_maximumnumberofresults_earliestbookingdateforresults_%29.md): Initializes the intent object with the specified reservation information.

### Getting the Search Parameters

- [restaurant](ingetusercurrentrestaurantreservationbookingsintent/restaurant.md): A restaurant to use as a filter when searching for reservations.
- [reservationIdentifier](ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier.md): An identifier to use when searching for the user’s reservations.

### Getting the Result Limits

- [maximumNumberOfResults](ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults.md): The maximum number of reservations to include in your response object.
- [earliestBookingDateForResults](ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults.md): The earliest date to associate with any reservations.

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

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md): The handler interface for fetching and delivering the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md): Your app’s response to a get user current restaurant reservation bookings intent.

# INGetUserCurrentRestaurantReservationBookingsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the list of the user’s current reservations.

## Declaration

```objectivec
@interface INGetUserCurrentRestaurantReservationBookingsIntent : INIntent
```

<a id="overview"></a>

## Overview

An [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object asks you to retrieve the current restaurant reservations associated with the user. Maps sends this intent to your Intents extension when it needs information about all of the user’s current reservations, or when it needs information about one or more specific reservations. Use the properties of this object to determine which reservations to return.

When searching for reservations, use the [reservationIdentifier](ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier.md) properties to fetch only the specified reservation, or use the [restaurant](ingetusercurrentrestaurantreservationbookingsintent/restaurant.md) property to fetch pending reservations only at the specified restaurant. If both of those properties are `nil`, retrieve all of the user’s currently pending reservations. After fetching the appropriate set of reservations, use the [maximumNumberOfResults](ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults.md) and [earliestBookingDateForResults](ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults.md) properties to limit the set of results you return as part of your response.

To handle this intent, the handler object in your Intents extension must adopt the [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md) object using the found results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithRestaurant:reservationIdentifier:maximumNumberOfResults:earliestBookingDateForResults:](ingetusercurrentrestaurantreservationbookingsintent/init%28restaurant_reservationidentifier_maximumnumberofresults_earliestbookingdateforresults_%29.md): Initializes the intent object with the specified reservation information.

### Getting the Search Parameters

- [restaurant](ingetusercurrentrestaurantreservationbookingsintent/restaurant.md): A restaurant to use as a filter when searching for reservations.
- [reservationIdentifier](ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier.md): An identifier to use when searching for the user’s reservations.

### Getting the Result Limits

- [maximumNumberOfResults](ingetusercurrentrestaurantreservationbookingsintent/maximumnumberofresults.md): The maximum number of reservations to include in your response object.
- [earliestBookingDateForResults](ingetusercurrentrestaurantreservationbookingsintent/earliestbookingdateforresults.md): The earliest date to associate with any reservations.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Get User Current Restaurant Reservation Bookings

- [INGetUserCurrentRestaurantReservationBookingsIntentHandling](ingetusercurrentrestaurantreservationbookingsintenthandling.md): The handler interface for fetching and delivering the user’s current reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponse](ingetusercurrentrestaurantreservationbookingsintentresponse.md): Your app’s response to a get user current restaurant reservation bookings intent.
