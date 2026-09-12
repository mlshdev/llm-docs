> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areamark/init(x:y:series:stacking:)](https://developer.apple.com/documentation/charts/areamark/init(x:y:series:stacking:))

# init(x:y:series:stacking:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an area mark and associates it with the specified series.

## Declaration

```swift
nonisolated init<X, Y, S>(x: PlottableValue<X>, y: PlottableValue<Y>, series: PlottableValue<S>, stacking: MarkStackingMethod = .standard) where X : Plottable, Y : Plottable, S : Plottable
```

## Parameters

- `x`: The horizontal position for the mark.
- `y`: The vertical position for the mark.
- `series`: A series to associate the mark with.
- `stacking`: The way in which the chart stacks area regions. The default is [standard](../markstackingmethod/standard.md).

<a id="discussion"></a>

## Discussion

The initializer behaves like [init(x:y:stacking:)](init%28x_y_stacking_%29.md), except that you can indicate which region each data point belongs to by providing a value for the `series` input. This enables you to plot more than one region on a single chart.

## See Also

### Creating an area mark

- [init(x:y:stacking:)](init%28x_y_stacking_%29.md): Creates an area mark using the specified horizontal and vertical positions.
