> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartbackground(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/chartbackground(alignment:content:))

# chartBackground(alignment:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a background to a view that contains a chart.

## Declaration

```swift
nonisolated func chartBackground<V>(alignment: Alignment = .center, @ViewBuilder content: @escaping (ChartProxy) -> V) -> some View where V : View

```

## Parameters

- `alignment`: The alignment of the content.
- `content`: The content of the background.

<a id="discussion"></a>

## Discussion

You can use this modifier to define a background view as a function of the chart in the view. You can access the chart with the `ChartProxy` object passed into the closure.

> **Note**

> If `self` contains more than one chart, the chart proxy will refer to the first chart.

## See Also

### Styles

- [chartForegroundStyleScale(\_:)](chartforegroundstylescale%28__%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:range:type:)](chartforegroundstylescale%28domain_range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:type:)](chartforegroundstylescale%28domain_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(domain:mapping:)](chartforegroundstylescale%28domain_mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(mapping:)](chartforegroundstylescale%28mapping_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(range:type:)](chartforegroundstylescale%28range_type_%29.md): Configures the foreground style scale for charts.
- [chartForegroundStyleScale(type:)](chartforegroundstylescale%28type_%29.md): Configures the foreground style scale for charts.
- [chartPlotStyle(content:)](chartplotstyle%28content_%29.md): Configures the plot area of charts.
