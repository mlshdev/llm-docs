> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlfilethumbnailrequest](https://developer.apple.com/documentation/quicklookthumbnailing/qlfilethumbnailrequest)

# QLFileThumbnailRequest (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A request to generate a thumbnail for a custom file type.

## Declaration

```swift
class QLFileThumbnailRequest
```

## Topics

### Describing the Requested Thumbnail

- [maximumSize](qlfilethumbnailrequest/maximumsize.md): The maximum accepted size of a thumbnail.
- [minimumSize](qlfilethumbnailrequest/minimumsize.md): The minimum accepted size of a thumbnail.
- [scale](qlfilethumbnailrequest/scale.md): The scale of the requested thumbnail.
- [fileURL](qlfilethumbnailrequest/fileurl.md): The URL of the image file to use for the thumbnail.

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

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLThumbnailProvider](qlthumbnailprovider.md): An abstract base class for creating thumbnails of custom file types.
- [QLThumbnailReply](qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.

# QLFileThumbnailRequest (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A request to generate a thumbnail for a custom file type.

## Declaration

```objectivec
@interface QLFileThumbnailRequest : NSObject
```

## Topics

### Describing the Requested Thumbnail

- [maximumSize](qlfilethumbnailrequest/maximumsize.md): The maximum accepted size of a thumbnail.
- [minimumSize](qlfilethumbnailrequest/minimumsize.md): The minimum accepted size of a thumbnail.
- [scale](qlfilethumbnailrequest/scale.md): The scale of the requested thumbnail.
- [fileURL](qlfilethumbnailrequest/fileurl.md): The URL of the image file to use for the thumbnail.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLThumbnailProvider](qlthumbnailprovider.md): An abstract base class for creating thumbnails of custom file types.
- [QLThumbnailReply](qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.
