> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathcreatecopybystrokingpath](https://developer.apple.com/documentation/coregraphics/cgpathcreatecopybystrokingpath)

# CGPathCreateCopyByStrokingPath

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a stroked copy of another path.

## Declaration

```objectivec
extern CGPathRefCGPathCreateCopyByStrokingPath(CGPathRef path, const CGAffineTransform *transform, CGFloat lineWidth, CGLineCap lineCap, CGLineJoin lineJoin, CGFloat miterLimit);
```

## Parameters

- `path`: The path to copy.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to elements of the converted path before adding them to the new path.
- `lineWidth`: The line width to use, in user space units. The value must be greater than `0`.
- `lineCap`: A line cap style constant—[kCGLineCapButt](cglinecap/butt.md) (the default), [kCGLineCapRound](cglinecap/round.md), or [kCGLineCapSquare](cglinecap/square.md).
- `lineJoin`: A line join value—[kCGLineJoinMiter](cglinejoin/miter.md) (the default), [kCGLineJoinRound](cglinejoin/round.md), or [kCGLineJoinBevel](cglinejoin/bevel.md).
- `miterLimit`: The miter limit to use.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

The new path is created so that filling the new path draws the same pixels as stroking the original path.

If the line join style is set to `kCGLineJoinMiter`, Core Graphics uses the miter limit to determine whether the lines should be joined with a bevel instead of a miter. Core Graphics divides the length of the miter by the line width. If the result is greater than the miter limit, Core Graphics converts the style to a bevel.

## See Also

### Copying a Graphics Path

- [CGPathCreateCopy](cgpath/copy%28%29.md): Creates an immutable copy of a graphics path.
- [CGPathCreateCopyByTransformingPath](cgpath/copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [CGPathCreateCopyByDashingPath](cgpathcreatecopybydashingpath.md): Creates a dashed copy of another path.
- [CGPathCreateMutableCopy](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
