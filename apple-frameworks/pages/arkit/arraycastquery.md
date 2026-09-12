> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery](https://developer.apple.com/documentation/arkit/arraycastquery)

# ARRaycastQuery (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A mathematical ray you use to find 3D positions on real-world surfaces.

## Declaration

```swift
class ARRaycastQuery
```

<a id="overview"></a>

## Overview

You create a raycast query by providing a 3D vector and starting place.

To create a raycast query using a 2D screen location and default vector that casts outward in the z-direction from the user, use the convenience functions, [makeRaycastQuery(from:allowing:alignment:)](../realitykit/arview/makeraycastquery%28from_allowing_alignment_%29.md) on [ARView](../realitykit/arview.md), or [raycastQuery(from:allowing:alignment:)](arscnview/raycastquery%28from_allowing_alignment_%29.md) on [ARSCNView](arscnview.md).

Raycasts can intersect with planes (flat surfaces) or meshes (uneven surfaces). To intersect with planes, see [ARRaycastQuery.Target](arraycastquery/target-swift.enum.md). To intersect with meshes, see [ARRaycastQuery.Target.estimatedPlane](arraycastquery/target-swift.enum/estimatedplane.md).

## Topics

### Creating a Raycast Query

- [init(origin:direction:allowing:alignment:)](arraycastquery/init%28origin_direction_allowing_alignment_%29.md): Creates a new raycast query.

### Specifying the Target

- [target](arraycastquery/target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastQuery.Target](arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](arraycastquery/targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastQuery.TargetAlignment](arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

### Interpreting the Ray

- [direction](arraycastquery/direction.md): A vector that describes the ray’s trajectory in 3D space.
- [origin](arraycastquery/origin.md): A 3D coordinate that defines the ray’s starting place.

### Initializers

- [init(origin:direction:allowingTarget:alignment:)](arraycastquery/init%28origin_direction_allowingtarget_alignment_%29.md)

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
- [ARTrackedRaycast](artrackedraycast.md): A raycast query that ARKit repeats in succession to give you refined results over time.
- [ARRaycastResult](arraycastresult.md): Information about a real-world surface found by examining a point on the screen.

# ARRaycastQuery (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A mathematical ray you use to find 3D positions on real-world surfaces.

## Declaration

```objectivec
@interface ARRaycastQuery : NSObject
```

<a id="overview"></a>

## Overview

You create a raycast query by providing a 3D vector and starting place.

To create a raycast query using a 2D screen location and default vector that casts outward in the z-direction from the user, use the convenience functions, [makeRaycastQuery(from:allowing:alignment:)](../realitykit/arview/makeraycastquery%28from_allowing_alignment_%29.md) on [ARView](../realitykit/arview.md), or [raycastQueryFromPoint:allowingTarget:alignment:](arscnview/raycastquery%28from_allowing_alignment_%29.md) on [ARSCNView](arscnview.md).

Raycasts can intersect with planes (flat surfaces) or meshes (uneven surfaces). To intersect with planes, see [ARRaycastTarget](arraycastquery/target-swift.enum.md). To intersect with meshes, see [ARRaycastTargetEstimatedPlane](arraycastquery/target-swift.enum/estimatedplane.md).

## Topics

### Creating a Raycast Query

- [initWithOrigin:direction:allowingTarget:alignment:](arraycastquery/init%28origin_direction_allowing_alignment_%29.md): Creates a new raycast query.

### Specifying the Target

- [target](arraycastquery/target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [ARRaycastTarget](arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](arraycastquery/targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastTargetAlignment](arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

### Interpreting the Ray

- [direction](arraycastquery/direction.md): A vector that describes the ray’s trajectory in 3D space.
- [origin](arraycastquery/origin.md): A 3D coordinate that defines the ray’s starting place.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Raycasting

- [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md): Place virtual content at tracked, real-world locations, and enable the user to interact with virtual content by using gestures.
- [ARTrackedRaycast](artrackedraycast.md): A raycast query that ARKit repeats in succession to give you refined results over time.
- [ARRaycastResult](arraycastresult.md): Information about a real-world surface found by examining a point on the screen.
