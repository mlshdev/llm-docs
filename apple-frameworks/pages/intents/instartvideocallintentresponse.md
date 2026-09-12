> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintentresponse](https://developer.apple.com/documentation/intents/instartvideocallintentresponse)

# INStartVideoCallIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A response to an intent to start a video call.

> Use [INStartCallIntentResponse](instartcallintentresponse.md) instead.

## Declaration

```swift
class INStartVideoCallIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartVideoCallIntentResponse](instartvideocallintentresponse.md) object to specify whether your app is able to initiate a video call. You create instances of this class when confirming and handling an [INStartVideoCallIntent](instartvideocallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that would assist your app in placing the call.

You create an [INStartVideoCallIntentResponse](instartvideocallintentresponse.md) object in the [confirm(intent:completion:)](instartvideocallintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](instartvideocallintenthandling/handle%28intent_completion_%29.md) methods of your start video call handler object. For more information about implementing your handler object, see [INStartVideoCallIntentHandling](instartvideocallintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](instartvideocallintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartvideocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartVideoCallIntentResponseCode](instartvideocallintentresponsecode.md): Deprecated. Constants indicating the status of the response.

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

### Video Call Initiation

- [INStartVideoCallIntentHandling](instartvideocallintenthandling.md): Deprecated. The handler interface for initiating a video call from your app.
- [INStartVideoCallIntent](instartvideocallintent.md): Deprecated. A request to start a video call with one or more users.

# INStartVideoCallIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A response to an intent to start a video call.

> Use [INStartCallIntentResponse](instartcallintentresponse.md) instead.

## Declaration

```objectivec
@interface INStartVideoCallIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartVideoCallIntentResponse](instartvideocallintentresponse.md) object to specify whether your app is able to initiate a video call. You create instances of this class when confirming and handling an [INStartVideoCallIntent](instartvideocallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that would assist your app in placing the call.

You create an [INStartVideoCallIntentResponse](instartvideocallintentresponse.md) object in the [confirmStartVideoCall:completion:](instartvideocallintenthandling/confirm%28intent_completion_%29.md) and [handleStartVideoCall:completion:](instartvideocallintenthandling/handle%28intent_completion_%29.md) methods of your start video call handler object. For more information about implementing your handler object, see [INStartVideoCallIntentHandling](instartvideocallintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](instartvideocallintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartvideocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartVideoCallIntentResponseCode](instartvideocallintentresponsecode.md): Deprecated. Constants indicating the status of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Video Call Initiation

- [INStartVideoCallIntentHandling](instartvideocallintenthandling.md): Deprecated. The handler interface for initiating a video call from your app.
- [INStartVideoCallIntent](instartvideocallintent.md): Deprecated. A request to start a video call with one or more users.
