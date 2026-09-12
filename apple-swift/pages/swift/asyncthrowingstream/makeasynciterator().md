> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/makeasynciterator()](https://developer.apple.com/documentation/swift/asyncthrowingstream/makeasynciterator())

# makeAsyncIterator()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> AsyncThrowingStream<Element, Failure>.Iterator
```

## See Also

### Creating an Iterator

- [AsyncThrowingStream.Iterator](iterator.md): Conforms when `Failure` conforms to `Error`. The asynchronous iterator for iterating an asynchronous stream.
