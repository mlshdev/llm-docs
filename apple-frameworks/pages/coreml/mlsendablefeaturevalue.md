> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsendablefeaturevalue](https://developer.apple.com/documentation/coreml/mlsendablefeaturevalue)

# MLSendableFeatureValue

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sendable feature value.

## Declaration

```swift
struct MLSendableFeatureValue
```

<a id="overview"></a>

## Overview

This version of feature value is similar to [MLFeatureValue](mlfeaturevalue.md) but it can be passed across concurrency domains. Once in the target concurrency domain, you can then convert it to a [MLFeatureValue](mlfeaturevalue.md).

## Topics

### Creating a sendable feature value

- [init(\_:)](mlsendablefeaturevalue/init%28__%29.md): Creates a feature value containing a double-precision floating-point value.
- [init(undefined:)](mlsendablefeaturevalue/init%28undefined_%29.md): Creates an undefined feature value of a specific type.

### Accessing the values

- [doubleValue](mlsendablefeaturevalue/doublevalue.md): The double-precision floating-point value, if the contained value is a double.
- [float16Value](mlsendablefeaturevalue/float16value.md): The 16-bit floating-point value, if the contained value is a 16-bit float.
- [floatValue](mlsendablefeaturevalue/floatvalue.md): The single-precision floating-point value, if the contained value is a float.
- [integerDictionaryValue](mlsendablefeaturevalue/integerdictionaryvalue.md): The integer dictionary value, if the contained value is a dictionary of integers to numbers.
- [integerValue](mlsendablefeaturevalue/integervalue.md): The integer value, if the contained value is an integer.
- [isScalar](mlsendablefeaturevalue/isscalar.md): A Boolean value indicating whether the value is a single number.
- [isShapedArray](mlsendablefeaturevalue/isshapedarray.md): A Boolean value indicating whether the value is a shaped array.
- [isUndefined](mlsendablefeaturevalue/isundefined.md): A Boolean value indicating whether the value is missing or undefined.
- [stringArrayValue](mlsendablefeaturevalue/stringarrayvalue.md): The string array value, if the contained value is an array of string.
- [stringDictionaryValue](mlsendablefeaturevalue/stringdictionaryvalue.md): The string dictionary value, if the contained value is a dictionary of strings to numbers.
- [stringValue](mlsendablefeaturevalue/stringvalue.md): The string value, if the contained value is a string.
- [type](mlsendablefeaturevalue/type.md): The type of value.

### Getting the shaped array value

- [shapedArrayValue(of:)](mlsendablefeaturevalue/shapedarrayvalue%28of_%29.md): Returns the shaped array value, if the contained value is a shaped array of the specified type.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.
