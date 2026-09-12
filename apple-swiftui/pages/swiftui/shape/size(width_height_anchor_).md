> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/size(width:height:anchor:)](https://developer.apple.com/documentation/swiftui/shape/size(width:height:anchor:))

# size(width:height:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new version of self representing the same shape, but within a rect of `(width, height)` instead of the container size.

## Declaration

```swift
nonisolated func size(width: CGFloat, height: CGFloat, anchor: UnitPoint) -> some Shape

```

## Parameters

- `width`: The width to constrain the shape to.
- `height`: The height to constrain the shape to.
- `anchor`: The anchor to use to determine how to position the new shape.

<a id="return-value"></a>

## Return Value

A new shape constrained to the given `size`, and positioned using `anchor`.

<a id="discussion"></a>

## Discussion

The `anchor` parameter determines how the shape will be positioned within the container when the path’s bounds and the container’s bounds are not equal. This does not affect the layout properties of any views created from the shape (e.g. by filling it).

## See Also

### Transforming a shape

- [trim(from:to:)](trim%28from_to_%29.md): Trims this shape by a fractional amount based on its representation as a path.
- [transform(\_:)](transform%28__%29.md): Applies an affine transform to this shape.
- [size(\_:)](size%28__%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of `size`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [size(\_:anchor:)](size%28__anchor_%29.md): Returns a new version of self representing the same shape, but within a rect of `size` instead of the container size.
- [size(width:height:)](size%28width_height_%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of size `(width, height)`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [scale(\_:anchor:)](scale%28__anchor_%29.md): Scales this shape without changing its bounding frame.
- [scale(x:y:anchor:)](scale%28x_y_anchor_%29.md): Scales this shape without changing its bounding frame.
- [rotation(\_:anchor:)](rotation%28__anchor_%29.md): Rotates this shape around an anchor point at the angle you specify.
- [offset(\_:)](offset%28__%29.md): Changes the relative position of this shape using the specified point.
- [offset(x:y:)](offset%28x_y_%29.md): Changes the relative position of this shape using the specified point.
