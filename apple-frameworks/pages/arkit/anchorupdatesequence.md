> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/anchorupdatesequence

# AnchorUpdateSequence

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An asynchronous sequence of updates to anchors.

## Declaration

```swift
struct AnchorUpdateSequence<AnchorType> where AnchorType : Anchor
```

## Topics

### Performing sequence operations

- [AnchorUpdateSequence.Iterator](anchorupdatesequence/iterator.md)

### Instance Methods

- [makeAsyncIterator()](anchorupdatesequence/makeasynciterator%28%29.md): Creates an asynchronous iterator that produces `AnchorUpdate` elements on this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Tracking anchors over time

- [AnchorUpdate](anchorupdate.md): Information about the event that updated an anchor.
