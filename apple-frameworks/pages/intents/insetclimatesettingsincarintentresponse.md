> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintentresponse](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintentresponse)

# INSetClimateSettingsInCarIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set climate settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetClimateSettingsInCarIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object contains the status of changing the climate control settings in the user’s vehicle. You create instances of this class when confirming or handling a set climate settings in car intent.

You create an [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object in the [confirm(intent:completion:)](insetclimatesettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetclimatesettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set climate settings in car handler object. For more information about implementing your handler object, see [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetclimatesettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetclimatesettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCode](insetclimatesettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

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

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s climate control settings.
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md): Deprecated. A request to change the climate settings in a CarPlay-enabled vehicle.

# INSetClimateSettingsInCarIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Your app’s response to a set climate settings in car intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetClimateSettingsInCarIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object contains the status of changing the climate control settings in the user’s vehicle. You create instances of this class when confirming or handling a set climate settings in car intent.

You create an [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object in the [confirmSetClimateSettingsInCar:completion:](insetclimatesettingsincarintenthandling/confirm%28intent_completion_%29.md) and [handleSetClimateSettingsInCar:completion:](insetclimatesettingsincarintenthandling/handle%28intent_completion_%29.md) methods of your set climate settings in car handler object. For more information about implementing your handler object, see [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetclimatesettingsincarintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetclimatesettingsincarintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetClimateSettingsInCarIntentResponseCode](insetclimatesettingsincarintentresponsecode.md): Deprecated. Constants indicating the state of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s climate control settings.
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md): Deprecated. A request to change the climate settings in a CarPlay-enabled vehicle.
