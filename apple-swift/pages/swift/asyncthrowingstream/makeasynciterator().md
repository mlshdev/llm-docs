> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingstream/makeasynciterator()

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
