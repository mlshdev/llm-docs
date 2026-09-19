> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/lineplot/init(_:x:y:series:)

# init(\_:x:y:series:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<Data>(_ data: Data, x: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>, y: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>, series: PlottableProjection<LinePlot<Content>.DataElement, some Plottable>) where Content == VectorizedLinePlotContent<Data>, Data : RandomAccessCollection
```

## See Also

### Plotting lines from a collection

- [init(\_:x:y:)](init%28__x_y_%29.md)
