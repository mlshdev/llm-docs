> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/augmentationsequence/batchedsequence/makeasynciterator()

# makeAsyncIterator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates the asynchronous iterator that produces batches.

## Declaration

```swift
func makeAsyncIterator() -> AugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation>.BatchedSequence.AsyncIterator
```

## See Also

### Creating an iterator

- [AugmentationSequence.Element](../element.md): The type of element produced by this asynchronous sequence.
