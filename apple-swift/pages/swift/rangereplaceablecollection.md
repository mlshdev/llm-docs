> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)

# RangeReplaceableCollection

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection that supports replacement of an arbitrary subrange of elements with the elements of another collection.

## Declaration

```swift
protocol RangeReplaceableCollection<Element> : Collection where Self.SubSequence : RangeReplaceableCollection
```

<a id="overview"></a>

## Overview

Range-replaceable collections provide operations that insert and remove elements. For example, you can add elements to an array of strings by calling any of the inserting or appending operations that the `RangeReplaceableCollection` protocol defines.

```swift
var bugs = ["Aphid", "Damselfly"]
bugs.append("Earwig")
bugs.insert(contentsOf: ["Bumblebee", "Cicada"], at: 1)
print(bugs)
// Prints "["Aphid", "Bumblebee", "Cicada", "Damselfly", "Earwig"]"
```

Likewise, `RangeReplaceableCollection` types can remove one or more elements using a single operation.

```swift
bugs.removeLast()
bugs.removeSubrange(1...2)
print(bugs)
// Prints "["Aphid", "Damselfly"]"

bugs.removeAll()
print(bugs)
// Prints "[]"
```

Lastly, use the eponymous `replaceSubrange(_:with:)` method to replace a subrange of elements with the contents of another collection. Here, three elements in the middle of an array of integers are replaced by the five elements of a `Repeated<Int>` instance.

```swift
 var nums = [10, 20, 30, 40, 50]
 nums.replaceSubrange(1...3, with: repeatElement(1, count: 5))
 print(nums)
 // Prints "[10, 1, 1, 1, 1, 1, 50]"
```

<a id="Conforming-to-the-RangeReplaceableCollection-Protocol"></a>

## Conforming to the RangeReplaceableCollection Protocol

To add `RangeReplaceableCollection` conformance to your custom collection, add an empty initializer and the `replaceSubrange(_:with:)` method to your custom type. `RangeReplaceableCollection` provides default implementations of all its other methods using this initializer and method. For example, the `removeSubrange(_:)` method is implemented by calling `replaceSubrange(_:with:)` with an empty collection for the `newElements` parameter. You can override any of the protocol’s required methods to provide your own custom implementation.

## Topics

### Creating a New Collection

- [init()](rangereplaceablecollection/init%28%29.md): Creates a new, empty collection.

### Adding Elements

- [insert(contentsOf:at:)](rangereplaceablecollection/insert%28contentsof_at_%29.md): Inserts the elements of a sequence into the collection at the specified position.

### Operators

- [+(\_:\_:)](rangereplaceablecollection/+%28____%29-2n67q.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](rangereplaceablecollection/+%28____%29-2t6em.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](rangereplaceablecollection/+%28____%29-5rv8e.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](rangereplaceablecollection/+=%28____%29.md): Appends the elements of a sequence to a range-replaceable collection.

### Associated Types

