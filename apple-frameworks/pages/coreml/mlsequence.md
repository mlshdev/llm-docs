> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence](https://developer.apple.com/documentation/coreml/mlsequence)

# MLSequence (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A machine learning collection type that stores a series of strings or integers.

## Declaration

```swift
class MLSequence
```

<a id="overview"></a>

## Overview

A sequence stores a series of integers or strings of any length as the underlying type of an `MLFeatureValue`. Some classifier models — typically natural language models, such as an [NLTagger](../naturallanguage/nltagger.md) — produce an [MLSequence](mlsequence.md) feature value from their output features.

## Topics

### Creating a sequence

- [init(strings:)](mlsequence/init%28strings_%29.md): Creates a sequence of strings from a string array.
- [init(int64s:)](mlsequence/init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.
- [init(empty:)](mlsequence/init%28empty_%29.md): Creates an empty sequence of strings or integers.

### Identifying the sequence’s element type

- [type](mlsequence/type.md): The underlying type of the sequence’s elements.

### Retrieving the Sequence’s Values

- [stringValues](mlsequence/stringvalues.md): An array of strings in the sequence.
- [int64Values](mlsequence/int64values.md): An array of 64-bit integers in the sequence.

### Initializers

- [init(coder:)](mlsequence/init%28coder_%29.md)
- [init(int64Array:)](mlsequence/init%28int64array_%29.md)
- [init(stringArray:)](mlsequence/init%28stringarray_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLShapedArray](mlshapedarray.md): A machine learning collection type that stores scalar values in a multidimensional array.
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md): An interface that defines a shaped array type.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.

# MLSequence (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A machine learning collection type that stores a series of strings or integers.

## Declaration

```objectivec
@interface MLSequence : NSObject
```

<a id="overview"></a>

## Overview

A sequence stores a series of integers or strings of any length as the underlying type of an `MLFeatureValue`. Some classifier models — typically natural language models, such as an [NLTagger](../naturallanguage/nltagger.md) — produce an [MLSequence](mlsequence.md) feature value from their output features.

## Topics

### Creating a sequence

- [sequenceWithStringArray:](mlsequence/init%28strings_%29.md): Creates a sequence of strings from a string array.
- [sequenceWithInt64Array:](mlsequence/init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.
- [emptySequenceWithType:](mlsequence/init%28empty_%29.md): Creates an empty sequence of strings or integers.

### Identifying the sequence’s element type

- [type](mlsequence/type.md): The underlying type of the sequence’s elements.

### Retrieving the Sequence’s Values

- [stringValues](mlsequence/stringvalues.md): An array of strings in the sequence.
- [int64Values](mlsequence/int64values.md): An array of 64-bit integers in the sequence.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
