> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath](https://developer.apple.com/documentation/foundation/nsindexpath)

# NSIndexPath (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of indexes that together represent the path to a specific location in a tree of nested arrays.

## Declaration

```swift
class NSIndexPath
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [IndexPath](indexpath.md); use [NSIndexPath](nsindexpath.md) when you need reference semantics or other Foundation-specific behavior.

Each index in an index path represents the index into an array of children from one node in the tree to another, deeper, node. For example, the index path `1.4.3.2` specifies the path shown in [Figure 1](nsindexpath.md#1965825).

![Index path “1.4.3.2”](https://developer.apple.com/images/com.apple.foundation/media-1965825.gif)

> **Note**

>  The UIKit framework adds programming interfaces to the `NSIndexPath` class of the Foundation framework to facilitate the identification of rows and sections in [UITableView](../uikit/uitableview.md) objects and the identification of items and sections in [UICollectionView](../uikit/uicollectionview.md) objects. The API consists of class factory methods and properties for accessing the various indexed values. You use the factory methods to create an index path for the corresponding table view or collection view.

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexPath](indexpath.md) structure, which bridges to the [NSIndexPath](nsindexpath.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating and Initializing Index Paths

- [init(index:)](nsindexpath/init%28index_%29.md): Initializes an index path with a single node.
- [init(indexes:length:)](nsindexpath/init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.

### Using Special Node Names

[UIKit](../uikit.md) and [AppKit](https://developer.apple.com/documentation/appkit) supply specialized names for the first two index path nodes for use when working with table views and collection views.

- [init(forRow:inSection:)](nsindexpath/init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [init(forItem:inSection:)](nsindexpath/init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](nsindexpath/section.md): An index number identifying a section in a table view or collection view.
- [row](nsindexpath/row.md): An index number identifying a row in a section of a table view.
- [item](nsindexpath/item.md): An index number identifying an item in a section of a collection view.

### Counting Nodes

- [length](nsindexpath/length.md): The number of nodes in the index path.

### Adding and Removing Nodes

- [adding(\_:)](nsindexpath/adding%28__%29.md): Returns an index path containing the nodes in the receiving index path plus another given index.
- [removingLastIndex()](nsindexpath/removinglastindex%28%29.md): Returns an index path with the nodes in the receiving index path, excluding the last one.

### Comparing Index Paths

- [compare(\_:)](nsindexpath/compare%28__%29.md): Indicates the depth-first traversal order of the receiving index path and another index path.

### Working with Indexes

- [index(atPosition:)](nsindexpath/index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes(\_:range:)](nsindexpath/getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.
- [getIndexes(\_:)](nsindexpath/getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.

### Initializers

- [init(coder:)](nsindexpath/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSIndexPath (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of indexes that together represent the path to a specific location in a tree of nested arrays.

## Declaration

```objectivec
@interface NSIndexPath : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [IndexPath](indexpath.md); use [NSIndexPath](nsindexpath.md) when you need reference semantics or other Foundation-specific behavior.

Each index in an index path represents the index into an array of children from one node in the tree to another, deeper, node. For example, the index path `1.4.3.2` specifies the path shown in [Figure 1](nsindexpath.md#1965825).

![Index path “1.4.3.2”](https://developer.apple.com/images/com.apple.foundation/media-1965825.gif)

> **Note**

>  The UIKit framework adds programming interfaces to the `NSIndexPath` class of the Foundation framework to facilitate the identification of rows and sections in [UITableView](../uikit/uitableview.md) objects and the identification of items and sections in [UICollectionView](../uikit/uicollectionview.md) objects. The API consists of class factory methods and properties for accessing the various indexed values. You use the factory methods to create an index path for the corresponding table view or collection view.

> **Important**

>  The Swift overlay to the Foundation framework provides the [IndexPath](indexpath.md) structure, which bridges to the [NSIndexPath](nsindexpath.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating and Initializing Index Paths

- [indexPathWithIndex:](nsindexpath/indexpathwithindex_.md): Creates a one-node index path.
- [indexPathWithIndexes:length:](nsindexpath/indexpathwithindexes_length_.md): Creates an index path with one or more nodes.
- [initWithIndex:](nsindexpath/init%28index_%29.md): Initializes an index path with a single node.
- [initWithIndexes:length:](nsindexpath/init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.

### Using Special Node Names

[UIKit](../uikit.md) and [AppKit](https://developer.apple.com/documentation/appkit) supply specialized names for the first two index path nodes for use when working with table views and collection views.

- [indexPathForRow:inSection:](nsindexpath/init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [indexPathForItem:inSection:](nsindexpath/init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](nsindexpath/section.md): An index number identifying a section in a table view or collection view.
- [row](nsindexpath/row.md): An index number identifying a row in a section of a table view.
- [item](nsindexpath/item.md): An index number identifying an item in a section of a collection view.

### Counting Nodes

- [length](nsindexpath/length.md): The number of nodes in the index path.

### Adding and Removing Nodes

- [indexPathByAddingIndex:](nsindexpath/adding%28__%29.md): Returns an index path containing the nodes in the receiving index path plus another given index.
- [indexPathByRemovingLastIndex](nsindexpath/removinglastindex%28%29.md): Returns an index path with the nodes in the receiving index path, excluding the last one.

### Comparing Index Paths

- [compare:](nsindexpath/compare%28__%29.md): Indicates the depth-first traversal order of the receiving index path and another index path.

### Working with Indexes

- [indexAtPosition:](nsindexpath/index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes:range:](nsindexpath/getindexes%28__range_%29.md): Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.
- [getIndexes:](nsindexpath/getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Indexes

- [NSIndexSet](nsindexset.md): An immutable collection of unique integer values that represent indexes in another collection.
- [NSMutableIndexSet](nsmutableindexset.md): A mutable collection of unique integer values that represent indexes in another collection.
