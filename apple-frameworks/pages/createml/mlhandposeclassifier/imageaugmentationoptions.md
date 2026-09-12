> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/imageaugmentationoptions](https://developer.apple.com/documentation/createml/mlhandposeclassifier/imageaugmentationoptions)

# MLHandPoseClassifier.ImageAugmentationOptions

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Options a hand pose classification training session can use to generate additional training data from the images you provide.

## Declaration

```swift
struct ImageAugmentationOptions
```

## Topics

### Augmentations supporting types

- [horizontallyFlip](imageaugmentationoptions/horizontallyflip.md): Apply left-right flips to the pose in an image.
- [rotate](imageaugmentationoptions/rotate.md): Randomly rotate the pose in an image.
- [scale](imageaugmentationoptions/scale.md): Randomly scale the pose in an image.
- [translate](imageaugmentationoptions/translate.md): Randomly translate the pose in an image.
- [Option set support](../option-set-support.md): Inspect and modify a video augmentation option set with the properties and methods it inherits from standard protocols.

### Creating image augmentation options

- [init(rawValue:)](imageaugmentationoptions/init%28rawvalue_%29.md): Creates an option set from an integer.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting types

- [MLHandPoseClassifier.DataSource](datasource.md): A hand pose classifier dataset that contains annotated images or hand joint location data.
- [MLHandPoseClassifier.ModelParameters](modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand pose classifier task.
