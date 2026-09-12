> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapeview/stroke(_:linewidth:antialiased:)](https://developer.apple.com/documentation/swiftui/shapeview/stroke(_:linewidth:antialiased:))

# stroke(\_:lineWidth:antialiased:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Traces the outline of this shape with a color or gradient.

## Declaration

```swift
@export(implementation) nonisolated func stroke<S>(_ content: S, lineWidth: CGFloat = 1, antialiased: Bool = true) -> StrokeShapeView<Self.Content, S, Self> where S : ShapeStyle
```

## Parameters

- `content`: The color or gradient with which to stroke this shape.
- `lineWidth`: The width of the stroke that outlines this shape.

<a id="return-value"></a>

## Return Value

A stroked shape.

<a id="discussion"></a>

## Discussion

The following example draws a circle with a purple stroke:

```swift
Circle().stroke(Color.purple, lineWidth: 5)
```

## See Also

### Modify the shape

- [fill(\_:style:)](fill%28__style_%29.md): Fills this shape with a color or gradient.
- [stroke(\_:style:antialiased:)](stroke%28__style_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [strokeBorder(\_:style:antialiased:)](strokeborder%28__style_antialiased_%29.md): Conforms when `Content` conforms to `InsettableShape`. Returns a view that’s the result of insetting this view by half of its style’s line width.
- [strokeBorder(\_:lineWidth:antialiased:)](strokeborder%28__linewidth_antialiased_%29.md): Conforms when `Content` conforms to `InsettableShape`. Returns a view that’s the result of filling an inner stroke of this view with the content you supply.
