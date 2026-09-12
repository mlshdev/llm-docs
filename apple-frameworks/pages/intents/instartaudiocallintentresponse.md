> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintentresponse](https://developer.apple.com/documentation/intents/instartaudiocallintentresponse)

# INStartAudioCallIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An app’s response to an intent to start an audio call.

> Use [INStartCallIntentResponse](instartcallintentresponse.md) instead.

## Declaration

```swift
class INStartAudioCallIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md) object to specify whether your app is able to initiate an audio-based call. You create instances of this class when confirming and handling an [INStartAudioCallIntent](instartaudiocallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that would assist your app in placing the call.

You create an [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md) object in the [confirm(intent:completion:)](instartaudiocallintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](instartaudiocallintenthandling/handle%28intent_completion_%29.md) methods of your start audio call handler object. For more information about implementing your handler object, see [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](instartaudiocallintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartaudiocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartAudioCallIntentResponseCode](instartaudiocallintentresponsecode.md): Deprecated. Constants indicating the status of the response.

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

### Audio Call Initiation

- [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md): Deprecated. The handler interface for initiating an audio call from your app.
- [INStartAudioCallIntent](instartaudiocallintent.md): Deprecated. A request to start an audio-only call with one or more users.

# INStartAudioCallIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An app’s response to an intent to start an audio call.

> Use [INStartCallIntentResponse](instartcallintentresponse.md) instead.

## Declaration

```objectivec
@interface INStartAudioCallIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md) object to specify whether your app is able to initiate an audio-based call. You create instances of this class when confirming and handling an [INStartAudioCallIntent](instartaudiocallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that would assist your app in placing the call.

You create an [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md) object in the [confirmStartAudioCall:completion:](instartaudiocallintenthandling/confirm%28intent_completion_%29.md) and [handleStartAudioCall:completion:](instartaudiocallintenthandling/handle%28intent_completion_%29.md) methods of your start audio call handler object. For more information about implementing your handler object, see [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](instartaudiocallintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartaudiocallintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartAudioCallIntentResponseCode](instartaudiocallintentresponsecode.md): Deprecated. Constants indicating the status of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Audio Call Initiation

- [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md): Deprecated. The handler interface for initiating an audio call from your app.
- [INStartAudioCallIntent](instartaudiocallintent.md): Deprecated. A request to start an audio-only call with one or more users.
