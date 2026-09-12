> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/emptycollection/iterator/sequence-implementations](https://developer.apple.com/documentation/swift/emptycollection/iterator/sequence-implementations)

# Sequence Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [lazy](lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.
- [underestimatedCount](underestimatedcount.md): A value less than or equal to the number of elements in the sequence, calculated nondestructively.

### Instance Methods

- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [compactMap(\_:)](compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [count(where:)](count%28where_%29.md): Returns the number of elements in the sequence that satisfy the given predicate.
- [drop(while:)](drop%28while_%29.md): Returns a sequence by skipping the initial, consecutive elements that satisfy the given predicate.
- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a sequence containing all but the given number of initial elements.
- [dropLast(\_:)](droplast%28__%29.md): Returns a sequence containing all but the given number of final elements.
- [elementsEqual(\_:)](elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [enumerated()](enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [filter(\_:)](filter%28__%29.md): Returns an array containing, in order, the elements of the sequence that satisfy the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [flatMap(\_:)](flatmap%28__%29-1oa76.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-9oyrb.md): Deprecated.
- [forEach(\_:)](foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [joined()](joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](joined%28separator_%29-5hdvf.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.
- [joined(separator:)](joined%28separator_%29-p00z.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [lexicographicallyPrecedes(\_:)](lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.
- [makeIterator()](makeiterator%28%29.md): Conforms when `Self` is `Self.Iterator`. Returns an iterator over the elements of this sequence.
- [map(\_:)](map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
- [prefix(\_:)](prefix%28__%29.md): Returns a sequence, up to the specified maximum length, containing the initial elements of the sequence.
- [prefix(while:)](prefix%28while_%29.md): Returns a sequence containing the initial, consecutive elements that satisfy the given predicate.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reversed()](reversed%28%29.md): Returns an array containing the elements of this sequence in reverse order.
- [shuffled()](shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
- [sorted()](sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the sequence, in order, that don’t contain elements satisfying the given predicate. Elements that are used to split the sequence are not returned as part of any subsequence.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the sequence, in order, around elements equal to the given element.
- [starts(with:)](starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the sequence.
- [withContiguousStorageIfAvailable(\_:)](withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.

### Type Aliases

- [EmptyCollection.Iterator.Iterator](iterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
