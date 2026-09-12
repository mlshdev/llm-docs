> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model)

# LinearTimeSeriesForecaster.Model

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A linear time-series forecasting model.

## Declaration

```swift
struct Model
```

<a id="overview"></a>

## Overview

> **Note**

> Only `Float` and `Double` are currently supported as the Scalar type.

## Topics

### Inspecting the model

- [annotationSize](model/annotationsize.md): The number of annotations per sample.
- [bias](model/bias.md): The bias coefficients.
- [featureSize](model/featuresize.md): The number of features per sample.
- [forecastWindowSize](model/forecastwindowsize.md): The number of prediction samples.
- [inputWindowSize](model/inputwindowsize.md): The number of input samples.
- [stride](model/stride.md): The number of samples between windows.
- [weight](model/weight.md): The linear coefficients.

### Applying the model

- [applied(to:eventHandler:)](model/applied%28to_eventhandler_%29.md): Performs a prediction on a shaped array of features.
- [applied(toWindow:eventHandler:)](model/applied%28towindow_eventhandler_%29.md): Performs a prediction on a window of input features.

### Exporting the model

- [export(to:)](model/export%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Exports this transformer as a CoreML model package.
- [export(to:metadata:)](model/export%28to_metadata_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Exports this transformer as a CoreML model package with user-supplied metadata.

### Default Implementations

- [TemporalTransformer Implementations](model/temporaltransformer-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalTransformer](../temporaltransformer.md)
- [Transformer](../transformer.md)

## See Also

### Supporting types

- [LinearTimeSeriesForecaster.Configuration](configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`.
