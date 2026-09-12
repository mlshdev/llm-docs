> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/applyrandomly](https://developer.apple.com/documentation/createmlcomponents/applyrandomly)

# ApplyRandomly

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Randomly applies the transformer with the given probability.

## Declaration

```swift
struct ApplyRandomly<RandomTransformer> where RandomTransformer : RandomTransformer, RandomTransformer.Input == RandomTransformer.Output
```

## Topics

### Creating an augmentation

- [init(probability:\_:)](applyrandomly/init%28probability___%29.md): Creates an apply randomly augmentation.

### Getting the probability

- [probability](applyrandomly/probability.md): The probability of applying the transformer. Default value is 0.5.

### Applying transformers

- [applied(to:generator:eventHandler:)](applyrandomly/applied%28to_generator_eventhandler_%29.md): Randomly applies a transformer on an input.

## Relationships

### Conforms To

- [RandomTransformer](randomtransformer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
