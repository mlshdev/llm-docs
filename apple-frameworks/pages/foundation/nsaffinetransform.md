> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsaffinetransform](https://developer.apple.com/documentation/foundation/nsaffinetransform)

# NSAffineTransform (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A graphics coordinate transformation.

## Declaration

```swift
class NSAffineTransform
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [AffineTransform](affinetransform.md); use [NSAffineTransform](nsaffinetransform.md) when you need reference semantics or other Foundation-specific behavior.

A transformation specifies how points in one coordinate system are transformed to points in another coordinate system. An affine transformation is a special type of transformation that preserves parallel lines in a path but does not necessarily preserve lengths or angles. Scaling, rotation, and translation are the most commonly used manipulations supported by affine transforms, but shearing is also possible.

> **Note**

>  In OS X 10.3 and earlier the [NSAffineTransform](nsaffinetransform.md) class was declared and implemented entirely in the Application Kit framework. As of macOS 10.4 the [NSAffineTransform](nsaffinetransform.md) class has been split across the Foundation and Application Kit frameworks.

Methods for applying affine transformations to the current graphics context and a method for applying an affine transformation to an [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath) object are described in NSAffineTransform Additions Reference in the Application Kit.

> **Important**

>  The Swift overlay to the Foundation framework provides the [AffineTransform](affinetransform.md) structure, which bridges to the [NSAffineTransform](nsaffinetransform.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating an Affine Transform

- [init()](nsaffinetransform/init%28%29.md): Initializes an affine transform matrix to the identity matrix.
- [init(transform:)](nsaffinetransform/init%28transform_%29.md): Initializes the receiver’s matrix using another transform object.

### Accumulating Transformations

- [rotate(byDegrees:)](nsaffinetransform/rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotate(byRadians:)](nsaffinetransform/rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scale(by:)](nsaffinetransform/scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleX(by:yBy:)](nsaffinetransform/scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateX(by:yBy:)](nsaffinetransform/translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [append(\_:)](nsaffinetransform/append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prepend(\_:)](nsaffinetransform/prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert()](nsaffinetransform/invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

### Transforming Data and Objects

- [transform(\_:)](nsaffinetransform/transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transform(\_:)](nsaffinetransform/transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.
- [transform(\_:)](nsaffinetransform/transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

### Accessing the Transformation Matrix

- [transformStruct](nsaffinetransform/transformstruct.md): The matrix coefficients stored as the transformation matrix.
- [NSAffineTransformStruct](nsaffinetransformstruct.md): A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.

### Setting and Building the Current Transformation Matrix

- [set()](nsaffinetransform/set%28%29.md): Sets the current transformation matrix to the receiver’s transformation matrix.
- [concat()](nsaffinetransform/concat%28%29.md): Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

### Initializers

- [init(coder:)](nsaffinetransform/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSAffineTransform (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A graphics coordinate transformation.

## Declaration

```objectivec
@interface NSAffineTransform : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [AffineTransform](affinetransform.md); use [NSAffineTransform](nsaffinetransform.md) when you need reference semantics or other Foundation-specific behavior.

A transformation specifies how points in one coordinate system are transformed to points in another coordinate system. An affine transformation is a special type of transformation that preserves parallel lines in a path but does not necessarily preserve lengths or angles. Scaling, rotation, and translation are the most commonly used manipulations supported by affine transforms, but shearing is also possible.

> **Note**

>  In OS X 10.3 and earlier the [NSAffineTransform](nsaffinetransform.md) class was declared and implemented entirely in the Application Kit framework. As of macOS 10.4 the [NSAffineTransform](nsaffinetransform.md) class has been split across the Foundation and Application Kit frameworks.

Methods for applying affine transformations to the current graphics context and a method for applying an affine transformation to an [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath) object are described in NSAffineTransform Additions Reference in the Application Kit.

> **Important**

>  The Swift overlay to the Foundation framework provides the [AffineTransform](affinetransform.md) structure, which bridges to the [NSAffineTransform](nsaffinetransform.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating an Affine Transform

- [transform](nsaffinetransform/transform.md): Creates a new affine transform initialized to the identity matrix.
- [init](nsaffinetransform/init%28%29.md): Initializes an affine transform matrix to the identity matrix.
- [initWithTransform:](nsaffinetransform/init%28transform_%29.md): Initializes the receiver’s matrix using another transform object.

### Accumulating Transformations

- [rotateByDegrees:](nsaffinetransform/rotate%28bydegrees_%29.md): Applies a rotation factor (measured in degrees) to the receiver’s transformation matrix.
- [rotateByRadians:](nsaffinetransform/rotate%28byradians_%29.md): Applies a rotation factor (measured in radians) to the receiver’s transformation matrix.
- [scaleBy:](nsaffinetransform/scale%28by_%29.md): Applies the specified scaling factor along both x and y axes to the receiver’s transformation matrix.
- [scaleXBy:yBy:](nsaffinetransform/scalex%28by_yby_%29.md): Applies scaling factors to each axis of the receiver’s transformation matrix.
- [translateXBy:yBy:](nsaffinetransform/translatex%28by_yby_%29.md): Applies the specified translation factors to the receiver’s transformation matrix.
- [appendTransform:](nsaffinetransform/append%28__%29.md): Appends the specified matrix to the receiver’s matrix.
- [prependTransform:](nsaffinetransform/prepend%28__%29.md): Prepends the specified matrix to the receiver’s matrix.
- [invert](nsaffinetransform/invert%28%29.md): Replaces the receiver’s matrix with its inverse matrix.

### Transforming Data and Objects

- [transformPoint:](nsaffinetransform/transform%28__%29-41p16.md): Applies the receiver’s transform to the specified point and returns the result.
- [transformSize:](nsaffinetransform/transform%28__%29-5r6ol.md): Applies the receiver’s transform to the specified size and returns the results.
- [transformBezierPath:](nsaffinetransform/transform%28__%29-6z1xo.md): Creates and returns a new Bézier path object with each point in the given path transformed by the receiver.

### Accessing the Transformation Matrix

- [transformStruct](nsaffinetransform/transformstruct.md): The matrix coefficients stored as the transformation matrix.
- [NSAffineTransformStruct](nsaffinetransformstruct.md): A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.

### Setting and Building the Current Transformation Matrix

- [set](nsaffinetransform/set%28%29.md): Sets the current transformation matrix to the receiver’s transformation matrix.
- [concat](nsaffinetransform/concat%28%29.md): Appends the receiver’s matrix to the current transformation matrix stored in the current graphics context, replacing the current transformation matrix with the result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Geometry

- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.
