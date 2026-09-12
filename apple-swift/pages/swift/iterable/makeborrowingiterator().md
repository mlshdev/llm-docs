> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/iterable/makeborrowingiterator()](https://developer.apple.com/documentation/swift/iterable/makeborrowingiterator())

# makeBorrowingIterator()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a borrowing iterator over the elements of this sequence.

## Declaration

```swift
func makeBorrowingIterator() -> Self.BorrowingIterator
```

## Default Implementations

### Iterable Implementations

- [makeBorrowingIterator()](makeborrowingiterator%28%29-37ib.md): Conforms when `Self` is `Self.BorrowingIterator` and `Element` conforms to `Copyable`.
