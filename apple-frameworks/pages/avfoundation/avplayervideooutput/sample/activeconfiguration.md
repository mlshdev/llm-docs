> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayervideooutput/sample/activeconfiguration

# activeConfiguration

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The active configuration that this sample was derived from.

## Declaration

```swift
let activeConfiguration: AVPlayerVideoOutput.Configuration
```

## See Also

### Inspecting a sample

- [presentationTime](presentationtime.md): A CMTime representing the true display deadline for this sample in terms of the corresponding AVPlayerItem’s timebase.
- [taggedBuffers](taggedbuffers.md): An array of CMTaggedBuffers containing the frame for the specified time.
