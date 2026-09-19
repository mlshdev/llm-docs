> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/success(requestedtime:image:actualtime:)

# AVAssetImageGenerator.Images.Element.success(requestedTime:image:actualTime:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A result that indicates an image generation request succeeded.

## Declaration

```swift
case success(requestedTime: CMTime, image: CGImage, actualTime: CMTime)
```

## Parameters

- `requestedTime`: A time in the video timeline at which you requested an image.
- `image`: An image for the requested time.
- `actualTime`: A time in the video timeline at which the image generator created an image.

## See Also

### Cases

- [AVAssetImageGenerator.Images.Element.failure(requestedTime:error:)](failure%28requestedtime_error_%29.md): A result that indicates an image generation request failed.
