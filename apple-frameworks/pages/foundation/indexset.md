> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset](https://developer.apple.com/documentation/foundation/indexset)

# IndexSet

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of unique integer values that represent the indexes of elements in another collection.

## Declaration

```swift
struct IndexSet
```

<a id="overview"></a>

## Overview

The range of valid integer values is `0...Int.max-1`. Anything outside this range is an error.

## Topics

### Creating an Index Set

- [init()](indexset/init%28%29.md): Initializes an empty index set.
- [init(integer:)](indexset/init%28integer_%29.md): Initializes an index set with a single integer.
- [init(integersIn:)](indexset/init%28integersin_%29-40cz3.md): Initializes an index set with a range of integers.

### Counting Items in a Set

- [count(in:)](indexset/count%28in_%29-v622.md): Returns the count of integers in `self` that intersect `range`.

### Accessing Elements

- [subscript(\_:)](indexset/subscript%28__%29.md): Accesses one element in the index set.

### Combining Index Sets

- [formIntersection(\_:)](indexset/formintersection%28__%29.md): Intersects the `IndexSet` with `other`.
- [formSymmetricDifference(\_:)](indexset/formsymmetricdifference%28__%29.md): Exclusive or the `IndexSet` with `other`.
- [formUnion(\_:)](indexset/formunion%28__%29.md): Union the `IndexSet` with `other`.
- [intersection(\_:)](indexset/intersection%28__%29.md): Intersects the `IndexSet` with `other`.
- [symmetricDifference(\_:)](indexset/symmetricdifference%28__%29.md): Exclusive or the `IndexSet` with `other`.
- [union(\_:)](indexset/union%28__%29.md): Union the `IndexSet` with `other`.

### Inserting Elements

- [insert(\_:)](indexset/insert%28__%29.md): Insert an integer into the `IndexSet`.
- [insert(integersIn:)](indexset/insert%28integersin_%29-28eld.md): Insert a range of integers into the `IndexSet`.
- [update(with:)](indexset/update%28with_%29.md): Insert an integer into the `IndexSet`.

### Removing Elements

- [remove(\_:)](indexset/remove%28__%29.md): Remove an integer from the `IndexSet`.
- [remove(integersIn:)](indexset/remove%28integersin_%29-7dhfw.md): Remove a range of integers from the `IndexSet`.
- [remove(integersIn:)](indexset/remove%28integersin_%29-54370.md): Remove a range of integers from the `IndexSet`.
- [removeAll()](indexset/removeall%28%29.md): Remove all values from the `IndexSet`.

### Testing Set Membership

- [contains(\_:)](indexset/contains%28__%29.md): Returns `true` if `self` contains `integer`.
- [contains(integersIn:)](indexset/contains%28integersin_%29-9frtv.md): Returns `true` if `self` contains all of the integers in `indexSet`.
- [contains(integersIn:)](indexset/contains%28integersin_%29-sma8.md): Returns `true` if `self` contains all of the integers in `range`.
- [intersects(integersIn:)](indexset/intersects%28integersin_%29-3sdmv.md): Returns `true` if `self` intersects any of the integers in `range`.

### Manipulating Indexes

- [startIndex](indexset/startindex.md): The beginning index in the set.
- [endIndex](indexset/endindex.md): The ending index in the set.
- [index(after:)](indexset/index%28after_%29.md): Returns the index that follows the given index in the set.
- [index(before:)](indexset/index%28before_%29.md): Returns the index that precedes the given index in the set.
- [formIndex(after:)](indexset/formindex%28after_%29.md): Modifies the given index to refer to the item after the one it currently refers to.
- [formIndex(before:)](indexset/formindex%28before_%29.md): Modifies the given index to refer to the item before the one it currently refers to.
- [indexRange(in:)](indexset/indexrange%28in_%29-539lz.md): Return a `Range<IndexSet.Index>` which can be used to subscript the index set.

### Finding Elements

- [integerLessThanOrEqualTo(\_:)](indexset/integerlessthanorequalto%28__%29.md): Returns an integer contained in `self` which is less than or equal to `integer`, or `nil` if a result could not be found.
- [integerGreaterThan(\_:)](indexset/integergreaterthan%28__%29.md): Returns an integer contained in `self` which is greater than `integer`, or `nil` if a result could not be found.
- [integerGreaterThanOrEqualTo(\_:)](indexset/integergreaterthanorequalto%28__%29.md): Returns an integer contained in `self` which is greater than or equal to `integer`, or `nil` if a result could not be found.
- [integerLessThan(\_:)](indexset/integerlessthan%28__%29.md): Returns an integer contained in `self` which is less than `integer`, or `nil` if a result could not be found.

### Selecting Elements

- [filteredIndexSet(in:includeInteger:)](indexset/filteredindexset%28in_includeinteger_%29-6cdvc.md): Returns an IndexSet filtered according to the result of `includeInteger`.
- [filteredIndexSet(in:includeInteger:)](indexset/filteredindexset%28in_includeinteger_%29-9dn86.md): Returns an IndexSet filtered according to the result of `includeInteger`.
- [filteredIndexSet(includeInteger:)](indexset/filteredindexset%28includeinteger_%29.md): Returns an IndexSet filtered according to the result of `includeInteger`.

### Iterating Over Elements

- [makeIterator()](indexset/makeiterator%28%29.md): Returns an iterator over the elements of this sequence.

### Shifting Index Groups

- [shift(startingAt:by:)](indexset/shift%28startingat_by_%29.md): For a positive delta, shifts the indexes in \[index, INT_MAX\] to the right, thereby inserting an “empty space” \[index, delta\], for a negative delta, shifts the indexes in \[index, INT_MAX\] to the left, thereby deleting the indexes in the range \[index - delta, delta\].

### Getting a Range-Based View

- [rangeView(of:)](indexset/rangeview%28of_%29-5xqe8.md): Returns a `Range`-based view of `self`.
- [rangeView](indexset/rangeview-swift.property.md): Returns a `Range`-based view of the entire contents of `self`.
- [IndexSet.RangeView](indexset/rangeview-swift.struct.md): A view of the contents of an IndexSet, organized by range.

### Using Reference Types

- [NSIndexSet](nsindexset.md): An immutable collection of unique integer values that represent indexes in another collection.
- [NSMutableIndexSet](nsmutableindexset.md): A mutable collection of unique integer values that represent indexes in another collection.

### Structures

- [IndexSet.Index](indexset/index.md): The mechanism for accessing the integers stored in an IndexSet.

### Initializers

- [init(integersIn:)](indexset/init%28integersin_%29-2zs95.md): Initialize an `IndexSet` with a range of integers.
- [init(integersIn:)](indexset/init%28integersin_%29-54nqd.md)

### Instance Properties

- [count](indexset/count.md): Returns the number of integers in `self`.
- [first](indexset/first.md): The first integer in `self`, or nil if `self` is empty.
- [isEmpty](indexset/isempty.md): Returns `true` if self contains no values.
- [last](indexset/last.md): The last integer in `self`, or nil if `self` is empty.

### Instance Methods

- [contains(integersIn:)](indexset/contains%28integersin_%29-4k1o8.md): Returns `true` if `self` contains all of the integers in `range`.
- [count(in:)](indexset/count%28in_%29-7irji.md): Returns the count of integers in `self` that intersect `range`.
- [indexRange(in:)](indexset/indexrange%28in_%29-6057o.md): Return a `Range<IndexSet.Index>` which can be used to subscript the index set.
- [insert(integersIn:)](indexset/insert%28integersin_%29-9wcrp.md): Insert a range of integers into the `IndexSet`.
- [intersects(integersIn:)](indexset/intersects%28integersin_%29-9cq7w.md): Returns `true` if `self` intersects any of the integers in `range`.
- [rangeView(of:)](indexset/rangeview%28of_%29-4jdy1.md): Returns a `Range`-based view of `self`.

### Type Aliases

- [IndexSet.Element](indexset/element.md): An alias for the type that an index set holds.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
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
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Indexes

- [IndexPath](indexpath.md): A list of indexes that together represent the path to a specific location in a tree of nested arrays.
