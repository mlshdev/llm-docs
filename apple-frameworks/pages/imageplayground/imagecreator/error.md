> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator/error](https://developer.apple.com/documentation/imageplayground/imagecreator/error)

# ImageCreator.Error

**Framework:** Image Playground  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

Errors that can occur during the image generation process.

## Declaration

```swift
enum Error
```

## Topics

### Getting the error codes

- [ImageCreator.Error.notSupported](error/notsupported.md): Deprecated. An error that indicates the device doesn’t support image generation.
- [ImageCreator.Error.unavailable](error/unavailable.md): Deprecated. An error that indicates image creation is currently unavailable.
- [ImageCreator.Error.creationCancelled](error/creationcancelled.md): Deprecated. An error that occurs in response to cancellation of the parent task.
- [ImageCreator.Error.faceInImageTooSmall](error/faceinimagetoosmall.md): Deprecated. An error that indicates the system cannot use one of the source images because the face in it is too small.
- [ImageCreator.Error.unsupportedLanguage](error/unsupportedlanguage.md): Deprecated. An error that indicates the input text uses an unsupported language.
- [ImageCreator.Error.unsupportedInputImage](error/unsupportedinputimage.md): Deprecated. An error that indicates the system cannot use one of the specified source images.
- [ImageCreator.Error.backgroundCreationForbidden](error/backgroundcreationforbidden.md): Deprecated. An error that indicates the app is hidden or in the background.
- [ImageCreator.Error.creationFailed](error/creationfailed.md): Deprecated. An error that indicates a general failure occurred during image creation.

### Enumeration Cases

- [ImageCreator.Error.conceptsRequirePersonIdentity](error/conceptsrequirepersonidentity.md): Deprecated. An error that indicates that a source image containing a person’s face needs to be added in order to complete the request.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomNSError](../../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Generating images

- [images(for:style:limit:)](images%28for_style_limit_%29.md): Deprecated. Starts the creation of images based on the description and style information you provide.
- [availableStyles](availablestyles.md): Deprecated. The set of styles you can apply to the images you create.
- [ImageCreator.CreatedImage](createdimage.md): Deprecated. A structure that stores a programmatically generated image.
