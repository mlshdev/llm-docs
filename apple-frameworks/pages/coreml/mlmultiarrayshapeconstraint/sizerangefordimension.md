> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarrayshapeconstraint/sizerangefordimension](https://developer.apple.com/documentation/coreml/mlmultiarrayshapeconstraint/sizerangefordimension)

# sizeRangeForDimension (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The allowable range for a dimention of the multiarray.

## Declaration

```swift
var sizeRangeForDimension: [NSValue] { get }
```

## See Also

### Accessing the Constraints

- [enumeratedShapes](enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [type](type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](../mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.

# sizeRangeForDimension (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The allowable range for a dimention of the multiarray.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSValue *> * sizeRangeForDimension;
```

## See Also

### Accessing the Constraints

- [enumeratedShapes](enumeratedshapes.md): Array of allowed shapes for a multiarray feature.
- [type](type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](../mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.
