> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform/transformstruct](https://developer.apple.com/documentation/foundation/nsaffinetransform/transformstruct)

# transformStruct (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The matrix coefficients stored as the transformation matrix.

## Declaration

```swift
var transformStruct: NSAffineTransformStruct { get set }
```

<a id="Discussion"></a>

## Discussion

The matrix is of the form shown in [Transform Mathematics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Transforms/Transforms.html#//apple_ref/doc/uid/TP40003290-CH204-BCIIICJI), and the six-element structure defined by the [NSAffineTransformStruct](../nsaffinetransformstruct.md) structure is of the form:

```objc
{m11, m12, m21, m22, tX, tY}
```

The [NSAffineTransformStruct](../nsaffinetransformstruct.md) structure is an alternate representation of a transformation matrix that can be used to specify matrix values directly.

## See Also

### Related Documentation

- [init(transform:)](init%28transform_%29.md): Initializes the receiver’s matrix using another transform object.

### Accessing the Transformation Matrix

- [NSAffineTransformStruct](../nsaffinetransformstruct.md): A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.

# transformStruct (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The matrix coefficients stored as the transformation matrix.

## Declaration

```objectivec
@property NSAffineTransformStruct transformStruct;
```

<a id="Discussion"></a>

## Discussion

The matrix is of the form shown in [Transform Mathematics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Transforms/Transforms.html#//apple_ref/doc/uid/TP40003290-CH204-BCIIICJI), and the six-element structure defined by the [NSAffineTransformStruct](../nsaffinetransformstruct.md) structure is of the form:

```objc
{m11, m12, m21, m22, tX, tY}
```

The [NSAffineTransformStruct](../nsaffinetransformstruct.md) structure is an alternate representation of a transformation matrix that can be used to specify matrix values directly.

## See Also

### Related Documentation

- [initWithTransform:](init%28transform_%29.md): Initializes the receiver’s matrix using another transform object.

### Accessing the Transformation Matrix

- [NSAffineTransformStruct](../nsaffinetransformstruct.md): A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.
