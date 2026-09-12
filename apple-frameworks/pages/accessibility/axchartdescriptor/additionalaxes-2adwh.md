> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchartdescriptor/additionalaxes-2adwh](https://developer.apple.com/documentation/accessibility/axchartdescriptor/additionalaxes-2adwh)

# additionalAxes

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The descriptors for additional categorical or numerical axes beyond the x-axis and y-axis.

## Declaration

```swift
var additionalAxes: [any AXDataAxisDescriptor] { get set }
```

## See Also

### Specifying the axes

- [xAxis](xaxis-7sb9a.md): The axis descriptor for the chart’s x-axis.
- [yAxis](yaxis.md): The axis descriptor for the chart’s y-axis.
- [AXDataAxisDescriptor](../axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
