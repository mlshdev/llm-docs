> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/resulttype/existingplaneusinggeometry](https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/existingplaneusinggeometry)

# existingPlaneUsingGeometry (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ (deprecated in 14.0) · iPadOS 11.3+ (deprecated in 14.0)

A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

## Declaration

```swift
static var existingPlaneUsingGeometry: ARHitTestResult.ResultType { get }
```

<a id="Discussion"></a>

## Discussion

When searching for this result type, ARKit returns a point coplanar with an already detected plane only if that point lies within the area defined by the plane’s [geometry](../../arplaneanchor/geometry.md). That property (together with the anchor’s [transform](../../aranchor/transform.md)) defines the smallest polygonal area that includes all regions ARKit estimates to be a part of the plane.

Because that polygon is always convex, it may contain regions that are not part of the same real-world surface. (It does, however, provide a more precise esitmate than a bounding rectangle provided by the [existingPlaneUsingExtent](existingplaneusingextent.md) type.) There may also be parts of the same real-world surface that lie outside the polygon because ARKit has not yet recognized them as part of the same plane. You extend your hit test to an infinite plane by using the [existingPlane](existingplane.md) type.

An existing plane search can return any number of results, depending on how many already-detected planes the hit test ray intersects (if any).

## See Also

### Result Types

- [featurePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [estimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [estimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [existingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [existingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.

# ARHitTestResultTypeExistingPlaneUsingGeometry (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · visionOS 1.0+

A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size and shape.

## Declaration

```objectivec
ARHitTestResultTypeExistingPlaneUsingGeometry
```

<a id="Discussion"></a>

## Discussion

When searching for this result type, ARKit returns a point coplanar with an already detected plane only if that point lies within the area defined by the plane’s [geometry](../../arplaneanchor/geometry.md). That property (together with the anchor’s [transform](../../aranchor/transform.md)) defines the smallest polygonal area that includes all regions ARKit estimates to be a part of the plane.

Because that polygon is always convex, it may contain regions that are not part of the same real-world surface. (It does, however, provide a more precise esitmate than a bounding rectangle provided by the [ARHitTestResultTypeExistingPlaneUsingExtent](existingplaneusingextent.md) type.) There may also be parts of the same real-world surface that lie outside the polygon because ARKit has not yet recognized them as part of the same plane. You extend your hit test to an infinite plane by using the [ARHitTestResultTypeExistingPlane](existingplane.md) type.

An existing plane search can return any number of results, depending on how many already-detected planes the hit test ray intersects (if any).

## See Also

### Result Types

- [ARHitTestResultTypeFeaturePoint](featurepoint.md): Deprecated. A point on a surface detected by ARKit, but not part of any detected planes.
- [ARHitTestResultTypeEstimatedHorizontalPlane](estimatedhorizontalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is perpendicular to gravity.
- [ARHitTestResultTypeEstimatedVerticalPlane](estimatedverticalplane.md): Deprecated. A point on a real-world planar surface detected during the search, whose orientation is parallel to gravity.
- [ARHitTestResultTypeExistingPlane](existingplane.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), without considering the plane’s size.
- [ARHitTestResultTypeExistingPlaneUsingExtent](existingplaneusingextent.md): Deprecated. A point on a real-world plane (already detected with the [planeDetection](../../arworldtrackingconfiguration/planedetection-swift.property.md) option), respecting the plane’s estimated size.
