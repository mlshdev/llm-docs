> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/filehandle/asyncbytes/makeasynciterator()

# makeAsyncIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> FileHandle.AsyncBytes.Iterator
```

<a id="return-value"></a>

## Return Value

An instance of the `AsyncIterator` type used to produce elements of the asynchronous sequence.
