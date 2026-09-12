> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/areaplot/init(_:x:ystart:yend:)](https://developer.apple.com/documentation/charts/areaplot/init(_:x:ystart:yend:))

# init(\_:x:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<Data, Y>(_ data: Data, x: PlottableProjection<AreaPlot<Content>.DataElement, some Plottable>, yStart: PlottableProjection<AreaPlot<Content>.DataElement, Y>, yEnd: PlottableProjection<AreaPlot<Content>.DataElement, Y>) where Content == VectorizedAreaPlotContent<Data>, Data : RandomAccessCollection, Y : Plottable
```

## See Also

### Plotting areas from a collection

- [init(\_:x:y:stacking:)](init%28__x_y_stacking_%29.md)
- [init(\_:x:y:series:stacking:)](init%28__x_y_series_stacking_%29.md)
- [init(\_:xStart:xEnd:y:)](init%28__xstart_xend_y_%29.md)
- [init(\_:xStart:xEnd:y:series:)](init%28__xstart_xend_y_series_%29.md)
- [init(\_:x:yStart:yEnd:series:)](init%28__x_ystart_yend_series_%29.md)
