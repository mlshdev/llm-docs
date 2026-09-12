> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationbuilder](https://developer.apple.com/documentation/createmlcomponents/augmentationbuilder)

# AugmentationBuilder

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A series of augmentations.

## Declaration

```swift
@resultBuilder struct AugmentationBuilder<Element>
```

## Topics

### Building augmentations

- [buildPartialBlock(accumulated:next:)](augmentationbuilder/buildpartialblock%28accumulated_next_%29.md): Builds a partial result by combining an accumulated random transformer and a new random transformer.
- [buildPartialBlock(first:)](augmentationbuilder/buildpartialblock%28first_%29.md): Builds a partial result random transformer from the first random transformer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [RandomImageCropper](randomimagecropper.md): Crops an image at a random location.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
