> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/axiscontent/compositinglayer(style:)

# compositingLayer(style:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a compositing layer for the axis content, and apply view modifiers to the compositing layer.

## Declaration

```swift
func compositingLayer<V>(@ViewBuilder style: (PlaceholderContentView<Self>) -> V) -> some AxisContent where V : View

```

## Parameters

- `style`: A closure that applies view modifiers to the compositing layer.
