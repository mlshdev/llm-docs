> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/videomaximumduration](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/videomaximumduration)

# videoMaximumDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The maximum duration, in seconds, for a video recording.

## Declaration

```swift
var videoMaximumDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is 10 minutes (600 seconds). When a user taps the Share button to send a movie to MMS, MobileMe, YouTube, or another destination, an appropriate duration limit and an appropriate video quality are enforced.

This property is available only if the [mediaTypes](mediatypes.md) property’s value array includes the `kUTTypeMovie` media type.

## See Also

### Related Documentation

- [availableMediaTypes(for:)](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.

### Configuring the video capture options

- [videoQuality](videoquality.md): The video recording and transcoding quality.
- [UIImagePickerController.QualityType](qualitytype.md): Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.

# videoMaximumDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The maximum duration, in seconds, for a video recording.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval videoMaximumDuration;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is 10 minutes (600 seconds). When a user taps the Share button to send a movie to MMS, MobileMe, YouTube, or another destination, an appropriate duration limit and an appropriate video quality are enforced.

This property is available only if the [mediaTypes](mediatypes.md) property’s value array includes the `kUTTypeMovie` media type.

## See Also

### Related Documentation

- [availableMediaTypesForSourceType:](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.

### Configuring the video capture options

- [videoQuality](videoquality.md): The video recording and transcoding quality.
- [UIImagePickerControllerQualityType](qualitytype.md): Constants that describe video quality settings for movies that are recorded with the built-in camera, or that are transcoded when they’re displayed in the image picker.
