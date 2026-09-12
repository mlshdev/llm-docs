> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/indexpath](https://developer.apple.com/documentation/appkit/nstreenode/indexpath)

# indexPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The position of the receiver relative to its root parent.

## Declaration

```swift
var indexPath: IndexPath { get }
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [isLeaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [children](children.md): An array containing receiver’s child nodes.
- [mutableChildren](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendant(at:)](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parent](parent.md): The receiver’s parent node.

# indexPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The position of the receiver relative to its root parent.

## Declaration

```objectivec
@property (strong, readonly) NSIndexPath * indexPath;
```

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [leaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [childNodes](children.md): An array containing receiver’s child nodes.
- [mutableChildNodes](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendantNodeAtIndexPath:](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parentNode](parent.md): The receiver’s parent node.
