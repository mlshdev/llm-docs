> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-mtdv](https://developer.apple.com/documentation/charts/barplot/init(_:xstart:xend:ystart:yend:)-mtdv)

# init(\_:xStart:xEnd:yStart:yEnd:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<Data, X>(_ data: Data, xStart: PlottableProjection<BarPlot<Content>.DataElement, X>, xEnd: PlottableProjection<BarPlot<Content>.DataElement, X>, yStart: KeyPath<BarPlot<Content>.DataElement, CGFloat>, yEnd: KeyPath<BarPlot<Content>.DataElement, CGFloat>) where Content == VectorizedBarPlotContent<Data>, Data : RandomAccessCollection, X : Plottable
```

## See Also

### Plotting bars from a collection

- [init(\_:x:y:width:height:stacking:)](init%28__x_y_width_height_stacking_%29.md)
- [init(\_:x:yStart:yEnd:width:)](init%28__x_ystart_yend_width_%29.md)
- [init(\_:x:yStart:yEnd:width:stacking:)](init%28__x_ystart_yend_width_stacking_%29-2mtih.md)
- [init(\_:x:yStart:yEnd:width:stacking:)](init%28__x_ystart_yend_width_stacking_%29-680hw.md)
- [init(\_:xStart:xEnd:y:height:stacking:)](init%28__xstart_xend_y_height_stacking_%29-16tou.md)
- [init(\_:xStart:xEnd:y:height:stacking:)](init%28__xstart_xend_y_height_stacking_%29-2x0yx.md)
- [init(\_:xStart:xEnd:y:height:)](init%28__xstart_xend_y_height_%29.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](init%28__xstart_xend_ystart_yend_%29-48su5.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](init%28__xstart_xend_ystart_yend_%29-862wn.md)
- [init(\_:xStart:xEnd:yStart:yEnd:)](init%28__xstart_xend_ystart_yend_%29-raqh.md)
