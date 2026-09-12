> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintentresponse](https://developer.apple.com/documentation/intents/insetaudiosourceincarintentresponse)

# INSetAudioSourceInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set audio source in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetAudioSourceInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md) object contains the status of changing the audio source in the user’s vehicle. You create instances of this class when confirming or handling a set audio source in car intent.

You create an [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md) object in the [confirm(intent:completion:)](insetaudiosourceincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetaudiosourceincarintenthandling/handle%28intent_completion_%29.md) methods of your set audio source in car handler object. For more information about implementing your handler object, see [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetaudiosourceincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetaudiosourceincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCode](insetaudiosourceincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Audio Source

- [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s audio source.
- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md): Deprecated. A request to change the source of audio playback in a CarPlay-enabled vehicle.

# INSetAudioSourceInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set audio source in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetAudioSourceInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md) object contains the status of changing the audio source in the user’s vehicle. You create instances of this class when confirming or handling a set audio source in car intent.

You create an [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md) object in the [confirmSetAudioSourceInCar:completion:](insetaudiosourceincarintenthandling/confirm%28intent_completion_%29.md) and [handleSetAudioSourceInCar:completion:](insetaudiosourceincarintenthandling/handle%28intent_completion_%29.md) methods of your set audio source in car handler object. For more information about implementing your handler object, see [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetaudiosourceincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetaudiosourceincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetAudioSourceInCarIntentResponseCode](insetaudiosourceincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Audio Source

- [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s audio source.
- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md): Deprecated. A request to change the source of audio playback in a CarPlay-enabled vehicle.
