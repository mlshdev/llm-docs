> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/makeiterator()](https://developer.apple.com/documentation/swift/sequence/makeiterator())

# makeIterator()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an iterator over the elements of this sequence.

## Declaration

```swift
func makeIterator() -> Self.Iterator
```

## Default Implementations

### Sequence Implementations

- [makeIterator()](makeiterator%28%29-85cyw.md): Conforms when `Iterator` is `IndexingIterator<Self>`. Returns an iterator over the elements of the collection.
- [makeIterator()](makeiterator%28%29-9859q.md): Conforms when `Self` is `Self.Iterator`. Returns an iterator over the elements of this sequence.

## See Also

### Creating an Iterator

- [Iterator](iterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
- [Element](element.md): A type representing the sequence’s elements.
