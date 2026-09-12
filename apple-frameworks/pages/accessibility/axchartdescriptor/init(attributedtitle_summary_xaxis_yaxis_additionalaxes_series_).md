> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchartdescriptor/init(attributedtitle:summary:xaxis:yaxis:additionalaxes:series:)](https://developer.apple.com/documentation/accessibility/axchartdescriptor/init(attributedtitle:summary:xaxis:yaxis:additionalaxes:series:))

# init(attributedTitle:summary:xAxis:yAxis:additionalAxes:series:)

**Framework:** Accessibility  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a chart descriptor with the specified attributed title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.

## Declaration

```swift
convenience init(attributedTitle: NSAttributedString? = nil, summary: String? = nil, xAxis: any AXDataAxisDescriptor, yAxis: AXNumericDataAxisDescriptor? = nil, additionalAxes: [any AXDataAxisDescriptor] = [], series: [AXDataSeriesDescriptor])
```

## See Also

### Creating a chart

- [init(title:summary:xAxis:yAxis:additionalAxes:series:)](init%28title_summary_xaxis_yaxis_additionalaxes_series_%29.md): Creates a chart descriptor with the specified title, summary, x-axis descriptor, y-axis descriptor, descriptors for additional axes, and array of data series.
