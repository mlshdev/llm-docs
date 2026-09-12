> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtree/quadtreewithboundingquad:minimumcellsize:](https://developer.apple.com/documentation/gameplaykit/gkquadtree/quadtreewithboundingquad:minimumcellsize:)

# quadtreeWithBoundingQuad:minimumCellSize:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a quadtree with the specified dimensions.

## Declaration

```objectivec
+ (instancetype) quadtreeWithBoundingQuad:(GKQuad) quad minimumCellSize:(float) minCellSize;
```

## Parameters

- `quad`: The axis-aligned bounding rectangle encompassing all possible elements of the tree. Elements added to the tree must lie entirely within this rectangle.
- `minCellSize`: The minimum dimension (width and height) of a node in the tree.

<a id="return-value"></a>

## Return Value

A new quadtree object.

<a id="Discussion"></a>

## Discussion

The `minCellSize` parameter controls the memory usage and performance of the tree. A lower value causes the tree to make more spatial divisions when adding elements; a higher value causes the tree to create fewer such divisions, but store more elements in each node. Which direction leads to better performance depends on the number and spatial arrangement of the elements you add to the tree—for best results, profile with different values to find one best suited to your app or game.

## See Also

### Creating a Quadtree

- [initWithBoundingQuad:minimumCellSize:](init%28boundingquad_minimumcellsize_%29.md): Initializes a quadtree with the specified dimensions.