- [SubSequence](rangereplaceablecollection/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Initializers

- [init(\_:)](rangereplaceablecollection/init%28__%29.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(repeating:count:)](rangereplaceablecollection/init%28repeating_count_%29.md): Creates a new collection containing the specified number of a single, repeated value.

### Instance Methods

- [append(\_:)](rangereplaceablecollection/append%28__%29.md): Adds an element to the end of the collection.
- [append(contentsOf:)](rangereplaceablecollection/append%28contentsof_%29.md): Adds the elements of a sequence or collection to the end of this collection.
- [applying(\_:)](rangereplaceablecollection/applying%28__%29.md): Applies the given difference to this collection.
- [filter(\_:)](rangereplaceablecollection/filter%28__%29.md): Returns a new collection of the same type containing, in order, the elements of the original collection that satisfy the given predicate.
- [insert(\_:at:)](rangereplaceablecollection/insert%28__at_%29.md): Inserts a new element into the collection at the specified position.
- [popLast()](rangereplaceablecollection/poplast%28%29-253jb.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [popLast()](rangereplaceablecollection/poplast%28%29-7kbf5.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [remove(at:)](rangereplaceablecollection/remove%28at_%29.md): Removes and returns the element at the specified position.
- [remove(atOffsets:)](rangereplaceablecollection/remove%28atoffsets_%29.md): Conforms when `Self` conforms to `MutableCollection`. Removes all the elements at the specified offsets from the collection.
- [removeAll(keepingCapacity:)](rangereplaceablecollection/removeall%28keepingcapacity_%29.md): Removes all elements from the collection.
- [removeAll(where:)](rangereplaceablecollection/removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeFirst()](rangereplaceablecollection/removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](rangereplaceablecollection/removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](rangereplaceablecollection/removelast%28%29-1tnw.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast()](rangereplaceablecollection/removelast%28%29-6e2v1.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](rangereplaceablecollection/removelast%28__%29-66xv1.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes the specified number of elements from the end of the collection.
- [removeLast(\_:)](rangereplaceablecollection/removelast%28__%29-n550.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](rangereplaceablecollection/removesubrange%28__%29.md): Removes the specified subrange of elements from the collection.
- [removeSubranges(\_:)](rangereplaceablecollection/removesubranges%28__%29.md): Removes the elements at the given indices.
- [replace(\_:maxReplacements:with:)](rangereplaceablecollection/replace%28__maxreplacements_with_%29.md): Conforms when `SubSequence` is `Substring`. Replaces all occurrences of the sequence matching the given regex with a given collection.
- [replace(\_:with:maxReplacements:)](rangereplaceablecollection/replace%28__with_maxreplacements_%29-20ctz.md): Conforms when `SubSequence` is `Substring`. Replaces all occurrences of the sequence matching the given regex with a given collection.
- [replace(\_:with:maxReplacements:)](rangereplaceablecollection/replace%28__with_maxreplacements_%29-5u0yu.md): Conforms when `Element` conforms to `Equatable`. Replaces all occurrences of a target sequence with a given collection
- [replace(maxReplacements:content:with:)](rangereplaceablecollection/replace%28maxreplacements_content_with_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Replaces all matches for the regex in this collection, using the given closures to create the replacement and the regex.
- [replace(with:maxReplacements:content:)](rangereplaceablecollection/replace%28with_maxreplacements_content_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Replaces all matches for the regex in this collection, using the given closure to create the regex.
- [replaceSubrange(\_:with:)](rangereplaceablecollection/replacesubrange%28__with_%29.md): Replaces the specified subrange of elements with the given collection.
- [replacing(\_:maxReplacements:with:)](rangereplaceablecollection/replacing%28__maxreplacements_with_%29.md): Conforms when `SubSequence` is `Substring`. Returns a new collection in which all occurrences of a sequence matching the given regex are replaced by another collection.
- [replacing(\_:subrange:maxReplacements:with:)](rangereplaceablecollection/replacing%28__subrange_maxreplacements_with_%29.md): Conforms when `SubSequence` is `Substring`. Returns a new collection in which all occurrences of a sequence matching the given regex are replaced by another regex match.
- [replacing(\_:with:maxReplacements:)](rangereplaceablecollection/replacing%28__with_maxreplacements_%29-1tg5u.md): Conforms when `SubSequence` is `Substring`. Returns a new collection in which all occurrences of a sequence matching the given regex are replaced by another collection.
- [replacing(\_:with:maxReplacements:)](rangereplaceablecollection/replacing%28__with_maxreplacements_%29-6y22p.md): Conforms when `Element` conforms to `Equatable`. Returns a new collection in which all occurrences of a target sequence are replaced by another collection.
- [replacing(\_:with:subrange:maxReplacements:)](rangereplaceablecollection/replacing%28__with_subrange_maxreplacements_%29-1uswm.md): Conforms when `Element` conforms to `Equatable`. Returns a new collection in which all occurrences of a target sequence are replaced by another collection.
- [replacing(\_:with:subrange:maxReplacements:)](rangereplaceablecollection/replacing%28__with_subrange_maxreplacements_%29-5mdsz.md): Conforms when `SubSequence` is `Substring`. Returns a new collection in which all occurrences of a sequence matching the given regex are replaced by another collection.
- [replacing(maxReplacements:content:with:)](rangereplaceablecollection/replacing%28maxreplacements_content_with_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Returns a new collection in which all matches for the regex are replaced, using the given closures to create the replacement and the regex.
- [replacing(subrange:maxReplacements:content:with:)](rangereplaceablecollection/replacing%28subrange_maxreplacements_content_with_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Returns a new collection in which all matches for the regex are replaced, using the given closures to create the replacement and the regex.
- [replacing(with:maxReplacements:content:)](rangereplaceablecollection/replacing%28with_maxreplacements_content_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Returns a new collection in which all matches for the regex are replaced, using the given closure to create the regex.
- [replacing(with:subrange:maxReplacements:content:)](rangereplaceablecollection/replacing%28with_subrange_maxreplacements_content_%29.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Returns a new collection in which all matches for the regex are replaced, using the given closure to create the regex.
- [reserveCapacity(\_:)](rangereplaceablecollection/reservecapacity%28__%29.md): Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.
- [trimPrefix(\_:)](rangereplaceablecollection/trimprefix%28__%29-2hzf1.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Removes the initial elements matching the regex from the start of this collection, if the initial elements match, using the given closure to create the regex.
- [trimPrefix(\_:)](rangereplaceablecollection/trimprefix%28__%29-2s3lb.md): Conforms when `Self` conforms to `BidirectionalCollection` and `SubSequence` is `Substring`. Removes the initial elements that matches the given regex.
- [trimPrefix(\_:)](rangereplaceablecollection/trimprefix%28__%29-3t4tj.md): Conforms when `Element` conforms to `Equatable`. Removes `prefix` from the start of the collection.
- [trimPrefix(while:)](rangereplaceablecollection/trimprefix%28while_%29.md)

### Subscripts

- [subscript(\_:)](rangereplaceablecollection/subscript%28__%29-1x7vz.md): Accesses the element at the specified position.
- [subscript(\_:)](rangereplaceablecollection/subscript%28__%29-3h0y3.md)

## Relationships

### Inherits From

- [Collection](collection.md)
- [Sequence](sequence.md)

### Conforming Types

- [Array](array.md)
- [ArraySlice](arrayslice.md)
- [ContiguousArray](contiguousarray.md)
- [Slice](slice.md)
- [String](string.md)
- [String.UnicodeScalarView](string/unicodescalarview.md)
- [Substring](substring.md)
- [Substring.UnicodeScalarView](substring/unicodescalarview.md)

## See Also

### Collection Mutability

- [MutableCollection](mutablecollection.md): A collection that supports subscript assignment.
