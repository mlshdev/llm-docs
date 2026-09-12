> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctree/add(_:in:)](https://developer.apple.com/documentation/gameplaykit/gkoctree/add(_:in:))

# add(\_:in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds an object to the tree corresponding to the specified volume of 3D space.

## Declaration

```swift
func add(_ element: ElementType, in box: GKBox) -> GKOctreeNode
```

## Parameters

- `element`: The object to add to the tree.

<a id="return-value"></a>

## Return Value

The tree node containing the newly added object.

<a id="Discussion"></a>

## Discussion

The [GKOctree](../gkoctree.md) class automatically creates nodes to manage the objects you add to the tree. If you expect to remove an element you’ve added, keep a reference to the node this method returns so you can use the [remove(\_:using:)](remove%28__using_%29.md) method to remove that object quickly.

## See Also

### Adding and Removing Elements

- [add(\_:at:)](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [remove(\_:using:)](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [remove(\_:)](remove%28__%29.md): Searches for the specified object and removes it from the tree.

# addElement:withBox: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Adds an object to the tree corresponding to the specified volume of 3D space.

## Declaration

```objectivec
- (GKOctreeNode *) addElement:(ElementType) element withBox:(GKBox) box;
```

## Parameters

- `element`: The object to add to the tree.

<a id="return-value"></a>

## Return Value

The tree node containing the newly added object.

<a id="Discussion"></a>

## Discussion

The [GKOctree](../gkoctree.md) class automatically creates nodes to manage the objects you add to the tree. If you expect to remove an element you’ve added, keep a reference to the node this method returns so you can use the [removeElement:withNode:](remove%28__using_%29.md) method to remove that object quickly.

## See Also

### Adding and Removing Elements

- [addElement:withPoint:](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [removeElement:withNode:](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
- [removeElement:](remove%28__%29.md): Searches for the specified object and removes it from the tree.
