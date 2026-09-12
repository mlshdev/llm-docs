> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationsequence/batchedsequence](https://developer.apple.com/documentation/createmlcomponents/augmentationsequence/batchedsequence)

# AugmentationSequence.BatchedSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An async sequence that batches an augmentation sequence.

## Declaration

```swift
struct BatchedSequence
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](batchedsequence/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces batches.
- [AugmentationSequence.Element](element.md): The type of element produced by this asynchronous sequence.

### Default Implementations

- [AsyncSequence Implementations](batchedsequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Batching an augmentation sequence

- [batches(ofSize:dropsLastPartialBatch:)](batches%28ofsize_dropslastpartialbatch_%29.md): Conforms when `Base` conforms to `Sequence`, `RandomTransformer` conforms to `RandomTransformer`, `RandomNumberGenerator` conforms to `RandomNumberGenerator`, `Base.Element` is `AnnotatedFeature<RandomTransformer.Input, Annotation>`, and `RandomTransformer.Input` is `RandomTransformer.Output`. Batches a augmentation sequence.
