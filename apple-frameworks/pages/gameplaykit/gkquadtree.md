> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtree](https://developer.apple.com/documentation/gameplaykit/gkquadtree)

# GKQuadtree (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure for organizing objects based on their locations in a two-dimensional space.

## Declaration

```swift
class GKQuadtree<ElementType> where ElementType : NSObject
```

<a id="overview"></a>

## Overview

A quadtree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, a quadtree can find all elements occupying a specific position or region very quickly. The quadtree partitioning strategy divides space into four quadrants at each level, as illustrated in [Figure 1](gkquadtree.md#1965707). When a quadrant contains more than one object, the tree subdivides that region into four smaller quadrants, adding a level to the tree.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965707@2x.png)

Quadtrees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time

The [GKQuadtree](gkquadtree.md) class is one of three spatial partitioning data structures that GameplayKit provides. See these other classes for other tasks:

- The [GKOctree](gkoctree.md) class provides the three-dimensional equivalent of a quadtree. Use an octree when you need to organize objects in 3D space.
- The [GKRTree](gkrtree.md) class provides a different algorithm for two-dimensional spatial indexing. Quadtrees and R-trees have different performance tradeoffs for different tasks: quadtrees can be faster when objects are more uniformly distributed in space or when their positions change frequently, and R-trees can be faster when searching for all objects in a given region.

## Topics

### Creating a Quadtree

- [init(boundingQuad:minimumCellSize:)](gkquadtree/init%28boundingquad_minimumcellsize_%29.md): Initializes a quadtree with the specified dimensions.

### Adding and Removing Elements

- [add(\_:at:)](gkquadtree/add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 2D space.
- [add(\_:in:)](gkquadtree/add%28__in_%29.md): Adds an object to the tree corresponding to the specified region of 2D space.
- [remove(\_:using:)](gkquadtree/remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [remove(\_:)](gkquadtree/remove%28__%29.md): Searches for the specified object and removes it from the tree.

### Searching for Elements

- [elements(at:)](gkquadtree/elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.
- [elements(in:)](gkquadtree/elements%28in_%29.md): Returns all objects whose corresponding locations overlap the specified region.

### Constants

For more information, see https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172.

- [GKQuad](gkquad.md): The definition of an axis-aligned rectangle addressed by the tree.

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

- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

# GKQuadtree (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure for organizing objects based on their locations in a two-dimensional space.

## Declaration

```objectivec
@interface GKQuadtree : NSObject
```

<a id="overview"></a>

## Overview

A quadtree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, a quadtree can find all elements occupying a specific position or region very quickly. The quadtree partitioning strategy divides space into four quadrants at each level, as illustrated in [Figure 1](gkquadtree.md#1965707). When a quadrant contains more than one object, the tree subdivides that region into four smaller quadrants, adding a level to the tree.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965707@2x.png)

Quadtrees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time

The [GKQuadtree](gkquadtree.md) class is one of three spatial partitioning data structures that GameplayKit provides. See these other classes for other tasks:

- The [GKOctree](gkoctree.md) class provides the three-dimensional equivalent of a quadtree. Use an octree when you need to organize objects in 3D space.
- The [GKRTree](gkrtree.md) class provides a different algorithm for two-dimensional spatial indexing. Quadtrees and R-trees have different performance tradeoffs for different tasks: quadtrees can be faster when objects are more uniformly distributed in space or when their positions change frequently, and R-trees can be faster when searching for all objects in a given region.

## Topics

### Creating a Quadtree

- [initWithBoundingQuad:minimumCellSize:](gkquadtree/init%28boundingquad_minimumcellsize_%29.md): Initializes a quadtree with the specified dimensions.
- [quadtreeWithBoundingQuad:minimumCellSize:](gkquadtree/quadtreewithboundingquad_minimumcellsize_.md): Creates a quadtree with the specified dimensions.

### Adding and Removing Elements

- [addElement:withPoint:](gkquadtree/add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 2D space.
- [addElement:withQuad:](gkquadtree/add%28__in_%29.md): Adds an object to the tree corresponding to the specified region of 2D space.
- [removeElement:withNode:](gkquadtree/remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [removeElement:](gkquadtree/remove%28__%29.md): Searches for the specified object and removes it from the tree.

### Searching for Elements

- [elementsAtPoint:](gkquadtree/elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.
- [elementsInQuad:](gkquadtree/elements%28in_%29.md): Returns all objects whose corresponding locations overlap the specified region.

### Constants

For more information, see https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172.

- [GKQuad](gkquad.md): The definition of an axis-aligned rectangle addressed by the tree.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial Partitioning

- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.
