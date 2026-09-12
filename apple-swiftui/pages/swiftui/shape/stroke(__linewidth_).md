> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/stroke(_:linewidth:)](https://developer.apple.com/documentation/swiftui/shape/stroke(_:linewidth:))

# stroke(\_:lineWidth:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Traces the outline of this shape with a color or gradient.

## Declaration

```swift
nonisolated func stroke<S>(_ content: S, lineWidth: CGFloat = 1) -> some View where S : ShapeStyle

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

### Setting the stroke characteristics

- [stroke(\_:lineWidth:antialiased:)](stroke%28__linewidth_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(lineWidth:)](stroke%28linewidth_%29.md): Returns a new shape that is a stroked copy of `self` with line-width defined by `lineWidth` and all other properties of `StrokeStyle` having their default values.
- [stroke(\_:style:)](stroke%28__style_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(\_:style:antialiased:)](stroke%28__style_antialiased_%29.md): Traces the outline of this shape with a color or gradient.
- [stroke(style:)](stroke%28style_%29.md): Returns a new shape that is a stroked copy of `self`, using the contents of `style` to define the stroke characteristics.
