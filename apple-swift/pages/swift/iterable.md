> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/iterable](https://developer.apple.com/documentation/swift/iterable)

# Iterable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that provides sequential, borrowing access to its elements.

## Declaration

```swift
protocol Iterable<Element, Failure> : ~Copyable, ~Escapable
```

## Topics

### Associated Types

- [BorrowingIterator](iterable/borrowingiterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
- [Element](iterable/element.md): A type representing the sequence’s elements.
- [Failure](iterable/failure.md)

### Instance Properties

- [underestimatedCount](iterable/underestimatedcount.md): A value less than or equal to the number of elements in the sequence, calculated nondestructively.

### Instance Methods

- [makeBorrowingIterator()](iterable/makeborrowingiterator%28%29.md): Returns a borrowing iterator over the elements of this sequence.

## Relationships

### Conforming Types

- [InlineArray](inlinearray.md)
- [MutableRawSpan](mutablerawspan.md)
- [MutableSpan](mutablespan.md)
- [OutputRawSpan](outputrawspan.md)
- [OutputSpan](outputspan.md)
- [RawSpan](rawspan.md)
- [Span](span.md)
- [UniqueArray](uniquearray.md)
