> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/rangeview-swift.struct](https://developer.apple.com/documentation/foundation/indexset/rangeview-swift.struct)

# IndexSet.RangeView

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A view of the contents of an IndexSet, organized by range.

## Declaration

```swift
struct RangeView
```

<a id="overview"></a>

## Overview

For example, if an IndexSet is composed of: `[1..<5]` and `[7..<10]` and `[13]` then calling `next()` on this view’s iterator will produce 3 ranges before returning nil.

## Topics

### Counting Indexes

- [count](count.md): Returns the number of integers in `self`.
- [endIndex](rangeview-swift.struct/endindex.md): The ending index in the range.
- [first](first.md): The first integer in `self`, or nil if `self` is empty.
- [isEmpty](isempty.md): Returns `true` if self contains no values.
- [last](last.md): The last integer in `self`, or nil if `self` is empty.
- [startIndex](rangeview-swift.struct/startindex.md): The beginning index in the range.

### Accessing Indexes

- [subscript(\_:)](rangeview-swift.struct/subscript%28__%29-5r66q.md): Accesses the items at the given range of indexes.
- [subscript(\_:)](rangeview-swift.struct/subscript%28__%29-8gh0x.md): Accesses the item at the given index.

### Finding Indexes

- [startIndex](rangeview-swift.struct/startindex.md): The beginning index in the range.
- [endIndex](rangeview-swift.struct/endindex.md): The ending index in the range.
- [index(after:)](rangeview-swift.struct/index%28after_%29.md): Returns the index in the range after the specified one.
- [index(before:)](rangeview-swift.struct/index%28before_%29.md): Returns the index in the range before the specified one.

### Iterating over Indexes

- [makeIterator()](rangeview-swift.struct/makeiterator%28%29.md): Returns an iterator over the indexes of this range view.

### Testing for Inclusion in the Range

- [contains(\_:)](contains%28__%29.md): Returns `true` if `self` contains `integer`.
- [index(after:)](rangeview-swift.struct/index%28after_%29.md): Returns the index in the range after the specified one.
- [index(before:)](rangeview-swift.struct/index%28before_%29.md): Returns the index in the range before the specified one.
- [makeIterator()](rangeview-swift.struct/makeiterator%28%29.md): Returns an iterator over the indexes of this range view.

### Type Aliases

- [IndexSet.RangeView.Index](rangeview-swift.struct/index.md): An alias for the type of an index.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Getting a Range-Based View

- [rangeView(of:)](rangeview%28of_%29-5xqe8.md): Returns a `Range`-based view of `self`.
- [rangeView](rangeview-swift.property.md): Returns a `Range`-based view of the entire contents of `self`.
