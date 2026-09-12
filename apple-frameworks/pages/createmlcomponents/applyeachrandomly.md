> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/applyeachrandomly](https://developer.apple.com/documentation/createmlcomponents/applyeachrandomly)

# ApplyEachRandomly

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Applies each transformer randomly given a probability.

## Declaration

```swift
struct ApplyEachRandomly<Element>
```

## Topics

### Creating an augmentation

- [init(probability:\_:)](applyeachrandomly/init%28probability___%29.md): Creates an augmentation that applies each transformer randomly in the given order.

### Getting the probability

- [probability](applyeachrandomly/probability.md): The probability of applying each transformer. Default value is 0.5.

### Applying transformers

- [applied(to:generator:eventHandler:)](applyeachrandomly/applied%28to_generator_eventhandler_%29.md): Applies each transformer randomly in order with a probability.

## Relationships

### Conforms To

- [RandomTransformer](randomtransformer.md)

## See Also

### Augmentations

- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
