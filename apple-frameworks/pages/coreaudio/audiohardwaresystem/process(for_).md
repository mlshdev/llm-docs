> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/process(for:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/process(for:))

# process(for:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

## Declaration

```swift
func process(for PID: pid_t) throws -> AudioHardwareProcess?
```

## Parameters

- `PID`: A pid_t representing the PID of the process object to obtain.

<a id="return-value"></a>

## Return Value

The AudioHardwareProcess that corresponds with the given PID, or nil if the PID does not correspond with any process object.
