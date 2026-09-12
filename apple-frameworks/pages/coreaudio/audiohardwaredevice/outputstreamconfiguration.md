> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/outputstreamconfiguration](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/outputstreamconfiguration)

# outputStreamConfiguration

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

This property returns the stream configuration of the device in an array of AudioBuffers (with the buffer data set to nil) which describes the list of streams and the number of channels in each stream. This corresponds to what will be passed into the IOProc.

## Declaration

```swift
var outputStreamConfiguration: [AudioBuffer] { get throws }
```
