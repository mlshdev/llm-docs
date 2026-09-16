> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/shape/fill(_:style:)

# fill(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fills this shape with a color or gradient.

## Declaration

```swift
@export(implementation) nonisolated func fill<S>(_ content: S = .foreground, style: FillStyle = FillStyle()) -> _ShapeView<Self, S> where S : ShapeStyle
```

## Parameters

- `content`: The color or gradient to use when filling this shape.
- `style`: The style options that determine how the fill renders.

<a id="return-value"></a>

## Return Value

A shape filled with the color or gradient you supply.

## See Also

### Filling a shape

- [fill(style:)](fill%28style_%29.md): Fills this shape with the foreground color.
