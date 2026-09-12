> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/attachment/init(_:orientation:)](https://developer.apple.com/documentation/foundationmodels/attachment/init(_:orientation:))

# init(\_:orientation:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an attachment from a Core Graphics image.

## Declaration

```swift
init(_ cgImage: CGImage, orientation: CGImagePropertyOrientation? = nil)
```

## Parameters

- `cgImage`: The image to attach.
- `orientation`: The orientation to apply to the image. Pass `nil` to use the image’s natural orientation.

## See Also

### Creating an attachment instance

- [init(imageURL:orientation:)](init%28imageurl_orientation_%29.md): Conforms when `Content` is `ImageAttachmentContent`. Creates an attachment from a file URL pointing to an image.
