> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailrepresentation](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailrepresentation)

# QLThumbnailRepresentation (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Information about the thumbnail that the thumbnail generator returns.

## Declaration

```swift
class QLThumbnailRepresentation
```

<a id="overview"></a>

## Overview

QuickLook Thumbnailing is a non-UI framework, so your app doesn’t have to link to either [UIKit](../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit). Quicklook Thumbnailing generates a thumbnail as a Core Graphics image object and makes the thumbnail available as the [cgImage](qlthumbnailrepresentation/cgimage.md) property. If an app links to AppKit or UIKit, the thumbnail is available through the [nsImage](qlthumbnailrepresentation/nsimage.md) or [uiImage](qlthumbnailrepresentation/uiimage.md) properties.

For more information on the different types of thumbnails that [QLThumbnailGenerator](qlthumbnailgenerator.md) can create, see [QLThumbnailGenerator.Request.RepresentationTypes](qlthumbnailgenerator/request/representationtypes-swift.struct.md).

## Topics

### Thumbnail Images

- [cgImage](qlthumbnailrepresentation/cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [nsImage](qlthumbnailrepresentation/nsimage.md): A thumbnail in the form of an AppKit image object.
- [uiImage](qlthumbnailrepresentation/uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](qlthumbnailrepresentation/type.md): The type of thumbnail.
- [contentRect](qlthumbnailrepresentation/contentrect.md): The rectangle within the thumbnail image of the document that represents its contents.
- [QLThumbnailRepresentation.RepresentationType](qlthumbnailrepresentation/representationtype.md): The different types of thumbnails that you can create.

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
- [QLThumbnailGenerator](qlthumbnailgenerator.md): An object that generates thumbnail images based on provided requirements.

# QLThumbnailRepresentation (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Information about the thumbnail that the thumbnail generator returns.

## Declaration

```objectivec
@interface QLThumbnailRepresentation : NSObject
```

<a id="overview"></a>

## Overview

QuickLook Thumbnailing is a non-UI framework, so your app doesn’t have to link to either [UIKit](../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit). Quicklook Thumbnailing generates a thumbnail as a Core Graphics image object and makes the thumbnail available as the [CGImage](qlthumbnailrepresentation/cgimage.md) property. If an app links to AppKit or UIKit, the thumbnail is available through the [NSImage](qlthumbnailrepresentation/nsimage.md) or [UIImage](qlthumbnailrepresentation/uiimage.md) properties.

For more information on the different types of thumbnails that [QLThumbnailGenerator](qlthumbnailgenerator.md) can create, see [QLThumbnailGenerationRequestRepresentationTypes](qlthumbnailgenerator/request/representationtypes-swift.struct.md).

## Topics

### Thumbnail Images

- [CGImage](qlthumbnailrepresentation/cgimage.md): A thumbnail in the form of a Core Graphics image object.
- [NSImage](qlthumbnailrepresentation/nsimage.md): A thumbnail in the form of an AppKit image object.
- [UIImage](qlthumbnailrepresentation/uiimage.md): A thumbnail in the form of a UIKit image object.
- [type](qlthumbnailrepresentation/type.md): The type of thumbnail.
- [contentRect](qlthumbnailrepresentation/contentrect.md): The rectangle within the thumbnail image of the document that represents its contents.
- [QLThumbnailRepresentationType](qlthumbnailrepresentation/representationtype.md): The different types of thumbnails that you can create.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Thumbnail Generation

- [Creating Quick Look Thumbnails to Preview Files in Your App](creating-quick-look-thumbnails-to-preview-files-in-your-app.md): Generate thumbnails of images, text files, PDFs, audio files, videos, and more.
- [QLThumbnailGenerator](qlthumbnailgenerator.md): An object that generates thumbnail images based on provided requirements.
