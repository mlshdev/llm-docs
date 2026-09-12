> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/uniformrandomfloatingpointparameter](https://developer.apple.com/documentation/createmlcomponents/uniformrandomfloatingpointparameter)

# UniformRandomFloatingPointParameter

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Applies the transformer with a randomly generated input parameter.

## Declaration

```swift
struct UniformRandomFloatingPointParameter<RandomTransformer, Parameter> where RandomTransformer : RandomTransformer, Parameter : BinaryFloatingPoint, RandomTransformer.Input == RandomTransformer.Output, Parameter.RawSignificand : FixedWidthInteger
```

## Mentioned In

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md)

<a id="overview"></a>

## Overview

The parameter is chosen from a continuous uniform distribution in the specified range.

Note that a new transformer is created every time this transformer is applied. This may cause performance issues if the embedded transformer creation is costly.

## Topics

### Creating a transformer

- [init(range:\_:)](uniformrandomfloatingpointparameter/init%28range___%29.md): Creates a Random Parameter transformer.

### Getting the range

- [range](uniformrandomfloatingpointparameter/range.md): The range of a random number to use as input to the transformer.

### Applying

- [applied(to:generator:eventHandler:)](uniformrandomfloatingpointparameter/applied%28to_generator_eventhandler_%29.md): Performs the random apply operation on the input.

## Relationships

### Conforms To

- [RandomTransformer](randomtransformer.md)

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
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
