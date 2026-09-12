> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection](https://developer.apple.com/documentation/swift/collection)

# Collection

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence whose elements can be traversed multiple times, nondestructively, and accessed by an indexed subscript.

## Declaration

```swift
protocol Collection<Element> : Sequence
```

<a id="overview"></a>

## Overview

Collections are used extensively throughout the standard library. When you use arrays, dictionaries, and other collections, you benefit from the operations that the `Collection` protocol declares and implements. In addition to the operations that collections inherit from the `Sequence` protocol, you gain access to methods that depend on accessing an element at a specific position in a collection.

For example, if you want to print only the first word in a string, you can search for the index of the first space, and then create a substring up to that position.

```swift
let text = "Buffalo buffalo buffalo buffalo."
if let firstSpace = text.firstIndex(of: " ") {
    print(text[..<firstSpace])
}
// Prints "Buffalo"
```

The `firstSpace` constant is an index into the `text` string—the position of the first space in the string. You can store indices in variables, and pass them to collection algorithms or use them later to access the corresponding element. In the example above, `firstSpace` is used to extract the prefix that contains elements up to that index.

<a id="Accessing-Individual-Elements"></a>

## Accessing Individual Elements

You can access an element of a collection through its subscript by using any valid index except the collection’s `endIndex` property. This property is a “past the end” index that does not correspond with any element of the collection.

Here’s an example of accessing the first character in a string through its subscript:

```swift
let firstChar = text[text.startIndex]
print(firstChar)
// Prints "B"
```

The `Collection` protocol declares and provides default implementations for many operations that depend on elements being accessible by their subscript. For example, you can also access the first character of `text` using the `first` property, which has the value of the first element of the collection, or `nil` if the collection is empty.

```swift
print(text.first)
// Prints "Optional("B")"
```

You can pass only valid indices to collection operations. You can find a complete set of a collection’s valid indices by starting with the collection’s `startIndex` property and finding every successor up to, and including, the `endIndex` property. All other values of the `Index` type, such as the `startIndex` property of a different collection, are invalid indices for this collection.

Saved indices may become invalid as a result of mutating operations. For more information about index invalidation in mutable collections, see the reference for the `MutableCollection` and `RangeReplaceableCollection` protocols, as well as for the specific type you’re using.

<a id="Accessing-Slices-of-a-Collection"></a>

## Accessing Slices of a Collection

You can access a slice of a collection through its ranged subscript or by calling methods like `prefix(while:)` or `suffix(_:)`. A slice of a collection can contain zero or more of the original collection’s elements and shares the original collection’s semantics.

The following example creates a `firstWord` constant by using the `prefix(while:)` method to get a slice of the `text` string.

```swift
let firstWord = text.prefix(while: { $0 != " " })
print(firstWord)
// Prints "Buffalo"
```

You can retrieve the same slice using the string’s ranged subscript, which takes a range expression.

```swift
if let firstSpace = text.firstIndex(of: " ") {
    print(text[..<firstSpace])
    // Prints "Buffalo"
}
```

The retrieved slice of `text` is equivalent in each of these cases.

<a id="Slices-Share-Indices"></a>

## Slices Share Indices

A collection and its slices share the same indices. An element of a collection is located under the same index in a slice as in the base collection, as long as neither the collection nor the slice has been mutated since the slice was created.

For example, suppose you have an array holding the number of absences from each class during a session.

```swift
var absences = [0, 2, 0, 4, 0, 3, 1, 0]
```

You’re tasked with finding the day with the most absences in the second half of the session. To find the index of the day in question, follow these steps:

1. Create a slice of the `absences` array that holds the second half of the days.
2. Use the `max(by:)` method to determine the index of the day with the most absences.
3. Print the result using the index found in step 2 on the original `absences` array.

Here’s an implementation of those steps:

```swift
let secondHalf = absences.suffix(absences.count / 2)
if let i = secondHalf.indices.max(by: { secondHalf[$0] < secondHalf[$1] }) {
    print("Highest second-half absences: \(absences[i])")
}
// Prints "Highest second-half absences: 3"
```

<a id="Slices-Inherit-Collection-Semantics"></a>

## Slices Inherit Collection Semantics

A slice inherits the value or reference semantics of its base collection. That is, when working with a slice of a mutable collection that has value semantics, such as an array, mutating the original collection triggers a copy of that collection and does not affect the contents of the slice.

For example, if you update the last element of the `absences` array from `0` to `2`, the `secondHalf` slice is unchanged.

```swift
absences[7] = 2
print(absences)
// Prints "[0, 2, 0, 4, 0, 3, 1, 2]"
print(secondHalf)
// Prints "[0, 3, 1, 0]"
```

<a id="Traversing-a-Collection"></a>

## Traversing a Collection

Although a sequence can be consumed as it is traversed, a collection is guaranteed to be *multipass*: Any element can be repeatedly accessed by saving its index. Moreover, a collection’s indices form a finite range of the positions of the collection’s elements. The fact that all collections are finite guarantees the safety of many sequence operations, such as using the `contains(_:)` method to test whether a collection includes an element.

Iterating over the elements of a collection by their positions yields the same elements in the same order as iterating over that collection using its iterator. This example demonstrates that the `characters` view of a string returns the same characters in the same order whether the view’s indices or the view itself is being iterated.

```swift
let word = "Swift"
for character in word {
    print(character)
}
// Prints "S"
// Prints "w"
// Prints "i"
// Prints "f"
// Prints "t"

for i in word.indices {
    print(word[i])
}
// Prints "S"
// Prints "w"
// Prints "i"
// Prints "f"
// Prints "t"
```

<a id="Conforming-to-the-Collection-Protocol"></a>

## Conforming to the Collection Protocol

If you create a custom sequence that can provide repeated access to its elements, make sure that its type conforms to the `Collection` protocol in order to give a more useful and more efficient interface for sequence and collection operations. To add `Collection` conformance to your type, you must declare at least the following requirements:

- The `startIndex` and `endIndex` properties
- A subscript that provides at least read-only access to your type’s elements
- The `index(after:)` method for advancing an index into your collection

<a id="Expected-Performance"></a>

## Expected Performance

Types that conform to `Collection` are expected to provide the `startIndex` and `endIndex` properties and subscript access to elements as O(1) operations. Types that are not able to guarantee this performance must document the departure, because many collection operations depend on O(1) subscripting performance for their own performance guarantees.

The performance of some collection operations depends on the type of index that the collection provides. For example, a random-access collection, which can measure the distance between two indices in O(1) time, can calculate its `count` property in O(1) time. Conversely, because a forward or bidirectional collection must traverse the entire collection to count the number of contained elements, accessing its `count` property is an O(*n*) operation.

## Topics

### Accessing a Collection’s Elements

- [subscript(\_:)](collection/subscript%28__%29-887tm.md): Accesses the element at the specified position.

### Selecting and Excluding Elements

- [popFirst()](collection/popfirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst()](collection/removefirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst(\_:)](collection/removefirst%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the specified number of elements from the beginning of the collection.

### Manipulating Indices

- [startIndex](collection/startindex.md): The position of the first element in a nonempty collection.
- [endIndex](collection/endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](collection/indices-9kkbf.md): The indices that are valid for subscripting the collection, in ascending order.
- [index(after:)](collection/index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(\_:offsetBy:)](collection/formindex%28__offsetby_%29-393pr.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](collection/formindex%28__offsetby_limitedby_%29-6jwra.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.

### Iterating Over a Collection’s Elements

- [makeIterator()](collection/makeiterator%28%29.md): Returns an iterator over the elements of the collection.

### Splitting and Joining Elements

- [split(separator:maxSplits:omittingEmptySubsequences:)](collection/split%28separator_maxsplits_omittingemptysubsequences_%29-6c22.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(separator:maxSplits:omittingEmptySubsequences:)](collection/split%28separator_maxsplits_omittingemptysubsequences_%29-9esbr.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given separator.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](collection/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.

### Related Collection Types

- [DiscontiguousSlice](discontiguousslice.md): Conforms when `Base` conforms to `Collection`. A collection wrapper that provides access to the elements of a collection, indexed by a set of indices.

### Associated Types

- [Element](collection/element.md): A type representing the sequence’s elements.
- [Index](collection/index.md): A type that represents a position in the collection.
- [Indices](collection/indices-swift.associatedtype.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Iterator](collection/iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [SubSequence](collection/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Instance Properties

- [count](collection/count.md): The number of elements in the collection.
- [first](collection/first.md): The first element of the collection.
- [isEmpty](collection/isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [contains(\_:)](collection/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the collection contains the given sequence.
- [distance(from:to:)](collection/distance%28from_to_%29.md): Returns the distance between two indices.
- [drop(while:)](collection/drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](collection/dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](collection/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [firstIndex(of:)](collection/firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](collection/firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [firstRange(of:)](collection/firstrange%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Finds and returns the range of the first occurrence of a given collection within this collection.
- [flatMap(\_:)](collection/flatmap%28__%29.md)
- [formIndex(\_:offsetBy:)](collection/formindex%28__offsetby_%29-9q9sx.md)
- [formIndex(\_:offsetBy:limitedBy:)](collection/formindex%28__offsetby_limitedby_%29-6ovn.md)
- [formIndex(after:)](collection/formindex%28after_%29.md): Replaces the given index with its successor.
- [index(\_:offsetBy:)](collection/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](collection/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [index(of:)](collection/index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [indices(of:)](collection/indices%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the indices of all the elements that are equal to the given element.
- [indices(where:)](collection/indices%28where_%29.md): Returns the indices of all the elements that match the given predicate.
- [map(\_:)](collection/map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [prefix(\_:)](collection/prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](collection/prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](collection/prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](collection/prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [randomElement()](collection/randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](collection/randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
- [ranges(of:)](collection/ranges%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Finds and returns the ranges of the all occurrences of a given sequence within the collection.
- [removingSubranges(\_:)](collection/removingsubranges%28__%29.md): Returns a collection of the elements in this collection that are not represented by the given range set.
- [saveJSONLines(to:includeReportMetadata:includeTranscripts:)](collection/savejsonlines%28to_includereportmetadata_includetranscripts_%29.md): Conforms when `Element` is `EvaluationResult`. Saves the array of evaluation results as a JSONL file
- [suffix(\_:)](collection/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](collection/suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.
- [trimPrefix(\_:)](collection/trimprefix%28__%29.md): Conforms when `Self` is `Self.SubSequence` and `Element` conforms to `Equatable`. Removes `prefix` from the start of the collection.
- [trimPrefix(while:)](collection/trimprefix%28while_%29.md): Conforms when `Self` is `Self.SubSequence`.
- [trimmingPrefix(\_:)](collection/trimmingprefix%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a new collection of the same type by removing `prefix` from the start of the collection.
- [trimmingPrefix(while:)](collection/trimmingprefix%28while_%29.md)

### Subscripts

- [subscript(\_:)](collection/subscript%28__%29-1jxub.md): Accesses a contiguous subrange of the collection’s elements.

### Type Aliases

- [Collection.IndexDistance](collection/indexdistance.md): Deprecated.

## Relationships

### Inherits From

- [Sequence](sequence.md)

### Inherited By

- [BidirectionalCollection](bidirectionalcollection.md)
- [LazyCollectionProtocol](lazycollectionprotocol.md)
- [MutableCollection](mutablecollection.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [AnyBidirectionalCollection](anybidirectionalcollection.md)
- [AnyCollection](anycollection.md)
- [AnyRandomAccessCollection](anyrandomaccesscollection.md)
- [AnyRegexOutput](anyregexoutput.md)
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
- [Set](set.md)
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

### First Steps

- [Sequence](sequence.md): A type that provides sequential, iterated access to its elements.
