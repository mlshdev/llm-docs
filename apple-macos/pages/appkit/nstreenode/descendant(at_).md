> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/descendant(at:)](https://developer.apple.com/documentation/appkit/nstreenode/descendant(at:))

# descendant(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the receiver’s descendant at the specified index path.

## Declaration

```swift
func descendant(at indexPath: IndexPath) -> NSTreeNode?
```

## Parameters

- `indexPath`: An index path specifying a descendant of the receiver.

<a id="return-value"></a>

## Return Value

A tree node, or `nil` if the node does not exist.

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [isLeaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [children](children.md): An array containing receiver’s child nodes.
- [mutableChildren](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [parent](parent.md): The receiver’s parent node.

# descendantNodeAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the receiver’s descendant at the specified index path.

## Declaration

```objectivec
- (NSTreeNode *) descendantNodeAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: An index path specifying a descendant of the receiver.

<a id="return-value"></a>

## Return Value

A tree node, or `nil` if the node does not exist.

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [leaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [childNodes](children.md): An array containing receiver’s child nodes.
- [mutableChildNodes](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [parentNode](parent.md): The receiver’s parent node.
