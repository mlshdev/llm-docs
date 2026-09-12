> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctree/add(_:at:)](https://developer.apple.com/documentation/gameplaykit/gkoctree/add(_:at:))

# add(\_:at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds an object to the tree corresponding to the specified point in 3D space.

## Declaration

```swift
func add(_ element: ElementType, at point: vector_float3) -> GKOctreeNode
```

## Parameters

- `element`: The object to add to the tree.
- `point`: The point in 2D space to which the object corresponds.

<a id="return-value"></a>

## Return Value

The tree node containing the newly added object.

<a id="Discussion"></a>

## Discussion

The [GKOctree](../gkoctree.md) class automatically creates nodes to manage the objects you add to the tree. If you expect to remove an element you’ve added, keep a reference to the node this method returns so you can use the [remove(\_:using:)](remove%28__using_%29.md) method to remove that object quickly.

## See Also

### Adding and Removing Elements

- [add(\_:in:)](add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [remove(\_:using:)](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [remove(\_:)](remove%28__%29.md): Searches for the specified object and removes it from the tree.

# addElement:withPoint: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds an object to the tree corresponding to the specified point in 3D space.

## Declaration

```objectivec
- (GKOctreeNode *) addElement:(ElementType) element withPoint:(vector_float3) point;
```

## Parameters

- `element`: The object to add to the tree.
- `point`: The point in 2D space to which the object corresponds.

<a id="return-value"></a>

## Return Value

The tree node containing the newly added object.

<a id="Discussion"></a>

## Discussion

The [GKOctree](../gkoctree.md) class automatically creates nodes to manage the objects you add to the tree. If you expect to remove an element you’ve added, keep a reference to the node this method returns so you can use the [removeElement:withNode:](remove%28__using_%29.md) method to remove that object quickly.

## See Also

### Adding and Removing Elements

- [addElement:withBox:](add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [removeElement:withNode:](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [removeElement:](remove%28__%29.md): Searches for the specified object and removes it from the tree.
