> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/chartcontent/clipshape(_:style:)

# clipShape(\_:style:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a clip shape for the chart content.

## Declaration

```swift
nonisolated func clipShape(_ shape: some Shape, style: FillStyle = FillStyle()) -> some ChartContent

```

## Parameters

- `shape`: The clip shape. The shape fills each mark’s frame.
- `style`: The fill to use when rasterizing the shape.

## See Also

### Masking and clipping

- [mask(content:)](mask%28content_%29.md): Masks chart content using the alpha channel of the specified content.
