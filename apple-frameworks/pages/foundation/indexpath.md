> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexpath](https://developer.apple.com/documentation/foundation/indexpath)

# IndexPath

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of indexes that together represent the path to a specific location in a tree of nested arrays.

## Declaration

```swift
struct IndexPath
```

<a id="overview"></a>

## Overview

Each index in an index path represents the index into an array of children from one node in the tree to another, deeper, node.

## Topics

### Creating Index Paths

- [init()](indexpath/init%28%29.md): Creates an empty index path.
- [init(index:)](indexpath/init%28index_%29.md): Creates an index path with a single element.
- [init(arrayLiteral:)](indexpath/init%28arrayliteral_%29.md): Creates an index path from an array literal.
- [init(indexes:)](indexpath/init%28indexes_%29-7auqk.md): Creates an index path from an array of elements.
- [init(indexes:)](indexpath/init%28indexes_%29-55we8.md): Creates an index path from a sequence of integers.
- [IndexPath.Element](indexpath/element.md): A type that represents one node of an index path.

### Working with Special Node Names

[UIKit](../uikit.md) and [AppKit](https://developer.apple.com/documentation/appkit) supply specialized names for the first two index path nodes for use when working with table views and collection views.

- [endIndex](indexpath/endindex.md): One past the index of the last node in the index path.
- [item](indexpath/item-8cp0y.md): The value of the item element of the index path.
- [row](indexpath/row.md): The value of the row element of the index path.
- [section](indexpath/section-8h7wo.md): The value of the section element of the index path.
- [startIndex](indexpath/startindex.md): The index of the first node in the index path.

### Accessing Nodes

- [subscript(\_:)](indexpath/subscript%28__%29-6p6ul.md): Accesses one of the index path’s nodes.
- [subscript(\_:)](indexpath/subscript%28__%29-4pgu1.md): Accesses a contiguous subrange of the index path’s nodes.

### Adding Nodes

- [+(\_:\_:)](indexpath/+%28____%29.md): Combines the elements of two index paths into a single index path.
- [+=(\_:\_:)](indexpath/+=%28____%29.md): Appends the elements of another index path to this index path.

### Selecting Nodes

- [append(\_:)](indexpath/append%28__%29-6dxrh.md): Appends the nodes of another index path to this one.
- [append(\_:)](indexpath/append%28__%29-6vsd5.md): Appends an array of elements to this index path as additional nodes.
- [append(\_:)](indexpath/append%28__%29-7qv6f.md): Appends a single element to this index path as a new node.
- [appending(\_:)](indexpath/appending%28__%29-93eco.md): Returns a new index path containing the elements of this one plus the given element.
- [appending(\_:)](indexpath/appending%28__%29-53tcl.md): Returns a new index path containing the elements of this one plus those of another index path.
- [appending(\_:)](indexpath/appending%28__%29-174v0.md): Returns a new index path containing the elements of this one plus an array of additional elements.
- [compare(\_:)](indexpath/compare%28__%29.md): Compares this index path to another in depth-first traversal order.
- [dropLast()](indexpath/droplast%28%29.md): Return a new index path containing all but the last element.
- [index(after:)](indexpath/index%28after_%29.md): Returns the index that follows the given index.
- [index(before:)](indexpath/index%28before_%29.md): Returns the index that precedes the given index.
- [makeIterator()](indexpath/makeiterator%28%29.md): Returns an iterator over the nodes of the index path.

### Excluding Nodes

- [dropLast()](indexpath/droplast%28%29.md): Return a new index path containing all but the last element.

### Iterating over Nodes

- [makeIterator()](indexpath/makeiterator%28%29.md): Returns an iterator over the nodes of the index path.

### Comparing Index Paths

- [compare(\_:)](indexpath/compare%28__%29.md): Compares this index path to another in depth-first traversal order.

### Manipulating Indexes

- [IndexPath.Index](indexpath/index.md): A type that points to a particular node in an index path, similar to an array index.
- [startIndex](indexpath/startindex.md): The index of the first node in the index path.
- [endIndex](indexpath/endindex.md): One past the index of the last node in the index path.
- [index(after:)](indexpath/index%28after_%29.md): Returns the index that follows the given index.
- [index(before:)](indexpath/index%28before_%29.md): Returns the index that precedes the given index.
- [IndexPath.Indices](indexpath/indices.md): A type that represents a group of nodes in an index path.

### Using Reference Types

- [NSIndexPath](nsindexpath.md): A list of indexes that together represent the path to a specific location in a tree of nested arrays.

### Initializers

- [init(item:section:)](indexpath/init%28item_section_%29-359jo.md): Creates an index path that references an item in a particular section.
- [init(item:section:)](indexpath/init%28item_section_%29-rib.md): Initialize for use with `NSCollectionView`.
- [init(row:section:)](indexpath/init%28row_section_%29.md): Creates an index path that references a row in a particular section.

### Instance Properties

- [item](indexpath/item-6rh8l.md): The item of this index path, when used with `NSCollectionView`.
- [section](indexpath/section-2059m.md): The section of this index path, when used with `NSCollectionView`.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Indexes

- [IndexSet](indexset.md): A collection of unique integer values that represent the indexes of elements in another collection.
