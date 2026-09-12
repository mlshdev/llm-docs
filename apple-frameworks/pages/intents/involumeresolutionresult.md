> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/involumeresolutionresult](https://developer.apple.com/documentation/intents/involumeresolutionresult)

# INVolumeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for a volume associated with an intent.

## Declaration

```swift
class INVolumeResolutionResult
```

<a id="overview"></a>

## Overview

An [INVolumeResolutionResult](involumeresolutionresult.md) object is what you return when resolving volume related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](involumeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](involumeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](involumeresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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
- [INMassResolutionResult](inmassresolutionresult.md): A resolution result for a mass associated with an intent.
- [INSpeedResolutionResult](inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INTemperatureResolutionResult](intemperatureresolutionresult.md): A resolution result for the units to use with a temperature value.

# INVolumeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for a volume associated with an intent.

## Declaration

```objectivec
@interface INVolumeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INVolumeResolutionResult](involumeresolutionresult.md) object is what you return when resolving volume related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedVolume:](involumeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithVolumeToConfirm:](involumeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithVolumeToDisambiguate:](involumeresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Measurements

- [INEnergyResolutionResult](inenergyresolutionresult.md): A resolution result for an energy parameter associated with an intent.
- [INLengthResolutionResult](inlengthresolutionresult.md): A resolution result for a length associated with an intent.
- [INMassResolutionResult](inmassresolutionresult.md): A resolution result for a mass associated with an intent.
- [INSpeedResolutionResult](inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INTemperatureResolutionResult](intemperatureresolutionresult.md): A resolution result for the units to use with a temperature value.
