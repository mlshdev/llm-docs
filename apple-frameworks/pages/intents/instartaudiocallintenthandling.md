> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintenthandling](https://developer.apple.com/documentation/intents/instartaudiocallintenthandling)

# INStartAudioCallIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

The handler interface for initiating an audio call from your app.

> Use [INStartCallIntentHandling](instartcallintenthandling.md) instead.

## Declaration

```swift
protocol INStartAudioCallIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md) protocol to resolve, confirm, and handle requests to start an audio-only call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Don’t try to initiate the call directly in your Intents app extension. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartAudioCallIntent](instartaudiocallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of contacts to call and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveContacts(for:with:)](instartaudiocallintenthandling/resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.
- [resolveDestinationType(for:with:)](instartaudiocallintenthandling/resolvedestinationtype%28for_with_%29.md): Deprecated. Resolves the destination of the call.

### Confirming the Response

- [confirm(intent:completion:)](instartaudiocallintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether your app is able to initiate the call.

### Handling the Intent

- [handle(intent:completion:)](instartaudiocallintenthandling/handle%28intent_completion_%29.md): Deprecated. Provides information to hand off the call to your app.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Audio Call Initiation

- [INStartAudioCallIntent](instartaudiocallintent.md): Deprecated. A request to start an audio-only call with one or more users.
- [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md): Deprecated. An app’s response to an intent to start an audio call.

# INStartAudioCallIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

The handler interface for initiating an audio call from your app.

> Use [INStartCallIntentHandling](instartcallintenthandling.md) instead.

## Declaration

```objectivec
@protocol INStartAudioCallIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md) protocol to resolve, confirm, and handle requests to start an audio-only call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Don’t try to initiate the call directly in your Intents app extension. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartAudioCallIntent](instartaudiocallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of contacts to call and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveContactsForStartAudioCall:withCompletion:](instartaudiocallintenthandling/resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.
- [resolveDestinationTypeForStartAudioCall:withCompletion:](instartaudiocallintenthandling/resolvedestinationtype%28for_with_%29.md): Deprecated. Resolves the destination of the call.

### Confirming the Response

- [confirmStartAudioCall:completion:](instartaudiocallintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether your app is able to initiate the call.

### Handling the Intent

- [handleStartAudioCall:completion:](instartaudiocallintenthandling/handle%28intent_completion_%29.md): Deprecated. Provides information to hand off the call to your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Audio Call Initiation

- [INStartAudioCallIntent](instartaudiocallintent.md): Deprecated. A request to start an audio-only call with one or more users.
- [INStartAudioCallIntentResponse](instartaudiocallintentresponse.md): Deprecated. An app’s response to an intent to start an audio call.
