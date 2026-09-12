> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)

# BidirectionalCollection

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection that supports backward as well as forward traversal.

## Declaration

```swift
protocol BidirectionalCollection<Element> : Collection where Self.Indices : BidirectionalCollection, Self.SubSequence : BidirectionalCollection
```

<a id="overview"></a>

## Overview

Bidirectional collections offer traversal backward from any valid index, not including a collection’s `startIndex`. Bidirectional collections can therefore offer additional operations, such as a `last` property that provides efficient access to the last element and a `reversed()` method that presents the elements in reverse order. In addition, bidirectional collections have more efficient implementations of some sequence and collection methods, such as `suffix(_:)`.

<a id="Conforming-to-the-BidirectionalCollection-Protocol"></a>

## Conforming to the BidirectionalCollection Protocol

To add `BidirectionalProtocol` conformance to your custom types, implement the `index(before:)` method in addition to the requirements of the `Collection` protocol.

Indices that are moved forward and backward in a bidirectional collection move by the same amount in each direction. That is, for any valid index `i` into a bidirectional collection `c`:

- If `i >= c.startIndex && i < c.endIndex`, then `c.index(before: c.index(after: i)) == i`.
- If `i > c.startIndex && i <= c.endIndex`, then `c.index(after: c.index(before: i)) == i`.

Valid indices are exactly those indices that are reachable from the collection’s `startIndex` by repeated applications of `index(after:)`, up to, and including, the `endIndex`.

## Topics

### Associated Types

