> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpointsclassification](https://developer.apple.com/documentation/vision/vnpointsclassification)

# VNPointsClassification (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The set of classifications that describe how to interpret the points the region provides.

## Declaration

```swift
@frozen enum VNPointsClassification
```

## Topics

### Enumeration Cases

- [VNPointsClassification.closedPath](vnpointsclassification/closedpath.md)
- [VNPointsClassification.disconnected](vnpointsclassification/disconnected.md)
- [VNPointsClassification.openPath](vnpointsclassification/openpath.md)

### Creating a Classification

- [init(rawValue:)](vnpointsclassification/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing Region Points

- [pointsClassification](vnfacelandmarkregion2d/pointsclassification.md): An enumeration that describes how to interpret the points the region provides.

# VNPointsClassification (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

The set of classifications that describe how to interpret the points the region provides.

## Declaration

```objectivec
enum VNPointsClassification : NSInteger;
```

## Topics

### Enumeration Cases

- [VNPointsClassificationClosedPath](vnpointsclassification/closedpath.md)
- [VNPointsClassificationDisconnected](vnpointsclassification/disconnected.md)
- [VNPointsClassificationOpenPath](vnpointsclassification/openpath.md)

## See Also

### Describing Region Points

- [pointsClassification](vnfacelandmarkregion2d/pointsclassification.md): An enumeration that describes how to interpret the points the region provides.
