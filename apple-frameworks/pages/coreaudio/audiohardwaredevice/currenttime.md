> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/currenttime](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/currenttime)

# currentTime

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioTimeStamp containing the current time from the device.

## Declaration

```swift
var currentTime: AudioTimeStamp { get throws }
```

<a id="discussion"></a>

## Discussion

Note that the device has to be running.
