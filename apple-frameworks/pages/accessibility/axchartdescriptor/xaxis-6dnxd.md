> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchartdescriptor/xaxis-6dnxd](https://developer.apple.com/documentation/accessibility/axchartdescriptor/xaxis-6dnxd)

# xAxis

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The axis descriptor for the chart’s x-axis.

## Declaration

```objectivec
@property (nonatomic, strong) id<AXDataAxisDescriptor> xAxis;
```

## See Also

### Specifying the axes

- [yAxis](yaxis.md): The axis descriptor for the chart’s y-axis.
- [additionalAxes](additionalaxes-9ldc0.md): The descriptors for additional categorical or numerical axes beyond the x-axis and y-axis.
- [AXDataAxisDescriptor](../axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
