> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/asyncthrowingpublisher/makeasynciterator()

# makeAsyncIterator()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> AsyncThrowingPublisher<P>.Iterator
```

<a id="return-value"></a>

## Return Value

An instance of the `AsyncIterator` type used to produce elements of the asynchronous sequence.

## See Also

### Creating an iterator

- [AsyncThrowingPublisher.Iterator](iterator.md): The iterator that produces elements of the asynchronous publisher sequence.
