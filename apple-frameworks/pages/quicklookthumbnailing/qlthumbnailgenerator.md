> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator)

# QLThumbnailGenerator (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that generates thumbnail images based on provided requirements.

## Declaration

```swift
class QLThumbnailGenerator
```

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](creating-quick-look-thumbnails-to-preview-files-in-your-app.md)
- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Getting the Generator Instance

- [shared](qlthumbnailgenerator/shared.md): The singleton thumbnail generator instance.

### Generating a Thumbnail

- [generateBestRepresentation(for:completion:)](qlthumbnailgenerator/generatebestrepresentation%28for_completion_%29.md): Generates the best possible thumbnail representation for a file and calls a handler upon completion.
- [generateRepresentations(for:update:)](qlthumbnailgenerator/generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.
- [QLThumbnailGenerator.Request](qlthumbnailgenerator/request.md): A request to generate a thumbnail for a file.

### Saving a Thumbnail

- [saveBestRepresentation(for:to:contentType:completion:)](qlthumbnailgenerator/savebestrepresentation%28for_to_contenttype_completion_%29.md): Deprecated. Saves the best representation of thumbnail for a specific request to the specified URL.

### Canceling

- [cancel(\_:)](qlthumbnailgenerator/cancel%28__%29.md): Cancels the generation of a thumbnail for a given request.

### Instance Methods

- [saveBestRepresentation(for:to:as:completion:)](qlthumbnailgenerator/savebestrepresentation%28for_to_as_completion_%29.md): Saves a thumbnail for the request on disk at fileURL. The file saved at fileURL has to be deleted when it is not used anymore. This is primarily intended for file provider extensions which need to upload thumbnails and have a small memory limit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Thumbnail Generation

- [Creating Quick Look Thumbnails to Preview Files in Your App](creating-quick-look-thumbnails-to-preview-files-in-your-app.md): Generate thumbnails of images, text files, PDFs, audio files, videos, and more.
- [QLThumbnailRepresentation](qlthumbnailrepresentation.md): Information about the thumbnail that the thumbnail generator returns.

# QLThumbnailGenerator (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that generates thumbnail images based on provided requirements.

## Declaration

```objectivec
@interface QLThumbnailGenerator : NSObject
```

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](creating-quick-look-thumbnails-to-preview-files-in-your-app.md)
- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Getting the Generator Instance

- [sharedGenerator](qlthumbnailgenerator/shared.md): The singleton thumbnail generator instance.

### Generating a Thumbnail

- [generateBestRepresentationForRequest:completionHandler:](qlthumbnailgenerator/generatebestrepresentation%28for_completion_%29.md): Generates the best possible thumbnail representation for a file and calls a handler upon completion.
- [generateRepresentationsForRequest:updateHandler:](qlthumbnailgenerator/generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.
- [QLThumbnailGenerationRequest](qlthumbnailgenerator/request.md): A request to generate a thumbnail for a file.

### Saving a Thumbnail

- [saveBestRepresentationForRequest:toFileAtURL:withContentType:completionHandler:](qlthumbnailgenerator/savebestrepresentation%28for_to_contenttype_completion_%29.md): Deprecated. Saves the best representation of thumbnail for a specific request to the specified URL.

### Canceling

- [cancelRequest:](qlthumbnailgenerator/cancel%28__%29.md): Cancels the generation of a thumbnail for a given request.

### Instance Methods

- [saveBestRepresentationForRequest:toFileAtURL:asContentType:completionHandler:](qlthumbnailgenerator/savebestrepresentation%28for_to_as_completion_%29.md): Saves a thumbnail for the request on disk at fileURL. The file saved at fileURL has to be deleted when it is not used anymore. This is primarily intended for file provider extensions which need to upload thumbnails and have a small memory limit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Thumbnail Generation

- [Creating Quick Look Thumbnails to Preview Files in Your App](creating-quick-look-thumbnails-to-preview-files-in-your-app.md): Generate thumbnails of images, text files, PDFs, audio files, videos, and more.
- [QLThumbnailRepresentation](qlthumbnailrepresentation.md): Information about the thumbnail that the thumbnail generator returns.
