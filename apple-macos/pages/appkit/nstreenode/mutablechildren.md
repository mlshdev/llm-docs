> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/mutablechildren](https://developer.apple.com/documentation/appkit/nstreenode/mutablechildren)

# mutableChildren (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A mutable array that provides read-write access to the receiver’s child nodes.

## Declaration

```swift
var mutableChildren: NSMutableArray { get }
```

<a id="Discussion"></a>

## Discussion

Nodes that are inserted into this array have their parent nodes set to the receiver. Nodes that are removed from this array automatically have their parent node set to `nil`. The array that is returned is observable using key-value observing.

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [isLeaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [children](children.md): An array containing receiver’s child nodes.
- [descendant(at:)](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parent](parent.md): The receiver’s parent node.

# mutableChildNodes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A mutable array that provides read-write access to the receiver’s child nodes.

## Declaration

```objectivec
@property (strong, readonly) NSMutableArray<NSTreeNode *> * mutableChildNodes;
```

<a id="Discussion"></a>

## Discussion

Nodes that are inserted into this array have their parent nodes set to the receiver. Nodes that are removed from this array automatically have their parent node set to `nil`. The array that is returned is observable using key-value observing.

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [leaf](isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [childNodes](children.md): An array containing receiver’s child nodes.
- [descendantNodeAtIndexPath:](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parentNode](parent.md): The receiver’s parent node.
