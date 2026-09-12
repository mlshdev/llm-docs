> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphnonmaximumsuppressioncoordinatemode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphnonmaximumsuppressioncoordinatemode)

# MPSGraphNonMaximumSuppressionCoordinateMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The non-maximum suppression coordinate mode.

## Declaration

```swift
enum MPSGraphNonMaximumSuppressionCoordinateMode
```

<a id="overview"></a>

## Overview

The coordinate mode to use. At initialization defaults to MPSGraphNonMaximumSuppressionCoordinateModeCornersHeightFirst. This mode specifies the representation used for the 4 box coordinate values. Center coordinate modes define a centered box and the box dimensions.

```md
CornersHeightFirst:
    [h_start, w_start, h_end, w_end]
CornersWidthFirst:
    [w_start, h_start, w_end, h_end]
CentersHeightFirst:
    [h_center, w_center, box_height, box_width]
CentersWidthFirst:
    [w_center, w_center, box_height, box_width]
```

## Topics

### Enumeration Cases

- [MPSGraphNonMaximumSuppressionCoordinateMode.centersHeightFirst](mpsgraphnonmaximumsuppressioncoordinatemode/centersheightfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateMode.centersWidthFirst](mpsgraphnonmaximumsuppressioncoordinatemode/centerswidthfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateMode.cornersWidthFirst](mpsgraphnonmaximumsuppressioncoordinatemode/cornerswidthfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateMode.explicit](mpsgraphnonmaximumsuppressioncoordinatemode/explicit.md)

### Initializers

- [init(rawValue:)](mpsgraphnonmaximumsuppressioncoordinatemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphNonMaximumSuppressionCoordinateMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The non-maximum suppression coordinate mode.

## Declaration

```objectivec
enum MPSGraphNonMaximumSuppressionCoordinateMode : NSUInteger;
```

<a id="overview"></a>

## Overview

The coordinate mode to use. At initialization defaults to MPSGraphNonMaximumSuppressionCoordinateModeCornersHeightFirst. This mode specifies the representation used for the 4 box coordinate values. Center coordinate modes define a centered box and the box dimensions.

```md
CornersHeightFirst:
    [h_start, w_start, h_end, w_end]
CornersWidthFirst:
    [w_start, h_start, w_end, h_end]
CentersHeightFirst:
    [h_center, w_center, box_height, box_width]
CentersWidthFirst:
    [w_center, w_center, box_height, box_width]
```

## Topics

### Enumeration Cases

- [MPSGraphNonMaximumSuppressionCoordinateModeCentersHeightFirst](mpsgraphnonmaximumsuppressioncoordinatemode/centersheightfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateModeCentersWidthFirst](mpsgraphnonmaximumsuppressioncoordinatemode/centerswidthfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateModeCornersWidthFirst](mpsgraphnonmaximumsuppressioncoordinatemode/cornerswidthfirst.md)
- [MPSGraphNonMaximumSuppressionCoordinateModeCornersHeightFirst](mpsgraphnonmaximumsuppressioncoordinatemode/explicit.md)
