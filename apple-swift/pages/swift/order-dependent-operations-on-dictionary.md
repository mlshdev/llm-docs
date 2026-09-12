> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/order-dependent-operations-on-dictionary](https://developer.apple.com/documentation/swift/order-dependent-operations-on-dictionary)

# Order Dependent Operations on Dictionary

**Framework:** Swift  
**Kind:** API Collection

Perform order-dependent operations common to all collections, as implemented for `Dictionary`.

## Topics

### Comparing Dictionaries

- [elementsEqual(\_:by:)](dictionary/elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:by:)](dictionary/starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:by:)](dictionary/lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.

### Manipulating Indices

- [startIndex](dictionary/startindex.md): Conforms when `Key` conforms to `Hashable`. The position of the first element in a nonempty dictionary.
- [endIndex](dictionary/endindex.md): Conforms when `Key` conforms to `Hashable`. The dictionary’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](dictionary/index%28after_%29.md): Conforms when `Key` conforms to `Hashable`. Returns the position immediately after the given index.
- [formIndex(after:)](dictionary/formindex%28after_%29.md): Conforms when `Key` conforms to `Hashable`. Replaces the given index with its successor.
- [index(\_:offsetBy:)](dictionary/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [formIndex(\_:offsetBy:)](dictionary/formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [index(\_:offsetBy:limitedBy:)](dictionary/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:limitedBy:)](dictionary/formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](dictionary/distance%28from_to_%29.md): Returns the distance between two indices.
- [indices](dictionary/indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.

### Selecting Elements

- [subscript(\_:)](dictionary/subscript%28__%29-2ny9y.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](dictionary/subscript%28__%29-4h7sk.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](dictionary/subscript%28__%29-4al9z.md)
- [prefix(\_:)](dictionary/prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](dictionary/prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](dictionary/prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](dictionary/prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](dictionary/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](dictionary/suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Excluding Elements

- [dropFirst(\_:)](dictionary/dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [drop(while:)](dictionary/drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropLast(\_:)](dictionary/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [popFirst()](dictionary/popfirst%28%29.md): Conforms when `Key` conforms to `Hashable`. Removes and returns the first key-value pair of the dictionary if the dictionary isn’t empty.

### Transforming a Dictionary’s Elements

- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](dictionary/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [reversed()](dictionary/reversed%28%29.md): Returns an array containing the elements of this sequence in reverse order.
- [withContiguousStorageIfAvailable(\_:)](dictionary/withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.
