> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkoctree/remove(_:using:)](https://developer.apple.com/documentation/gameplaykit/gkoctree/remove(_:using:))

# remove(\_:using:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified object from the tree, using a reference to its containing node.

## Declaration

```swift
func remove(_ element: ElementType, using node: GKOctreeNode) -> Bool
```

## Parameters

- `node`: The node in the tree containing the object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was removed from the tree. [false](https://developer.apple.com/documentation/swift/false) if the specified object or node is not in the tree.

<a id="Discussion"></a>

## Discussion

By referencing the node that contains the object to remove, this method can quickly remove an object from the tree without needing to perform an exhaustive search. To make use of this performance optimization, keep a reference to the node returned when you add elements with the [add(\_:at:)](add%28__at_%29.md) or [add(\_:in:)](add%28__in_%29.md) methods.

## See Also

### Adding and Removing Elements

- [add(\_:at:)](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [add(\_:in:)](add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [remove(\_:)](remove%28__%29.md): Searches for the specified object and removes it from the tree.

# removeElement:withNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified object from the tree, using a reference to its containing node.

## Declaration

```objectivec
- (BOOL) removeElement:(ElementType) element withNode:(GKOctreeNode *) node;
```

## Parameters

- `node`: The node in the tree containing the object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was removed from the tree. [false](https://developer.apple.com/documentation/swift/false) if the specified object or node is not in the tree.

<a id="Discussion"></a>

## Discussion

By referencing the node that contains the object to remove, this method can quickly remove an object from the tree without needing to perform an exhaustive search. To make use of this performance optimization, keep a reference to the node returned when you add elements with the [addElement:withPoint:](add%28__at_%29.md) or [addElement:withBox:](add%28__in_%29.md) methods.

## See Also

### Adding and Removing Elements

- [addElement:withPoint:](add%28__at_%29.md): Adds an object to the tree corresponding to the specified point in 3D space.
- [addElement:withBox:](add%28__in_%29.md): Adds an object to the tree corresponding to the specified volume of 3D space.
- [removeElement:](remove%28__%29.md): Searches for the specified object and removes it from the tree.
