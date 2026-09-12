> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagewritetosavedphotosalbum(_:_:_:_:)](https://developer.apple.com/documentation/uikit/uiimagewritetosavedphotosalbum(_:_:_:_:))

# UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Adds the specified image to the user’s Camera Roll album.

## Declaration

```swift
func UIImageWriteToSavedPhotosAlbum(_ image: UIImage, _ completionTarget: Any?, _ completionSelector: Selector?, _ contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `image`: The image to write to the Camera Roll album.
- `completionTarget`: Optionally, the object whose selector should be called after the image has been written to the Camera Roll album.
- `completionSelector`: The method selector of the `completionTarget` object to call. This optional method should conform to the following signature:

  ```objc
  - (void)image:(UIImage *)image
      didFinishSavingWithError:(NSError *)error
                   contextInfo:(void *)contextInfo;
  ```
- `contextInfo`: An optional pointer to any context-specific data that you want passed to the completion selector.

<a id="Discussion"></a>

## Discussion

When used with an image picker controller, you would typically call this function within your [imagePickerController(\_:didFinishPickingMediaWithInfo:)](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) delegate method implementation.

The use of the `completionTarget`, `completionSelector`, and `contextInfo` parameters is optional and necessary only if you want to be notified asynchronously when the function finishes writing the image to the user’s Camera Roll or Saved Photos album. If you do not want to be notified, pass `nil` for these parameters.

When used on an iOS device without a camera, this method adds the image to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:)](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(\_:)](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

# UIImageWriteToSavedPhotosAlbum (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Adds the specified image to the user’s Camera Roll album.

## Declaration

```objectivec
extern void UIImageWriteToSavedPhotosAlbum(UIImage *image, id completionTarget, SEL completionSelector, void *contextInfo);
```

## Parameters

- `image`: The image to write to the Camera Roll album.
- `completionTarget`: Optionally, the object whose selector should be called after the image has been written to the Camera Roll album.
- `completionSelector`: The method selector of the `completionTarget` object to call. This optional method should conform to the following signature:

  ```objc
  - (void)image:(UIImage *)image
      didFinishSavingWithError:(NSError *)error
                   contextInfo:(void *)contextInfo;
  ```
- `contextInfo`: An optional pointer to any context-specific data that you want passed to the completion selector.

<a id="Discussion"></a>

## Discussion

When used with an image picker controller, you would typically call this function within your [imagePickerController:didFinishPickingMediaWithInfo:](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) delegate method implementation.

The use of the `completionTarget`, `completionSelector`, and `contextInfo` parameters is optional and necessary only if you want to be notified asynchronously when the function finishes writing the image to the user’s Camera Roll or Saved Photos album. If you do not want to be notified, pass `nil` for these parameters.

When used on an iOS device without a camera, this method adds the image to the Saved Photos album rather than to the Camera Roll album.

## See Also

### Photo album

- [UISaveVideoAtPathToSavedPhotosAlbum](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.
