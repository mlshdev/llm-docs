> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoatpathiscompatiblewithsavedphotosalbum(_:)](https://developer.apple.com/documentation/uikit/uivideoatpathiscompatiblewithsavedphotosalbum(_:))

# UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

## Declaration

```swift
func UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(_ videoPath: String) -> Bool
```

## Parameters

- `videoPath`: The filesystem path to the movie file you want to save.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video can be saved to the Camera Roll album or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Not all devices are able to play video files placed in the user’s Camera Roll album. Before attempting to save a video, call this function and check its return value to ensure that saving the video is supported for the current device. For a code example, refer to [Camera Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/CameraAndPhotoLib_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010400).

When used on an iOS device without a camera, this method indicates whether the specified movie can be saved to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:)](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:)](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.

# UIVideoAtPathIsCompatibleWithSavedPhotosAlbum (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

## Declaration

```objectivec
extern BOOL UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(NSString *videoPath);
```

## Parameters

- `videoPath`: The filesystem path to the movie file you want to save.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video can be saved to the Camera Roll album or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Not all devices are able to play video files placed in the user’s Camera Roll album. Before attempting to save a video, call this function and check its return value to ensure that saving the video is supported for the current device. For a code example, refer to [Camera Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/CameraAndPhotoLib_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010400).

When used on an iOS device without a camera, this method indicates whether the specified movie can be saved to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UIImageWriteToSavedPhotosAlbum](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UISaveVideoAtPathToSavedPhotosAlbum](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.
