> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/setiocycleusage(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setiocycleusage(_:))

# setIOCycleUsage(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the ioCycleUsage property.

## Declaration

```swift
func setIOCycleUsage(_ usage: Float) throws
```

## Parameters

- `usage`: A Float whose range is from 0 to 1. This value indicates how much of the client portion of the IO cycle the process will use.
