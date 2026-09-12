> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/asyncbytes/makeasynciterator()](https://developer.apple.com/documentation/foundation/url/asyncbytes/makeasynciterator())

# makeAsyncIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> URL.AsyncBytes.AsyncIterator
```

<a id="return-value"></a>

## Return Value

An instance of the `URL.AsyncBytes.AsyncIterator` type used to produce elements of the asynchronous sequence.

## See Also

### Creating an iterator

- [URL.AsyncBytes.AsyncIterator](asynciterator.md): The iterator type that produces elements of this asynchronous sequence.
