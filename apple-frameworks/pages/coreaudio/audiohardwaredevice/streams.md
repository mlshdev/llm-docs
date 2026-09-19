> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/streams

# streams

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareStreams that represent the IO streams of the device.

## Declaration

```swift
var streams: [AudioHardwareStream] { get throws }
```

<a id="discussion"></a>

## Discussion

If a notification is received for this property, any cached stream objects for the device become invalid and need to be re-fetched.
