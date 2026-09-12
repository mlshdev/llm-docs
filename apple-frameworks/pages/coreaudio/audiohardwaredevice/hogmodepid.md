> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/hogmodepid](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/hogmodepid)

# hogModePID

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A pid_t indicating the process that currently owns exclusive access to the device or a value of -1 indicating that the device is currently available to all processes.

## Declaration

```swift
var hogModePID: pid_t { get throws }
```

<a id="discussion"></a>

## Discussion

If the device is in a non-mixable mode, the HAL will automatically take hog mode on behalf of the first process to start an IOProc.
