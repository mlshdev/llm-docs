> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/trim(from:to:)](https://developer.apple.com/documentation/swiftui/shape/trim(from:to:))

# trim(from:to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Trims this shape by a fractional amount based on its representation as a path.

## Declaration

```swift
nonisolated func trim(from startFraction: CGFloat = 0, to endFraction: CGFloat = 1) -> some Shape

```

## Parameters

- `startFraction`: The fraction of the way through drawing this shape where drawing starts.
- `endFraction`: The fraction of the way through drawing this shape where drawing ends.

<a id="return-value"></a>

## Return Value

A shape built by capturing a portion of this shape’s path.

<a id="discussion"></a>

## Discussion

To create a `Shape` instance, you define the shape’s path using lines and curves. Use the `trim(from:to:)` method to draw a portion of a shape by ignoring portions of the beginning and ending of the shape’s path.

For example, if you’re drawing a figure eight or infinity symbol (∞) starting from its center, setting the `startFraction` and `endFraction` to different values determines the parts of the overall shape.

The following example shows a simplified infinity symbol that draws only three quarters of the full shape. That is, of the two lobes of the symbol, one lobe is complete and the other is half complete.

```swift
Path { path in
    path.addLines([
        .init(x: 2, y: 1),
        .init(x: 1, y: 0),
        .init(x: 0, y: 1),
        .init(x: 1, y: 2),
        .init(x: 3, y: 0),
        .init(x: 4, y: 1),
        .init(x: 3, y: 2),
        .init(x: 2, y: 1)
    ])
}
.trim(from: 0.25, to: 1.0)
.scale(50, anchor: .topLeading)
.stroke(Color.black, lineWidth: 3)
```

Changing the parameters of `trim(from:to:)` to `.trim(from: 0, to: 1)` draws the full infinity symbol, while `.trim(from: 0, to: 0.5)` draws only the left lobe of the symbol.

## See Also

### Transforming a shape

- [transform(\_:)](transform%28__%29.md): Applies an affine transform to this shape.
- [size(\_:)](size%28__%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of `size`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [size(\_:anchor:)](size%28__anchor_%29.md): Returns a new version of self representing the same shape, but within a rect of `size` instead of the container size.
- [size(width:height:)](size%28width_height_%29.md): Returns a new version of self representing the same shape, but that will ask it to create its path from a rect of size `(width, height)`. This does not affect the layout properties of any views created from the shape (e.g. by filling it).
- [size(width:height:anchor:)](size%28width_height_anchor_%29.md): Returns a new version of self representing the same shape, but within a rect of `(width, height)` instead of the container size.
- [scale(\_:anchor:)](scale%28__anchor_%29.md): Scales this shape without changing its bounding frame.
- [scale(x:y:anchor:)](scale%28x_y_anchor_%29.md): Scales this shape without changing its bounding frame.
- [rotation(\_:anchor:)](rotation%28__anchor_%29.md): Rotates this shape around an anchor point at the angle you specify.
- [offset(\_:)](offset%28__%29.md): Changes the relative position of this shape using the specified point.
- [offset(x:y:)](offset%28x_y_%29.md): Changes the relative position of this shape using the specified point.
