> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/start(ioprocid:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/start(ioprocid:))

# start(IOProcID:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Starts IO for the given AudioDeviceIOProcID.

## Declaration

```swift
func start(IOProcID: AudioDeviceIOProcID? = nil) throws
```

## Parameters

- `IOProcID`: The AudioDeviceIOProcID to start. Note that this can be nil, which starts the hardware regardless of whether or not there are any IOProcs registered. This is necessary if any of the device’s timing services are to be used. A balancing call to stop with a nil IOProcID is required to stop the hardware.

<a id="discussion"></a>

## Discussion

IOProcIDs should be written in C to ensure realtime safety. IOProcIDs can be registered on the device with AudioDeviceCreateIOProcID or AudioDeviceCreateIOProcIDWithBlock from AudioHardware.h.
