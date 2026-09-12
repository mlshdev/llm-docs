> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintent](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent)

# INGetAvailableRestaurantReservationBookingsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the time slots available for making a reservation.

## Declaration

```swift
class INGetAvailableRestaurantReservationBookingsIntent
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object asks you to generate details regarding the available time slots offered by a restaurant for a given party size. Maps sends this intent to your Intents extension when the user begins the booking process. You use this intent to obtain the initial details about the reservation request, including the number of people and the preferred date for the reservation. You use those details to identify potential time slots that can accommodate the party and return those time slots in your response object.

To handle this intent, the handler object in your Intents extension must adopt the [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object with the list of potential time slots.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(restaurant:partySize:preferredBooking:maximumNumberOfResults:earliestBookingDateForResults:latestBookingDateForResults:)](ingetavailablerestaurantreservationbookingsintent/init%28restaurant_partysize_preferredbooking_maximumnumberofresults_earliestbookingdateforresults_latestbookingdateforresults_%29.md): Initializes the intent object with the specified reservation information.

### Getting the Restaurant

- [restaurant](ingetavailablerestaurantreservationbookingsintent/restaurant.md): The restaurant associated with the reservation.

### Getting the Reservation Details

- [partySize](ingetavailablerestaurantreservationbookingsintent/partysize.md): The number of people in the guest’s party.
- [preferredBookingDateComponents](ingetavailablerestaurantreservationbookingsintent/preferredbookingdatecomponents.md): The date and time preferred by the user for the reservation.

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](ingetavailablerestaurantreservationbookingsintent/earliestbookingdateforresults.md): The earliest date for which to return results.
- [latestBookingDateForResults](ingetavailablerestaurantreservationbookingsintent/latestbookingdateforresults.md): The latest date for which to return results.
- [maximumNumberOfResults](ingetavailablerestaurantreservationbookingsintent/maximumnumberofresults.md): The maximum number of reservation results to return.

### Initializers

- [init(restaurant:partySize:preferredBookingDateComponents:maximumNumberOfResults:earliestBookingDateForResults:latestBookingDateForResults:)](ingetavailablerestaurantreservationbookingsintent/init%28restaurant_partysize_preferredbookingdatecomponents_maximumnumberofresults_earliestbookingdateforresults_latestbookingdateforresults_%29.md)

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

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md): The handler interface for generating a list of potential reservation times from which the user can select.
- [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md): Your app’s response to a get available restaurant reservation bookings intent.

# INGetAvailableRestaurantReservationBookingsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for the time slots available for making a reservation.

## Declaration

```objectivec
@interface INGetAvailableRestaurantReservationBookingsIntent : INIntent
```

<a id="overview"></a>

## Overview

An [INGetAvailableRestaurantReservationBookingsIntent](ingetavailablerestaurantreservationbookingsintent.md) object asks you to generate details regarding the available time slots offered by a restaurant for a given party size. Maps sends this intent to your Intents extension when the user begins the booking process. You use this intent to obtain the initial details about the reservation request, including the number of people and the preferred date for the reservation. You use those details to identify potential time slots that can accommodate the party and return those time slots in your response object.

To handle this intent, the handler object in your Intents extension must adopt the [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md) protocol. Your handler should resolve and confirm any parameters and create an [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md) object with the list of potential time slots.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithRestaurant:partySize:preferredBookingDateComponents:maximumNumberOfResults:earliestBookingDateForResults:latestBookingDateForResults:](ingetavailablerestaurantreservationbookingsintent/init%28restaurant_partysize_preferredbooking_maximumnumberofresults_earliestbookingdateforresults_latestbookingdateforresults_%29.md): Initializes the intent object with the specified reservation information.

### Getting the Restaurant

- [restaurant](ingetavailablerestaurantreservationbookingsintent/restaurant.md): The restaurant associated with the reservation.

### Getting the Reservation Details

- [partySize](ingetavailablerestaurantreservationbookingsintent/partysize.md): The number of people in the guest’s party.
- [preferredBookingDateComponents](ingetavailablerestaurantreservationbookingsintent/preferredbookingdatecomponents.md): The date and time preferred by the user for the reservation.

### Getting the Time Slot Constraints

- [earliestBookingDateForResults](ingetavailablerestaurantreservationbookingsintent/earliestbookingdateforresults.md): The earliest date for which to return results.
- [latestBookingDateForResults](ingetavailablerestaurantreservationbookingsintent/latestbookingdateforresults.md): The latest date for which to return results.
- [maximumNumberOfResults](ingetavailablerestaurantreservationbookingsintent/maximumnumberofresults.md): The maximum number of reservation results to return.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Get Available Restaurant Reservation Bookings

- [INGetAvailableRestaurantReservationBookingsIntentHandling](ingetavailablerestaurantreservationbookingsintenthandling.md): The handler interface for generating a list of potential reservation times from which the user can select.
- [INGetAvailableRestaurantReservationBookingsIntentResponse](ingetavailablerestaurantreservationbookingsintentresponse.md): Your app’s response to a get available restaurant reservation bookings intent.
