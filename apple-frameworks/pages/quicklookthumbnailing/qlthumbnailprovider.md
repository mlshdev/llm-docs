> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailprovider](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailprovider)

# QLThumbnailProvider (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An abstract base class for creating thumbnails of custom file types.

## Declaration

```swift
class QLThumbnailProvider
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Essentials

- [provideThumbnail(for:\_:)](qlthumbnailprovider/providethumbnail%28for___%29.md): Creates a thumbnail of a custom file type for a specific request.

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
- [QLFileThumbnailRequest](qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.
- [QLThumbnailReply](qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.

# QLThumbnailProvider (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An abstract base class for creating thumbnails of custom file types.

## Declaration

```objectivec
@interface QLThumbnailProvider : NSObject
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Essentials

- [provideThumbnailForFileRequest:completionHandler:](qlthumbnailprovider/providethumbnail%28for___%29.md): Creates a thumbnail of a custom file type for a specific request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLFileThumbnailRequest](qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.
- [QLThumbnailReply](qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.
