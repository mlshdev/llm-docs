> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncprefixsequence](https://developer.apple.com/documentation/swift/asyncprefixsequence)

# AsyncPrefixSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An asynchronous sequence, up to a specified maximum length, containing the initial elements of a base asynchronous sequence.

## Declaration

```swift
struct AsyncPrefixSequence<Base> where Base : AsyncSequence
```

## Topics

### Structures

- [AsyncPrefixSequence.Iterator](asyncprefixsequence/iterator.md): Conforms when `Base` conforms to `AsyncSequence`. The iterator that produces elements of the prefix sequence.

### Type Aliases

- [AsyncPrefixSequence.Failure](asyncprefixsequence/failure.md): Conforms when `Base` conforms to `AsyncSequence`. The type of the error that can be produced by the sequence.

### Default Implementations

- [AsyncSequence Implementations](asyncprefixsequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](asyncsequence.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Selecting Elements

- [prefix(\_:)](asyncsequence/prefix%28__%29.md): Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](asyncsequence/prefix%28while_%29-2xy95.md): Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.
- [AsyncPrefixWhileSequence](asyncprefixwhilesequence.md): An asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy a given predicate.
- [prefix(while:)](asyncsequence/prefix%28while_%29-6yp5n.md): Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingPrefixWhileSequence](asyncthrowingprefixwhilesequence.md): An asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given error-throwing predicate.
