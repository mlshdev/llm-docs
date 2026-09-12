> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingprefixwhilesequence/asyncsequence-implementations](https://developer.apple.com/documentation/swift/asyncthrowingprefixwhilesequence/asyncsequence-implementations)

# AsyncSequence Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Methods

- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [compactMap(\_:)](compactmap%28__%29-31ugu.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [compactMap(\_:)](compactmap%28__%29-9ygtu.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [drop(while:)](drop%28while_%29.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [filter(\_:)](filter%28__%29.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [flatMap(\_:)](flatmap%28__%29-3cfsb.md): Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-3cold.md): Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-3i346.md): Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-6zto4.md): Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [makeAsyncIterator()](makeasynciterator%28%29.md): Conforms when `Base` conforms to `AsyncSequence`. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [map(\_:)](map%28__%29-60mi5.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(\_:)](map%28__%29-9610l.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [prefix(\_:)](prefix%28__%29.md): Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](prefix%28while_%29.md): Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

### Type Aliases

- [AsyncThrowingPrefixWhileSequence.AsyncIterator](asynciterator.md): Conforms when `Base` conforms to `AsyncSequence`. The type of iterator that produces elements of the sequence.
- [AsyncThrowingPrefixWhileSequence.Element](element.md): Conforms when `Base` conforms to `AsyncSequence`. The type of element produced by this asynchronous sequence.
