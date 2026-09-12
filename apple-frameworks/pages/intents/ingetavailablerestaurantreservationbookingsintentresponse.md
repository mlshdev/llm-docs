> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse)

# INGetAvailableRestaurantReservationBookingsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get available restaurant reservation bookings intent.

## Declaration

```swift
class INGetAvailableRestaurantReservationBookingsIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object contains the reservation booking objects that represent the time slots available for making a reservation at the given restaurant. You create an instance of this class when confirming or handling an [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object, which contains the basic details you use to determine your response.

You create an [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object in the [confirm(getAvailableRestaurantReservationBookings:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/confirm%28getavailablerestaurantreservationbookings_completion_%29.md) and [handle(getAvailableRestaurantReservationBookings:completion:)](ingetavailablerestaurantreservationbookingsintenthandling/handle%28getavailablerestaurantreservationbookings_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(availableBookings:code:userActivity:)](ingetavailablerestaurantreservationbookingsintentresponse/init%28availablebookings_code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Specifying the Reservation Results

- [availableBookings](ingetavailablerestaurantreservationbookingsintentresponse/availablebookings.md): An array of available time slots for the reservation.

### Specifying Additional Information

- [localizedRestaurantDescriptionText](ingetavailablerestaurantreservationbookingsintentresponse/localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [localizedBookingAdvisementText](ingetavailablerestaurantreservationbookingsintentresponse/localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.
- [termsAndConditions](ingetavailablerestaurantreservationbookingsintentresponse/termsandconditions.md): The terms and conditions of using your company’s services.

### Getting the Response Code

- [code](ingetavailablerestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCode](ingetavailablerestaurantreservationbookingsintentcode.md): Constants indicating the state of the response.

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

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md): The handler interface for generating a list of potential reservation times from which the user can select.
- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md): A request for the time slots available for making a reservation.

# INGetAvailableRestaurantReservationBookingsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get available restaurant reservation bookings intent.

## Declaration

```objectivec
@interface INGetAvailableRestaurantReservationBookingsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object contains the reservation booking objects that represent the time slots available for making a reservation at the given restaurant. You create an instance of this class when confirming or handling an [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object, which contains the basic details you use to determine your response.

You create an [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object in the [confirmGetAvailableRestaurantReservationBookings:completion:](ingetavailablerestaurantreservationbookingsintenthandling/confirm%28getavailablerestaurantreservationbookings_completion_%29.md) and [handleGetAvailableRestaurantReservationBookings:completion:](ingetavailablerestaurantreservationbookingsintenthandling/handle%28getavailablerestaurantreservationbookings_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithAvailableBookings:code:userActivity:](ingetavailablerestaurantreservationbookingsintentresponse/init%28availablebookings_code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Specifying the Reservation Results

- [availableBookings](ingetavailablerestaurantreservationbookingsintentresponse/availablebookings.md): An array of available time slots for the reservation.

### Specifying Additional Information

- [localizedRestaurantDescriptionText](ingetavailablerestaurantreservationbookingsintentresponse/localizedrestaurantdescriptiontext.md): A localized, user-readable string containing a description of the restaurant.
- [localizedBookingAdvisementText](ingetavailablerestaurantreservationbookingsintentresponse/localizedbookingadvisementtext.md): A localized, user-readable string containing policies and information related to the reservation.
- [termsAndConditions](ingetavailablerestaurantreservationbookingsintentresponse/termsandconditions.md): The terms and conditions of using your company’s services.

### Getting the Response Code

- [code](ingetavailablerestaurantreservationbookingsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCode](ingetavailablerestaurantreservationbookingsintentcode.md): Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md): The handler interface for generating a list of potential reservation times from which the user can select.
- [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md): A request for the time slots available for making a reservation.
