> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/anchorupdatesequence/makeasynciterator()

# makeAsyncIterator()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Creates an asynchronous iterator that produces `AnchorUpdate` elements on this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> AnchorUpdateSequence<AnchorType>.Iterator<AnchorType>
```

<a id="return-value"></a>

## Return Value

An Iterator for `AnchorUpdate`
