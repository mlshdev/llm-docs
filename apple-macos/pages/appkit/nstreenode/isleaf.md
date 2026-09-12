> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/isleaf](https://developer.apple.com/documentation/appkit/nstreenode/isleaf)

# isLeaf (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the receiver is a leaf node.

## Declaration

```swift
var isLeaf: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a leaf node (has no child nodes), otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [children](children.md): An array containing receiver’s child nodes.
- [mutableChildren](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendant(at:)](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parent](parent.md): The receiver’s parent node.

# leaf (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the receiver is a leaf node.

## Declaration

```objectivec
@property (readonly, getter=isLeaf) BOOL leaf;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a leaf node (has no child nodes), otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting information about a node

- [representedObject](representedobject.md): The object the tree node represents.
- [indexPath](indexpath.md): The position of the receiver relative to its root parent.
- [childNodes](children.md): An array containing receiver’s child nodes.
- [mutableChildNodes](mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendantNodeAtIndexPath:](descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parentNode](parent.md): The receiver’s parent node.
