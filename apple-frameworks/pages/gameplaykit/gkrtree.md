> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtree](https://developer.apple.com/documentation/gameplaykit/gkrtree)

# GKRTree (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

## Declaration

```swift
class GKRTree<ElementType> where ElementType : NSObject
```

<a id="overview"></a>

## Overview

An R-tree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, an R-tree can find all elements occupying a specific position or region very quickly. Additionally, R-trees adapt their internal structure as you add and remove elements, increasing the amount of time required to perform those operations, but decreasing the time required to search for elements later.

An R-tree partitions the space it describes by calculating the minimum bounding regions that enclose each of the added objects. For example, in [Figure 1](gkrtree.md#1965706), the numbered shapes are objects added to the tree, and the rectangles marked with letters are the data structure the tree creates to organize them.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965706@2x.png)

In this example, the rectangle C is the smallest rectangle that entirely contains objects 1 and 2; the rectangle D is the smallest that contains objects 3, 4, and 5; the rectangle A is the smallest containing all the objects in rectangles C and D; and so on. The R-tree automatically creates these divisions in a way that keeps the tree balanced—that is, so that no branch of the tree contains significantly more objects or sub-branches than any other branch—so that searches for objects in the tree require a uniformly minimal amount of processing.

R-trees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time
- Finding out which other objects are entirely contained within the region occupied by a certain object

The [GKRTree](gkrtree.md) class is one of three spatial partitioning data structures that GameplayKit provides. See these other classes for other tasks:

- The [GKOctree](gkoctree.md) class provides the three-dimensional equivalent of a quadtree. Use an octree when you need to organize objects in 3D space.
- The `GKQuadTree` class provides a different algorithm for two-dimensional spatial indexing. Quadtrees and R-trees have different performance tradeoffs for different tasks: quadtrees can be faster when objects are more uniformly distributed in space or when their positions change frequently, and R-trees can be faster when searching for all objects in a given region.

## Topics

### Creating an R-Tree

- [init(maxNumberOfChildren:)](gkrtree/init%28maxnumberofchildren_%29.md): Initializes a new R-tree object.

### Adding and Removing Elements

- [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md): Adds the specified object to the tree.
- [removeElement(\_:boundingRectMin:boundingRectMax:)](gkrtree/removeelement%28__boundingrectmin_boundingrectmax_%29.md): Removes the specified object from the tree.

### Searching for Elements

- [elements(inBoundingRectMin:rectMax:)](gkrtree/elements%28inboundingrectmin_rectmax_%29.md): Searches the tree and returns all elements found within the specified bounding region.
- [queryReserve](gkrtree/queryreserve.md): The number of elements to reserve space for when searching.

### Constants

- [GKRTreeSplitStrategy](gkrtreesplitstrategy.md): Options that control how a tree balances its internal structure when adding elements, used with the [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

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
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.

# GKRTree (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

## Declaration

```objectivec
@interface GKRTree : NSObject
```

<a id="overview"></a>

## Overview

An R-tree manages its structure to optimize for spatial searches—unlike a basic data structure such as an array or dictionary, an R-tree can find all elements occupying a specific position or region very quickly. Additionally, R-trees adapt their internal structure as you add and remove elements, increasing the amount of time required to perform those operations, but decreasing the time required to search for elements later.

An R-tree partitions the space it describes by calculating the minimum bounding regions that enclose each of the added objects. For example, in [Figure 1](gkrtree.md#1965706), the numbered shapes are objects added to the tree, and the rectangles marked with letters are the data structure the tree creates to organize them.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-1965706@2x.png)

In this example, the rectangle C is the smallest rectangle that entirely contains objects 1 and 2; the rectangle D is the smallest that contains objects 3, 4, and 5; the rectangle A is the smallest containing all the objects in rectangles C and D; and so on. The R-tree automatically creates these divisions in a way that keeps the tree balanced—that is, so that no branch of the tree contains significantly more objects or sub-branches than any other branch—so that searches for objects in the tree require a uniformly minimal amount of processing.

R-trees can be useful for many tasks in game design. For example:

- Deciding which game characters are close enough to each other for interaction
- Deciding which portions of a large game world need to be processed at a given time
- Finding out which other objects are entirely contained within the region occupied by a certain object

The [GKRTree](gkrtree.md) class is one of three spatial partitioning data structures that GameplayKit provides. See these other classes for other tasks:

- The [GKOctree](gkoctree.md) class provides the three-dimensional equivalent of a quadtree. Use an octree when you need to organize objects in 3D space.
- The `GKQuadTree` class provides a different algorithm for two-dimensional spatial indexing. Quadtrees and R-trees have different performance tradeoffs for different tasks: quadtrees can be faster when objects are more uniformly distributed in space or when their positions change frequently, and R-trees can be faster when searching for all objects in a given region.

## Topics

### Creating an R-Tree

- [initWithMaxNumberOfChildren:](gkrtree/init%28maxnumberofchildren_%29.md): Initializes a new R-tree object.
- [treeWithMaxNumberOfChildren:](gkrtree/treewithmaxnumberofchildren_.md): Creates a new R-tree object.

### Adding and Removing Elements

- [addElement:boundingRectMin:boundingRectMax:splitStrategy:](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md): Adds the specified object to the tree.
- [removeElement:boundingRectMin:boundingRectMax:](gkrtree/removeelement%28__boundingrectmin_boundingrectmax_%29.md): Removes the specified object from the tree.

### Searching for Elements

- [elementsInBoundingRectMin:rectMax:](gkrtree/elements%28inboundingrectmin_rectmax_%29.md): Searches the tree and returns all elements found within the specified bounding region.
- [queryReserve](gkrtree/queryreserve.md): The number of elements to reserve space for when searching.

### Constants

- [GKRTreeSplitStrategy](gkrtreesplitstrategy.md): Options that control how a tree balances its internal structure when adding elements, used with the [addElement:boundingRectMin:boundingRectMax:splitStrategy:](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial Partitioning

- [GKQuadtree](gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKQuadtreeNode](gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gkoctreenode.md): A helper class for managing the objects you organize in an octree.
