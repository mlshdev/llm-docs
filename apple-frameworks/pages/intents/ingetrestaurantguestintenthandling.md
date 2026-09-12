> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintenthandling](https://developer.apple.com/documentation/intents/ingetrestaurantguestintenthandling)

# INGetRestaurantGuestIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for fetching information about the person making a reservation.

## Declaration

```swift
protocol INGetRestaurantGuestIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md) protocol to confirm and handle requests to return information about the person making a reservation. The system delivers an [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) object to your handler when the user begins the process of making a reservation. Your handler object should return information about the current user along with preferences about how the system should display that user’s information. Your handler is also responsible for specifying whether the user information displayed by the system is changable before assigning it to the reservation.

Maps does not require you to confirm the contents of a get restaurant guest intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Confirming the Response

- [confirm(getRestaurantGuest:completion:)](ingetrestaurantguestintenthandling/confirm%28getrestaurantguest_completion_%29.md): Confirms whether you can provide the guest information.

### Handling the Intent

- [handle(getRestaurantGuest:completion:)](ingetrestaurantguestintenthandling/handle%28getrestaurantguest_completion_%29.md): Handles returning the information about the user making the reservation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Get Restaurant Guest

- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md): A request for information about the guest who is making reservations.
- [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md): Your app’s response to a get restaurant guest intent.

# INGetRestaurantGuestIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for fetching information about the person making a reservation.

## Declaration

```objectivec
@protocol INGetRestaurantGuestIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md) protocol to confirm and handle requests to return information about the person making a reservation. The system delivers an [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) object to your handler when the user begins the process of making a reservation. Your handler object should return information about the current user along with preferences about how the system should display that user’s information. Your handler is also responsible for specifying whether the user information displayed by the system is changable before assigning it to the reservation.

Maps does not require you to confirm the contents of a get restaurant guest intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Confirming the Response

- [confirmGetRestaurantGuest:completion:](ingetrestaurantguestintenthandling/confirm%28getrestaurantguest_completion_%29.md): Confirms whether you can provide the guest information.

### Handling the Intent

- [handleGetRestaurantGuest:completion:](ingetrestaurantguestintenthandling/handle%28getrestaurantguest_completion_%29.md): Handles returning the information about the user making the reservation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Get Restaurant Guest

- [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md): A request for information about the guest who is making reservations.
- [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md): Your app’s response to a get restaurant guest intent.
