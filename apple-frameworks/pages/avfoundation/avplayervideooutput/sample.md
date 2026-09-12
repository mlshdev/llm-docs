> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/sample](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/sample)

# AVPlayerVideoOutput.Sample

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A video frame along with auxiliary information for display at the specified presentation time.

## Declaration

```swift
struct Sample
```

## Topics

### Inspecting a sample

- [activeConfiguration](sample/activeconfiguration.md): The active configuration that this sample was derived from.
- [presentationTime](sample/presentationtime.md): A CMTime representing the true display deadline for this sample in terms of the corresponding AVPlayerItem’s timebase.
- [taggedBuffers](sample/taggedbuffers.md): An array of CMTaggedBuffers containing the frame for the specified time.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing video data

- [sample(forHostTime:)](sample%28forhosttime_%29.md): Retrieves a video sample along with auxiliary information for display at the specified host time.
- [taggedBuffers(forHostTime:)](taggedbuffers%28forhosttime_%29.md): Deprecated.
- [AVPlayerVideoOutput.Configuration](configuration.md): An object that provides configuration information for the related player item.
