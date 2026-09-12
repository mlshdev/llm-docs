> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/stop(ioprocid:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/stop(ioprocid:))

# stop(IOProcID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Stops IO for the given AudioDeviceIOProcID.

## Declaration

```swift
func stop(IOProcID: AudioDeviceIOProcID? = nil) throws
```

## Parameters

- `IOProcID`: The AudioDeviceIOProcID to stop. This can be nil to stop the hardware if a call to start was made with a nil IOProcID.
