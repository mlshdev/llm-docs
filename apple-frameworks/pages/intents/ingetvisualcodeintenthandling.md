> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintenthandling](https://developer.apple.com/documentation/intents/ingetvisualcodeintenthandling)

# INGetVisualCodeIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for displaying your app’s visual codes.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INGetVisualCodeIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol to resolve, confirm, and handle requests to display visual codes such as QR codes. Adopt this protocol in an object of your Intents extension that’s capable of displaying an image representing the code.

Siri delivers an [INGetVisualCodeIntent](ingetvisualcodeintent.md) object to your handler when the user asks your app to display a relevant visual code. The provided intent object contains information about the type of code to display. Use the methods of this protocol to resolve the account information and display the corresponding image.

## Topics

### Resolving the Intent Parameters

- [resolveVisualCodeType(for:with:)](ingetvisualcodeintenthandling/resolvevisualcodetype%28for_with_%29.md): Deprecated. Resolves the type of code requested by the user.

### Confirming the Response

- [confirm(intent:completion:)](ingetvisualcodeintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can provide the requested visual code.

### Handling the Intent

- [handle(intent:completion:)](ingetvisualcodeintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles providing the image for the specified visual code.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INVisualCodeDomainHandling](invisualcodedomainhandling.md)

## See Also

### Visual Codes

- [INGetVisualCodeIntent](ingetvisualcodeintent.md): Deprecated. A request for a visual code to use for exchanging payment and contact information.
- [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md): Deprecated. Your app’s response to a request for a visual code.

# INGetVisualCodeIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for displaying your app’s visual codes.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INGetVisualCodeIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol to resolve, confirm, and handle requests to display visual codes such as QR codes. Adopt this protocol in an object of your Intents extension that’s capable of displaying an image representing the code.

Siri delivers an [INGetVisualCodeIntent](ingetvisualcodeintent.md) object to your handler when the user asks your app to display a relevant visual code. The provided intent object contains information about the type of code to display. Use the methods of this protocol to resolve the account information and display the corresponding image.

## Topics

### Resolving the Intent Parameters

- [resolveVisualCodeTypeForGetVisualCode:withCompletion:](ingetvisualcodeintenthandling/resolvevisualcodetype%28for_with_%29.md): Deprecated. Resolves the type of code requested by the user.

### Confirming the Response

- [confirmGetVisualCode:completion:](ingetvisualcodeintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can provide the requested visual code.

### Handling the Intent

- [handleGetVisualCode:completion:](ingetvisualcodeintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles providing the image for the specified visual code.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INVisualCodeDomainHandling](invisualcodedomainhandling.md)

## See Also

### Visual Codes

- [INGetVisualCodeIntent](ingetvisualcodeintent.md): Deprecated. A request for a visual code to use for exchanging payment and contact information.
- [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md): Deprecated. Your app’s response to a request for a visual code.
