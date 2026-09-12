> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areamark/init(x:y:stacking:)](https://developer.apple.com/documentation/charts/areamark/init(x:y:stacking:))

# init(x:y:stacking:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an area mark using the specified horizontal and vertical positions.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, y: PlottableValue<Y>, stacking: MarkStackingMethod = .standard) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The horizontal position for the mark.
- `y`: The vertical position for the mark.
- `stacking`: The way in which the chart stacks area regions. The default is [standard](../markstackingmethod/standard.md).

<a id="discussion"></a>

## Discussion

You can use this initializer to create a basic area chart:

```swift
Chart(cheeseburgerCost) { cost in
    AreaMark(
        x: .value("Date", cost.date),
        y: .value("Price", cost.price)
    )
}
```

The resulting chart automatically scales and labels the axes based on the data, and fills the area under the data points with a default color:

![A chart that shows the years 1960 to 2020 on the x-axis and a number in the range of 0 to 1.5 on the y-axis. An irregular, monotonically increasing, piecewise linear curve starts near the lower left and continues toward the upper right. The area under the curve is filled in with a blue color.](https://developer.apple.com/images/com.apple.Charts/AreaMark-1-macOS@2x.png)

## See Also

### Creating an area mark

- [init(x:y:series:stacking:)](init%28x_y_series_stacking_%29.md): Creates an area mark and associates it with the specified series.
