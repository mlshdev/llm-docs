> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence](https://developer.apple.com/documentation/swift/sequence)

# Sequence

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides sequential, iterated access to its elements.

## Declaration

```swift
protocol Sequence<Element>
```

<a id="overview"></a>

## Overview

A sequence is a list of values that you can step through one at a time. The most common way to iterate over the elements of a sequence is to use a `for`-`in` loop:

```swift
let oneTwoThree = 1...3
for number in oneTwoThree {
    print(number)
}
// Prints "1"
// Prints "2"
// Prints "3"
```

While seemingly simple, this capability gives you access to a large number of operations that you can perform on any sequence. As an example, to check whether a sequence includes a particular value, you can test each value sequentially until you’ve found a match or reached the end of the sequence. This example checks to see whether a particular insect is in an array.

```swift
let bugs = ["Aphid", "Bumblebee", "Cicada", "Damselfly", "Earwig"]
var hasMosquito = false
for bug in bugs {
    if bug == "Mosquito" {
        hasMosquito = true
        break
    }
}
print("'bugs' has a mosquito: \(hasMosquito)")
// Prints "'bugs' has a mosquito: false"
```

The `Sequence` protocol provides default implementations for many common operations that depend on sequential access to a sequence’s values. For clearer, more concise code, the example above could use the array’s `contains(_:)` method, which every sequence inherits from `Sequence`, instead of iterating manually:

```swift
if bugs.contains("Mosquito") {
    print("Break out the bug spray.")
} else {
    print("Whew, no mosquitos!")
}
// Prints "Whew, no mosquitos!"
```

<a id="Repeated-Access"></a>

## Repeated Access

The `Sequence` protocol makes no requirement on conforming types regarding whether they will be destructively consumed by iteration. As a consequence, don’t assume that multiple `for`-`in` loops on a sequence will either resume iteration or restart from the beginning:

```swift
for element in sequence {
    if ... some condition { break }
}

for element in sequence {
    // No defined behavior
}
```

In this case, you cannot assume either that a sequence will be consumable and will resume iteration, or that a sequence is a collection and will restart iteration from the first element. A conforming sequence that is not a collection is allowed to produce an arbitrary sequence of elements in the second `for`-`in` loop.

To establish that a type you’ve created supports nondestructive iteration, add conformance to the `Collection` protocol.

<a id="Conforming-to-the-Sequence-Protocol"></a>

## Conforming to the Sequence Protocol

Making your own custom types conform to `Sequence` enables many useful operations, like `for`-`in` looping and the `contains` method, without much effort. To add `Sequence` conformance to your own custom type, add a `makeIterator()` method that returns an iterator.

Alternatively, if your type can act as its own iterator, implementing the requirements of the `IteratorProtocol` protocol and declaring conformance to both `Sequence` and `IteratorProtocol` are sufficient.

Here’s a definition of a `Countdown` sequence that serves as its own iterator. The `makeIterator()` method is provided as a default implementation.

```swift
struct Countdown: Sequence, IteratorProtocol {
    var count: Int

    mutating func next() -> Int? {
        if count == 0 {
            return nil
        } else {
            defer { count -= 1 }
            return count
        }
    }
}

let threeToGo = Countdown(count: 3)
for i in threeToGo {
    print(i)
}
// Prints "3"
// Prints "2"
// Prints "1"
```

<a id="Expected-Performance"></a>

## Expected Performance

A sequence should provide its iterator in O(1). The `Sequence` protocol makes no other requirements about element access, so routines that traverse a sequence should be considered O(*n*) unless documented otherwise.

## Topics

### Creating an Iterator

- [makeIterator()](sequence/makeiterator%28%29.md): Returns an iterator over the elements of this sequence.
- [Iterator](sequence/iterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
- [Element](sequence/element.md): A type representing the sequence’s elements.

### Finding Elements

- [contains(\_:)](sequence/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [contains(where:)](sequence/contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](sequence/allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [first(where:)](sequence/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [min()](sequence/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(by:)](sequence/min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
- [max()](sequence/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(by:)](sequence/max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.

### Selecting Elements

- [prefix(\_:)](sequence/prefix%28__%29.md): Returns a sequence, up to the specified maximum length, containing the initial elements of the sequence.
- [prefix(while:)](sequence/prefix%28while_%29.md): Returns a sequence containing the initial, consecutive elements that satisfy the given predicate.
- [suffix(\_:)](sequence/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the sequence.

### Excluding Elements

- [dropFirst(\_:)](sequence/dropfirst%28__%29.md): Returns a sequence containing all but the given number of initial elements.
- [dropLast(\_:)](sequence/droplast%28__%29.md): Returns a sequence containing all but the given number of final elements.
- [drop(while:)](sequence/drop%28while_%29.md): Returns a sequence by skipping the initial, consecutive elements that satisfy the given predicate.

### Transforming a Sequence

- [map(\_:)](sequence/map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [compactMap(\_:)](sequence/compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](sequence/flatmap%28__%29-jo2y.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [reduce(\_:\_:)](sequence/reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](sequence/reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [lazy](sequence/lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.
- [flatMap(\_:)](sequence/flatmap%28__%29-383uq.md): Deprecated.

### Iterating Over a Sequence’s Elements

- [forEach(\_:)](sequence/foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](sequence/enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [underestimatedCount](sequence/underestimatedcount.md): A value less than or equal to the number of elements in the sequence, calculated nondestructively.

### Sorting Elements

- [sorted()](sequence/sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sequence/sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reversed()](sequence/reversed%28%29.md): Returns an array containing the elements of this sequence in reverse order.

### Reordering a Sequence’s Elements

- [shuffled()](sequence/shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](sequence/shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.

### Formatting a Sequence

- [formatted()](sequence/formatted%28%29.md): Conforms when `Element` is `String`.
- [formatted(\_:)](sequence/formatted%28__%29.md)
- [ListFormatStyle](https://developer.apple.com/documentation/foundation/listformatstyle): A type that formats lists of items with a separator and conjunction appropriate for a given locale.

### Splitting and Joining Elements

- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](sequence/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the sequence, in order, that don’t contain elements satisfying the given predicate. Elements that are used to split the sequence are not returned as part of any subsequence.
- [split(separator:maxSplits:omittingEmptySubsequences:)](sequence/split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the sequence, in order, around elements equal to the given element.
- [joined()](sequence/joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](sequence/joined%28separator_%29-5zjyj.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [joined(separator:)](sequence/joined%28separator_%29-7w47r.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.

### Comparing Sequences

- [elementsEqual(\_:)](sequence/elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](sequence/elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:)](sequence/starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](sequence/starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](sequence/lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](sequence/lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.

### Accessing Underlying Storage

- [withContiguousStorageIfAvailable(\_:)](sequence/withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.

### Publishing a Sequence

- [publisher](sequence/publisher.md)

### Applying AppKit Graphic Operations

Use a sequence of rectangles and other types to perform operations on an AppKit graphic context.

- [fill(using:)](sequence/fill%28using_%29-l1te.md): Conforms when `Element` is `CGRect`. Fills this list of rects in the current NSGraphicsContext in the context’s fill color. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.
- [fill(using:)](sequence/fill%28using_%29-45en6.md): Conforms when `Element` is `(CGRect, NSColor)`. Fills this list of rects in the current NSGraphicsContext with that rect’s associated color The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.
- [clip()](sequence/clip%28%29.md): Conforms when `Element` is `CGRect`. Modifies the current graphics context clipping path by intersecting it with the graphical union of this list of rects This permanently modifies the graphics state, so the current state should be saved beforehand and restored afterwards.

### Instance Methods

- [compare(\_:\_:)](sequence/compare%28____%29.md): If `lhs` is ordered before `rhs` in the ordering described by the given sequence of `SortComparator`s
- [count(where:)](sequence/count%28where_%29.md): Returns the number of elements in the sequence that satisfy the given predicate.
- [donatedWithin(\_:)](sequence/donatedwithin%28__%29.md): Filters donations to only those that occurred within the specified time range.
- [fill(using:)](sequence/fill%28using_%29-6sdhf.md): Conforms when `Element` is `(CGRect, gray: CGFloat)`. Fills this list of rects in the current NSGraphicsContext with that rect’s associated gray component value in the DeviceGray color space. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFillListWithGrays()`.
- [filter(\_:)](sequence/filter%28__%29-3gbw.md): Returns an array containing, in order, the elements of the sequence that satisfy the given predicate.
- [filter(\_:)](sequence/filter%28__%29-8li9y.md)
- [filter(matchingCategory:)](sequence/filter%28matchingcategory_%29.md): Conforms when `Element` inherits `CMTag`. Filters a sequence of tags based on matching the specified category. Returns the tags that match the specified category.
- [first(matchingCategory:)](sequence/first%28matchingcategory_%29.md): Conforms when `Element` inherits `CMTag`. Finds and returns the first tag matching the specified category.
- [firstValue(matchingCategory:)](sequence/firstvalue%28matchingcategory_%29.md): Conforms when `Element` inherits `CMTag`. Finds the first tag matching the specified category and returns the value of the matching tag.
- [largestSubset(groupedBy:)](sequence/largestsubset%28groupedby_%29.md): Returns the largest group of donations when grouped by the specified key path.
- [makeBorrowingIterator()](sequence/makeborrowingiterator%28%29.md): Conforms when `Self` conforms to `Iterable`.
- [mapAnnotations(\_:)](sequence/mapannotations%28__%29-48olp.md): Returns an array containing the results of mapping the given async closure over the sequence’s annotations.
- [mapAnnotations(\_:)](sequence/mapannotations%28__%29-9q4pb.md): Returns an array containing the results of mapping the given closure over the sequence’s annotations.
- [mapFeatures(\_:)](sequence/mapfeatures%28__%29-83n0d.md): Returns an array containing the results of mapping the given async closure over the sequence’s features.
- [mapFeatures(\_:)](sequence/mapfeatures%28__%29-8zq1h.md): Returns an array containing the results of mapping the given closure over the sequence’s features.
- [randomSplit(by:seed:)](sequence/randomsplit%28by_seed_%29-3a1xo.md): Generates two AnnotatedFeatures by randomly splitting the elements of the sequence, at the same proportion within each unique Annotation.
- [randomSplit(by:seed:)](sequence/randomsplit%28by_seed_%29-9637d.md): Generates two generic arrays by randomly splitting the elements of the sequence.
- [randomSplit(by:using:)](sequence/randomsplit%28by_using_%29-500fy.md): Generates two generic arrays by randomly splitting the elements of the sequence.
- [randomSplit(by:using:)](sequence/randomsplit%28by_using_%29-9i5e5.md): Generates two AnnotatedFeatures by randomly splitting the elements of the sequence, at the same proportion within each unique Annotation.
- [smallestSubset(groupedBy:)](sequence/smallestsubset%28groupedby_%29.md): Returns the smallest group of donations when grouped by the specified key path.
- [sorted(using:)](sequence/sorted%28using_%29-69w5u.md): Returns the elements of the sequence, sorted using the given array of `SortComparator`s to compare elements.
- [sorted(using:)](sequence/sorted%28using_%29-95lls.md): Returns the elements of the sequence, sorted using the given comparator to compare elements.

### Type Methods

- [reparentEquipment(\_:childrenOf:order:context:)](sequence/reparentequipment%28__childrenof_order_context_%29.md): Conforms when `Self` is `[MoveEquipmentAction]`.
- [reparentEquipment(matching:childrenOf:order:context:)](sequence/reparentequipment%28matching_childrenof_order_context_%29.md): Conforms when `Self` is `[MoveEquipmentAction]`.

## Relationships

### Inherited By

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [LazyCollectionProtocol](lazycollectionprotocol.md)
- [LazySequenceProtocol](lazysequenceprotocol.md)
- [MutableCollection](mutablecollection.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [AnyBidirectionalCollection](anybidirectionalcollection.md)
- [AnyCollection](anycollection.md)
- [AnyIterator](anyiterator.md)
- [AnyRandomAccessCollection](anyrandomaccesscollection.md)
- [AnyRegexOutput](anyregexoutput.md)
- [AnySequence](anysequence.md)
- [Array](array.md)
- [ArraySlice](arrayslice.md)
- [ClosedRange](closedrange.md)
- [CollectionDifference](collectiondifference.md)
- [CollectionOfOne](collectionofone.md)
- [ContiguousArray](contiguousarray.md)
- [DefaultIndices](defaultindices.md)
- [Dictionary](dictionary.md)
- [Dictionary.Keys](dictionary/keys-swift.struct.md)
- [Dictionary.Values](dictionary/values-swift.struct.md)
- [DiscontiguousSlice](discontiguousslice.md)
- [DropFirstSequence](dropfirstsequence.md)
- [DropWhileSequence](dropwhilesequence.md)
- [EmptyCollection](emptycollection.md)
- [EmptyCollection.Iterator](emptycollection/iterator.md)
- [EnumeratedSequence](enumeratedsequence.md)
- [EnumeratedSequence.Iterator](enumeratedsequence/iterator.md)
- [FlattenSequence](flattensequence.md)
- [FlattenSequence.Iterator](flattensequence/iterator.md)
- [IndexingIterator](indexingiterator.md)
- [Int.Words](int/words-swift.struct.md)
- [Int16.Words](int16/words-swift.struct.md)
- [Int32.Words](int32/words-swift.struct.md)
- [Int64.Words](int64/words-swift.struct.md)
- [Int8.Words](int8/words-swift.struct.md)
- [IteratorSequence](iteratorsequence.md)
- [JoinedSequence](joinedsequence.md)
- [KeyValuePairs](keyvaluepairs.md)
- [LazyDropWhileSequence](lazydropwhilesequence.md)
- [LazyFilterSequence](lazyfiltersequence.md)
- [LazyFilterSequence.Iterator](lazyfiltersequence/iterator.md)
- [LazyMapSequence](lazymapsequence.md)
- [LazyMapSequence.Iterator](lazymapsequence/iterator.md)
- [LazyPrefixWhileSequence](lazyprefixwhilesequence.md)
- [LazyPrefixWhileSequence.Iterator](lazyprefixwhilesequence/iterator.md)
- [LazySequence](lazysequence.md)
- [PartialRangeFrom](partialrangefrom.md)
- [PrefixSequence](prefixsequence.md)
- [Range](range.md)
- [RangeSet.Ranges](rangeset/ranges-swift.struct.md)
- [Repeated](repeated.md)
- [ReversedCollection](reversedcollection.md)
- [ReversedCollection.Iterator](reversedcollection/iterator.md)
- [Set](set.md)
- [Slice](slice.md)
- [StrideThrough](stridethrough.md)
- [StrideTo](strideto.md)
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
- [UnfoldSequence](unfoldsequence.md)
- [Unicode.Scalar.UTF16View](unicode/scalar/utf16view.md)
- [Unicode.Scalar.UTF8View](unicode/scalar/utf8view.md)
- [UnsafeBufferPointer](unsafebufferpointer.md)
- [UnsafeMutableBufferPointer](unsafemutablebufferpointer.md)
- [UnsafeMutableRawBufferPointer](unsafemutablerawbufferpointer.md)
- [UnsafeRawBufferPointer](unsaferawbufferpointer.md)
- [UnsafeRawBufferPointer.Iterator](unsaferawbufferpointer/iterator.md)
- [Zip2Sequence](zip2sequence.md)

## See Also

### First Steps

- [Collection](collection.md): A sequence whose elements can be traversed multiple times, nondestructively, and accessed by an indexed subscript.
