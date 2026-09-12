> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintentresponse](https://developer.apple.com/documentation/intents/insaveprofileincarintentresponse)

# INSaveProfileInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a save profile in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSaveProfileInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSaveProfileInCarIntentResponse](insaveprofileincarintentresponse.md) object contains the status of saving one or more environment settings to the designated profile. You create instances of this class when confirming or handling a save profile in car intent.

You create an [INSaveProfileInCarIntentResponse](insaveprofileincarintentresponse.md) object in the [confirm(intent:completion:)](insaveprofileincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insaveprofileincarintenthandling/handle%28intent_completion_%29.md) methods of your save profile in car handler object. For more information about implementing your handler object, see [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insaveprofileincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insaveprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSaveProfileInCarIntentResponseCode](insaveprofileincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Profile Saving

- [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md): Deprecated. The handler interface for saving vehicle environment settings to a user-specified profile.
- [INSaveProfileInCarIntent](insaveprofileincarintent.md): Deprecated. A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.

# INSaveProfileInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a save profile in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSaveProfileInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSaveProfileInCarIntentResponse](insaveprofileincarintentresponse.md) object contains the status of saving one or more environment settings to the designated profile. You create instances of this class when confirming or handling a save profile in car intent.

You create an [INSaveProfileInCarIntentResponse](insaveprofileincarintentresponse.md) object in the [confirmSaveProfileInCar:completion:](insaveprofileincarintenthandling/confirm%28intent_completion_%29.md) and [handleSaveProfileInCar:completion:](insaveprofileincarintenthandling/handle%28intent_completion_%29.md) methods of your save profile in car handler object. For more information about implementing your handler object, see [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insaveprofileincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insaveprofileincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSaveProfileInCarIntentResponseCode](insaveprofileincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Profile Saving

- [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md): Deprecated. The handler interface for saving vehicle environment settings to a user-specified profile.
- [INSaveProfileInCarIntent](insaveprofileincarintent.md): Deprecated. A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.
