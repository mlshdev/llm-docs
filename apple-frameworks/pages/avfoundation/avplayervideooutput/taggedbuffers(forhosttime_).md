> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/taggedbuffers(forhosttime:)](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/taggedbuffers(forhosttime:))

# taggedBuffers(forHostTime:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ (deprecated in 27.0) · iPadOS 17.2+ (deprecated in 27.0) · Mac Catalyst 17.2+ (deprecated in 27.0) · macOS 14.2+ (deprecated in 27.0) · tvOS 17.2+ (deprecated in 27.0) · visionOS 1.1+ (deprecated in 27.0) · watchOS 10.2+ (deprecated in 27.0)

> Use AVPlayerVideoOutput.sample instead

## Declaration

```swift
func taggedBuffers(forHostTime hostTime: CMTime) -> (taggedBufferGroup: [CMTaggedBuffer], presentationTime: CMTime, activeConfiguration: AVPlayerVideoOutput.Configuration)?
```

## See Also

### Accessing video data

- [sample(forHostTime:)](sample%28forhosttime_%29.md): Retrieves a video sample along with auxiliary information for display at the specified host time.
- [AVPlayerVideoOutput.Sample](sample.md): A video frame along with auxiliary information for display at the specified presentation time.
- [AVPlayerVideoOutput.Configuration](configuration.md): An object that provides configuration information for the related player item.
