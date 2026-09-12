> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/images/element](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element)

# AVAssetImageGenerator.Images.Element

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An element that provides the result of an image generation request.

## Declaration

```swift
@frozen enum Element
```

## Topics

### Cases

- [AVAssetImageGenerator.Images.Element.success(requestedTime:image:actualTime:)](element/success%28requestedtime_image_actualtime_%29.md): A result that indicates an image generation request succeeded.
- [AVAssetImageGenerator.Images.Element.failure(requestedTime:error:)](element/failure%28requestedtime_error_%29.md): A result that indicates an image generation request failed.

### Accessing image data

- [image](element/image.md): An image for a requested time.
- [requestedTime](element/requestedtime.md): A time in the video timeline at which you request an image.
- [actualTime](element/actualtime.md): The actual time in the video timeline at which the image generator creates the image.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Iterating elements

- [next()](next%28%29.md): Returns the next element in the sequence.
