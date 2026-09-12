> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator/error/backgroundcreationforbidden](https://developer.apple.com/documentation/imageplayground/imagecreator/error/backgroundcreationforbidden)

# ImageCreator.Error.backgroundCreationForbidden

**Framework:** Image Playground  
**Kind:** Case  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

An error that indicates the app is hidden or in the background.

## Declaration

```swift
case backgroundCreationForbidden
```

<a id="discussion"></a>

## Discussion

Apps must perform image creation only when running in the foreground.

## See Also

### Getting the error codes

- [ImageCreator.Error.notSupported](notsupported.md): Deprecated. An error that indicates the device doesn’t support image generation.
- [ImageCreator.Error.unavailable](unavailable.md): Deprecated. An error that indicates image creation is currently unavailable.
- [ImageCreator.Error.creationCancelled](creationcancelled.md): Deprecated. An error that occurs in response to cancellation of the parent task.
- [ImageCreator.Error.faceInImageTooSmall](faceinimagetoosmall.md): Deprecated. An error that indicates the system cannot use one of the source images because the face in it is too small.
- [ImageCreator.Error.unsupportedLanguage](unsupportedlanguage.md): Deprecated. An error that indicates the input text uses an unsupported language.
- [ImageCreator.Error.unsupportedInputImage](unsupportedinputimage.md): Deprecated. An error that indicates the system cannot use one of the specified source images.
- [ImageCreator.Error.creationFailed](creationfailed.md): Deprecated. An error that indicates a general failure occurred during image creation.
