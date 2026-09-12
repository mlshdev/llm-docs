> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequenceconstraint](https://developer.apple.com/documentation/coreml/mlsequenceconstraint)

# MLSequenceConstraint (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The constraints for a sequence feature.

## Declaration

```swift
class MLSequenceConstraint
```

## Topics

### Accessing the constraints

- [valueDescription](mlsequenceconstraint/valuedescription.md): The description that all sequence elements must match.
- [countRange](mlsequenceconstraint/countrange.md): The range of values allowed for the sequence’s length.

### Initializers

- [init(coder:)](mlsequenceconstraint/init%28coder_%29.md)

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

### Accessing feature constraints

- [stateConstraint](mlfeaturedescription/stateconstraint.md): The state feature value constraint.
- [imageConstraint](mlfeaturedescription/imageconstraint.md): The size and format constraints for an image feature.
- [MLImageConstraint](mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [dictionaryConstraint](mlfeaturedescription/dictionaryconstraint.md): The constraint for a dictionary feature.
- [MLDictionaryConstraint](mldictionaryconstraint.md): The constraint on the keys for a dictionary feature.
- [multiArrayConstraint](mlfeaturedescription/multiarrayconstraint.md): The constraints on a multidimensional array feature.
- [MLMultiArrayConstraint](mlmultiarrayconstraint.md): The shape and data type constraints for a multidimensional array feature.
- [sequenceConstraint](mlfeaturedescription/sequenceconstraint.md): The constraints for a sequence feature.

# MLSequenceConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The constraints for a sequence feature.

## Declaration

```objectivec
@interface MLSequenceConstraint : NSObject
```

## Topics

### Accessing the constraints

- [valueDescription](mlsequenceconstraint/valuedescription.md): The description that all sequence elements must match.
- [countRange](mlsequenceconstraint/countrange.md): The range of values allowed for the sequence’s length.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing feature constraints

- [stateConstraint](mlfeaturedescription/stateconstraint.md): The state feature value constraint.
- [imageConstraint](mlfeaturedescription/imageconstraint.md): The size and format constraints for an image feature.
- [MLImageConstraint](mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [dictionaryConstraint](mlfeaturedescription/dictionaryconstraint.md): The constraint for a dictionary feature.
- [MLDictionaryConstraint](mldictionaryconstraint.md): The constraint on the keys for a dictionary feature.
- [multiArrayConstraint](mlfeaturedescription/multiarrayconstraint.md): The constraints on a multidimensional array feature.
- [MLMultiArrayConstraint](mlmultiarrayconstraint.md): The shape and data type constraints for a multidimensional array feature.
- [sequenceConstraint](mlfeaturedescription/sequenceconstraint.md): The constraints for a sequence feature.
