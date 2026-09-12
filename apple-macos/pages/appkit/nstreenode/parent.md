> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/parent](https://developer.apple.com/documentation/appkit/nstreenode/parent)

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The receiver’s parent node.

## Declaration

```swift
weak var parent: NSTreeNode? { get }
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [isLeaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [children](children.md): An array containing receiver’s child nodes.
- [mutableChildren](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendant(at:)](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.

# parentNode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The receiver’s parent node.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTreeNode * parentNode;
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [leaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [childNodes](children.md): An array containing receiver’s child nodes.
- [mutableChildNodes](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendantNodeAtIndexPath:](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
