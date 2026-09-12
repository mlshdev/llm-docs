> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/resulttype](https://developer.apple.com/documentation/arkit/arhittestresult/resulttype)

# ARHitTestResult.ResultType (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

Possible types for specifying a hit-test search, or for the result of a hit-test search.

> Use raycasting

## Declaration

```swift
struct ResultType
```

## Topics

### Creating a Result Type

- [init(rawValue:)](resulttype/init%28rawvalue_%29.md): Deprecated. Creates a result type.

### Result Types

- [featurePoint](resulttype/featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [estimatedHorizontalPlane](resulttype/estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [estimatedVerticalPlane](resulttype/estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [existingPlane](resulttype/existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [existingPlaneUsingExtent](resulttype/existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [existingPlaneUsingGeometry](resulttype/existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Identifying Results

- [type](type.md): Deprecated. The kind of detected feature the search result represents.
- [anchor](anchor.md): Deprecated. The anchor representing the detected surface, if any.

# ARHitTestResultType (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · visionOS

Possible types for specifying a hit-test search, or for the result of a hit-test search.

## Declaration

```objectivec
enum ARHitTestResultType : NSUInteger;
```

## Topics

### Result Types

- [ARHitTestResultTypeFeaturePoint](resulttype/featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [ARHitTestResultTypeEstimatedHorizontalPlane](resulttype/estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [ARHitTestResultTypeEstimatedVerticalPlane](resulttype/estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [ARHitTestResultTypeExistingPlane](resulttype/existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [ARHitTestResultTypeExistingPlaneUsingExtent](resulttype/existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [ARHitTestResultTypeExistingPlaneUsingGeometry](resulttype/existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

## See Also

### Identifying Results

- [type](type.md): Deprecated. The kind of detected feature the search result represents.
- [anchor](anchor.md): Deprecated. The anchor representing the detected surface, if any.
