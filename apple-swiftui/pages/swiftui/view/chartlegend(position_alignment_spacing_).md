> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartlegend(position:alignment:spacing:)](https://developer.apple.com/documentation/swiftui/view/chartlegend(position:alignment:spacing:))

# chartLegend(position:alignment:spacing:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the legend for charts.

## Declaration

```swift
@MainActor @preconcurrency func chartLegend(position: AnnotationPosition = .automatic, alignment: Alignment? = nil, spacing: CGFloat? = nil) -> some View

```

## Parameters

- `position`: Configures the position of the legend.
- `alignment`: Alignment of the legend within the space available to it. Use `nil` for default alignment.
- `spacing`: Distance between the legend and the chart. Use `nil` for the default spacing.

## See Also

### Legends

- [chartLegend(\_:)](chartlegend%28__%29.md): Configures the legend for charts.
- [chartLegend(position:alignment:spacing:content:)](chartlegend%28position_alignment_spacing_content_%29.md): Configures the legend for charts.
