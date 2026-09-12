> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemperatureresolutionresult](https://developer.apple.com/documentation/intents/intemperatureresolutionresult)

# INTemperatureResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the units to use with a temperature value.

## Declaration

```swift
class INTemperatureResolutionResult
```

<a id="overview"></a>

## Overview

An [INTemperatureResolutionResult](intemperatureresolutionresult.md) object is what you return when resolving parameters containing an [NSMeasurement](../foundation/nsmeasurement.md) object with a temperature value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](intemperatureresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](intemperatureresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](intemperatureresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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
- [INVolumeResolutionResult](involumeresolutionresult.md): A resolution result for a volume associated with an intent.

# INTemperatureResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the units to use with a temperature value.

## Declaration

```objectivec
@interface INTemperatureResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INTemperatureResolutionResult](intemperatureresolutionresult.md) object is what you return when resolving parameters containing an [NSMeasurement](../foundation/nsmeasurement.md) object with a temperature value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedTemperature:](intemperatureresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithTemperatureToConfirm:](intemperatureresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithTemperaturesToDisambiguate:](intemperatureresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Measurements

- [INEnergyResolutionResult](inenergyresolutionresult.md): A resolution result for an energy parameter associated with an intent.
- [INLengthResolutionResult](inlengthresolutionresult.md): A resolution result for a length associated with an intent.
- [INMassResolutionResult](inmassresolutionresult.md): A resolution result for a mass associated with an intent.
- [INSpeedResolutionResult](inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INVolumeResolutionResult](involumeresolutionresult.md): A resolution result for a volume associated with an intent.
