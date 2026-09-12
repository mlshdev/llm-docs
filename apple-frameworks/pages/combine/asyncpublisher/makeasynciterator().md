> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/asyncpublisher/makeasynciterator()](https://developer.apple.com/documentation/combine/asyncpublisher/makeasynciterator())

# makeAsyncIterator()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> AsyncPublisher<P>.Iterator
```

<a id="return-value"></a>

## Return Value

An instance of the `AsyncIterator` type used to produce elements of the asynchronous sequence.

## See Also

### Creating an iterator

- [AsyncPublisher.Iterator](iterator.md): The iterator that produces elements of the asynchronous publisher sequence.
