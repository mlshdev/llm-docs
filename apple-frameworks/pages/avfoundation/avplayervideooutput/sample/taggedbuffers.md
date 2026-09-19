> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayervideooutput/sample/taggedbuffers

# taggedBuffers

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of CMTaggedBuffers containing the frame for the specified time.

## Declaration

```swift
let taggedBuffers: [CMTaggedDynamicBuffer]
```

## See Also

### Inspecting a sample

- [activeConfiguration](activeconfiguration.md): The active configuration that this sample was derived from.
- [presentationTime](presentationtime.md): A CMTime representing the true display deadline for this sample in terms of the corresponding AVPlayerItem’s timebase.
