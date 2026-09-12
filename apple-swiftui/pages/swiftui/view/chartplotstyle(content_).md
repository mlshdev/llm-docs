> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartplotstyle(content:)](https://developer.apple.com/documentation/swiftui/view/chartplotstyle(content:))

# chartPlotStyle(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the plot area of charts.

## Declaration

```swift
nonisolated func chartPlotStyle<Content>(@ViewBuilder content: @escaping (ChartPlotContent) -> Content) -> some View where Content : View

```

## Parameters

- `content`: A closure that returns the content of the plot area.

<a id="discussion"></a>

## Discussion

Use this modifier to configure the size or aspect ratio of the plot area of charts.

For example:

```swift
Chart(data: data) {
    BarMark(x: .value("Category", $0.category))
}
.chartPlotStyle { content in
    content.frame(width: 100, height: 100)
}
```

## See Also

### Styles

- [chartBackground(alignment:content:)](chartbackground%28alignment_content_%29.md): Adds a background to a view that contains a chart.
- [chartForegroundStyleScale(\_:)](chartforegroundstylescale%28__%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:range:type:)](chartforegroundstylescale%28domain_range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:type:)](chartforegroundstylescale%28domain_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:mapping:)](chartforegroundstylescale%28domain_mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(mapping:)](chartforegroundstylescale%28mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(range:type:)](chartforegroundstylescale%28range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(type:)](chartforegroundstylescale%28type_%29.md): Configures the foreground style scale for charts.
