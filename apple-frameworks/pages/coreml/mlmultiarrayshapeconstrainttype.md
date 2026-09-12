> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarrayshapeconstrainttype](https://developer.apple.com/documentation/coreml/mlmultiarrayshapeconstrainttype)

# MLMultiArrayShapeConstraintType (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The possible types of shape constraints.

## Declaration

```swift
enum MLMultiArrayShapeConstraintType
```

## Topics

### Constraint types

- [MLMultiArrayShapeConstraintType.enumerated](mlmultiarrayshapeconstrainttype/enumerated.md): The constraint is an array of allowed shapes.
- [MLMultiArrayShapeConstraintType.range](mlmultiarrayshapeconstrainttype/range.md): The constraint is a set of ranges allowed for the array shape.
- [MLMultiArrayShapeConstraintType.unspecified](mlmultiarrayshapeconstrainttype/unspecified.md): The constraint type is undefined.

### Creating a constraint type

- [init(rawValue:)](mlmultiarrayshapeconstrainttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Constraints

- [enumeratedShapes](mlmultiarrayshapeconstraint/enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [sizeRangeForDimension](mlmultiarrayshapeconstraint/sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](mlmultiarrayshapeconstraint/type.md): The type of the shape constraint.

# MLMultiArrayShapeConstraintType (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The possible types of shape constraints.

## Declaration

```objectivec
enum MLMultiArrayShapeConstraintType : NSInteger;
```

## Topics

### Constraint types

- [MLMultiArrayShapeConstraintTypeEnumerated](mlmultiarrayshapeconstrainttype/enumerated.md): The constraint is an array of allowed shapes.
- [MLMultiArrayShapeConstraintTypeRange](mlmultiarrayshapeconstrainttype/range.md): The constraint is a set of ranges allowed for the array shape.
- [MLMultiArrayShapeConstraintTypeUnspecified](mlmultiarrayshapeconstrainttype/unspecified.md): The constraint type is undefined.

## See Also

### Accessing the Constraints

- [enumeratedShapes](mlmultiarrayshapeconstraint/enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [sizeRangeForDimension](mlmultiarrayshapeconstraint/sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](mlmultiarrayshapeconstraint/type.md): The type of the shape constraint.
