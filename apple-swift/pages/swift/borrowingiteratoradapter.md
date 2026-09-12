> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/borrowingiteratoradapter](https://developer.apple.com/documentation/swift/borrowingiteratoradapter)

# BorrowingIteratorAdapter

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
@frozen struct BorrowingIteratorAdapter<Iterator> where Iterator : IteratorProtocol
```

## Topics

### Initializers

- [init(iterator:)](borrowingiteratoradapter/init%28iterator_%29.md)

### Instance Methods

- [nextSpan(maxCount:)](borrowingiteratoradapter/nextspan%28maxcount_%29.md): Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.

### Type Aliases

- [BorrowingIteratorAdapter.Element](borrowingiteratoradapter/element.md)
- [BorrowingIteratorAdapter.Failure](borrowingiteratoradapter/failure.md)

### Default Implementations

- [BorrowingIteratorProtocol Implementations](borrowingiteratoradapter/borrowingiteratorprotocol-implementations.md)

## Relationships

### Conforms To

- [BorrowingIteratorProtocol](borrowingiteratorprotocol.md)

## See Also

### Manual Iteration

- [IteratorProtocol](iteratorprotocol.md): A type that supplies the values of a sequence one at a time.
- [BorrowingIteratorProtocol](borrowingiteratorprotocol.md): A type that provides borrowed access to the values of a borrowing sequence.
