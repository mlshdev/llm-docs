> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset](https://developer.apple.com/documentation/coreml/mlmodelasset)

# MLModelAsset (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An abstraction of a compiled Core ML model asset.

## Declaration

```swift
class MLModelAsset
```

<a id="overview"></a>

## Overview

[MLModelAsset](mlmodelasset.md) provides a unified interface by abstracting the compiled model representations for `.mlmodelc` files and in-memory representations.

To use an in-memory model, create an [MLModelAsset](mlmodelasset.md) with an in-memory model specification, then call [load(\_:configuration:completionHandler:)](mlmodel/load%28__configuration_completionhandler_%29.md).

## Topics

### Creating a model asset

- [init(specification:)](mlmodelasset/init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [init(specification:blobMapping:)](mlmodelasset/init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.
- [init(url:)](mlmodelasset/init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.

### Getting function names

- [functionNames(completionHandler:)](mlmodelasset/functionnames%28completionhandler_%29.md): The list of function names in the model asset.

### Getting the model description

- [modelDescription(completionHandler:)](mlmodelasset/modeldescription%28completionhandler_%29.md): The default model descripton.
- [modelDescription(ofFunctionNamed:completionHandler:)](mlmodelasset/modeldescription%28offunctionnamed_completionhandler_%29.md): The model descripton for a specified function.

### Initializers

- [init(URL:)](mlmodelasset/init%28url_%29-5540m.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLSendableFeatureValue](mlsendablefeaturevalue.md): A sendable feature value.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.

# MLModelAsset (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An abstraction of a compiled Core ML model asset.

## Declaration

```objectivec
@interface MLModelAsset : NSObject
```

<a id="overview"></a>

## Overview

[MLModelAsset](mlmodelasset.md) provides a unified interface by abstracting the compiled model representations for `.mlmodelc` files and in-memory representations.

To use an in-memory model, create an [MLModelAsset](mlmodelasset.md) with an in-memory model specification, then call [loadModelAsset:configuration:completionHandler:](mlmodel/load%28__configuration_completionhandler_%29.md).

## Topics

### Creating a model asset

- [modelAssetWithSpecificationData:error:](mlmodelasset/init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [modelAssetWithSpecificationData:blobMapping:error:](mlmodelasset/init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.
- [modelAssetWithURL:error:](mlmodelasset/init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.

### Getting function names

- [functionNamesWithCompletionHandler:](mlmodelasset/functionnames%28completionhandler_%29.md): The list of function names in the model asset.

### Getting the model description

- [modelDescriptionWithCompletionHandler:](mlmodelasset/modeldescription%28completionhandler_%29.md): The default model descripton.
- [modelDescriptionOfFunctionNamed:completionHandler:](mlmodelasset/modeldescription%28offunctionnamed_completionhandler_%29.md): The model descripton for a specified function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
