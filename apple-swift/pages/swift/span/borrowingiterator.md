> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/borrowingiterator](https://developer.apple.com/documentation/swift/span/borrowingiterator)

# Span.BorrowingIterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that provides the sequence’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
@frozen struct BorrowingIterator
```

## Topics

### Initializers

- [init(\_:)](borrowingiterator/init%28__%29.md)

### Instance Methods

- [nextSpan(maxCount:)](borrowingiterator/nextspan%28maxcount_%29.md): Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.
- [skip(by:)](borrowingiterator/skip%28by_%29.md): Advances the position of this iterator by the specified offset, or until the end of the underlying type’s elements.

### Type Aliases

- [Span.BorrowingIterator.Failure](borrowingiterator/failure.md)

### Default Implementations

- [BorrowingIteratorProtocol Implementations](borrowingiterator/borrowingiteratorprotocol-implementations.md)

## Relationships

### Conforms To

- [BorrowingIteratorProtocol](../borrowingiteratorprotocol.md)
