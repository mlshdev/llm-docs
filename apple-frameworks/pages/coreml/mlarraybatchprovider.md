> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlarraybatchprovider](https://developer.apple.com/documentation/coreml/mlarraybatchprovider)

# MLArrayBatchProvider (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A convenience wrapper for batches of feature providers.

## Declaration

```swift
class MLArrayBatchProvider
```

<a id="overview"></a>

## Overview

This batch provider supports an array of feature providers or a dictionary of arrays of feature values.

## Topics

### Creating a batch provider

- [init(array:)](mlarraybatchprovider/init%28array_%29.md): Creates the batch provider based on the array of feature providers.
- [init(dictionary:)](mlarraybatchprovider/init%28dictionary_%29.md): Creates a batch provider based on feature names and their associated arrays of data.

### Accessing the feature providers

- [array](mlarraybatchprovider/array.md): The array of feature providers.

### Initializers

- [init(featureProviderArray:)](mlarraybatchprovider/init%28featureproviderarray_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MLBatchProvider](mlbatchprovider.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLSendableFeatureValue](mlsendablefeaturevalue.md): A sendable feature value.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.

# MLArrayBatchProvider (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A convenience wrapper for batches of feature providers.

## Declaration

```objectivec
@interface MLArrayBatchProvider : NSObject
```

<a id="overview"></a>

## Overview

This batch provider supports an array of feature providers or a dictionary of arrays of feature values.

## Topics

### Creating a batch provider

- [initWithFeatureProviderArray:](mlarraybatchprovider/init%28array_%29.md): Creates the batch provider based on the array of feature providers.
- [initWithDictionary:error:](mlarraybatchprovider/init%28dictionary_%29.md): Creates a batch provider based on feature names and their associated arrays of data.

### Accessing the feature providers

- [array](mlarraybatchprovider/array.md): The array of feature providers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MLBatchProvider](mlbatchprovider.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.
