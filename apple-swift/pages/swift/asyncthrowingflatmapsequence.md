> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingflatmapsequence](https://developer.apple.com/documentation/swift/asyncthrowingflatmapsequence)

# AsyncThrowingFlatMapSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An asynchronous sequence that concatenates the results of calling a given error-throwing transformation with each element of this sequence.

## Declaration

```swift
struct AsyncThrowingFlatMapSequence<Base, SegmentOfResult> where Base : AsyncSequence, SegmentOfResult : AsyncSequence
```

## Topics

### Structures

- [AsyncThrowingFlatMapSequence.Iterator](asyncthrowingflatmapsequence/iterator.md): Conforms when `Base` conforms to `AsyncSequence` and `SegmentOfResult` conforms to `AsyncSequence`. The iterator that produces elements of the flat map sequence.

### Type Aliases

- [AsyncThrowingFlatMapSequence.Failure](asyncthrowingflatmapsequence/failure.md): Conforms when `Base` conforms to `AsyncSequence` and `SegmentOfResult` conforms to `AsyncSequence`. The type of error produced by this asynchronous sequence.

### Default Implementations

- [AsyncSequence Implementations](asyncthrowingflatmapsequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](asyncsequence.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Transforming a Sequence

- [map(\_:)](asyncsequence/map%28__%29-1q1k3.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [AsyncMapSequence](asyncmapsequence.md): An asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [map(\_:)](asyncsequence/map%28__%29-70wgb.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [AsyncThrowingMapSequence](asyncthrowingmapsequence.md): An asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [compactMap(\_:)](asyncsequence/compactmap%28__%29-gfdq.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [AsyncCompactMapSequence](asynccompactmapsequence.md): An asynchronous sequence that maps a given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [compactMap(\_:)](asyncsequence/compactmap%28__%29-1f8zn.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [AsyncThrowingCompactMapSequence](asyncthrowingcompactmapsequence.md): An asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [AsyncFlatMapSequence](asyncflatmapsequence.md): An asynchronous sequence that concatenates the results of calling a given transformation with each element of this sequence.
- [reduce(\_:\_:)](asyncsequence/reduce%28____%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:\_:)](asyncsequence/reduce%28into___%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.
