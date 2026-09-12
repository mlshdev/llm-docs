> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/linemark/init(x:y:)](https://developer.apple.com/documentation/charts/linemark/init(x:y:))

# init(x:y:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a line mark.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The value plotted with x.
- `y`: The value plotted with y.

<a id="Discussion"></a>

### Discussion

Use this initializer to create a chart with a single line.

```swift
Chart(sunshineData) {
    LineMark(
        x: .value("Month", $0.date),
        y: .value("Hours of Sunshine", $0.hoursOfSunshine)
    )
}
```

![Line chart with date on x-axis and hours of sunshine on y-axis. One line showing 12 points representing hours of sunshine in a month 1 74, 2 99, 3 154, 4 201, 5 247, 6 234, 7 304, 8 248, 9 197, 10 122, 11 77, 12 62.](https://developer.apple.com/images/com.apple.Charts/LineMarkSwift.LineMarkLineChart@2x.png)

## See Also

### Creating a line mark

- [init(x:y:series:)](init%28x_y_series_%29.md): Creates a separate line for each unique value of series.
