> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmassresolutionresult](https://developer.apple.com/documentation/intents/inmassresolutionresult)

# INMassResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for a mass associated with an intent.

## Declaration

```swift
class INMassResolutionResult
```

<a id="overview"></a>

## Overview

An [INMassResolutionResult](inmassresolutionresult.md) object is what you return when resolving mass related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inmassresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inmassresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inmassresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

### Measurements

- [INEnergyResolutionResult](inenergyresolutionresult.md): A resolution result for an energy parameter associated with an intent.
- [INLengthResolutionResult](inlengthresolutionresult.md): A resolution result for a length associated with an intent.
- [INSpeedResolutionResult](inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INTemperatureResolutionResult](intemperatureresolutionresult.md): A resolution result for the units to use with a temperature value.
- [INVolumeResolutionResult](involumeresolutionresult.md): A resolution result for a volume associated with an intent.

# INMassResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for a mass associated with an intent.

## Declaration

```objectivec
@interface INMassResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INMassResolutionResult](inmassresolutionresult.md) object is what you return when resolving mass related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedMass:](inmassresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithMassToConfirm:](inmassresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithMassToDisambiguate:](inmassresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Measurements

- [INEnergyResolutionResult](inenergyresolutionresult.md): A resolution result for an energy parameter associated with an intent.
- [INLengthResolutionResult](inlengthresolutionresult.md): A resolution result for a length associated with an intent.
- [INSpeedResolutionResult](inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INTemperatureResolutionResult](intemperatureresolutionresult.md): A resolution result for the units to use with a temperature value.
- [INVolumeResolutionResult](involumeresolutionresult.md): A resolution result for a volume associated with an intent.
