> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchartdescriptor](https://developer.apple.com/documentation/accessibility/axchartdescriptor)

# AXChartDescriptor (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains all the semantic information about an accessible chart.

## Declaration

```swift
class AXChartDescriptor
```

## Mentioned In

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md)

## Topics

### Creating a chart

- [init(title:summary:xAxis:yAxis:additionalAxes:series:)](axchartdescriptor/init%28title_summary_xaxis_yaxis_additionalaxes_series_%29.md): Creates a chart descriptor with the specified title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.
- [init(attributedTitle:summary:xAxis:yAxis:additionalAxes:series:)](axchartdescriptor/init%28attributedtitle_summary_xaxis_yaxis_additionalaxes_series_%29.md): Creates a chart descriptor with the specified attributed title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.

### Specifying the chart title

- [title](axchartdescriptor/title.md): The title of the chart.
- [attributedTitle](axchartdescriptor/attributedtitle.md): An attributed version of the chart title.

### Specifying the chart summary

- [summary](axchartdescriptor/summary.md): A description of the key takeaways or features of the chart.

### Specifying the axes

- [xAxis](axchartdescriptor/xaxis-7sb9a.md): The axis descriptor for the chart’s x-axis.
- [yAxis](axchartdescriptor/yaxis.md): The axis descriptor for the chart’s y-axis.
- [additionalAxes](axchartdescriptor/additionalaxes-2adwh.md): The descriptors for additional categorical or numerical axes beyond the x-axis and y-axis.
- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.

### Specifying a series of data points

- [series](axchartdescriptor/series.md): The descriptors for each data series in the chart.
- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.

### Specifying the content layout

- [contentFrame](axchartdescriptor/contentframe.md): The bounds of the view, in screen coordinates, for visually rendering data values.
- [contentDirection](axchartdescriptor/contentdirection-swift.property.md): The direction of the content in the chart.
- [AXChartDescriptor.ContentDirection](axchartdescriptor/contentdirection-swift.enum.md): A constant that describes the content direction of the chart.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Chart representation

- [AXChart](axchart.md): A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.

# AXChartDescriptor (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains all the semantic information about an accessible chart.

## Declaration

```objectivec
@interface AXChartDescriptor : NSObject
```

## Mentioned In

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md)

## Topics

### Creating a chart

- [initWithTitle:summary:xAxisDescriptor:yAxisDescriptor:series:](axchartdescriptor/initwithtitle_summary_xaxisdescriptor_yaxisdescriptor_series_.md): Creates a chart descriptor with the specified title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.
- [initWithAttributedTitle:summary:xAxisDescriptor:yAxisDescriptor:series:](axchartdescriptor/initwithattributedtitle_summary_xaxisdescriptor_yaxisdescriptor_series_.md): Creates a chart descriptor with the specified attributed title, summary, x-axis descriptor, y-axis descriptor, and array of data series.
- [initWithTitle:summary:xAxisDescriptor:yAxisDescriptor:additionalAxes:series:](axchartdescriptor/initwithtitle_summary_xaxisdescriptor_yaxisdescriptor_additionalaxes_series_.md): Creates a chart descriptor with the specified title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.
- [initWithAttributedTitle:summary:xAxisDescriptor:yAxisDescriptor:additionalAxes:series:](axchartdescriptor/initwithattributedtitle_summary_xaxisdescriptor_yaxisdescriptor_additionalaxes_series_.md): Creates a chart descriptor with the specified attributed title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.

### Specifying the chart title

- [title](axchartdescriptor/title.md): The title of the chart.
- [attributedTitle](axchartdescriptor/attributedtitle.md): An attributed version of the chart title.

### Specifying the chart summary

- [summary](axchartdescriptor/summary.md): A description of the key takeaways or features of the chart.

### Specifying the axes

- [xAxis](axchartdescriptor/xaxis-6dnxd.md): The axis descriptor for the chart’s x-axis.
- [yAxis](axchartdescriptor/yaxis.md): The axis descriptor for the chart’s y-axis.
- [additionalAxes](axchartdescriptor/additionalaxes-9ldc0.md): The descriptors for additional categorical or numerical axes beyond the x-axis and y-axis.
- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.

### Specifying a series of data points

- [series](axchartdescriptor/series.md): The descriptors for each data series in the chart.
- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.

### Specifying the content layout

- [contentFrame](axchartdescriptor/contentframe.md): The bounds of the view, in screen coordinates, for visually rendering data values.
- [contentDirection](axchartdescriptor/contentdirection-swift.property.md): The direction of the content in the chart.
- [AXChartDescriptorContentDirection](axchartdescriptor/contentdirection-swift.enum.md): A constant that describes the content direction of the chart.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Chart representation

- [AXChart](axchart.md): A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.
