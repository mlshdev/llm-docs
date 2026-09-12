> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplacemarkresolutionresult](https://developer.apple.com/documentation/intents/inplacemarkresolutionresult)

# INPlacemarkResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for placemark information associated with an intent.

## Declaration

```swift
class INPlacemarkResolutionResult
```

## Mentioned In

- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

An [INPlacemarkResolutionResult](inplacemarkresolutionresult.md) object is what you return when resolving parameters containing an [CLPlacemark](../corelocation/clplacemark.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inplacemarkresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inplacemarkresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inplacemarkresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

### Contacts

- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.

# INPlacemarkResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for placemark information associated with an intent.

## Declaration

```objectivec
@interface INPlacemarkResolutionResult : INIntentResolutionResult
```

## Mentioned In

- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

An [INPlacemarkResolutionResult](inplacemarkresolutionresult.md) object is what you return when resolving parameters containing an [CLPlacemark](../corelocation/clplacemark.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedPlacemark:](inplacemarkresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithPlacemarkToConfirm:](inplacemarkresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithPlacemarksToDisambiguate:](inplacemarkresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Contacts

- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
