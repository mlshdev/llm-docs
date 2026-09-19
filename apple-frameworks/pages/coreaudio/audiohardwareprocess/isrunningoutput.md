> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareprocess/isrunningoutput

# isRunningOutput

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where a value of true indicates that the process is running IO and there is at least one active output stream.

## Declaration

```swift
var isRunningOutput: Bool { get throws }
```
