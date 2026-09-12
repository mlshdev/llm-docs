> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/randomimagecropper](https://developer.apple.com/documentation/createmlcomponents/randomimagecropper)

# RandomImageCropper

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Crops an image at a random location.

## Declaration

```swift
struct RandomImageCropper
```

## Topics

### Creating an image cropper

- [init(scale:aspectRatio:)](randomimagecropper/init%28scale_aspectratio_%29.md): Creates an augmentation that crops an input image at a random location with a scale that indicates the lower and upper bounds to randomly scale the height and width of the image. The range must be between 0 and 1.
- [init(targetSize:)](randomimagecropper/init%28targetsize_%29.md): Creates an augmentation that crops an input image at a random location to the specified target size.
- [init(targetWidth:targetHeight:)](randomimagecropper/init%28targetwidth_targetheight_%29.md): Creates an augmentation that crops an input image at a random location to the specified target width and height.

### Performing the augmentation

- [applied(to:generator:eventHandler:)](randomimagecropper/applied%28to_generator_eventhandler_%29.md): Randomly crops an image at a random location of a given size.

## Relationships

### Conforms To

- [RandomTransformer](randomtransformer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Augmentations

- [ApplyEachRandomly](applyeachrandomly.md): Applies each transformer randomly given a probability.
- [ApplyRandomly](applyrandomly.md): Randomly applies the transformer with the given probability.
- [AugmentationBuilder](augmentationbuilder.md): A series of augmentations.
- [AugmentationSequence](augmentationsequence.md): An async sequence of augmented elements.
- [Augmenter](augmenter.md): An augmenter.
- [ChooseRandomly](chooserandomly.md): Apply single transformation randomly chosen from a list of transformers.
- [ShuffleRandomly](shufflerandomly.md): Apply transformations in a random order.
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md): Applies the transformer with a randomly generated input parameter.
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md): Applies the transformer with a randomly generated input parameter.
- [UpsampledAugmentationSequence](upsampledaugmentationsequence.md): An async sequence of augmented elements.
