> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintentresponse](https://developer.apple.com/documentation/intents/insetseatsettingsincarintentresponse)

# INSetSeatSettingsInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set seat settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetSeatSettingsInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object contains the status of changing the seat settings in the user’s vehicle. You create instances of this class when confirming or handling a set seat settings in car intent.

You create an [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object in the [confirm(intent:completion:)](insetseatsettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetseatsettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set seat settings in car handler object. For more information about implementing your handler object, see [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetseatsettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetseatsettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCode](insetseatsettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s seat-related settings.
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md): Deprecated. A request to change the seat-related settings in a CarPlay-enabled vehicle.

# INSetSeatSettingsInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set seat settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetSeatSettingsInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object contains the status of changing the seat settings in the user’s vehicle. You create instances of this class when confirming or handling a set seat settings in car intent.

You create an [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object in the [confirmSetSeatSettingsInCar:completion:](insetseatsettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handleSetSeatSettingsInCar:completion:](insetseatsettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set seat settings in car handler object. For more information about implementing your handler object, see [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetseatsettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetseatsettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetSeatSettingsInCarIntentResponseCode](insetseatsettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s seat-related settings.
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md): Deprecated. A request to change the seat-related settings in a CarPlay-enabled vehicle.
