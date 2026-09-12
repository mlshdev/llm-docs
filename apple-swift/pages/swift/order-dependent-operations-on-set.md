> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/order-dependent-operations-on-set](https://developer.apple.com/documentation/swift/order-dependent-operations-on-set)

# Order Dependent Operations on Set

**Framework:** Swift  
**Kind:** API Collection

Perform order-dependent operations common to all collections, as implemented for `Set`.

## Topics

### Manipulating Indices

- [startIndex](set/startindex.md): Conforms when `Element` conforms to `Hashable`. The starting position for iterating members of the set.
- [endIndex](set/endindex.md): Conforms when `Element` conforms to `Hashable`. The “past the end” position for the set—that is, the position one greater than the last valid subscript argument.
- [index(after:)](set/index%28after_%29.md): Conforms when `Element` conforms to `Hashable`. Returns the position immediately after the given index.
- [formIndex(after:)](set/formindex%28after_%29.md): Conforms when `Element` conforms to `Hashable`. Replaces the given index with its successor.
- [index(\_:offsetBy:)](set/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [formIndex(\_:offsetBy:)](set/formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [index(\_:offsetBy:limitedBy:)](set/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:limitedBy:)](set/formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](set/distance%28from_to_%29.md): Returns the distance between two indices.
- [indices](set/indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.

### Comparing Sets

- [elementsEqual(\_:)](set/elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](set/elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](set/lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](set/lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.
- [starts(with:)](set/starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](set/starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.

### Selecting Elements

- [subscript(\_:)](set/subscript%28__%29.md): Conforms when `Element` conforms to `Hashable`. Accesses the member at the given position.
- [prefix(\_:)](set/prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(upTo:)](set/prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(through:)](set/prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(while:)](set/prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](set/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](set/suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Excluding Elements

- [drop(while:)](set/drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](set/dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](set/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [popFirst()](set/popfirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes and returns the first element of the set.

### Reversing a Set’s Elements

- [reversed()](set/reversed%28%29.md): Returns an array containing the elements of this sequence in reverse order.

### Splitting and Joining Elements

- [joined()](set/joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](set/joined%28separator_%29-7ubey.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.
- [joined(separator:)](set/joined%28separator_%29-1cko4.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [split(separator:maxSplits:omittingEmptySubsequences:)](set/split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](set/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
