> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsedgeinsets](https://developer.apple.com/documentation/foundation/nsedgeinsets)

# NSEdgeInsets (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A description of the distance between the edges of two rectangles.

## Declaration

```swift
struct NSEdgeInsets
```

<a id="overview"></a>

## Overview

Edge insets describe the distance between the edges of one rectangle to a related rectangle that can be described by measuring a constant but edge-specific distance from each edge.

A common use for this structure is to describe the relationship between a view’s frame and its alignment rectangle.

## Topics

### Creating an edge insets structure

- [init(top:left:bottom:right:)](nsedgeinsets/init%28top_left_bottom_right_%29.md): Creates an edge insets structure with the specified inset values.
- [NSEdgeInsetsMake(\_:\_:\_:\_:)](nsedgeinsetsmake%28________%29.md): Creates an edge insets structure with the specified inset values.
- [init()](nsedgeinsets/init%28%29.md): Creates an edge insets structure.

### Specifying the edge insets

- [bottom](nsedgeinsets/bottom.md): The distance from the bottom of the source rectangle to the bottom of the result rectangle.
- [left](nsedgeinsets/left.md): The distance from the left side of the source rectangle to the left side of the result rectangle.
- [right](nsedgeinsets/right.md): The distance from the right side of the source rectangle to the right side of the result rectangle.
- [top](nsedgeinsets/top.md): The distance from the top of the source rectangle to the top of the result rectangle.

### Comparing edge insets

- [NSEdgeInsetsEqual(\_:\_:)](nsedgeinsetsequal%28____%29.md): Returns a Boolean value that indicates whether two edge insets structures are equal.

### Getting the zero constant

- [NSEdgeInsetsZero](nsedgeinsetszero.md): An edge insets structure with a zero inset on each edge.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [AffineTransform](affinetransform.md): A graphics coordinate transformation.

# NSEdgeInsets (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A description of the distance between the edges of two rectangles.

## Declaration

```objectivec
typedef struct NSEdgeInsets { ... } NSEdgeInsets;
```

<a id="overview"></a>

## Overview

Edge insets describe the distance between the edges of one rectangle to a related rectangle that can be described by measuring a constant but edge-specific distance from each edge.

A common use for this structure is to describe the relationship between a view’s frame and its alignment rectangle.

## Topics

### Creating an edge insets structure

- [NSEdgeInsetsMake](nsedgeinsetsmake%28________%29.md): Creates an edge insets structure with the specified inset values.

### Specifying the edge insets

- [bottom](nsedgeinsets/bottom.md): The distance from the bottom of the source rectangle to the bottom of the result rectangle.
- [left](nsedgeinsets/left.md): The distance from the left side of the source rectangle to the left side of the result rectangle.
- [right](nsedgeinsets/right.md): The distance from the right side of the source rectangle to the right side of the result rectangle.
- [top](nsedgeinsets/top.md): The distance from the top of the source rectangle to the top of the result rectangle.

### Comparing edge insets

- [NSEdgeInsetsEqual](nsedgeinsetsequal%28____%29.md): Returns a Boolean value that indicates whether two edge insets structures are equal.

### Getting the zero constant

- [NSEdgeInsetsZero](nsedgeinsetszero.md): An edge insets structure with a zero inset on each edge.

## See Also

### Geometry

- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.
