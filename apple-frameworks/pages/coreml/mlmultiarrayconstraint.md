> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarrayconstraint](https://developer.apple.com/documentation/coreml/mlmultiarrayconstraint)

# MLMultiArrayConstraint (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The shape and data type constraints for a multidimensional array feature.

## Declaration

```swift
class MLMultiArrayConstraint
```

## Topics

### Accessing the Constraints

- [shape](mlmultiarrayconstraint/shape.md): The shape of the multi array.
- [dataType](mlmultiarrayconstraint/datatype.md): The type for the multi array.
- [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md): The constraint on the shape of the multiarray.
- [MLMultiArrayShapeConstraint](mlmultiarrayshapeconstraint.md): The lists of shapes or ranges of shapes that constrain a multiarray feature.

### Initializers

- [init(coder:)](mlmultiarrayconstraint/init%28coder_%29.md)

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
- [sequenceConstraint](mlfeaturedescription/sequenceconstraint.md): The constraints for a sequence feature.
- [MLSequenceConstraint](mlsequenceconstraint.md): The constraints for a sequence feature.

# MLMultiArrayConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The shape and data type constraints for a multidimensional array feature.

## Declaration

```objectivec
@interface MLMultiArrayConstraint : NSObject
```

## Topics

### Accessing the Constraints

- [shape](mlmultiarrayconstraint/shape.md): The shape of the multi array.
- [dataType](mlmultiarrayconstraint/datatype.md): The type for the multi array.
- [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md): The constraint on the shape of the multiarray.
- [MLMultiArrayShapeConstraint](mlmultiarrayshapeconstraint.md): The lists of shapes or ranges of shapes that constrain a multiarray feature.

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
- [sequenceConstraint](mlfeaturedescription/sequenceconstraint.md): The constraints for a sequence feature.
- [MLSequenceConstraint](mlsequenceconstraint.md): The constraints for a sequence feature.
