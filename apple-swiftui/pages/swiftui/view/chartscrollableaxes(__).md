> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartscrollableaxes(_:)](https://developer.apple.com/documentation/swiftui/view/chartscrollableaxes(_:))

# chartScrollableAxes(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures the scrollable behavior of charts in this view.

## Declaration

```swift
nonisolated func chartScrollableAxes(_ axes: Axis.Set) -> some View

```

## Parameters

- `axes`: The set of axes to enable scrolling.

<a id="discussion"></a>

## Discussion

Use this method to make a chart scrollable. Below is an example that makes a chart scrollable along the horizontal axis.

```swift
Chart(data) {
    BarMark(
        x: .value("x", $0.x),
        y: .value("y", $0.y)
    )
}
.chartScrollableAxes(.horizontal)
```

> **Note**

> When scrolling is enabled along an axis, a default portion of the chart will be made visible. You can use the `chartXVisibleDomain` or `chartYVisibleDomain` modifiers to configure the visible domain.

## See Also

### Scrolling

- [chartScrollPosition(initialX:)](chartscrollposition%28initialx_%29.md): Sets the initial scroll position along the x-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(initialY:)](chartscrollposition%28initialy_%29.md): Sets the initial scroll position along the y-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(x:)](chartscrollposition%28x_%29.md): Associates a binding to be updated when the chart scrolls along the x-axis.
- [chartScrollPosition(y:)](chartscrollposition%28y_%29.md): Associates a binding to be updated when the chart scrolls along the y-axis.
- [chartScrollTargetBehavior(\_:)](chartscrolltargetbehavior%28__%29.md): Sets the scroll behavior of the scrollable chart.
