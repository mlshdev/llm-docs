> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/togglehogmode()](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/togglehogmode())

# toggleHogMode()

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Toggle exclusive access to the device for the current process. If another process owns exclusive access, that remains unchanged. If the current process owns exclusive access, it is released and made available to all processes again. If no process has exclusive access, this process gains ownership of exclusive access.

## Declaration

```swift
func toggleHogMode() throws -> pid_t
```

<a id="return-value"></a>

## Return Value

A pid_t indicating the process that currently owns exclusive access to the device or a value of -1 indicating that the device is currently available to all processes.
