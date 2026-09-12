> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/videoquality](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/videoquality)

# videoQuality (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The video recording and transcoding quality.

## Declaration

```swift
var videoQuality: UIImagePickerController.QualityType { get set }
```

<a id="Discussion"></a>

## Discussion

The video quality setting specified by this property is used during video recording. It is also used whenever picking a recorded movie. Specifically, if the video quality setting is lower than the video quality of an existing movie, displaying that movie in the picker results in transcoding the movie to the lower quality.

The various video qualities are listed in the [UIImagePickerController.QualityType](qualitytype.md) enumeration. The default value is [UIImagePickerController.QualityType.typeMedium](qualitytype/typemedium.md). To capture or transcode a movie using a video quality other than the default value, you must set the quality explicitly.

This property is available only if the [mediaTypes](mediatypes.md) property’s value array includes the `kUTTypeMovie` media type.

## See Also

### Related Documentation

- [availableMediaTypes(for:)](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.

### Configuring the video capture options

- [UIImagePickerController.QualityType](qualitytype.md): Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.
- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, for a video recording.

# videoQuality (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The video recording and transcoding quality.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerQualityType videoQuality;
```

<a id="Discussion"></a>

## Discussion

The video quality setting specified by this property is used during video recording. It is also used whenever picking a recorded movie. Specifically, if the video quality setting is lower than the video quality of an existing movie, displaying that movie in the picker results in transcoding the movie to the lower quality.

The various video qualities are listed in the [UIImagePickerControllerQualityType](qualitytype.md) enumeration. The default value is [UIImagePickerControllerQualityTypeMedium](qualitytype/typemedium.md). To capture or transcode a movie using a video quality other than the default value, you must set the quality explicitly.

This property is available only if the [mediaTypes](mediatypes.md) property’s value array includes the `kUTTypeMovie` media type.

## See Also

### Related Documentation

- [availableMediaTypesForSourceType:](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.

### Configuring the video capture options

- [UIImagePickerControllerQualityType](qualitytype.md): Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.
- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, for a video recording.
