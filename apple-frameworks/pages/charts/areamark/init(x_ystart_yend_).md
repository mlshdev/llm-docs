> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areamark/init(x:ystart:yend:)](https://developer.apple.com/documentation/charts/areamark/init(x:ystart:yend:))

# init(x:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an area mark that plots values with a vertical interval.

## Declaration

```swift
nonisolated init<X, Y>(x: PlottableValue<X>, yStart: PlottableValue<Y>, yEnd: PlottableValue<Y>) where X : Plottable, Y : Plottable
```

## Parameters

- `x`: The horizontal position for the mark.
- `yStart`: The starting vertical position for the mark.
- `yEnd`: The ending vertical position for the mark.

<a id="discussion"></a>

## Discussion

Use this initializer to create a range area chart with vertical intervals. For example you can create a region that encompasses all the temperatures over the course of a day, across a number of days:

```swift
Chart(data) { day in
    AreaMark(
        x: .value("Date", day.date),
        yStart: .value("Minimum Temperature", minimumTemperature),
        yEnd: .value("Maximum Temperature", day.maximumTemperature)
    )
}
```

![A chart that shows month names on the x-axis, ranging from January to October, and a number in the range 0 to 80 on the y-axis. A solid blue region spans the chart from left to right. The region is close to the middle of the y-axis on either end, and closer to the top of the chart in the middle. The region is thinner at the ends and thicker in the middle.](https://developer.apple.com/images/com.apple.Charts/AreaMark-5-macOS@2x.png)

If you want to plot values that have a horiztonal interval, use [init(xStart:xEnd:y:)](init%28xstart_xend_y_%29.md) instead.

## See Also

### Creating a range area chart

- [init(x:yStart:yEnd:series:)](init%28x_ystart_yend_series_%29.md): Creates an area mark that plots values with a vertical interval and associates it with the specified series.
- [init(xStart:xEnd:y:)](init%28xstart_xend_y_%29.md): Creates an area mark that plots values with a horizontal interval.
- [init(xStart:xEnd:y:series:)](init%28xstart_xend_y_series_%29.md): Creates an area mark that plots values with a horizontal interval and associates it with the specified series.
