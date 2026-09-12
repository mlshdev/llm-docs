> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/option-set-support](https://developer.apple.com/documentation/createml/option-set-support)

# Option set support

**Framework:** Create ML  
**Kind:** API Collection

Inspect and modify a video augmentation option set with the properties and methods it inherits from standard protocols.

<a id="Overview"></a>

## Overview

You don’t typically use these properties and methods directly.

[MLHandActionClassifier.VideoAugmentationOptions](mlhandactionclassifier/videoaugmentationoptions.md) inherits these symbols from [OptionSet](https://developer.apple.com/documentation/swift/optionset) and [Codable](https://developer.apple.com/documentation/swift/codable). Create a set of video augmentations by creating an array literal with any combination of these type properties:

- `horizontalFlip`
- `randomMove`
- `randomScale`
- `randomShift`
- `frameDrop`
- `timeInterpolate`

## Topics

### Creating an augmentation

- [init(rawValue:)](mlhandactionclassifier/videoaugmentationoptions/init%28rawvalue_%29.md): Creates an option set from an integer.

## See Also

### Augmentations supporting types

- [dropFrames](mlhandactionclassifier/videoaugmentationoptions/dropframes.md): Randomly drop frames from a video.
- [horizontallyFlip](mlhandactionclassifier/videoaugmentationoptions/horizontallyflip.md): Apply left-right flips to the pose in a video.
- [interpolateFrames](mlhandactionclassifier/videoaugmentationoptions/interpolateframes.md): Random time interpolation through a video.
- [rotate](mlhandactionclassifier/videoaugmentationoptions/rotate.md): Randomly rotate the pose in a video.
- [scale](mlhandactionclassifier/videoaugmentationoptions/scale.md): Randomly scale the pose in a video.
- [translate](mlhandactionclassifier/videoaugmentationoptions/translate.md): Randomly translate the pose in a video.
