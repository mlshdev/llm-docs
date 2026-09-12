> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintentresponse](https://developer.apple.com/documentation/intents/insendridefeedbackintentresponse)

# INSendRideFeedbackIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a send ride feedback intent.

## Declaration

```swift
class INSendRideFeedbackIntentResponse
```

<a id="overview"></a>

## Overview

An [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object contains your app’s response to a request for feedback about a ride. After creating the response object, specify any feedback using the properties of this object. Siri and Maps display your response information to the user during the confirmation phase.

You create an [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object in the [confirm(sendRideFeedback:completion:)](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md) and [confirm(sendRideFeedback:completion:)](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insendridefeedbackintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendridefeedbackintentresponse/code.md): The code indicating whether your app successfully handled the intent.
- [INSendRideFeedbackIntentResponseCode](insendridefeedbackintentresponsecode.md): Constants indicating the state of the response.

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

### Send Ride Feedback

- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md): The handler interface for sending ride feedback to your service.
- [INSendRideFeedbackIntent](insendridefeedbackintent.md): An intent indicating that the user provided feedback for a completed ride.

# INSendRideFeedbackIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a send ride feedback intent.

## Declaration

```objectivec
@interface INSendRideFeedbackIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object contains your app’s response to a request for feedback about a ride. After creating the response object, specify any feedback using the properties of this object. Siri and Maps display your response information to the user during the confirmation phase.

You create an [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object in the [confirmSendRideFeedback:completion:](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md) and [confirmSendRideFeedback:completion:](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insendridefeedbackintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendridefeedbackintentresponse/code.md): The code indicating whether your app successfully handled the intent.
- [INSendRideFeedbackIntentResponseCode](insendridefeedbackintentresponsecode.md): Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Send Ride Feedback

- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md): The handler interface for sending ride feedback to your service.
- [INSendRideFeedbackIntent](insendridefeedbackintent.md): An intent indicating that the user provided feedback for a completed ride.
