> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/sample(forhosttime:)](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/sample(forhosttime:))

# sample(forHostTime:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Retrieves a video sample along with auxiliary information for display at the specified host time.

## Declaration

```swift
func sample(forHostTime hostTime: CMTime) -> AVPlayerVideoOutput.Sample?
```

## Parameters

- `hostTime`: A CMTime that expresses a desired host time.

<a id="return-value"></a>

## Return Value

A sample containing the frame, presentation timestamp, and active configuration for the specified host time, or nil if no sample was available for that host time.

## See Also

### Accessing video data

- [AVPlayerVideoOutput.Sample](sample.md): A video frame along with auxiliary information for display at the specified presentation time.
- [taggedBuffers(forHostTime:)](taggedbuffers%28forhosttime_%29.md): Deprecated.
- [AVPlayerVideoOutput.Configuration](configuration.md): An object that provides configuration information for the related player item.
