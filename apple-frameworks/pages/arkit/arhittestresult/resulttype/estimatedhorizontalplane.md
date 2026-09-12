> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/resulttype/estimatedhorizontalplane](https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/estimatedhorizontalplane)

# estimatedHorizontalPlane (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.

> Use raycasting

## Declaration

```swift
static var estimatedHorizontalPlane: ARHitTestResult.ResultType { get }
```

<a id="Discussion"></a>

## Discussion

ARKit provides two ways to locate real-world flat surfaces in a scene. *Plane detection* (enabled with [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) on your session configuration) is an ongoing process, continuously analyzing the scene to accurately map the position and extent of any planes in view. Because plane detection takes time, you can fall back to *plane estimation* to get an instant, but less accurate, indication of whether a 2D point in the camera image corresponds to a real-world flat surface.

Because plane detection results are more accurate than plane estimation results, ARKit prefers the former when searching for both. If your hit-test search includes both [estimatedHorizontalPlane](estimatedhorizontalplane.md) and one or more [existingPlane](existingplane.md) types, and the search finds any already detected plane anchors, the search returns only the existing plane(s) and no estimated plane.

An estimated plane search returns at most one result—the best estimate for a horizontal plane intersecting the hit-test ray.

## See Also

### Result Types

- [featurePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [estimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [existingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [existingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [existingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

# ARHitTestResultTypeEstimatedHorizontalPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · visionOS

A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.

## Declaration

```objectivec
ARHitTestResultTypeEstimatedHorizontalPlane
```

<a id="Discussion"></a>

## Discussion

ARKit provides two ways to locate real-world flat surfaces in a scene. *Plane detection* (enabled with [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) on your session configuration) is an ongoing process, continuously analyzing the scene to accurately map the position and extent of any planes in view. Because plane detection takes time, you can fall back to *plane estimation* to get an instant, but less accurate, indication of whether a 2D point in the camera image corresponds to a real-world flat surface.

Because plane detection results are more accurate than plane estimation results, ARKit prefers the former when searching for both. If your hit-test search includes both [ARHitTestResultTypeEstimatedHorizontalPlane](estimatedhorizontalplane.md) and one or more [ARHitTestResultTypeExistingPlane](existingplane.md) types, and the search finds any already detected plane anchors, the search returns only the existing plane(s) and no estimated plane.

An estimated plane search returns at most one result—the best estimate for a horizontal plane intersecting the hit-test ray.

## See Also

### Result Types

- [ARHitTestResultTypeFeaturePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [ARHitTestResultTypeEstimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [ARHitTestResultTypeExistingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [ARHitTestResultTypeExistingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [ARHitTestResultTypeExistingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.
