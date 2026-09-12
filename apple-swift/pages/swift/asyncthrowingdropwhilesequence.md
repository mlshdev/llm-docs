> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingdropwhilesequence](https://developer.apple.com/documentation/swift/asyncthrowingdropwhilesequence)

# AsyncThrowingDropWhileSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.

## Declaration

```swift
struct AsyncThrowingDropWhileSequence<Base> where Base : AsyncSequence
```

## Topics

### Structures

- [AsyncThrowingDropWhileSequence.Iterator](asyncthrowingdropwhilesequence/iterator.md): Conforms when `Base` conforms to `AsyncSequence`. The iterator that produces elements of the drop-while sequence.

### Type Aliases

- [AsyncThrowingDropWhileSequence.Failure](asyncthrowingdropwhilesequence/failure.md): Conforms when `Base` conforms to `AsyncSequence`. The type of element produced by this asynchronous sequence.

### Default Implementations

- [AsyncSequence Implementations](asyncthrowingdropwhilesequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](asyncsequence.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Excluding Elements

- [dropFirst(\_:)](asyncsequence/dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [AsyncDropFirstSequence](asyncdropfirstsequence.md): An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](asyncsequence/drop%28while_%29-9sp3b.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](asyncdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [drop(while:)](asyncsequence/drop%28while_%29-67kgo.md): Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [filter(\_:)](asyncsequence/filter%28__%29-435af.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [AsyncFilterSequence](asyncfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [filter(\_:)](asyncsequence/filter%28__%29-2cc0l.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingFilterSequence](asyncthrowingfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
