> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetdefrostersettingsincarintentresponse](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintentresponse)

# INSetDefrosterSettingsInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set defroster settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetDefrosterSettingsInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object contains the status of changing the defroster settings in the user’s vehicle. You create instances of this class when confirming or handling a set defroster settings in car intent.

You create an [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object in the [confirm(intent:completion:)](insetdefrostersettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetdefrostersettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set defroster settings in car handler object. For more information about implementing your handler object, see [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md).

## Topics

### Initializing the Response

- [init(code:userActivity:)](insetdefrostersettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetdefrostersettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetDefrosterSettingsInCarIntentResponseCode](insetdefrostersettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s defroster settings.
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md): Deprecated. A request to change the defroster settings in a CarPlay-enabled vehicle.

# INSetDefrosterSettingsInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set defroster settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetDefrosterSettingsInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object contains the status of changing the defroster settings in the user’s vehicle. You create instances of this class when confirming or handling a set defroster settings in car intent.

You create an [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object in the [confirmSetDefrosterSettingsInCar:completion:](insetdefrostersettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handleSetDefrosterSettingsInCar:completion:](insetdefrostersettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set defroster settings in car handler object. For more information about implementing your handler object, see [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md).

## Topics

### Initializing the Response

- [initWithCode:userActivity:](insetdefrostersettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetdefrostersettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetDefrosterSettingsInCarIntentResponseCode](insetdefrostersettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s defroster settings.
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md): Deprecated. A request to change the defroster settings in a CarPlay-enabled vehicle.