- [Element](bidirectionalcollection/element.md): A type representing the sequence’s elements.
- [Index](bidirectionalcollection/index.md): A type that represents a position in the collection.
- [Indices](bidirectionalcollection/indices-swift.associatedtype.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [SubSequence](bidirectionalcollection/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Instance Properties

- [endIndex](bidirectionalcollection/endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](bidirectionalcollection/indices-4qv42.md): The indices that are valid for subscripting the collection, in ascending order.
- [last](bidirectionalcollection/last.md): The last element of the collection.
- [startIndex](bidirectionalcollection/startindex.md): The position of the first element in a nonempty collection.

### Instance Methods

- [contains(\_:)](bidirectionalcollection/contains%28__%29-1l08t.md): Conforms when `SubSequence` is `Substring`. Returns a Boolean value indicating whether the collection contains the given regex.
- [contains(\_:)](bidirectionalcollection/contains%28__%29-60wyq.md): Conforms when `SubSequence` is `Substring`. Returns a Boolean value indicating whether this collection contains a match for the regex, where the regex is created by the given closure.
- [difference(from:)](bidirectionalcollection/difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](bidirectionalcollection/difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.
- [distance(from:to:)](bidirectionalcollection/distance%28from_to_%29.md): Returns the distance between two indices.
- [dropLast(\_:)](bidirectionalcollection/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [firstMatch(of:)](bidirectionalcollection/firstmatch%28of_%29-6v8ci.md): Conforms when `SubSequence` is `Substring`. Returns the first match for the regex within this collection, where the regex is created by the given closure.
- [firstMatch(of:)](bidirectionalcollection/firstmatch%28of_%29-7m8f4.md): Conforms when `SubSequence` is `Substring`. Returns the first match of the specified regex within the collection.
- [firstRange(of:)](bidirectionalcollection/firstrange%28of_%29-1di7b.md): Conforms when `SubSequence` is `Substring`. Finds and returns the range of the first occurrence of a given regex within the collection.
- [firstRange(of:)](bidirectionalcollection/firstrange%28of_%29-3jqrg.md): Conforms when `SubSequence` is `Substring`. Returns the range of the first match for the regex within this collection, where the regex is created by the given closure.
- [firstRange(of:)](bidirectionalcollection/firstrange%28of_%29-5sum7.md): Conforms when `Element` conforms to `Comparable`. Finds and returns the range of the first occurrence of a given collection within this collection.
- [formIndex(after:)](bidirectionalcollection/formindex%28after_%29.md): Replaces the given index with its successor.
- [formIndex(before:)](bidirectionalcollection/formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](bidirectionalcollection/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](bidirectionalcollection/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(after:)](bidirectionalcollection/index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](bidirectionalcollection/index%28before_%29.md): Returns the position immediately before the given index.
- [joined(separator:)](bidirectionalcollection/joined%28separator_%29.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [last(where:)](bidirectionalcollection/last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](bidirectionalcollection/lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](bidirectionalcollection/lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [matches(of:)](bidirectionalcollection/matches%28of_%29-5eey9.md): Conforms when `SubSequence` is `Substring`. Returns a collection containing all non-overlapping matches of the regex, created by the given closure.
- [matches(of:)](bidirectionalcollection/matches%28of_%29-5hhx.md): Conforms when `SubSequence` is `Substring`. Returns a collection containing all matches of the specified regex.
- [popLast()](bidirectionalcollection/poplast%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [prefixMatch(of:)](bidirectionalcollection/prefixmatch%28of_%29-2fwv6.md): Conforms when `SubSequence` is `Substring`. Matches part of the regex, starting at the beginning, where the regex is created by the given closure.
- [prefixMatch(of:)](bidirectionalcollection/prefixmatch%28of_%29-7dq6v.md): Conforms when `SubSequence` is `Substring`. Returns a match if this string is matched by the given regex at its start.
- [ranges(of:)](bidirectionalcollection/ranges%28of_%29-40wx3.md): Conforms when `SubSequence` is `Substring`. Finds and returns the ranges of the all occurrences of a given sequence within the collection.
- [ranges(of:)](bidirectionalcollection/ranges%28of_%29-9qfdo.md): Conforms when `SubSequence` is `Substring`. Returns the ranges of the all non-overlapping matches for the regex within this collection, where the regex is created by the given closure.
- [removeLast()](bidirectionalcollection/removelast%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](bidirectionalcollection/removelast%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the given number of elements from the end of the collection.
- [reversed()](bidirectionalcollection/reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [split(maxSplits:omittingEmptySubsequences:separator:)](bidirectionalcollection/split%28maxsplits_omittingemptysubsequences_separator_%29.md): Conforms when `SubSequence` is `Substring`. Returns the longest possible subsequences of the collection, in order, around subsequence that match the regex created by the given closure.
- [split(separator:maxSplits:omittingEmptySubsequences:)](bidirectionalcollection/split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `SubSequence` is `Substring`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given separator.
- [starts(with:)](bidirectionalcollection/starts%28with_%29-4972u.md): Conforms when `SubSequence` is `Substring`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in the specified regex.
- [starts(with:)](bidirectionalcollection/starts%28with_%29-97xlm.md): Conforms when `SubSequence` is `Substring`. Returns a Boolean value indicating whether the initial elements of this collection are a match for the regex created by the given closure.
- [suffix(\_:)](bidirectionalcollection/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [trimmingPrefix(\_:)](bidirectionalcollection/trimmingprefix%28__%29-1luge.md): Conforms when `SubSequence` is `Substring`. Returns a new collection of the same type by removing the initial elements that matches the given regex.
- [trimmingPrefix(\_:)](bidirectionalcollection/trimmingprefix%28__%29-781ik.md): Conforms when `SubSequence` is `Substring`. Returns a subsequence of this collection by removing the elements matching the regex from the start, where the regex is created by the given closure.
- [wholeMatch(of:)](bidirectionalcollection/wholematch%28of_%29-1wbp6.md): Conforms when `SubSequence` is `Substring`. Matches a regex in its entirety, where the regex is created by the given closure.
- [wholeMatch(of:)](bidirectionalcollection/wholematch%28of_%29-7741n.md): Conforms when `SubSequence` is `Substring`. Returns a match if this string is matched by the given regex in its entirety.

### Subscripts

- [subscript(\_:)](bidirectionalcollection/subscript%28__%29-5tj5.md): Accesses the element at the specified position.
- [subscript(\_:)](bidirectionalcollection/subscript%28__%29-7tzd8.md): Accesses a contiguous subrange of the collection’s elements.

## Relationships

### Inherits From

- [Collection](collection.md)
- [Sequence](sequence.md)

### Inherited By

- [RandomAccessCollection](randomaccesscollection.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [AnyBidirectionalCollection](anybidirectionalcollection.md)
- [AnyRandomAccessCollection](anyrandomaccesscollection.md)
- [AnyRegexOutput](anyregexoutput.md)
- [Array](array.md)
- [ArraySlice](arrayslice.md)
- [ClosedRange](closedrange.md)
- [CollectionOfOne](collectionofone.md)
- [ContiguousArray](contiguousarray.md)
- [DefaultIndices](defaultindices.md)
- [DiscontiguousSlice](discontiguousslice.md)
- [EmptyCollection](emptycollection.md)
- [EnumeratedSequence](enumeratedsequence.md)
- [FlattenSequence](flattensequence.md)
- [Int.Words](int/words-swift.struct.md)
- [Int16.Words](int16/words-swift.struct.md)
- [Int32.Words](int32/words-swift.struct.md)
- [Int64.Words](int64/words-swift.struct.md)
- [Int8.Words](int8/words-swift.struct.md)
- [KeyValuePairs](keyvaluepairs.md)
- [LazyDropWhileSequence](lazydropwhilesequence.md)
- [LazyFilterSequence](lazyfiltersequence.md)
- [LazyMapSequence](lazymapsequence.md)
- [LazyPrefixWhileSequence](lazyprefixwhilesequence.md)
- [LazySequence](lazysequence.md)
- [Range](range.md)
- [RangeSet.Ranges](rangeset/ranges-swift.struct.md)
- [Repeated](repeated.md)
- [ReversedCollection](reversedcollection.md)
- [Slice](slice.md)
- [String](string.md)
- [String.UTF16View](string/utf16view.md)
- [String.UTF8View](string/utf8view.md)
- [String.UnicodeScalarView](string/unicodescalarview.md)
- [Substring](substring.md)
- [Substring.UTF16View](substring/utf16view.md)
- [Substring.UTF8View](substring/utf8view.md)
- [Substring.UnicodeScalarView](substring/unicodescalarview.md)
- [UInt.Words](uint/words-swift.struct.md)
- [UInt128.Words](uint128/words-swift.struct.md)
- [UInt16.Words](uint16/words-swift.struct.md)
- [UInt32.Words](uint32/words-swift.struct.md)
- [UInt64.Words](uint64/words-swift.struct.md)
- [UInt8.Words](uint8/words-swift.struct.md)
- [Unicode.Scalar.UTF16View](unicode/scalar/utf16view.md)
- [Unicode.Scalar.UTF8View](unicode/scalar/utf8view.md)
- [UnsafeBufferPointer](unsafebufferpointer.md)
- [UnsafeMutableBufferPointer](unsafemutablebufferpointer.md)
- [UnsafeMutableRawBufferPointer](unsafemutablerawbufferpointer.md)
- [UnsafeRawBufferPointer](unsaferawbufferpointer.md)

## See Also

### Collection Traversal

- [RandomAccessCollection](randomaccesscollection.md): A collection that supports efficient random-access index traversal.
