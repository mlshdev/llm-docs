> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axchartdescriptor/contentdirection-swift.enum](https://developer.apple.com/documentation/accessibility/axchartdescriptor/contentdirection-swift.enum)

# AXChartDescriptor.ContentDirection (Swift)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that describes the content direction of the chart.

## Declaration

```swift
enum ContentDirection
```

<a id="overview"></a>

## Overview

Use content direction to specify the direction of the x-axis, which the audio graph represents as time. For example, a bar chart might have a content direction of [AXChartDescriptor.ContentDirection.leftToRight](contentdirection-swift.enum/lefttoright.md), and a pie chart might have a content direction of [AXChartDescriptor.ContentDirection.radialClockwise](contentdirection-swift.enum/radialclockwise.md).

## Topics

### Content directions

- [AXChartDescriptor.ContentDirection.leftToRight](contentdirection-swift.enum/lefttoright.md): A content direction with an x-axis that increases from left to right.
- [AXChartDescriptor.ContentDirection.rightToLeft](contentdirection-swift.enum/righttoleft.md): A content direction with an x-axis that increases from right to left.
- [AXChartDescriptor.ContentDirection.bottomToTop](contentdirection-swift.enum/bottomtotop.md): A content direction with an x-axis that increases from bottom to top.
- [AXChartDescriptor.ContentDirection.topToBottom](contentdirection-swift.enum/toptobottom.md): A content direction with an x-axis that increases from top to bottom.
- [AXChartDescriptor.ContentDirection.radialClockwise](contentdirection-swift.enum/radialclockwise.md): A content direction with a radial x-axis that increases clockwise.
- [AXChartDescriptor.ContentDirection.radialCounterClockwise](contentdirection-swift.enum/radialcounterclockwise.md): A content direction with a radial x-axis that increases counterclockwise.

### Initializers

- [init(rawValue:)](contentdirection-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the content layout

- [contentFrame](contentframe.md): The bounds of the view, in screen coordinates, for visually rendering data values.
- [contentDirection](contentdirection-swift.property.md): The direction of the content in the chart.

# AXChartDescriptorContentDirection (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that describes the content direction of the chart.

## Declaration

```objectivec
enum AXChartDescriptorContentDirection : NSInteger;
```

<a id="overview"></a>

## Overview

Use content direction to specify the direction of the x-axis, which the audio graph represents as time. For example, a bar chart might have a content direction of [AXChartContentDirectionLeftToRight](contentdirection-swift.enum/lefttoright.md), and a pie chart might have a content direction of [AXChartContentDirectionRadialClockwise](contentdirection-swift.enum/radialclockwise.md).

## Topics

### Content directions

- [AXChartContentDirectionLeftToRight](contentdirection-swift.enum/lefttoright.md): A content direction with an x-axis that increases from left to right.
- [AXChartContentDirectionRightToLeft](contentdirection-swift.enum/righttoleft.md): A content direction with an x-axis that increases from right to left.
- [AXChartContentDirectionBottomToTop](contentdirection-swift.enum/bottomtotop.md): A content direction with an x-axis that increases from bottom to top.
- [AXChartContentDirectionTopToBottom](contentdirection-swift.enum/toptobottom.md): A content direction with an x-axis that increases from top to bottom.
- [AXChartContentDirectionRadialClockwise](contentdirection-swift.enum/radialclockwise.md): A content direction with a radial x-axis that increases clockwise.
- [AXChartContentDirectionRadialCounterClockwise](contentdirection-swift.enum/radialcounterclockwise.md): A content direction with a radial x-axis that increases counterclockwise.

## See Also

### Specifying the content layout

- [contentFrame](contentframe.md): The bounds of the view, in screen coordinates, for visually rendering data values.
- [contentDirection](contentdirection-swift.property.md): The direction of the content in the chart.
