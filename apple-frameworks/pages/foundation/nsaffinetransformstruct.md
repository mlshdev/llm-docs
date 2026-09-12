> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransformstruct](https://developer.apple.com/documentation/foundation/nsaffinetransformstruct)

# NSAffineTransformStruct (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.

## Declaration

```swift
struct NSAffineTransformStruct
```

<a id="overview"></a>

## Overview

For more details, see [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290).

## Topics

### Initializers

- [init()](nsaffinetransformstruct/init%28%29.md): Initializes a zero-filled transformation matrix.
- [init(m11:m12:m21:m22:tX:tY:)](nsaffinetransformstruct/init%28m11_m12_m21_m22_tx_ty_%29.md)

### Instance Properties

- [m11](nsaffinetransformstruct/m11.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m12](nsaffinetransformstruct/m12.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m21](nsaffinetransformstruct/m21.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m22](nsaffinetransformstruct/m22.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [tX](nsaffinetransformstruct/tx.md): An element of the transform matrix that contributes translation.
- [tY](nsaffinetransformstruct/ty.md): An element of the transform matrix that contributes translation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Transformation Matrix

- [transformStruct](nsaffinetransform/transformstruct.md): The matrix coefficients stored as the transformation matrix.

# NSAffineTransformStruct (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.

## Declaration

```objectivec
typedef struct { ... } NSAffineTransformStruct;
```

<a id="overview"></a>

## Overview

For more details, see [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290).

## Topics

### Instance Properties

- [m11](nsaffinetransformstruct/m11.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m12](nsaffinetransformstruct/m12.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m21](nsaffinetransformstruct/m21.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m22](nsaffinetransformstruct/m22.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [tX](nsaffinetransformstruct/tx.md): An element of the transform matrix that contributes translation.
- [tY](nsaffinetransformstruct/ty.md): An element of the transform matrix that contributes translation.

## See Also

### Accessing the Transformation Matrix

- [transformStruct](nsaffinetransform/transformstruct.md): The matrix coefficients stored as the transformation matrix.
