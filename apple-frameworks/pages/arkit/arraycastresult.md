> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastresult](https://developer.apple.com/documentation/arkit/arraycastresult)

# ARRaycastResult (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Information about a real-world surface found by examining a point on the screen.

## Declaration

```swift
class ARRaycastResult
```

<a id="overview"></a>

## Overview

If you use [ARView](../realitykit/arview.md) or [ARSCNView](arscnview.md) as your renderer, you can search for real-world surfaces at a screen point using the [raycast(from:allowing:alignment:)](../realitykit/arview/raycast%28from_allowing_alignment_%29.md), and [raycastQuery(from:allowing:alignment:)](arscnview/raycastquery%28from_allowing_alignment_%29.md) functions, respectively.

If you use a custom renderer, you can find real-world positions using screen points with:

- The [raycastQuery(from:allowing:alignment:)](arframe/raycastquery%28from_allowing_alignment_%29.md) function of [ARFrame](arframe.md).
- The [raycast(\_:)](arsession/raycast%28__%29.md) function of [ARSession](arsession.md).

For tracked raycasting, you call [trackedRaycast(\_:updateHandler:)](arsession/trackedraycast%28__updatehandler_%29.md) on your app’s current [ARSession](arsession.md).

## Topics

### Identifying Results

- [worldTransform](arraycastresult/worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](arraycastresult/anchor.md): The anchor for the plane that the ray intersected.
- [target](arraycastresult/target.md): The type of surface that the ray intersects.
- [ARRaycastQuery.Target](arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](arraycastresult/targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastQuery.TargetAlignment](arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Raycasting

- [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md): Place virtual content at tracked, real-world locations, and enable the user to interact with virtual content by using gestures.
- [ARRaycastQuery](arraycastquery.md): A mathematical ray you use to find 3D positions on real-world surfaces.
- [ARTrackedRaycast](artrackedraycast.md): A raycast query that ARKit repeats in succession to give you refined results over time.

# ARRaycastResult (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Information about a real-world surface found by examining a point on the screen.

## Declaration

```objectivec
@interface ARRaycastResult : NSObject
```

<a id="overview"></a>

## Overview

If you use [ARView](../realitykit/arview.md) or [ARSCNView](arscnview.md) as your renderer, you can search for real-world surfaces at a screen point using the [raycast(from:allowing:alignment:)](../realitykit/arview/raycast%28from_allowing_alignment_%29.md), and [raycastQueryFromPoint:allowingTarget:alignment:](arscnview/raycastquery%28from_allowing_alignment_%29.md) functions, respectively.

If you use a custom renderer, you can find real-world positions using screen points with:

- The [raycastQueryFromPoint:allowingTarget:alignment:](arframe/raycastquery%28from_allowing_alignment_%29.md) function of [ARFrame](arframe.md).
- The [raycast:](arsession/raycast%28__%29.md) function of [ARSession](arsession.md).

For tracked raycasting, you call [trackedRaycast:updateHandler:](arsession/trackedraycast%28__updatehandler_%29.md) on your app’s current [ARSession](arsession.md).

## Topics

### Identifying Results

- [worldTransform](arraycastresult/worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](arraycastresult/anchor.md): The anchor for the plane that the ray intersected.
- [target](arraycastresult/target.md): The type of surface that the ray intersects.
- [ARRaycastTarget](arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](arraycastresult/targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastTargetAlignment](arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Raycasting

- [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md): Place virtual content at tracked, real-world locations, and enable the user to interact with virtual content by using gestures.
- [ARRaycastQuery](arraycastquery.md): A mathematical ray you use to find 3D positions on real-world surfaces.
- [ARTrackedRaycast](artrackedraycast.md): A raycast query that ARKit repeats in succession to give you refined results over time.
