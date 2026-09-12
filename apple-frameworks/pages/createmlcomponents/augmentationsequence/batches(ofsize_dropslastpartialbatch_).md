> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationsequence/batches(ofsize:dropslastpartialbatch:)](https://developer.apple.com/documentation/createmlcomponents/augmentationsequence/batches(ofsize:dropslastpartialbatch:))

# batches(ofSize:dropsLastPartialBatch:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Batches a augmentation sequence.

## Declaration

```swift
func batches(ofSize size: Int, dropsLastPartialBatch: Bool) -> AugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation>.BatchedSequence
```

## Parameters

- `size`: The number of elements contained in each batch.
- `dropsLastPartialBatch`: A Boolean value representing whether the last batch should be dropped if it has less than `size` elements.

<a id="return-value"></a>

## Return Value

An async sequence of batches.

## See Also

### Batching an augmentation sequence

- [AugmentationSequence.BatchedSequence](batchedsequence.md): Conforms when `Base` conforms to `Sequence`, `RandomTransformer` conforms to `RandomTransformer`, `RandomNumberGenerator` conforms to `RandomNumberGenerator`, `Base.Element` is `AnnotatedFeature<RandomTransformer.Input, Annotation>`, and `RandomTransformer.Input` is `RandomTransformer.Output`. An async sequence that batches an augmentation sequence.
