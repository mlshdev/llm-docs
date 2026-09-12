> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/children](https://developer.apple.com/documentation/appkit/nstreenode/children)

# children (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing receiver’s child nodes.

## Declaration

```swift
var children: [NSTreeNode]? { get }
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [isLeaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [mutableChildren](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendant(at:)](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parent](parent.md): The receiver’s parent node.

# childNodes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing receiver’s child nodes.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSTreeNode *> * childNodes;
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [leaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [mutableChildNodes](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendantNodeAtIndexPath:](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parentNode](parent.md): The receiver’s parent node.
