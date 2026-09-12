> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintentresponse](https://developer.apple.com/documentation/intents/ingetrestaurantguestintentresponse)

# INGetRestaurantGuestIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get restaurant guest intent.

## Declaration

```swift
class INGetRestaurantGuestIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object contains the information about the current user along with preferences about whether to associate that user with any new reservations. You create this response when handling or confirming an [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object. Your response should contain information about the current user and information about how to display that user’s information in the interface used to make reservations.

You create an [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object in the [confirm(getRestaurantGuest:completion:)](ingetrestaurantguestintenthandling/confirm%28getrestaurantguest_completion_%29.md) and [handle(getRestaurantGuest:completion:)](ingetrestaurantguestintenthandling/handle%28getrestaurantguest_completion_%29.md) methods of handler object. For more information about implementing your handler object, see [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](ingetrestaurantguestintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetrestaurantguestintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetRestaurantGuestIntentResponseCode](ingetrestaurantguestintentresponsecode.md): Constants indicating the state of the response.

### Specifying the Response Details

- [guest](ingetrestaurantguestintentresponse/guest.md): The identity of the person making the reservation.
- [guestDisplayPreferences](ingetrestaurantguestintentresponse/guestdisplaypreferences.md): The options for specifying how you want guest information conveyed to the user.

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

### Get Restaurant Guest

- [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md): The handler interface for fetching information about the person making a reservation.
- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md): A request for information about the guest who is making reservations.

# INGetRestaurantGuestIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a get restaurant guest intent.

## Declaration

```objectivec
@interface INGetRestaurantGuestIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object contains the information about the current user along with preferences about whether to associate that user with any new reservations. You create this response when handling or confirming an [INGetUserCurrentRestaurantReservationBookingsIntent](ingetusercurrentrestaurantreservationbookingsintent.md) object. Your response should contain information about the current user and information about how to display that user’s information in the interface used to make reservations.

You create an [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object in the [confirmGetRestaurantGuest:completion:](ingetrestaurantguestintenthandling/confirm%28getrestaurantguest_completion_%29.md) and [handleGetRestaurantGuest:completion:](ingetrestaurantguestintenthandling/handle%28getrestaurantguest_completion_%29.md) methods of handler object. For more information about implementing your handler object, see [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](ingetrestaurantguestintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetrestaurantguestintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetRestaurantGuestIntentResponseCode](ingetrestaurantguestintentresponsecode.md): Constants indicating the state of the response.

### Specifying the Response Details

- [guest](ingetrestaurantguestintentresponse/guest.md): The identity of the person making the reservation.
- [guestDisplayPreferences](ingetrestaurantguestintentresponse/guestdisplaypreferences.md): The options for specifying how you want guest information conveyed to the user.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get Restaurant Guest

- [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md): The handler interface for fetching information about the person making a reservation.
- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md): A request for information about the guest who is making reservations.
