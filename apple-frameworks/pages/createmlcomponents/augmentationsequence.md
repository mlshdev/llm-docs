> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationsequence](https://developer.apple.com/documentation/createmlcomponents/augmentationsequence)

# AugmentationSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An async sequence of augmented elements.

## Declaration

```swift
struct AugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation> where Base : Sequence, RandomTransformer : RandomTransformer, RandomNumberGenerator : RandomNumberGenerator, Base.Element == AnnotatedFeature<RandomTransformer.Input, Annotation>, RandomTransformer.Input == RandomTransformer.Output
```

## Topics

### Getting the transformer

- [transformer](augmentationsequence/transformer.md): The transformation applied to each element.

### Batching an augmentation sequence

- [batches(ofSize:dropsLastPartialBatch:)](augmentationsequence/batches%28ofsize_dropslastpartialbatch_%29.md): Conforms when `Base` conforms to `Sequence`, `RandomTransformer` conforms to `RandomTransformer`, `RandomNumberGenerator` conforms to `RandomNumberGenerator`, `Base.Element` is `AnnotatedFeature<RandomTransformer.Input, Annotation>`, and `RandomTransformer.Input` is `RandomTransformer.Output`. Batches a augmentation sequence.
- [AugmentationSequence.BatchedSequence](augmentationsequence/batchedsequence.md): Conforms when `Base` conforms to `Sequence`, `RandomTransformer` conforms to `RandomTransformer`, `RandomNumberGenerator` conforms to `RandomNumberGenerator`, `Base.Element` is `AnnotatedFeature<RandomTransformer.Input, Annotation>`, and `RandomTransformer.Input` is `RandomTransformer.Output`. An async sequence that batches an augmentation sequence.

### Creating an iterator

- [makeAsyncIterator()](augmentationsequence/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AugmentationSequence.Element](augmentationsequence/element.md): The type of element produced by this asynchronous sequence.

### Default Implementations

- [AsyncSequence Implementations](augmentationsequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
