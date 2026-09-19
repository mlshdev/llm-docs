> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/inputstreamconfiguration

# inputStreamConfiguration

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

This property returns the stream configuration of the device in an array of AudioBuffers (with the buffer data set to nil) which describes the list of streams and the number of channels in each stream. This corresponds to what will be passed into the IOProc.

## Declaration

```swift
var inputStreamConfiguration: [AudioBuffer] { get throws }
```
