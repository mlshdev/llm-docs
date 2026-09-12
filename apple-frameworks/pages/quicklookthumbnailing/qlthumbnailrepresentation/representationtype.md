> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailrepresentation/representationtype](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailrepresentation/representationtype)

# QLThumbnailRepresentation.RepresentationType (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The different types of thumbnails that you can create.

## Declaration

```swift
enum RepresentationType
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](../providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Enumeration Cases

- [QLThumbnailRepresentation.RepresentationType.icon](representationtype/icon.md): A file icon representation of an image.
- [QLThumbnailRepresentation.RepresentationType.lowQualityThumbnail](representationtype/lowqualitythumbnail.md): A cached thumbnail representation of an image.
- [QLThumbnailRepresentation.RepresentationType.thumbnail](representationtype/thumbnail.md): A thumbnail representation of an image.

### Initializers

- [init(rawValue:)](representationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Thumbnail Images

- [cgImage](cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [nsImage](nsimage.md): A thumbnail in the form of an AppKit image object.
- [uiImage](uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](type.md): The type of thumbnail.
- [contentRect](contentrect.md): The rectangle within the thumbnail image of the document that represents its contents.

# QLThumbnailRepresentationType (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The different types of thumbnails that you can create.

## Declaration

```objectivec
enum QLThumbnailRepresentationType : NSInteger;
```

## Mentioned In

- [Providing Thumbnails of Your Custom File Types](../providing-thumbnails-of-your-custom-file-types.md)

## Topics

### Enumeration Cases

- [QLThumbnailRepresentationTypeIcon](representationtype/icon.md): A file icon representation of an image.
- [QLThumbnailRepresentationTypeLowQualityThumbnail](representationtype/lowqualitythumbnail.md): A cached thumbnail representation of an image.
- [QLThumbnailRepresentationTypeThumbnail](representationtype/thumbnail.md): A thumbnail representation of an image.

## See Also

### Thumbnail Images

- [CGImage](cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [NSImage](nsimage.md): A thumbnail in the form of an AppKit image object.
- [UIImage](uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](type.md): The type of thumbnail.
- [contentRect](contentrect.md): The rectangle within the thumbnail image of the document that represents its contents.
