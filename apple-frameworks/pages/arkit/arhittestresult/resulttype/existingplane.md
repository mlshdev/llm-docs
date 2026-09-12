> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/resulttype/existingplane](https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/existingplane)

# existingPlane (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.

> Use raycasting

## Declaration

```swift
static var existingPlane: ARHitTestResult.ResultType { get }
```

<a id="Discussion"></a>

## Discussion

When searching for this result type, ARKit can return any point coplanar with an already detected plane, regardless of whether that plane’s already detected [extent](../../arplaneanchor/extent.md) or [geometry](../../arplaneanchor/geometry.md) includes that point. (That is, this result type searches the infinite extensions of detected planes.)

An existing plane search can return any number of results, depending on how many already-detected planes the hit test ray intersects (if any).

## See Also

### Result Types

- [featurePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [estimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [estimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [existingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [existingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

# ARHitTestResultTypeExistingPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · visionOS

A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.

## Declaration

```objectivec
ARHitTestResultTypeExistingPlane
```

<a id="Discussion"></a>

## Discussion

When searching for this result type, ARKit can return any point coplanar with an already detected plane, regardless of whether that plane’s already detected [extent](../../arplaneanchor/extent.md) or [geometry](../../arplaneanchor/geometry.md) includes that point. (That is, this result type searches the infinite extensions of detected planes.)

An existing plane search can return any number of results, depending on how many already-detected planes the hit test ray intersects (if any).

## See Also

### Result Types

- [ARHitTestResultTypeFeaturePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [ARHitTestResultTypeEstimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [ARHitTestResultTypeEstimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [ARHitTestResultTypeExistingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
- [ARHitTestResultTypeExistingPlaneUsingGeometry](existingplaneusinggeometry.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.
