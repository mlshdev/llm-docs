> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/qualitytype](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/qualitytype)

# UIImagePickerController.QualityType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.

## Declaration

```swift
enum QualityType
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [videoQuality](videoquality.md) property.

The video quality setting applies to transcoding as well as to recording. Specifically, if the video quality setting is lower than the video quality of an existing movie, displaying that movie in the picker results in transcoding the movie to the lower quality.

## Topics

### Constants

- [UIImagePickerController.QualityType.typeHigh](qualitytype/typehigh.md): If recording, specifies that you want to use the highest-quality video recording supported for the active camera on the device.
- [UIImagePickerController.QualityType.type640x480](qualitytype/type640x480.md): If recording, specifies that you want to use VGA-quality video recording (pixel dimensions of 640x480).
- [UIImagePickerController.QualityType.typeMedium](qualitytype/typemedium.md): If recording, specifies that you want to use medium-quality video recording.
- [UIImagePickerController.QualityType.typeLow](qualitytype/typelow.md): If recording, specifies that you want to use low-quality video recording.
- [UIImagePickerController.QualityType.typeIFrame1280x720](qualitytype/typeiframe1280x720.md): If recording, specifies that you want to use 1280x720 iFrame format.
- [UIImagePickerController.QualityType.typeIFrame960x540](qualitytype/typeiframe960x540.md): If recording, specifies that you want to use 960x540 iFrame format.

### Initializers

- [init(rawValue:)](qualitytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the video capture options

- [videoQuality](videoquality.md): The video recording and transcoding quality.
- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, for a video recording.

# UIImagePickerControllerQualityType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.

## Declaration

```objectivec
enum UIImagePickerControllerQualityType : NSInteger;
```

<a id="overview"></a>

## Overview

The constants in this enumeration are for use as values of the [videoQuality](videoquality.md) property.

The video quality setting applies to transcoding as well as to recording. Specifically, if the video quality setting is lower than the video quality of an existing movie, displaying that movie in the picker results in transcoding the movie to the lower quality.

## Topics

### Constants

- [UIImagePickerControllerQualityTypeHigh](qualitytype/typehigh.md): If recording, specifies that you want to use the highest-quality video recording supported for the active camera on the device.
- [UIImagePickerControllerQualityType640x480](qualitytype/type640x480.md): If recording, specifies that you want to use VGA-quality video recording (pixel dimensions of 640x480).
- [UIImagePickerControllerQualityTypeMedium](qualitytype/typemedium.md): If recording, specifies that you want to use medium-quality video recording.
- [UIImagePickerControllerQualityTypeLow](qualitytype/typelow.md): If recording, specifies that you want to use low-quality video recording.
- [UIImagePickerControllerQualityTypeIFrame1280x720](qualitytype/typeiframe1280x720.md): If recording, specifies that you want to use 1280x720 iFrame format.
- [UIImagePickerControllerQualityTypeIFrame960x540](qualitytype/typeiframe960x540.md): If recording, specifies that you want to use 960x540 iFrame format.

## See Also

### Configuring the video capture options

- [videoQuality](videoquality.md): The video recording and transcoding quality.
- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, for a video recording.
