> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/images/element/failure(requestedtime:error:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/failure(requestedtime:error:))

# AVAssetImageGenerator.Images.Element.failure(requestedTime:error:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A result that indicates an image generation request failed.

## Declaration

```swift
case failure(requestedTime: CMTime, error: any Error)
```

## Parameters

- `requestedTime`: A time in the video timeline at which you requested an image.
- `error`: An error that indicates the reason for the failure.

## See Also

### Cases

- [AVAssetImageGenerator.Images.Element.success(requestedTime:image:actualTime:)](success%28requestedtime_image_actualtime_%29.md): A result that indicates an image generation request succeeded.
