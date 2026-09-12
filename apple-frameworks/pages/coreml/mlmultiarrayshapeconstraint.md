> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarrayshapeconstraint](https://developer.apple.com/documentation/coreml/mlmultiarrayshapeconstraint)

# MLMultiArrayShapeConstraint (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The lists of shapes or ranges of shapes that constrain a multiarray feature.

## Declaration

```swift
class MLMultiArrayShapeConstraint
```

## Topics

### Accessing the Constraints

- [enumeratedShapes](mlmultiarrayshapeconstraint/enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [sizeRangeForDimension](mlmultiarrayshapeconstraint/sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](mlmultiarrayshapeconstraint/type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.

### Initializers

- [init(coder:)](mlmultiarrayshapeconstraint/init%28coder_%29.md)

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

### Accessing the Constraints

- [shape](mlmultiarrayconstraint/shape.md): The shape of the multi array.
- [dataType](mlmultiarrayconstraint/datatype.md): The type for the multi array.
- [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md): The constraint on the shape of the multiarray.

# MLMultiArrayShapeConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The lists of shapes or ranges of shapes that constrain a multiarray feature.

## Declaration

```objectivec
@interface MLMultiArrayShapeConstraint : NSObject
```

## Topics

### Accessing the Constraints

- [enumeratedShapes](mlmultiarrayshapeconstraint/enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [sizeRangeForDimension](mlmultiarrayshapeconstraint/sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](mlmultiarrayshapeconstraint/type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing the Constraints

- [shape](mlmultiarrayconstraint/shape.md): The shape of the multi array.
- [dataType](mlmultiarrayconstraint/datatype.md): The type for the multi array.
- [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md): The constraint on the shape of the multiarray.
