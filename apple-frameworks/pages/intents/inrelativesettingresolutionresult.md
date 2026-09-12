> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelativesettingresolutionresult](https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult)

# INRelativeSettingResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A resolution result for whether you can select the minimum, current, or maximum value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INRelativeSettingResolutionResult
```

<a id="overview"></a>

## Overview

An [INRelativeSettingResolutionResult](inrelativesettingresolutionresult.md) object is what you return when resolving parameters containing a [INRelativeSetting](inrelativesetting.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inrelativesettingresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inrelativesettingresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

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

### CarPlay Resolution Results

- [INCarSeatResolutionResult](incarseatresolutionresult.md): Deprecated. A resolution result for a specific seat of the car.
- [INCarDefrosterResolutionResult](incardefrosterresolutionresult.md): Deprecated. A resolution result for which defroster to use in a car.
- [INCarAudioSourceResolutionResult](incaraudiosourceresolutionresult.md): Deprecated. A resolution result for the audio source to use in a car.
- [INCarAirCirculationModeResolutionResult](incaraircirculationmoderesolutionresult.md): Deprecated. A resolution result for the air circulation mode to use in a car.
- [INRadioTypeResolutionResult](inradiotyperesolutionresult.md): Deprecated. A resolution result for the type of radio to use in a car.
- [INRelativeReferenceResolutionResult](inrelativereferenceresolutionresult.md): Deprecated. A resolution result for a choice between the next or previous option.

# INRelativeSettingResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A resolution result for whether you can select the minimum, current, or maximum value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INRelativeSettingResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INRelativeSettingResolutionResult](inrelativesettingresolutionresult.md) object is what you return when resolving parameters containing a [INRelativeSetting](inrelativesetting.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedRelativeSetting:](inrelativesettingresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithRelativeSettingToConfirm:](inrelativesettingresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### CarPlay Resolution Results

- [INCarSeatResolutionResult](incarseatresolutionresult.md): Deprecated. A resolution result for a specific seat of the car.
- [INCarDefrosterResolutionResult](incardefrosterresolutionresult.md): Deprecated. A resolution result for which defroster to use in a car.
- [INCarAudioSourceResolutionResult](incaraudiosourceresolutionresult.md): Deprecated. A resolution result for the audio source to use in a car.
- [INCarAirCirculationModeResolutionResult](incaraircirculationmoderesolutionresult.md): Deprecated. A resolution result for the air circulation mode to use in a car.
- [INRadioTypeResolutionResult](inradiotyperesolutionresult.md): Deprecated. A resolution result for the type of radio to use in a car.
- [INRelativeReferenceResolutionResult](inrelativereferenceresolutionresult.md): Deprecated. A resolution result for a choice between the next or previous option.
