> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/sectorplot/init(_:angle:innerradius:outerradius:angularinset:)-1ed01](https://developer.apple.com/documentation/charts/sectorplot/init(_:angle:innerradius:outerradius:angularinset:)-1ed01)

# init(\_:angle:innerRadius:outerRadius:angularInset:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<Data>(_ data: Data, angle: PlottableProjection<SectorPlot<Content>.DataElement, some Plottable>, innerRadius: MarkDimensions<SectorPlot<Content>.DataElement> = .automatic, outerRadius: MarkDimensions<SectorPlot<Content>.DataElement> = .automatic, angularInset: CGFloat? = nil) where Content == VectorizedSectorPlotContent<Data>, Data : RandomAccessCollection
```

## See Also

### Plotting sectors from a collection

- [init(\_:angle:innerRadius:outerRadius:angularInset:)](init%28__angle_innerradius_outerradius_angularinset_%29-9pmo7.md)
