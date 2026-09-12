> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartxaxisstyle(content:)](https://developer.apple.com/documentation/swiftui/view/chartxaxisstyle(content:))

# chartXAxisStyle(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures the x axis content of charts.

## Declaration

```swift
nonisolated func chartXAxisStyle<Content>(@ViewBuilder content: @escaping (ChartAxisContent) -> Content) -> some View where Content : View

```

## Parameters

- `content`: A closure that returns the content of the axis.

<a id="discussion"></a>

## Discussion

Use this modifier to configure the size or aspect ratio of the plot area of charts.

For example:

```swift
Chart(data: data) {
    BarMark(x: .value("Category", $0.category))
}
.chartXAxisStyle { axis in
    axis.opacity(0.5)
}
```

## See Also

### Axes

- [chartXAxis(\_:)](chartxaxis%28__%29.md): Sets the visibility of the x axis.
- [chartXAxis(content:)](chartxaxis%28content_%29.md): Configures the x-axis for charts in the view.
- [chartYAxis(\_:)](chartyaxis%28__%29.md): Sets the visibility of the y axis.
- [chartYAxis(content:)](chartyaxis%28content_%29.md): Configures the y-axis for charts in the view.
- [chartYAxisStyle(content:)](chartyaxisstyle%28content_%29.md): Configures the y axis content of charts.
- [chartZAxis(\_:)](chartzaxis%28__%29.md): Sets the visibility of the z axis.
- [chartZAxis(content:)](chartzaxis%28content_%29.md): Configures the z-axis for 3D charts in the view.
