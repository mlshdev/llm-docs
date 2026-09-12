> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisavevideoatpathtosavedphotosalbum(_:_:_:_:)](https://developer.apple.com/documentation/uikit/uisavevideoatpathtosavedphotosalbum(_:_:_:_:))

# UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the movie from the specified path to the user’s Camera Roll album.

## Declaration

```swift
func UISaveVideoAtPathToSavedPhotosAlbum(_ videoPath: String, _ completionTarget: Any?, _ completionSelector: Selector?, _ contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `videoPath`: The filesystem path to the movie file you want to save to the Camera Roll album.
- `completionTarget`: Optionally, the object whose selector the system calls after it writes the movie to the Camera Roll album.
- `completionSelector`: The method selector of the `completionTarget` object to call. Make this optional method conform to the following signature:

  ```swift
  // Swift
  func video(_ videoPath: String?,
             didFinishSavingWithError error: Error?,
             contextInfo: UnsafeMutableRawPointer?) {}
  ```

  ```objc
  // Objective-C
  - (void)video: (NSString *) videoPath
      didFinishSavingWithError: (NSError *) error
                contextInfo: (void *) contextInfo;
  ```
- `contextInfo`: An optional pointer to any context-specific data that you want the system to pass to the completion selector.

<a id="Discussion"></a>

## Discussion

When you use this function with an image picker controller, you’d typically call it within your [imagePickerController(\_:didFinishPickingMediaWithInfo:)](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) delegate method implementation.

Before calling this function, call the [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(\_:)](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md) function to determine if it’s possible to save movies to the Camera Roll album. For a code example, refer to [Camera Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/CameraAndPhotoLib_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010400).

The use of the `completionTarget`, `completionSelector`, and `contextInfo` parameters is optional and necessary only if you want to receive an asynchronous notification when the function finishes writing the movie to the user’s Camera Roll or Saved Photos album. If you don’t want to receive a notification, pass `nil` for these parameters.

When an iOS device without a camera uses it, this method adds the movie to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:)](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(\_:)](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

# UISaveVideoAtPathToSavedPhotosAlbum (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the movie from the specified path to the user’s Camera Roll album.

## Declaration

```objectivec
extern void UISaveVideoAtPathToSavedPhotosAlbum(NSString *videoPath, id completionTarget, SEL completionSelector, void *contextInfo);
```

## Parameters

- `videoPath`: The filesystem path to the movie file you want to save to the Camera Roll album.
- `completionTarget`: Optionally, the object whose selector the system calls after it writes the movie to the Camera Roll album.
- `completionSelector`: The method selector of the `completionTarget` object to call. Make this optional method conform to the following signature:

  ```swift
  // Swift
  func video(_ videoPath: String?,
             didFinishSavingWithError error: Error?,
             contextInfo: UnsafeMutableRawPointer?) {}
  ```

  ```objc
  // Objective-C
  - (void)video: (NSString *) videoPath
      didFinishSavingWithError: (NSError *) error
                contextInfo: (void *) contextInfo;
  ```
- `contextInfo`: An optional pointer to any context-specific data that you want the system to pass to the completion selector.

<a id="Discussion"></a>

## Discussion

When you use this function with an image picker controller, you’d typically call it within your [imagePickerController:didFinishPickingMediaWithInfo:](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) delegate method implementation.

Before calling this function, call the [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md) function to determine if it’s possible to save movies to the Camera Roll album. For a code example, refer to [Camera Programming Topics for iOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/CameraAndPhotoLib_TopicsForIOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010400).

The use of the `completionTarget`, `completionSelector`, and `contextInfo` parameters is optional and necessary only if you want to receive an asynchronous notification when the function finishes writing the movie to the user’s Camera Roll or Saved Photos album. If you don’t want to receive a notification, pass `nil` for these parameters.

When an iOS device without a camera uses it, this method adds the movie to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UIImageWriteToSavedPhotosAlbum](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.
