> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartyvisibledomain(length:)](https://developer.apple.com/documentation/swiftui/view/chartyvisibledomain(length:))

# chartYVisibleDomain(length:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the length of the visible domain in the Y dimension.

## Declaration

```swift
nonisolated func chartYVisibleDomain<P>(length: P) -> some View where P : Plottable, P : Numeric

```

## Parameters

- `length`: The length of the visible domain measured in data units. For categorical data, this should be the number of visible categories.

<a id="discussion"></a>

## Discussion

Use this method to control how much of the chart is visible in a scrollable chart. The example below sets the visible portion of the chart to 10 units in the Y axis.

```swift
Chart(data) {
    BarMark(
        x: .value("x", $0.x),
        y: .value("y", $0.y)
    )
}
.chartScrollableAxes(.vertical)
.chartYVisibleDomain(length: 10)
```

## See Also

### Visible domain

- [chartXVisibleDomain(length:)](chartxvisibledomain%28length_%29.md): Sets the length of the visible domain in the X dimension.
