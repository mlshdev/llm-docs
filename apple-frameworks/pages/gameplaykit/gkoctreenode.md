> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctreenode](https://developer.apple.com/documentation/gameplaykit/gkoctreenode)

# GKOctreeNode (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A helper class for managing the objects you organize in an octree.

## Declaration

```swift
class GKOctreeNode
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly; instead, a [GKOctree](gkoctree.md) object provides you with a [GKOctreeNode](gkoctreenode.md) instance when you add an element to a tree. If you plan to remove elements from the tree, keep references to the corresponding nodes so you can use the [remove(\_:using:)](gkoctree/remove%28__using_%29.md) method for better performance.

## Topics

### Examining a Node

- [box](gkoctreenode/box.md): The axis-aligned bounding box represented by the node.

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

### Spatial Partitioning

- [GKQuadtree](gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

# GKOctreeNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A helper class for managing the objects you organize in an octree.

## Declaration

```objectivec
@interface GKOctreeNode : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly; instead, a [GKOctree](gkoctree.md) object provides you with a [GKOctreeNode](gkoctreenode.md) instance when you add an element to a tree. If you plan to remove elements from the tree, keep references to the corresponding nodes so you can use the [removeElement:withNode:](gkoctree/remove%28__using_%29.md) method for better performance.

## Topics

### Examining a Node

- [box](gkoctreenode/box.md): The axis-aligned bounding box represented by the node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial Partitioning

- [GKQuadtree](gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.
