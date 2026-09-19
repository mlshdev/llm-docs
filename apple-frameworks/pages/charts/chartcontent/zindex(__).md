> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/chartcontent/zindex(_:)

# zIndex(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Controls the display order of overlapping chart content.

## Declaration

```swift
nonisolated func zIndex(_ value: Double) -> some ChartContent

```

## Parameters

- `value`: A relative front-to-back ordering for this view; the default is `0`.

## See Also

### Layering chart content

- [compositingLayer()](compositinglayer%28%29.md)
- [compositingLayer(style:)](compositinglayer%28style_%29.md)
