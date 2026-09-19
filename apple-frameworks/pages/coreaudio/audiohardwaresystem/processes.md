> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/processes

# processes

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of AudioHardwareProcesses that represent the Process objects for all client processes currently connected to the system.

## Declaration

```swift
var processes: [AudioHardwareProcess] { get throws }
```
