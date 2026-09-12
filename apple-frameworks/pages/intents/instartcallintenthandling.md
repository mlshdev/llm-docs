> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling](https://developer.apple.com/documentation/intents/instartcallintenthandling)

# INStartCallIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that handles requests to start audio and video calls.

## Declaration

```swift
protocol INStartCallIntentHandling : NSObjectProtocol
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INStartCallIntentHandling](instartcallintenthandling.md) protocol to resolve, confirm, and handle requests to start an audio or video call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Your Intents extension shouldn’t try to initiate the call directly. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartCallIntent](instartcallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of callable contacts and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveCallCapability(for:with:)](instartcallintenthandling/resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContacts(for:with:)](instartcallintenthandling/resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationType(for:with:)](instartcallintenthandling/resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBack(for:with:)](instartcallintenthandling/resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.

### Confirming the Response

- [confirm(intent:completion:)](instartcallintenthandling/confirm%28intent_completion_%29.md): Confirms whether your app is able to initiate the call.

### Handling the Intent

- [handle(intent:completion:)](instartcallintenthandling/handle%28intent_completion_%29.md): Handles handing off the call to your app.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Starting a Call

- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.

# INStartCallIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that handles requests to start audio and video calls.

## Declaration

```objectivec
@protocol INStartCallIntentHandling <NSObject>
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INStartCallIntentHandling](instartcallintenthandling.md) protocol to resolve, confirm, and handle requests to start an audio or video call with the designated users. Adopt this protocol in an object of your Intents extension that’s capable of validating the call information. Your Intents extension shouldn’t try to initiate the call directly. Instead, a successful response involves asking Siri to launch your app to begin the call.

Siri delivers an [INStartCallIntent](instartcallintent.md) object to your handler when the user asks to initiate a call using your app. The provided intent object contains information about who the user wants to call. Use the methods of this protocol to resolve the list of callable contacts and to validate that your app can place the call successfully.

## Topics

### Resolving the Intent Parameters

- [resolveCallCapabilityForStartCall:withCompletion:](instartcallintenthandling/resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContactsForStartCall:withCompletion:](instartcallintenthandling/resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationTypeForStartCall:withCompletion:](instartcallintenthandling/resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBackForStartCall:withCompletion:](instartcallintenthandling/resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.

### Confirming the Response

- [confirmStartCall:completion:](instartcallintenthandling/confirm%28intent_completion_%29.md): Confirms whether your app is able to initiate the call.

### Handling the Intent

- [handleStartCall:completion:](instartcallintenthandling/handle%28intent_completion_%29.md): Handles handing off the call to your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Starting a Call

- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.
