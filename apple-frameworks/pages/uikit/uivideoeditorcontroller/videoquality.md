> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontroller/videoquality](https://developer.apple.com/documentation/uikit/uivideoeditorcontroller/videoquality)

# videoQuality (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The video quality to use when saving a trimmed movie.

## Declaration

```swift
var videoQuality: UIImagePickerController.QualityType { get set }
```

<a id="Discussion"></a>

## Discussion

The available video qualities are described in the [UIImagePickerController.QualityType](../uiimagepickercontroller/qualitytype.md) enumeration. The default value for this property is [UIImagePickerController.QualityType.typeLow](../uiimagepickercontroller/qualitytype/typelow.md).

If a user attempts to reencode a movie to a higher quality, the movie is saved at its existing quality. Reencoding never increases movie dimensions, frame rate, or bit rate.

## See Also

### Configuring the editor

- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, permitted for trimmed movies saved by the video editor.
- [videoPath](videopath.md): The filesystem path to the movie to be loaded by the video editor.

# videoQuality (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The video quality to use when saving a trimmed movie.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerQualityType videoQuality;
```

<a id="Discussion"></a>

## Discussion

The available video qualities are described in the [UIImagePickerControllerQualityType](../uiimagepickercontroller/qualitytype.md) enumeration. The default value for this property is [UIImagePickerControllerQualityTypeLow](../uiimagepickercontroller/qualitytype/typelow.md).

If a user attempts to reencode a movie to a higher quality, the movie is saved at its existing quality. Reencoding never increases movie dimensions, frame rate, or bit rate.

## See Also

### Configuring the editor

- [videoMaximumDuration](videomaximumduration.md): The maximum duration, in seconds, permitted for trimmed movies saved by the video editor.
- [videoPath](videopath.md): The filesystem path to the movie to be loaded by the video editor.
