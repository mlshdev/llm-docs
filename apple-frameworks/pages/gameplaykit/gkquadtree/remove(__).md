> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtree/remove(_:)](https://developer.apple.com/documentation/gameplaykit/gkquadtree/remove(_:))

# remove(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Searches for the specified object and removes it from the tree.

## Declaration

```swift
func remove(_ element: ElementType) -> Bool
```

## Parameters

- `element`: The object to be removed from the tree.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was removed from the tree. [false](https://developer.apple.com/documentation/swift/false) if the specified object is not in the tree.

<a id="Discussion"></a>

## Discussion

The tree does not directly reference its elements—quadtrees are optimized to search for elements based on spatial positions—so this method must exhaustively search the entire tree to find the object to remove. For quicker removal, keep a reference to the [GKQuadtreeNode](../gkquadtreenode.md) object returned when you add an object to the tree, and call the [remove(\_:using:)](remove%28__using_%29.md) method instead.

## See Also

### Adding and Removing Elements

- [add(\_:at:)](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 2D space.
- [add(\_:in:)](add%28__in_%29.md): Adds an object to the tree corresponding to the specified region of 2D space.
- [remove(\_:using:)](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.

# removeElement: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Searches for the specified object and removes it from the tree.

## Declaration

```objectivec
- (BOOL) removeElement:(ElementType) element;
```

## Parameters

- `element`: The object to be removed from the tree.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was removed from the tree. [false](https://developer.apple.com/documentation/swift/false) if the specified object is not in the tree.

<a id="Discussion"></a>

## Discussion

The tree does not directly reference its elements—quadtrees are optimized to search for elements based on spatial positions—so this method must exhaustively search the entire tree to find the object to remove. For quicker removal, keep a reference to the [GKQuadtreeNode](../gkquadtreenode.md) object returned when you add an object to the tree, and call the [removeElement:withNode:](remove%28__using_%29.md) method instead.

## See Also

### Adding and Removing Elements

- [addElement:withPoint:](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 2D space.
- [addElement:withQuad:](add%28__in_%29.md): Adds an object to the tree corresponding to the specified region of 2D space.
- [removeElement:withNode:](remove%28__using_%29.md): Removes the specified object from the tree, using a reference to its containing node.
