> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponse](https://developer.apple.com/documentation/intents/ingetridestatusintentresponse)

# INGetRideStatusIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a get ride status intent.

## Declaration

```swift
class INGetRideStatusIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md) object contains your app’s response to a request for the status of the user’s current ride. SiriKit can ask for the status of a ride at any time, but often this occurs in response to a direct request from the user. Use your response object to provide current details about the user’s ride, including the estimated pickup time, the pickup location, the drop-off location, the vehicle type, the driver, and so on.

You create an [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md) object in the [confirm(intent:completion:)](ingetridestatusintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](ingetridestatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](ingetridestatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetridestatusintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetRideStatusIntentResponseCode](ingetridestatusintentresponsecode.md): Constants indicating the state of the response.

### Getting the Ride Status Information

- [rideStatus](ingetridestatusintentresponse/ridestatus.md): The current status of the ride.

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

### Get the Ride Status

- [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md): The handler interface for fetching the status of the user’s current ride.
- [INGetRideStatusIntent](ingetridestatusintent.md): A request for the current status of a previously booked ride.
- [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md): An interface for providing updated status for an active ride.

# INGetRideStatusIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a get ride status intent.

## Declaration

```objectivec
@interface INGetRideStatusIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md) object contains your app’s response to a request for the status of the user’s current ride. SiriKit can ask for the status of a ride at any time, but often this occurs in response to a direct request from the user. Use your response object to provide current details about the user’s ride, including the estimated pickup time, the pickup location, the drop-off location, the vehicle type, the driver, and so on.

You create an [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md) object in the [confirmGetRideStatus:completion:](ingetridestatusintenthandling/confirm%28intent_completion_%29.md) and [handleGetRideStatus:completion:](ingetridestatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](ingetridestatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetridestatusintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INGetRideStatusIntentResponseCode](ingetridestatusintentresponsecode.md): Constants indicating the state of the response.

### Getting the Ride Status Information

- [rideStatus](ingetridestatusintentresponse/ridestatus.md): The current status of the ride.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get the Ride Status

- [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md): The handler interface for fetching the status of the user’s current ride.
- [INGetRideStatusIntent](ingetridestatusintent.md): A request for the current status of a previously booked ride.
- [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md): An interface for providing updated status for an active ride.
