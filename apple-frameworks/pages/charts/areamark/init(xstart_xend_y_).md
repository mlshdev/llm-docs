> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areamark/init(xstart:xend:y:)](https://developer.apple.com/documentation/charts/areamark/init(xstart:xend:y:))

# init(xStart:xEnd:y:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an area mark that plots values with a horizontal interval.

## Declaration

```swift
nonisolated init<X, Y>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>) where X : Plottable, Y : Plottable
```

## Parameters

- `xStart`: The starting horizontal position for the mark.
- `xEnd`: The ending horizontal position for the mark.
- `y`: The vertical position for the mark.

<a id="discussion"></a>

## Discussion

Use this initializer to create a range area chart with horizontal intervals. For example you can create a region that encompasses all the temperatures over the course of a day, across a number of days:

```swift
Chart(data) { day in
    AreaMark(
        xStart: .value("Minimum Temperature", minimumTemperature),
        xEnd: .value("Maximum Temperature", day.maximumTemperature),
        y: .value("Date", day.date)
    )
}
```

![A chart that shows month names on the y-axis, ranging from January to October, and a number in the range 0 to 80 on the x-axis. A solid blue region spans the chart from top to bottom. The region is close to the middle of the x-axis on either end, and closer to the right of the chart in the middle. The region is thinner at the ends and thicker in the middle.](https://developer.apple.com/images/com.apple.Charts/AreaMark-6-macOS@2x.png)

If you want to plot values that have a vertical interval, use [init(x:yStart:yEnd:)](init%28x_ystart_yend_%29.md) instead.

## See Also

### Creating a range area chart

- [init(x:yStart:yEnd:)](init%28x_ystart_yend_%29.md): Creates an area mark that plots values with a vertical interval.
- [init(x:yStart:yEnd:series:)](init%28x_ystart_yend_series_%29.md): Creates an area mark that plots values with a vertical interval and associates it with the specified series.
- [init(xStart:xEnd:y:series:)](init%28xstart_xend_y_series_%29.md): Creates an area mark that plots values with a horizontal interval and associates it with the specified series.
