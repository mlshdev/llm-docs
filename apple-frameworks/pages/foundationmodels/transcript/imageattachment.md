> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/imageattachment](https://developer.apple.com/documentation/foundationmodels/transcript/imageattachment)

# Transcript.ImageAttachment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An image attachment in a transcript entry.

## Declaration

```swift
struct ImageAttachment
```

## Topics

### Creating an image attachment

- [init(\_:orientation:)](imageattachment/init%28__orientation_%29.md): Creates an image attachment from a Core Graphics image.
- [init(imageURL:orientation:)](imageattachment/init%28imageurl_orientation_%29.md): Creates an image attachment from a file URL pointing to an image.

### Inspecting an image attachment

- [cgImage](imageattachment/cgimage.md): The image as a Core Graphics image.
- [ciImage](imageattachment/ciimage.md)
- [orientation](imageattachment/orientation.md): The display orientation of the image.
- [url](imageattachment/url.md): The URL of the original image asset, if the attachment was created from a URL.

### Getting the pixel buffer

- [pixelBuffer(resolution:pixelFormat:)](imageattachment/pixelbuffer%28resolution_pixelformat_%29.md): Returns the image as a pixel buffer, optionally resampled to a given resolution and pixel format.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachments

- [Transcript.Attachment](attachment.md): The types of attached content.
