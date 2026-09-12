> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantresolutionresult](https://developer.apple.com/documentation/intents/inrestaurantresolutionresult)

# INRestaurantResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A resolution result for the restaurant selected by a user.

## Declaration

```swift
class INRestaurantResolutionResult
```

<a id="overview"></a>

## Overview

An [INRestaurantResolutionResult](inrestaurantresolutionresult.md) object is what you return when resolving parameters containing an [INRestaurant](inrestaurant.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inrestaurantresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inrestaurantresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inrestaurantresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md): A resolution result for the identity of a user involved in booking a reservation at a restaurant.

# INRestaurantResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A resolution result for the restaurant selected by a user.

## Declaration

```objectivec
@interface INRestaurantResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INRestaurantResolutionResult](inrestaurantresolutionresult.md) object is what you return when resolving parameters containing an [INRestaurant](inrestaurant.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedRestaurant:](inrestaurantresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithRestaurantToConfirm:](inrestaurantresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithRestaurantsToDisambiguate:](inrestaurantresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md): A resolution result for the identity of a user involved in booking a reservation at a restaurant.
