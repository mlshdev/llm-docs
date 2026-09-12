> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling)

# INGetAvailableRestaurantReservationBookingDefaultsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.

## Declaration

```swift
protocol INGetAvailableRestaurantReservationBookingDefaultsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md) protocol to resolve, confirm, and handle requests for default values for the system to use when pre-fetching reservation times. The system delivers an [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object to your handler before it asks your Intents extension for any initial reservation times. Use this intent object to provide a set of reasonable default values that are likely to yield good results when doing an initial search for available reservation times. For example, the default date provided by your handler should represent a date and time when the restaurant is open and has available tables.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation booking defaults intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](ingetavailablerestaurantreservationbookingdefaultsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant for which you are providing default values.

### Confirming the Response

- [confirm(getAvailableRestaurantReservationBookingDefaults:completion:)](ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm%28getavailablerestaurantreservationbookingdefaults_completion_%29.md): Confirms whether you can return default values.

### Handling the Intent

- [handle(getAvailableRestaurantReservationBookingDefaults:completion:)](ingetavailablerestaurantreservationbookingdefaultsintenthandling/handle%28getavailablerestaurantreservationbookingdefaults_completion_%29.md): Handles returning the default values to use when pre-fetching reservations.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md): A request for the default values to use when fetching potential reservation options.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md): Your app’s response to a get available restaurant reservation booking defaults intent.

# INGetAvailableRestaurantReservationBookingDefaultsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.

## Declaration

```objectivec
@protocol INGetAvailableRestaurantReservationBookingDefaultsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md) protocol to resolve, confirm, and handle requests for default values for the system to use when pre-fetching reservation times. The system delivers an [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object to your handler before it asks your Intents extension for any initial reservation times. Use this intent object to provide a set of reasonable default values that are likely to yield good results when doing an initial search for available reservation times. For example, the default date provided by your handler should represent a date and time when the restaurant is open and has available tables.

Maps does not require you to resolve or confirm the contents of a get available restaurant reservation booking defaults intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults:withCompletion:](ingetavailablerestaurantreservationbookingdefaultsintenthandling/resolverestaurant%28for_completion_%29.md): Resolves the restaurant for which you are providing default values.

### Confirming the Response

- [confirmGetAvailableRestaurantReservationBookingDefaults:completion:](ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm%28getavailablerestaurantreservationbookingdefaults_completion_%29.md): Confirms whether you can return default values.

### Handling the Intent

- [handleGetAvailableRestaurantReservationBookingDefaults:completion:](ingetavailablerestaurantreservationbookingdefaultsintenthandling/handle%28getavailablerestaurantreservationbookingdefaults_completion_%29.md): Handles returning the default values to use when pre-fetching reservations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md): A request for the default values to use when fetching potential reservation options.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md): Your app’s response to a get available restaurant reservation booking defaults intent.
