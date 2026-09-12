> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/resulttype/featurepoint](https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/featurepoint)

# featurePoint (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

A point on a surface detected by ARKit, but not part of any detected planes.

> Use raycasting

## Declaration

```swift
static var featurePoint: ARHitTestResult.ResultType { get }
```

<a id="Discussion"></a>

## Discussion

During a world-tracking AR session, ARKit builds a coarse point cloud representing its rough understanding of the 3D world around the user (see [rawFeaturePoints](../../arframe/rawfeaturepoints.md)). Individual feature points represent parts of the camera image likely to be part of a real-world surface, but not necessarily a planar surface.

When you search using this hit-test option, ARKit finds the feature point nearest to the hit-test ray (the extension of the 2D hit-test point into 3D world space), then returns the point on the ray nearest to that feature point.

## See Also

### Result Types

- [estimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [estimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [existingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [existingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [existingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

# ARHitTestResultTypeFeaturePoint (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · visionOS

A point on a surface detected by ARKit, but not part of any detected planes.

## Declaration

```objectivec
ARHitTestResultTypeFeaturePoint
```

<a id="Discussion"></a>

## Discussion

During a world-tracking AR session, ARKit builds a coarse point cloud representing its rough understanding of the 3D world around the user (see [rawFeaturePoints](../../arframe/rawfeaturepoints.md)). Individual feature points represent parts of the camera image likely to be part of a real-world surface, but not necessarily a planar surface.

When you search using this hit-test option, ARKit finds the feature point nearest to the hit-test ray (the extension of the 2D hit-test point into 3D world space), then returns the point on the ray nearest to that feature point.

## See Also

### Result Types

- [ARHitTestResultTypeEstimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [ARHitTestResultTypeEstimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [ARHitTestResultTypeExistingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [ARHitTestResultTypeExistingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [ARHitTestResultTypeExistingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.
