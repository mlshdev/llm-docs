> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/sample/presentationtime](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/sample/presentationtime)

# presentationTime

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A CMTime representing the true display deadline for this sample in terms of the corresponding AVPlayerItem’s timebase.

## Declaration

```swift
let presentationTime: CMTime
```

## See Also

### Inspecting a sample

- [activeConfiguration](activeconfiguration.md): The active configuration that this sample was derived from.
- [taggedBuffers](taggedbuffers.md): An array of CMTaggedBuffers containing the frame for the specified time.
