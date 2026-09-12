> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/iocycleusage](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/iocycleusage)

# ioCycleUsage

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Float whose range is from 0 to 1. This value indicates how much of the client portion of the IO cycle the process will use.

## Declaration

```swift
var ioCycleUsage: Float { get throws }
```

<a id="discussion"></a>

## Discussion

The client portion of the IO cycle is the portion of the cycle in which the device calls the IOProcs so this property does not the apply to the duration of the entire cycle.
