> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode](https://developer.apple.com/documentation/appkit/nstreenode)

# NSTreeNode (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A node in a tree of nodes.

## Declaration

```swift
class NSTreeNode
```

<a id="overview"></a>

## Overview

[NSTreeNode](nstreenode.md) simplifies the creation and management of trees of objects. Each tree node represents a model object. A tree node with `nil` as its parent node is considered the root of the tree.

## Topics

### Creating tree nodes

- [init(representedObject:)](nstreenode/init%28representedobject_%29.md): Initializes a newly allocated tree node that represents the specified object.

### Getting information about a node

- [representedObject](nstreenode/representedobject.md): The object the tree node represents.
- [indexPath](nstreenode/indexpath.md): The position of the receiver relative to its root parent.
- [isLeaf](nstreenode/isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [children](nstreenode/children.md): An array containing receiver’s child nodes.
- [mutableChildren](nstreenode/mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendant(at:)](nstreenode/descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parent](nstreenode/parent.md): The receiver’s parent node.

### Sorting the subtree

- [sort(with:recursively:)](nstreenode/sort%28with_recursively_%29.md): Sorts the receiver’s subtree using the values of the represented objects with the specified sort descriptors.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Tree-Based Data

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.
- [NSTreeController](nstreecontroller.md): A bindings-compatible controller that manages a tree of objects.

# NSTreeNode (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A node in a tree of nodes.

## Declaration

```objectivec
@interface NSTreeNode : NSObject
```

<a id="overview"></a>

## Overview

[NSTreeNode](nstreenode.md) simplifies the creation and management of trees of objects. Each tree node represents a model object. A tree node with `nil` as its parent node is considered the root of the tree.

## Topics

### Creating tree nodes

- [treeNodeWithRepresentedObject:](nstreenode/treenodewithrepresentedobject_.md): Creates and returns a tree node that represents the specified object.
- [initWithRepresentedObject:](nstreenode/init%28representedobject_%29.md): Initializes a newly allocated tree node that represents the specified object.

### Getting information about a node

- [representedObject](nstreenode/representedobject.md): The object the tree node represents.
- [indexPath](nstreenode/indexpath.md): The position of the receiver relative to its root parent.
- [leaf](nstreenode/isleaf.md): A Boolean that indicates whether the receiver is a leaf node.
- [childNodes](nstreenode/children.md): An array containing receiver’s child nodes.
- [mutableChildNodes](nstreenode/mutablechildren.md): A mutable array that provides read-write access to the receiver’s child nodes.
- [descendantNodeAtIndexPath:](nstreenode/descendant%28at_%29.md): Returns the receiver’s descendant at the specified index path.
- [parentNode](nstreenode/parent.md): The receiver’s parent node.

### Sorting the subtree

- [sortWithSortDescriptors:recursively:](nstreenode/sort%28with_recursively_%29.md): Sorts the receiver’s subtree using the values of the represented objects with the specified sort descriptors.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Tree-Based Data

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.
- [NSTreeController](nstreecontroller.md): A bindings-compatible controller that manages a tree of objects.
