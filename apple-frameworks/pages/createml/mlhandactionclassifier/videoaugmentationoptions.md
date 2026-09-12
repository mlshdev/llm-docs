> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/videoaugmentationoptions](https://developer.apple.com/documentation/createml/mlhandactionclassifier/videoaugmentationoptions)

# MLHandActionClassifier.VideoAugmentationOptions

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Options a hand action classification training session can use to generate additional training data from the videos you provide.

## Declaration

```swift
struct VideoAugmentationOptions
```

## Topics

### Augmentations supporting types

- [dropFrames](videoaugmentationoptions/dropframes.md): Randomly drop frames from a video.
- [horizontallyFlip](videoaugmentationoptions/horizontallyflip.md): Apply left-right flips to the pose in a video.
- [interpolateFrames](videoaugmentationoptions/interpolateframes.md): Random time interpolation through a video.
- [rotate](videoaugmentationoptions/rotate.md): Randomly rotate the pose in a video.
- [scale](videoaugmentationoptions/scale.md): Randomly scale the pose in a video.
- [translate](videoaugmentationoptions/translate.md): Randomly translate the pose in a video.
- [Option set support](../option-set-support.md): Inspect and modify a video augmentation option set with the properties and methods it inherits from standard protocols.

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

- [MLHandActionClassifier.DataSource](datasource.md): A hand action classifier dataset that contains annotated videos or hand joint location data.
- [MLHandActionClassifier.ModelParameters](modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand action classifier task.
