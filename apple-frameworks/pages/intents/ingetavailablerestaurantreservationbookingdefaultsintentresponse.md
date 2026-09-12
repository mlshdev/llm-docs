> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintentresponse)

# INGetAvailableRestaurantReservationBookingDefaultsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get available restaurant reservation booking defaults intent.

## Declaration

```swift
class INGetAvailableRestaurantReservationBookingDefaultsIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object contains the default values to use when booking a reservation at a restaurant. You create instances of this class when confirming or handling an [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object.

The system uses the information to improve the overall user experience. Restaurants may have requirements for the minimum or maximum size of a party. Similarly, your service might be able to provide a default date that reflects the first time when reservations are available. The system uses this information both to gather an initial set of valid reservation options and to show the user what requirements the restaurant may impose. Although providing default values is not required, it is highly recommended.

You create an [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object in the [confirm(getAvailableRestaurantReservationBookingDefaults:completion:)](ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm%28getavailablerestaurantreservationbookingdefaults_completion_%29.md) and [handle(getAvailableRestaurantReservationBookingDefaults:completion:)](ingetavailablerestaurantreservationbookingdefaultsintenthandling/handle%28getavailablerestaurantreservationbookingdefaults_completion_%29.md) methods of handler object. For more information about implementing your handler object, see [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(defaultPartySize:defaultBooking:code:userActivity:)](ingetavailablerestaurantreservationbookingdefaultsintentresponse/init%28defaultpartysize_defaultbooking_code_useractivity_%29.md): Initializes the response object with the specified information and user activity object.

### Getting the Response Code

- [code](ingetavailablerestaurantreservationbookingdefaultsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode](ingetavailablerestaurantreservationbookingdefaultsintentresponsecode.md): Constants indicating the state of the response.

### Specifying the Default Values

- [defaultBookingDate](ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](ingetavailablerestaurantreservationbookingdefaultsintentresponse/providerimage.md): An image representing your app.

### Initializers

- [init(defaultPartySize:defaultBookingDate:code:userActivity:)](ingetavailablerestaurantreservationbookingdefaultsintentresponse/init%28defaultpartysize_defaultbookingdate_code_useractivity_%29.md)

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

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

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md): The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md): A request for the default values to use when fetching potential reservation options.

# INGetAvailableRestaurantReservationBookingDefaultsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get available restaurant reservation booking defaults intent.

## Declaration

```objectivec
@interface INGetAvailableRestaurantReservationBookingDefaultsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object contains the default values to use when booking a reservation at a restaurant. You create instances of this class when confirming or handling an [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md) object.

The system uses the information to improve the overall user experience. Restaurants may have requirements for the minimum or maximum size of a party. Similarly, your service might be able to provide a default date that reflects the first time when reservations are available. The system uses this information both to gather an initial set of valid reservation options and to show the user what requirements the restaurant may impose. Although providing default values is not required, it is highly recommended.

You create an [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object in the [confirmGetAvailableRestaurantReservationBookingDefaults:completion:](ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm%28getavailablerestaurantreservationbookingdefaults_completion_%29.md) and [handleGetAvailableRestaurantReservationBookingDefaults:completion:](ingetavailablerestaurantreservationbookingdefaultsintenthandling/handle%28getavailablerestaurantreservationbookingdefaults_completion_%29.md) methods of handler object. For more information about implementing your handler object, see [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithDefaultPartySize:defaultBookingDate:code:userActivity:](ingetavailablerestaurantreservationbookingdefaultsintentresponse/init%28defaultpartysize_defaultbooking_code_useractivity_%29.md): Initializes the response object with the specified information and user activity object.

### Getting the Response Code

- [code](ingetavailablerestaurantreservationbookingdefaultsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode](ingetavailablerestaurantreservationbookingdefaultsintentresponsecode.md): Constants indicating the state of the response.

### Specifying the Default Values

- [defaultBookingDate](ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultbookingdate.md): The default booking date to use when placing the initial reservations request.
- [defaultPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/defaultpartysize.md): The party size to use when placing the initial reservations request.
- [maximumPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/maximumpartysize.md): The maximum party size allowed by the restaurant.
- [minimumPartySize](ingetavailablerestaurantreservationbookingdefaultsintentresponse/minimumpartysize.md): The minimum party size allowed by the restaurant.
- [providerImage](ingetavailablerestaurantreservationbookingdefaultsintentresponse/providerimage.md): An image representing your app.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get Available Restaurant Reservation Booking Defaults

- [INGetAvailableRestaurantReservationBookingDefaultsIntentHandling](ingetavailablerestaurantreservationbookingdefaultsintenthandling.md): The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
- [INGetAvailableRestaurantReservationBookingDefaultsIntent](ingetavailablerestaurantreservationbookingdefaultsintent.md): A request for the default values to use when fetching potential reservation options.
