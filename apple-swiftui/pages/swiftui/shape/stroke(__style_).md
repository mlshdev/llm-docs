> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/stroke(_:style:)](https://developer.apple.com/documentation/swiftui/shape/stroke(_:style:))

# stroke(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Traces the outline of this shape with a color or gradient.

## Declaration

```swift
nonisolated func stroke<S>(_ content: S, style: StrokeStyle) -> some View where S : ShapeStyle

```

## Parameters

- `content`: The color or gradient with which to stroke this shape.
- `style`: The stroke characteristics — such as the line’s width and whether the stroke is dashed — that determine how to render this shape.

<a id="return-value"></a>

## Return Value

A stroked shape.

<a id="discussion"></a>

## Discussion

The following example adds a dashed purple stroke to a `Capsule`:

```swift
Capsule()
.stroke(
    Color.purple,
    style: StrokeStyle(
        lineWidth: 5,
        lineCap: .round,
        lineJoin: .miter,
        miterLimit: 0,
        dash: [5, 10],
        dashPhase: 0
    )
)
```

## See Also

### Setting the stroke characteristics

- [stroke(\_:lineWidth:)](stroke%28__linewidth_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(\_:lineWidth:antialiased:)](stroke%28__linewidth_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(lineWidth:)](stroke%28linewidth_%29.md): Returns a new shape that is a stroked copy of `self` with line-width defined by `lineWidth` and all other properties of `StrokeStyle` having their default values.
- [stroke(\_:style:antialiased:)](stroke%28__style_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(style:)](stroke%28style_%29.md): Returns a new shape that is a stroked copy of `self`, using the contents of `style` to define the stroke characteristics.
