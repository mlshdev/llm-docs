> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintenthandling](https://developer.apple.com/documentation/intents/instartvideocallintenthandling)

# INStartVideoCallIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for initiating a video call from your app.

> Use [INStartCallIntentHandling](instartcallintenthandling.md) instead.

## Declaration

```swift
protocol INStartVideoCallIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartVideoCallIntentHandling](instartvideocallintenthandling.md) protocol to resolve, confirm, and handle requests to start a video call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Don’t try to initiate the call directly in your Intents app extension. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartVideoCallIntent](instartvideocallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of contacts to include in the call and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveContacts(for:with:)](instartvideocallintenthandling/resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.

### Confirming the Response

- [confirm(intent:completion:)](instartvideocallintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether your app is able to initiate the video call.

### Handling the Intent

- [handle(intent:completion:)](instartvideocallintenthandling/handle%28intent_completion_%29.md): Deprecated. Provides information to hand off the call to your app.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Video Call Initiation

- [INStartVideoCallIntent](instartvideocallintent.md): Deprecated. A request to start a video call with one or more users.
- [INStartVideoCallIntentResponse](instartvideocallintentresponse.md): Deprecated. A response to an intent to start a video call.

# INStartVideoCallIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for initiating a video call from your app.

> Use [INStartCallIntentHandling](instartcallintenthandling.md) instead.

## Declaration

```objectivec
@protocol INStartVideoCallIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartVideoCallIntentHandling](instartvideocallintenthandling.md) protocol to resolve, confirm, and handle requests to start a video call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Don’t try to initiate the call directly in your Intents app extension. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartVideoCallIntent](instartvideocallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of contacts to include in the call and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveContactsForStartVideoCall:withCompletion:](instartvideocallintenthandling/resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.

### Confirming the Response

- [confirmStartVideoCall:completion:](instartvideocallintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether your app is able to initiate the video call.

### Handling the Intent

- [handleStartVideoCall:completion:](instartvideocallintenthandling/handle%28intent_completion_%29.md): Deprecated. Provides information to hand off the call to your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Video Call Initiation

- [INStartVideoCallIntent](instartvideocallintent.md): Deprecated. A request to start a video call with one or more users.
- [INStartVideoCallIntentResponse](instartvideocallintentresponse.md): Deprecated. A response to an intent to start a video call.
