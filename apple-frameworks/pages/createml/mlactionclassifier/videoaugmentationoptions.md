> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/videoaugmentationoptions](https://developer.apple.com/documentation/createml/mlactionclassifier/videoaugmentationoptions)

# MLActionClassifier.VideoAugmentationOptions

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 11.0+

The video augmentations for an action classifier training session.

## Declaration

```swift
struct VideoAugmentationOptions
```

## Topics

### Designating video augmentation options

- [horizontalFlip](videoaugmentationoptions/horizontalflip.md): A video augmentation that creates a horizontally flipped copy of a sample video.

### Creating augmentation options

- [init(rawValue:)](videoaugmentationoptions/init%28rawvalue_%29.md): Creates a video augmentation option set from a raw value.

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

- [MLActionClassifier.DataSource](datasource.md): A data source for an action classifier.
- [MLActionClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the training process of an action classifier.
