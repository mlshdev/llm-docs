> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mldictionaryfeatureprovider](https://developer.apple.com/documentation/coreml/mldictionaryfeatureprovider)

# MLDictionaryFeatureProvider (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A convenience wrapper for the given dictionary of data.

## Declaration

```swift
class MLDictionaryFeatureProvider
```

<a id="overview"></a>

## Overview

If your input data is stored in a dictionary, consider this type of [MLFeatureProvider](mlfeatureprovider.md) that is backed by a dictionary. It is a convenience interface, saving you the trouble of iterating through the dictionary to assign all of its values.

## Topics

### Creating the provider

- [init(dictionary:)](mldictionaryfeatureprovider/init%28dictionary_%29.md): Creates the feature provider based on a dictionary.

### Accessing the features

- [subscript(\_:)](mldictionaryfeatureprovider/subscript%28__%29.md): Subscript interface for the feature provider to pass through to the dictionary.
- [dictionary](mldictionaryfeatureprovider/dictionary.md): The backing dictionary.

### Initializers

- [init(coder:)](mldictionaryfeatureprovider/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MLFeatureProvider](mlfeatureprovider.md)
- [NSCoding](../foundation/nscoding.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLSendableFeatureValue](mlsendablefeaturevalue.md): A sendable feature value.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.

# MLDictionaryFeatureProvider (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A convenience wrapper for the given dictionary of data.

## Declaration

```objectivec
@interface MLDictionaryFeatureProvider : NSObject
```

<a id="overview"></a>

## Overview

If your input data is stored in a dictionary, consider this type of [MLFeatureProvider](mlfeatureprovider.md) that is backed by a dictionary. It is a convenience interface, saving you the trouble of iterating through the dictionary to assign all of its values.

## Topics

### Creating the provider

- [initWithDictionary:error:](mldictionaryfeatureprovider/init%28dictionary_%29.md): Creates the feature provider based on a dictionary.

### Accessing the features

- [objectForKeyedSubscript:](mldictionaryfeatureprovider/subscript%28__%29.md): Subscript interface for the feature provider to pass through to the dictionary.
- [dictionary](mldictionaryfeatureprovider/dictionary.md): The backing dictionary.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MLFeatureProvider](mlfeatureprovider.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureValue](mlfeaturevalue.md): A generic wrapper around an underlying value and the value’s type.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.
