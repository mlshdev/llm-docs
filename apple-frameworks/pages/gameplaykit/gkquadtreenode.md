> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtreenode](https://developer.apple.com/documentation/gameplaykit/gkquadtreenode)

# GKQuadtreeNode (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A helper class for managing the objects you organize in a quadtree.

## Declaration

```swift
class GKQuadtreeNode
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly; instead, a [GKQuadtree](gkquadtree.md) object provides you with a [GKQuadtreeNode](gkquadtreenode.md) instance when you add an element to a tree. If you plan to remove elements from the tree, keep references to the corresponding nodes so you can use the [remove(\_:using:)](gkquadtree/remove%28__using_%29.md) method for better performance.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Examining a Node

- [quad](gkquadtreenode/quad.md): The axis-aligned bounding rectangle represented by the node.

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
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

# GKQuadtreeNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A helper class for managing the objects you organize in a quadtree.

## Declaration

```objectivec
@interface GKQuadtreeNode : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly; instead, a [GKQuadtree](gkquadtree.md) object provides you with a [GKQuadtreeNode](gkquadtreenode.md) instance when you add an element to a tree. If you plan to remove elements from the tree, keep references to the corresponding nodes so you can use the [removeElement:withNode:](gkquadtree/remove%28__using_%29.md) method for better performance.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Examining a Node

- [quad](gkquadtreenode/quad.md): The axis-aligned bounding rectangle represented by the node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial Partitioning

- [GKQuadtree](gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.
