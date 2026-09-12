> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctree/octreewithboundingbox:minimumcellsize:](https://developer.apple.com/documentation/gameplaykit/gkoctree/octreewithboundingbox:minimumcellsize:)

# octreeWithBoundingBox:minimumCellSize:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates an octree with the specified dimensions.

## Declaration

```objectivec
+ (instancetype) octreeWithBoundingBox:(GKBox) box minimumCellSize:(float) minCellSize;
```

## Parameters

- `box`: The axis-aligned rectangular bounding volume encompassing all possible elements of the tree. Elements added to the tree must lie entirely within this box.
- `minCellSize`: The minimum dimension (width, height, and depth) of a node in the tree.

<a id="return-value"></a>

## Return Value

A new octree object.

<a id="Discussion"></a>

## Discussion

The `minCellSize` parameter controls the memory usage and performance of the tree. A lower value causes the tree to make more spatial divisions when adding elements; a higher value causes the tree to create fewer such divisions, but store more elements in each node. Which direction leads to better performance depends on the number and spatial arrangement of the elements you add to the tree—for best results, profile with different values to find one best suited to your app or game.

## See Also

### Creating an Octree

- [initWithBoundingBox:minimumCellSize:](init%28boundingbox_minimumcellsize_%29.md): Initializes an octree with the specified dimensions.
