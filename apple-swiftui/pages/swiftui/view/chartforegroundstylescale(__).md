> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartforegroundstylescale(_:)](https://developer.apple.com/documentation/swiftui/view/chartforegroundstylescale(_:))

# chartForegroundStyleScale(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the foreground style scale for charts.

## Declaration

```swift
nonisolated func chartForegroundStyleScale<DataValue, S>(_ mapping: KeyValuePairs<DataValue, S>) -> some View where DataValue : Plottable, S : ShapeStyle

```

## Parameters

- `mapping`: Maps data categories to foreground styles.

## See Also

### Styles

- [chartBackground(alignment:content:)](chartbackground%28alignment_content_%29.md): Adds a background to a view that contains a chart.
- [chartForegroundStyleScale(domain:range:type:)](chartforegroundstylescale%28domain_range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:type:)](chartforegroundstylescale%28domain_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:mapping:)](chartforegroundstylescale%28domain_mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(mapping:)](chartforegroundstylescale%28mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(range:type:)](chartforegroundstylescale%28range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(type:)](chartforegroundstylescale%28type_%29.md): Configures the foreground style scale for charts.
- [chartPlotStyle(content:)](chartplotstyle%28content_%29.md): Configures the plot area of charts.
