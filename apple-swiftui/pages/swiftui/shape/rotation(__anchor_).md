> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rotation(_:anchor:)](https://developer.apple.com/documentation/swiftui/shape/rotation(_:anchor:))

# rotation(\_:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Rotates this shape around an anchor point at the angle you specify.

## Declaration

```swift
nonisolated func rotation(_ angle: Angle, anchor: UnitPoint = .center) -> RotatedShape<Self>
```

## Parameters

- `angle`: The angle of rotation to apply. Positive angles rotate clockwise; negative angles rotate counterclockwise.
- `anchor`: The point to rotate the shape around.

<a id="return-value"></a>

## Return Value

A rotated shape.

<a id="discussion"></a>

## Discussion

The following example rotates a square by 45 degrees to the right to create a diamond shape:

```swift
RoundedRectangle(cornerRadius: 10)
.rotation(Angle(degrees: 45))
.aspectRatio(1.0, contentMode: .fit)
```

## See Also

### Transforming a shape

- [trim(from:to:)](trim%28from_to_%29.md): Trims this shape by a fractional amount based on its representation as a path.
- [transform(\_:)](transform%28__%29.md): Applies an affine transform to this shape.
- [size(\_:)](size%28__%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of `size`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [size(\_:anchor:)](size%28__anchor_%29.md): Returns a new version of self representing the same shape, but within a rect of `size` instead of the container size.
- [size(width:height:)](size%28width_height_%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of size `(width, height)`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [size(width:height:anchor:)](size%28width_height_anchor_%29.md): Returns a new version of self representing the same shape, but within a rect of `(width, height)` instead of the container size.
- [scale(\_:anchor:)](scale%28__anchor_%29.md): Scales this shape without changing its bounding frame.
- [scale(x:y:anchor:)](scale%28x_y_anchor_%29.md): Scales this shape without changing its bounding frame.
- [offset(\_:)](offset%28__%29.md): Changes the relative position of this shape using the specified point.
- [offset(x:y:)](offset%28x_y_%29.md): Changes the relative position of this shape using the specified point.
