> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areamark/init(xstart:xend:y:series:)](https://developer.apple.com/documentation/charts/areamark/init(xstart:xend:y:series:))

# init(xStart:xEnd:y:series:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an area mark that plots values with a horizontal interval and associates it with the specified series.

## Declaration

```swift
nonisolated init<X, Y, S>(xStart: PlottableValue<X>, xEnd: PlottableValue<X>, y: PlottableValue<Y>, series: PlottableValue<S>) where X : Plottable, Y : Plottable, S : Plottable
```

## Parameters

- `xStart`: The starting horizontal position for the mark.
- `xEnd`: The ending horizontal position for the mark.
- `y`: The vertical position for the mark.
- `series`: A series to associate the mark with.

<a id="discussion"></a>

## Discussion

The initializer behaves like [init(xStart:xEnd:y:)](init%28xstart_xend_y_%29.md), except that you can indicate which region each interval belongs to by providing a value for the `series` input. This enables you to plot more than one region on a single chart.

To plot a series of values that have a vertical interval, use [init(x:yStart:yEnd:series:)](init%28x_ystart_yend_series_%29.md) instead.

## See Also

### Creating a range area chart

- [init(x:yStart:yEnd:)](init%28x_ystart_yend_%29.md): Creates an area mark that plots values with a vertical interval.
- [init(x:yStart:yEnd:series:)](init%28x_ystart_yend_series_%29.md): Creates an area mark that plots values with a vertical interval and associates it with the specified series.
- [init(xStart:xEnd:y:)](init%28xstart_xend_y_%29.md): Creates an area mark that plots values with a horizontal interval.
