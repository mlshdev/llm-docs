> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctree](https://developer.apple.com/documentation/gameplaykit/gkoctree)

# GKOctree (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure for organizing objects based on their locations in a three-dimensional space.

## Declaration

```swift
class GKOctree<ElementType> where ElementType : NSObject
```

<a id="overview"></a>

## Overview

An octree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, an octree can find all elements occupying a specific position or volume very quickly. The octree partitioning strategy divides space into eight octants at each level, as illustrated in [Figure 1](gkoctree.md#1965708). When an octant contains more than one object, the tree subdivides that region into eight smaller octants, adding a level to the tree.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965708@2x.png)

Octrees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time

The [GKOctree](gkoctree.md) class is one of three spatial partitioning data structures that GameplayKit provides, and the only one suited to three-dimensional data. See the `GKQuadTree` class for the two-dimensional analogue of an octree, and the [GKRTree](gkrtree.md) class for different ways to organize two-dimensional data.

## Topics

### Creating an Octree

- [init(boundingBox:minimumCellSize:)](gkoctree/init%28boundingbox_minimumcellsize_%29.md): Initializes an octree with the specified dimensions.

### Adding and Removing Elements

- [add(\_:at:)](gkoctree/add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [add(\_:in:)](gkoctree/add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [remove(\_:using:)](gkoctree/remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [remove(\_:)](gkoctree/remove%28__%29.md): Searches for the specified object and removes it from the tree.

### Searching for Elements

- [elements(at:)](gkoctree/elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.
- [elements(in:)](gkoctree/elements%28in_%29.md): Returns all objects whose corresponding locations overlap the specified volume.

### Constants

- [GKBox](gkbox.md): The definition of an axis-aligned rectangular bounding volume addressed by the tree.

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
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

# GKOctree (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure for organizing objects based on their locations in a three-dimensional space.

## Declaration

```objectivec
@interface GKOctree : NSObject
```

<a id="overview"></a>

## Overview

An octree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, an octree can find all elements occupying a specific position or volume very quickly. The octree partitioning strategy divides space into eight octants at each level, as illustrated in [Figure 1](gkoctree.md#1965708). When an octant contains more than one object, the tree subdivides that region into eight smaller octants, adding a level to the tree.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965708@2x.png)

Octrees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time

The [GKOctree](gkoctree.md) class is one of three spatial partitioning data structures that GameplayKit provides, and the only one suited to three-dimensional data. See the `GKQuadTree` class for the two-dimensional analogue of an octree, and the [GKRTree](gkrtree.md) class for different ways to organize two-dimensional data.

## Topics

### Creating an Octree

- [initWithBoundingBox:minimumCellSize:](gkoctree/init%28boundingbox_minimumcellsize_%29.md): Initializes an octree with the specified dimensions.
- [octreeWithBoundingBox:minimumCellSize:](gkoctree/octreewithboundingbox_minimumcellsize_.md): Creates an octree with the specified dimensions.

### Adding and Removing Elements

- [addElement:withPoint:](gkoctree/add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [addElement:withBox:](gkoctree/add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [removeElement:withNode:](gkoctree/remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [removeElement:](gkoctree/remove%28__%29.md): Searches for the specified object and removes it from the tree.

### Searching for Elements

- [elementsAtPoint:](gkoctree/elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.
- [elementsInBox:](gkoctree/elements%28in_%29.md): Returns all objects whose corresponding locations overlap the specified volume.

### Constants

- [GKBox](gkbox.md): The definition of an axis-aligned rectangular bounding volume addressed by the tree.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial Partitioning

- [GKQuadtree](gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.
