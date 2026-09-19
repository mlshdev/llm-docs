> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setbufferframesize(_:)

# setBufferFrameSize(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the bufferFrameSize property.

## Declaration

```swift
func setBufferFrameSize(_ size: Int) throws
```

## Parameters

- `size`: An Int whose value indicates the number of frames in the IO buffers.
