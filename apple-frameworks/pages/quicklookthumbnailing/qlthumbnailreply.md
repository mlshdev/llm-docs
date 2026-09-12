> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailreply](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailreply)

# QLThumbnailReply (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The object that provides a thumbnail for a custom file type.

## Declaration

```swift
class QLThumbnailReply
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Creating a Thumbnail

- [init(contextSize:currentContextDrawing:)](qlthumbnailreply/init%28contextsize_currentcontextdrawing_%29.md): Creates a new thumbnail for a custom file type in the current context.
- [init(contextSize:drawing:)](qlthumbnailreply/init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.
- [init(imageFileURL:)](qlthumbnailreply/init%28imagefileurl_%29.md): Creates a new thumbnail for a custom file type using a file at the given URL.

### Customizing a Thumbnail Reply

- [extensionBadge](qlthumbnailreply/extensionbadge.md): A short string that identifies the file type that the system uses as a badge when producing an icon thumbnail.

### Initializers

- [init(contextSize:currentContextDrawingBlock:)](qlthumbnailreply/init%28contextsize_currentcontextdrawingblock_%29.md)
- [init(contextSize:drawingBlock:)](qlthumbnailreply/init%28contextsize_drawingblock_%29.md)

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
- [QLFileThumbnailRequest](qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.

# QLThumbnailReply (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The object that provides a thumbnail for a custom file type.

## Declaration

```objectivec
@interface QLThumbnailReply : NSObject
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Creating a Thumbnail

- [replyWithContextSize:currentContextDrawingBlock:](qlthumbnailreply/init%28contextsize_currentcontextdrawing_%29.md): Creates a new thumbnail for a custom file type in the current context.
- [replyWithContextSize:drawingBlock:](qlthumbnailreply/init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.
- [replyWithImageFileURL:](qlthumbnailreply/init%28imagefileurl_%29.md): Creates a new thumbnail for a custom file type using a file at the given URL.

### Customizing a Thumbnail Reply

- [extensionBadge](qlthumbnailreply/extensionbadge.md): A short string that identifies the file type that the system uses as a badge when producing an icon thumbnail.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLThumbnailProvider](qlthumbnailprovider.md): An abstract base class for creating thumbnails of custom file types.
- [QLFileThumbnailRequest](qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.
