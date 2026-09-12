> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/model](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/model)

# TimeSeriesClassifier.Model

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A time-series classifier model.

## Declaration

```swift
struct Model
```

<a id="overview"></a>

## Overview

> **Note**

> Only `Float` and `Double` are currently supported as the Scalar type.

## Topics

### Getting the stride

- [stride](model/stride.md): The number of samples between temporal predictions.

### Applying and exporting

- [applied(to:eventHandler:)](model/applied%28to_eventhandler_%29.md): Performs a classification on a shaped array of input features.
- [export(to:)](model/export%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package.
- [export(to:metadata:)](model/export%28to_metadata_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package with user-supplied metadata.

### Default Implementations

- [TemporalTransformer Implementations](model/temporaltransformer-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalTransformer](../temporaltransformer.md)
- [Transformer](../transformer.md)

## See Also

### Supporting types

- [TimeSeriesClassifier.Configuration](configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`.
