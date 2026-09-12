> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/upsampledaugmentationsequence](https://developer.apple.com/documentation/createmlcomponents/upsampledaugmentationsequence)

# UpsampledAugmentationSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An async sequence of augmented elements.

## Declaration

```swift
struct UpsampledAugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation> where Base : Collection, RandomTransformer : RandomTransformer, RandomNumberGenerator : RandomNumberGenerator, Base.Element == AnnotatedFeature<RandomTransformer.Input, Annotation>, RandomTransformer.Input == RandomTransformer.Output
```

## Topics

### Getting the transformer

- [transformer](upsampledaugmentationsequence/transformer.md): The transformation applied to each element.

### Creating an iterator

- [makeAsyncIterator()](upsampledaugmentationsequence/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [UpsampledAugmentationSequence.Element](upsampledaugmentationsequence/element.md): The type of element produced by this asynchronous sequence.

### Default Implementations

- [AsyncSequence Implementations](upsampledaugmentationsequence/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
