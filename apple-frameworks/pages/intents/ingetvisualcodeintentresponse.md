> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintentresponse](https://developer.apple.com/documentation/intents/ingetvisualcodeintentresponse)

# INGetVisualCodeIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request for a visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INGetVisualCodeIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object to provide the visual code to display. When handling the intent, provide an image with the requested visual code. Siri communicates the details back to the user at appropriate times.

You create an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object in the [confirm(intent:completion:)](ingetvisualcodeintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](ingetvisualcodeintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](ingetvisualcodeintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetvisualcodeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INGetVisualCodeIntentResponseCode](ingetvisualcodeintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Code Image

- [visualCodeImage](ingetvisualcodeintentresponse/visualcodeimage.md): Deprecated. The image containing the visual code.

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

### Visual Codes

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md): Deprecated. The handler interface for displaying your app’s visual codes.
- [INGetVisualCodeIntent](ingetvisualcodeintent.md): Deprecated. A request for a visual code to use for exchanging payment and contact information.

# INGetVisualCodeIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request for a visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INGetVisualCodeIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object to provide the visual code to display. When handling the intent, provide an image with the requested visual code. Siri communicates the details back to the user at appropriate times.

You create an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object in the [confirmGetVisualCode:completion:](ingetvisualcodeintenthandling/confirm%28intent_completion_%29.md) and [handleGetVisualCode:completion:](ingetvisualcodeintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](ingetvisualcodeintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](ingetvisualcodeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INGetVisualCodeIntentResponseCode](ingetvisualcodeintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Code Image

- [visualCodeImage](ingetvisualcodeintentresponse/visualcodeimage.md): Deprecated. The image containing the visual code.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Visual Codes

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md): Deprecated. The handler interface for displaying your app’s visual codes.
- [INGetVisualCodeIntent](ingetvisualcodeintent.md): Deprecated. A request for a visual code to use for exchanging payment and contact information.
