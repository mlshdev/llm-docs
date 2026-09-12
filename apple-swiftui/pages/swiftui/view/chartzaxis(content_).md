> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartzaxis(content:)](https://developer.apple.com/documentation/swiftui/view/chartzaxis(content:))

# chartZAxis(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Configures the z-axis for 3D charts in the view.

## Declaration

```swift
nonisolated func chartZAxis<Content>(@AxisContentBuilder content: () -> Content) -> some View where Content : AxisContent

```

## Parameters

- `content`: The axis content.

<a id="discussion"></a>

## Discussion

Use this modifier to customize the z-axis of a chart. Provide an `AxisMarks` builder that composes `AxisGridLine`, `AxisTick`, and `AxisValueLabel` structures to form the axis. Omit components from the builder to omit them from the resulting axis. For example, the following code adds grid lines to the z-axis:

```swift
.chartZAxis {
    AxisMarks {
        AxisGridLine()
    }
}
```

Use arguments such as `position:` or `values:` to control the placement of the axis values it displays.

> **Note**

> To add an axis label, use one of the label modifiers, like doc://com.apple.documentation/documentation/SwiftUI/View/chartZAxisLabel(position:alignment:spacing:content:).

## See Also

### Axes

- [chartXAxis(\_:)](chartxaxis%28__%29.md): Sets the visibility of the x axis.
- [chartXAxis(content:)](chartxaxis%28content_%29.md): Configures the x-axis for charts in the view.
- [chartXAxisStyle(content:)](chartxaxisstyle%28content_%29.md): Configures the x axis content of charts.
- [chartYAxis(\_:)](chartyaxis%28__%29.md): Sets the visibility of the y axis.
- [chartYAxis(content:)](chartyaxis%28content_%29.md): Configures the y-axis for charts in the view.
- [chartYAxisStyle(content:)](chartyaxisstyle%28content_%29.md): Configures the y axis content of charts.
- [chartZAxis(\_:)](chartzaxis%28__%29.md): Sets the visibility of the z axis.
