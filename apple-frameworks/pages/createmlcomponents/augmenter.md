> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmenter](https://developer.apple.com/documentation/createmlcomponents/augmenter)

# Augmenter

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An augmenter.

## Declaration

```swift
struct Augmenter<RandomTransformer, RandomNumberGenerator> where RandomTransformer : RandomTransformer, RandomNumberGenerator : RandomNumberGenerator, RandomTransformer.Input == RandomTransformer.Output
```

## Mentioned In

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md)

## Topics

### Creating an augmenter

- [init(generator:\_:)](augmenter/init%28generator___%29.md): Creates an augmenter from a random number generator and an augmentation builder.

### Applying an augmentation

- [applied(to:)](augmenter/applied%28to_%29.md): Applies an augmentation per input of the base sequence.
- [applied(to:upsampledBy:)](augmenter/applied%28to_upsampledby_%29.md): Applies an augmentation repeatedly to an array of inputs.

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
