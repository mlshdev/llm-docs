> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchart](https://developer.apple.com/documentation/accessibility/axchart)

# AXChart (Swift)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.

## Declaration

```swift
protocol AXChart : NSObjectProtocol
```

## Mentioned In

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md)

<a id="overview"></a>

## Overview

Use this protocol when you want to create an accessible representation of a chart — a view that displays a graphical representation of a data set — for VoiceOver to play as an audio graph.

Adopt the [AXChart](axchart.md) protocol on your chart’s view model, and set the [accessibilityChartDescriptor](axchart/accessibilitychartdescriptor.md) property to an [AXChartDescriptor](axchartdescriptor.md) that contains all the semantic information you need to represent your chart through an audio interface, like the chart’s title, axes, data points, and a summary of the chart’s key takeaways.

## Topics

### Supporting accessibility

- [accessibilityChartDescriptor](axchart/accessibilitychartdescriptor.md): A semantic description of an accessible chart or graph in the form of a chart descriptor.
- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Chart representation

- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.

# AXChart (Objective-C)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.

## Declaration

```objectivec
@protocol AXChart <NSObject>
```

## Mentioned In

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md)

<a id="overview"></a>

## Overview

Use this protocol when you want to create an accessible representation of a chart — a view that displays a graphical representation of a data set — for VoiceOver to play as an audio graph.

Adopt the [AXChart](axchart.md) protocol on your chart’s view model, and set the [accessibilityChartDescriptor](axchart/accessibilitychartdescriptor.md) property to an [AXChartDescriptor](axchartdescriptor.md) that contains all the semantic information you need to represent your chart through an audio interface, like the chart’s title, axes, data points, and a summary of the chart’s key takeaways.

## Topics

### Supporting accessibility

- [accessibilityChartDescriptor](axchart/accessibilitychartdescriptor.md): A semantic description of an accessible chart or graph in the form of a chart descriptor.
- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Chart representation

- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.
