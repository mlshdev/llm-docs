> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackedraycast](https://developer.apple.com/documentation/arkit/artrackedraycast)

# ARTrackedRaycast (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A raycast query that ARKit repeats in succession to give you refined results over time.

## Declaration

```swift
class ARTrackedRaycast
```

<a id="overview"></a>

## Overview

Tracked raycasting improves hit-testing techniques by repeating the query for a 3D position in succession. ARKit provides you with an updated position as it refines its understanding of world over time.

To start a tracked raycast, you call [trackedRaycast(\_:updateHandler:)](arsession/trackedraycast%28__updatehandler_%29.md) on your app’s current [ARSession](arsession.md).

## Topics

### Stopping Tracking

- [stopTracking()](artrackedraycast/stoptracking%28%29.md): Stops repeating the raycast query.

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
- [ARRaycastResult](arraycastresult.md): Information about a real-world surface found by examining a point on the screen.

# ARTrackedRaycast (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A raycast query that ARKit repeats in succession to give you refined results over time.

## Declaration

```objectivec
@interface ARTrackedRaycast : NSObject
```

<a id="overview"></a>

## Overview

Tracked raycasting improves hit-testing techniques by repeating the query for a 3D position in succession. ARKit provides you with an updated position as it refines its understanding of world over time.

To start a tracked raycast, you call [trackedRaycast:updateHandler:](arsession/trackedraycast%28__updatehandler_%29.md) on your app’s current [ARSession](arsession.md).

## Topics

### Stopping Tracking

- [stopTracking](artrackedraycast/stoptracking%28%29.md): Stops repeating the raycast query.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Raycasting

- [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md): Place virtual content at tracked, real-world locations, and enable the user to interact with virtual content by using gestures.
- [ARRaycastQuery](arraycastquery.md): A mathematical ray you use to find 3D positions on real-world surfaces.
- [ARRaycastResult](arraycastresult.md): Information about a real-world surface found by examining a point on the screen.
