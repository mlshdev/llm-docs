> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmultiarrayshapeconstraint/enumeratedshapes

# enumeratedShapes (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Array of allowed shapes for a multiarray feature.

## Declaration

```swift
var enumeratedShapes: [[NSNumber]] { get }
```

## See Also

### Accessing the Constraints

- [sizeRangeForDimension](sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](../mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.

# enumeratedShapes (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Array of allowed shapes for a multiarray feature.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSArray<NSNumber *> *> * enumeratedShapes;
```

## See Also

### Accessing the Constraints

- [sizeRangeForDimension](sizerangefordimension.md): The allowable range for a dimention of the multiarray.
- [type](type.md): The type of the shape constraint.
- [MLMultiArrayShapeConstraintType](../mlmultiarrayshapeconstrainttype.md): The possible types of shape constraints.
