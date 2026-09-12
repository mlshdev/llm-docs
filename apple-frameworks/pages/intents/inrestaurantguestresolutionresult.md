> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestresolutionresult](https://developer.apple.com/documentation/intents/inrestaurantguestresolutionresult)

# INRestaurantGuestResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A resolution result for the identity of a user involved in booking a reservation at a restaurant.

## Declaration

```swift
class INRestaurantGuestResolutionResult
```

<a id="overview"></a>

## Overview

An [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md) object is what you return when resolving parameters containing a [INRestaurantGuest](inrestaurantguest.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inrestaurantguestresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inrestaurantguestresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inrestaurantguestresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

- [INRestaurantResolutionResult](inrestaurantresolutionresult.md): A resolution result for the restaurant selected by a user.

# INRestaurantGuestResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A resolution result for the identity of a user involved in booking a reservation at a restaurant.

## Declaration

```objectivec
@interface INRestaurantGuestResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md) object is what you return when resolving parameters containing a [INRestaurantGuest](inrestaurantguest.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedRestaurantGuest:](inrestaurantguestresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithRestaurantGuestToConfirm:](inrestaurantguestresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithRestaurantGuestsToDisambiguate:](inrestaurantguestresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INRestaurantResolutionResult](inrestaurantresolutionresult.md): A resolution result for the restaurant selected by a user.
