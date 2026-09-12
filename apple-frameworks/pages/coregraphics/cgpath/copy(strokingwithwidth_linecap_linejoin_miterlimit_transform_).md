> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/copy(strokingwithwidth:linecap:linejoin:miterlimit:transform:)](https://developer.apple.com/documentation/coregraphics/cgpath/copy(strokingwithwidth:linecap:linejoin:miterlimit:transform:))

# copy(strokingWithWidth:lineCap:lineJoin:miterLimit:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new path equivalent to the results of drawing the path with a solid stroke.

## Declaration

```swift
func copy(strokingWithWidth lineWidth: CGFloat, lineCap: CGLineCap, lineJoin: CGLineJoin, miterLimit: CGFloat, transform: CGAffineTransform = .identity) -> CGPath
```

## Parameters

- `lineWidth`: The line width to use, in user space units. The value must be greater than `0`.
- `lineCap`: The line cap style to render. (For equivalent [CGContext](../cgcontext.md) drawing methods, the default style is [CGLineCap.butt](../cglinecap/butt.md).)
- `lineJoin`: The line join style to render. (For equivalent [CGContext](../cgcontext.md) drawing methods, the default style is [CGLineJoin.miter](../cglinejoin/miter.md).)
- `miterLimit`: A value that limits how sharp individual corners in the path can be when using the [CGLineJoin.miter](../cglinejoin/miter.md) line join style. When the ratio of a the length required for a mitered corner to the line width exceeds this value, that corner uses the [CGLineJoin.bevel](../cglinejoin/bevel.md) style instead.
- `transform`: An affine transform to apply to the path before dashing. Defaults to the [CGAffineTransformIdentity](../cgaffinetransformidentity.md) transform if not specified.

<a id="return-value"></a>

## Return Value

A new path.

<a id="Discussion"></a>

## Discussion

The new path is created so that filling the new path draws the same pixels as stroking the original path with the specified line style.

## See Also

### Copying a Graphics Path

- [copy()](copy%28%29.md): Creates an immutable copy of a graphics path.
- [copy(using:)](copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [copy(dashingWithPhase:lengths:transform:)](copy%28dashingwithphase_lengths_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a dashed stroke.
- [mutableCopy()](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [mutableCopy(using:)](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
