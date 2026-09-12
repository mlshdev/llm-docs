> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspoint](https://developer.apple.com/documentation/foundation/nspoint)

# NSPoint (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A point in a Cartesian coordinate system.

## Declaration

```swift
typealias NSPoint = CGPoint
```

<a id="Discussion"></a>

## Discussion

Prior to OS X v10.5 the coordinates were represented by `float` values rather than `CGFloat` values.

When building for 64 bit systems, or building 32 bit like 64 bit, `NSPoint` is typedef’d to `CGPoint`.

## Topics

### Managing Points

- [NSEqualPoints(\_:\_:)](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint(\_:\_:)](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString(\_:)](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint(\_:)](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint(\_:)](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint(\_:)](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

### Zero Constant

- [NSZeroPoint](nszeropoint.md): An `NSPoint` structure with both x and y coordinates set to `0`.

### Related Types

- [NSPointArray](nspointarray.md): Type indicating a parameter is array of `NSPoint` structures.
- [NSPointPointer](nspointpointer.md): Type indicating a parameter is a pointer to an `NSPoint` structure.

## See Also

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [AffineTransform](affinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.

# NSPoint (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A point in a Cartesian coordinate system.

## Declaration

```objectivec
typedef CGPoint NSPoint;
```

<a id="Discussion"></a>

## Discussion

Prior to OS X v10.5 the coordinates were represented by `float` values rather than `CGFloat` values.

When building for 64 bit systems, or building 32 bit like 64 bit, `NSPoint` is typedef’d to `CGPoint`.

## Topics

### Managing Points

- [NSEqualPoints](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

### Zero Constant

- [NSZeroPoint](nszeropoint.md): An `NSPoint` structure with both x and y coordinates set to `0`.

### Related Types

- [NSPointArray](nspointarray.md): Type indicating a parameter is array of `NSPoint` structures.
- [NSPointPointer](nspointpointer.md): Type indicating a parameter is a pointer to an `NSPoint` structure.

## See Also

### Geometry

- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.
