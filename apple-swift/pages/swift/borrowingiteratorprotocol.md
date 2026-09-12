> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/borrowingiteratorprotocol](https://developer.apple.com/documentation/swift/borrowingiteratorprotocol)

# BorrowingIteratorProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that provides borrowed access to the values of a borrowing sequence.

## Declaration

```swift
protocol BorrowingIteratorProtocol<Element, Failure> : ~Copyable, ~Escapable
```

## Topics

### Associated Types

- [Element](borrowingiteratorprotocol/element.md)
- [Failure](borrowingiteratorprotocol/failure.md)

### Instance Methods

- [nextSpan()](borrowingiteratorprotocol/nextspan%28%29.md): Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.
- [nextSpan(maxCount:)](borrowingiteratorprotocol/nextspan%28maxcount_%29.md): Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.
- [skip(by:)](borrowingiteratorprotocol/skip%28by_%29.md): Advances the position of this iterator by the specified offset, or until the end of the underlying type’s elements.

## Relationships

### Conforming Types

- [BorrowingIteratorAdapter](borrowingiteratoradapter.md)
- [Span.BorrowingIterator](span/borrowingiterator.md)

## See Also

### Manual Iteration

- [IteratorProtocol](iteratorprotocol.md): A type that supplies the values of a sequence one at a time.
- [BorrowingIteratorAdapter](borrowingiteratoradapter.md)
