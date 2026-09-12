> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintentresponse](https://developer.apple.com/documentation/intents/incancelrideintentresponse)

# INCancelRideIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a cancel ride intent.

## Declaration

```swift
class INCancelRideIntentResponse
```

<a id="overview"></a>

## Overview

An [INCancelRideIntentResponse](incancelrideintentresponse.md) object contains your app’s response to the cancellation of a ride. After creating the response object, specify any cancellation-related fees using the properties of this object. Siri and Maps display your response information to the user during the confirmation phase.

You create an [INCancelRideIntentResponse](incancelrideintentresponse.md) object in the [confirm(cancelRide:completion:)](incancelrideintenthandling/confirm%28cancelride_completion_%29.md) and [handle(cancelRide:completion:)](incancelrideintenthandling/handle%28cancelride_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INCancelRideIntentHandling](incancelrideintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](incancelrideintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](incancelrideintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INCancelRideIntentResponseCode](incancelrideintentresponsecode.md): Constants indicating the state of the response.

### Specifying Cancellation Fees

- [cancellationFee](incancelrideintentresponse/cancellationfee.md): The cancellation fee charged by your service.
- [cancellationFeeThreshold](incancelrideintentresponse/cancellationfeethreshold.md): The amount of time that must elapse before cancellation fees apply.

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

### Cancel Ride

- [INCancelRideIntentHandling](incancelrideintenthandling.md): The handler interface for canceling a previously booked ride.
- [INCancelRideIntent](incancelrideintent.md): An intent requesting the cancellation of a previously booked ride.

# INCancelRideIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a cancel ride intent.

## Declaration

```objectivec
@interface INCancelRideIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INCancelRideIntentResponse](incancelrideintentresponse.md) object contains your app’s response to the cancellation of a ride. After creating the response object, specify any cancellation-related fees using the properties of this object. Siri and Maps display your response information to the user during the confirmation phase.

You create an [INCancelRideIntentResponse](incancelrideintentresponse.md) object in the [confirmCancelRide:completion:](incancelrideintenthandling/confirm%28cancelride_completion_%29.md) and [handleCancelRide:completion:](incancelrideintenthandling/handle%28cancelride_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INCancelRideIntentHandling](incancelrideintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](incancelrideintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](incancelrideintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INCancelRideIntentResponseCode](incancelrideintentresponsecode.md): Constants indicating the state of the response.

### Specifying Cancellation Fees

- [cancellationFee](incancelrideintentresponse/cancellationfee.md): The cancellation fee charged by your service.
- [cancellationFeeThreshold](incancelrideintentresponse/cancellationfeethreshold.md): The amount of time that must elapse before cancellation fees apply.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Cancel Ride

- [INCancelRideIntentHandling](incancelrideintenthandling.md): The handler interface for canceling a previously booked ride.
- [INCancelRideIntent](incancelrideintent.md): An intent requesting the cancellation of a previously booked ride.
