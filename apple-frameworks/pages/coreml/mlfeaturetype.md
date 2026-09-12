> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturetype](https://developer.apple.com/documentation/coreml/mlfeaturetype)

# MLFeatureType (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The possible types for feature values, input features, and output features.

## Declaration

```swift
enum MLFeatureType
```

## Topics

### Feature types

- [MLFeatureType.int64](mlfeaturetype/int64.md): The type for integer features and feature values.
- [MLFeatureType.double](mlfeaturetype/double.md): The type for double features and feature values.
- [MLFeatureType.image](mlfeaturetype/image.md): The type for image features and feature values.
- [MLFeatureType.multiArray](mlfeaturetype/multiarray.md): The type for multidimensional array features and feature values.
- [MLFeatureType.string](mlfeaturetype/string.md): The type for string features and feature values.
- [MLFeatureType.dictionary](mlfeaturetype/dictionary.md): The type for dictionary features and feature values.
- [MLFeatureType.sequence](mlfeaturetype/sequence.md): The type for sequence features and feature values.
- [MLFeatureType.state](mlfeaturetype/state.md): MLState. Represents a model state that may be updated in each inference.
- [MLFeatureType.invalid](mlfeaturetype/invalid.md): The type for invalid feature values.

### Creating a feature type

- [init(rawValue:)](mlfeaturetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLShapedArray](mlshapedarray.md): A machine learning collection type that stores scalar values in a multidimensional array.
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md): An interface that defines a shaped array type.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.

# MLFeatureType (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The possible types for feature values, input features, and output features.

## Declaration

```objectivec
enum MLFeatureType : NSInteger;
```

## Topics

### Feature types

- [MLFeatureTypeInt64](mlfeaturetype/int64.md): The type for integer features and feature values.
- [MLFeatureTypeDouble](mlfeaturetype/double.md): The type for double features and feature values.
- [MLFeatureTypeImage](mlfeaturetype/image.md): The type for image features and feature values.
- [MLFeatureTypeMultiArray](mlfeaturetype/multiarray.md): The type for multidimensional array features and feature values.
- [MLFeatureTypeString](mlfeaturetype/string.md): The type for string features and feature values.
- [MLFeatureTypeDictionary](mlfeaturetype/dictionary.md): The type for dictionary features and feature values.
- [MLFeatureTypeSequence](mlfeaturetype/sequence.md): The type for sequence features and feature values.
- [MLFeatureTypeState](mlfeaturetype/state.md): MLState. Represents a model state that may be updated in each inference.
- [MLFeatureTypeInvalid](mlfeaturetype/invalid.md): The type for invalid feature values.

## See Also

### Supporting types

- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.
