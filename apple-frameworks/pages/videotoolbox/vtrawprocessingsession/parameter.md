> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsession/parameter](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession/parameter)

# VTRAWProcessingSession.Parameter

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

A parameter expresses a control or a set of controls that influence frame processing.

## Declaration

```swift
enum Parameter
```

<a id="overview"></a>

## Overview

Parameters can represent Boolean options, integer or floating-point ranges, lists, or subgroups. All parameters have a collection of [VTRAWProcessingSession.Parameter.Details](parameter/details.md) containing a localized name suitable for display in UI, a longer localized description string, and a Boolean that indicates whether it’s enabled. All details, except for subgroups, must have a “key” string used to uniquely identify that parameter. All parameters other than subgroups have a collection of [VTRAWProcessingSession.Parameter.Values](parameter/values.md) containing a mandatory “initial” value, and optional “neutral” and “camera” values. [VTRAWProcessingSession.Parameter.IntegerParameter](parameter/integerparameter.md) and [VTRAWProcessingSession.Parameter.FloatParameter](parameter/floatparameter.md) are required to have “minimum” and “maximum” values in their Values

Parameter arrays are created and returned by the VideoToolbox framework.

## Topics

### Parameters

- [VTRAWProcessingSession.Parameter.BooleanParameter](parameter/booleanparameter.md)
- [VTRAWProcessingSession.Parameter.Details](parameter/details.md)
- [VTRAWProcessingSession.Parameter.FloatParameter](parameter/floatparameter.md)
- [VTRAWProcessingSession.Parameter.IntegerParameter](parameter/integerparameter.md)
- [VTRAWProcessingSession.Parameter.ListParameter](parameter/listparameter.md)
- [VTRAWProcessingSession.Parameter.Values](parameter/values.md)

### Enumeration Cases

- [VTRAWProcessingSession.Parameter.bool(\_:)](parameter/bool%28__%29.md)
- [VTRAWProcessingSession.Parameter.float(\_:)](parameter/float%28__%29.md)
- [VTRAWProcessingSession.Parameter.int(\_:)](parameter/int%28__%29.md)
- [VTRAWProcessingSession.Parameter.list(\_:)](parameter/list%28__%29.md)
- [VTRAWProcessingSession.Parameter.subgroup(details:elements:)](parameter/subgroup%28details_elements_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring parameters

- [parameters()](parameters%28%29.md): Returns an asynchronous sequence that provides updates to the processing Parameter array if the processing extension makes changes to the set of Parameters.
- [updateParameter(values:)](updateparameter%28values_%29.md): Sets the value for one or more of the processing parameters.
- [processingParameters](processingparameters.md): An array of processing parameters available for this RAW processing session.
