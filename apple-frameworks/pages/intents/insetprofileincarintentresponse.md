> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintentresponse](https://developer.apple.com/documentation/intents/insetprofileincarintentresponse)

# INSetProfileInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set profile in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetProfileInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object contains the status of restoring one or more environment settings from a designated profile. You create instances of this class when confirming or handling a set profile in car intent.

You create an [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object in the [confirm(intent:completion:)](insetprofileincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetprofileincarintenthandling/handle%28intent_completion_%29.md) methods of your set profile in car handler object. For more information about implementing your handler object, see [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetprofileincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetProfileInCarIntentResponseCode](insetprofileincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Profile Settings

- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md): Deprecated. The handler interface for restoring vehicle environment settings from a user-specified profile.
- [INSetProfileInCarIntent](insetprofileincarintent.md): Deprecated. A request to change the user’s vehicle environment settings to the ones from the specified profile.

# INSetProfileInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set profile in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetProfileInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object contains the status of restoring one or more environment settings from a designated profile. You create instances of this class when confirming or handling a set profile in car intent.

You create an [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object in the [confirmSetProfileInCar:completion:](insetprofileincarintenthandling/confirm%28intent_completion_%29.md) and [handleSetProfileInCar:completion:](insetprofileincarintenthandling/handle%28intent_completion_%29.md) methods of your set profile in car handler object. For more information about implementing your handler object, see [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetprofileincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetProfileInCarIntentResponseCode](insetprofileincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Profile Settings

- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md): Deprecated. The handler interface for restoring vehicle environment settings from a user-specified profile.
- [INSetProfileInCarIntent](insetprofileincarintent.md): Deprecated. A request to change the user’s vehicle environment settings to the ones from the specified profile.
