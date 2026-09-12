> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintenthandling](https://developer.apple.com/documentation/intents/insetaudiosourceincarintenthandling)

# INSetAudioSourceInCarIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetAudioSourceInCarIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s current audio source. Your extension should be able to communicate with the vehicle and make the necessary audio changes.

Siri delivers an [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md) object to your handler when the user asks to change the audio source. The provided intent object contains information that you use to determine the new audio source and to make the change.

## Topics

### Resolving the Intent Parameters

- [resolveAudioSource(for:with:)](insetaudiosourceincarintenthandling/resolveaudiosource%28for_with_%29.md): Deprecated. Resolves an explicitly selected audio source.
- [resolveRelativeAudioSourceReference(for:with:)](insetaudiosourceincarintenthandling/resolverelativeaudiosourcereference%28for_with_%29.md): Deprecated. Resolves the audio source using a relative qualifier.

### Confirming the Response

- [confirm(intent:completion:)](insetaudiosourceincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the audio source.

### Handling the Intent

- [handle(intent:completion:)](insetaudiosourceincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the audio source.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Audio Source

- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md): Deprecated. A request to change the source of audio playback in a CarPlay-enabled vehicle.
- [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md): Deprecated. Your app’s response to a set audio source in car intent.

# INSetAudioSourceInCarIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetAudioSourceInCarIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s current audio source. Your extension should be able to communicate with the vehicle and make the necessary audio changes.

Siri delivers an [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md) object to your handler when the user asks to change the audio source. The provided intent object contains information that you use to determine the new audio source and to make the change.

## Topics

### Resolving the Intent Parameters

- [resolveAudioSourceForSetAudioSourceInCar:withCompletion:](insetaudiosourceincarintenthandling/resolveaudiosource%28for_with_%29.md): Deprecated. Resolves an explicitly selected audio source.
- [resolveRelativeAudioSourceReferenceForSetAudioSourceInCar:withCompletion:](insetaudiosourceincarintenthandling/resolverelativeaudiosourcereference%28for_with_%29.md): Deprecated. Resolves the audio source using a relative qualifier.

### Confirming the Response

- [confirmSetAudioSourceInCar:completion:](insetaudiosourceincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the audio source.

### Handling the Intent

- [handleSetAudioSourceInCar:completion:](insetaudiosourceincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the audio source.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Audio Source

- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md): Deprecated. A request to change the source of audio playback in a CarPlay-enabled vehicle.
- [INSetAudioSourceInCarIntentResponse](insetaudiosourceincarintentresponse.md): Deprecated. Your app’s response to a set audio source in car intent.
