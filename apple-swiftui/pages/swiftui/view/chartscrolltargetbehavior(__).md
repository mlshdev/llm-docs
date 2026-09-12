> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartscrolltargetbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/chartscrolltargetbehavior(_:))

# chartScrollTargetBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the scroll behavior of the scrollable chart.

## Declaration

```swift
nonisolated func chartScrollTargetBehavior(_ behavior: some ChartScrollTargetBehavior) -> some View

```

## Parameters

- `behavior`: The chart scroll target behavior.

<a id="discussion"></a>

## Discussion

Use this method to control how the chart scrolls and aligns when the user finishes scrolling. The example below sets the scroll target behavior to align to the values in the chart. When the user finishes scrolling, the chart will settle to align with the values in the chart.

```swift
Chart(data) {
    BarMark(
        x: .value("x", $0.x),
        y: .value("y", $0.y)
    )
}
.chartScrollableAxes(.vertical)
.chartYVisibleDomain(length: 10)
.chartScrollTargetBehavior(.valueAligned(unit: 1))
```

## See Also

### Scrolling

- [chartScrollPosition(initialX:)](chartscrollposition%28initialx_%29.md): Sets the initial scroll position along the x-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(initialY:)](chartscrollposition%28initialy_%29.md): Sets the initial scroll position along the y-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(x:)](chartscrollposition%28x_%29.md): Associates a binding to be updated when the chart scrolls along the x-axis.
- [chartScrollPosition(y:)](chartscrollposition%28y_%29.md): Associates a binding to be updated when the chart scrolls along the y-axis.
- [chartScrollableAxes(\_:)](chartscrollableaxes%28__%29.md): Configures the scrollable behavior of charts in this view.
