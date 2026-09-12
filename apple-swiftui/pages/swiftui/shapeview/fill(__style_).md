> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapeview/fill(_:style:)](https://developer.apple.com/documentation/swiftui/shapeview/fill(_:style:))

# fill(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fills this shape with a color or gradient.

## Declaration

```swift
@export(implementation) nonisolated func fill<S>(_ content: S = .foreground, style: FillStyle = FillStyle()) -> FillShapeView<Self.Content, S, Self> where S : ShapeStyle
```

## Parameters

- `content`: The color or gradient to use when filling this shape.
- `style`: The style options that determine how the fill renders.

<a id="return-value"></a>

## Return Value

A shape filled with the color or gradient you supply.

## See Also

### Modify the shape

- [stroke(\_:style:antialiased:)](stroke%28__style_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(\_:lineWidth:antialiased:)](stroke%28__linewidth_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [strokeBorder(\_:style:antialiased:)](strokeborder%28__style_antialiased_%29.md): Conforms when `Content` conforms to `InsettableShape`. Returns a view that’s the result of insetting this view by half of its style’s line width.
- [strokeBorder(\_:lineWidth:antialiased:)](strokeborder%28__linewidth_antialiased_%29.md): Conforms when `Content` conforms to `InsettableShape`. Returns a view that’s the result of filling an inner stroke of this view with the content you supply.
