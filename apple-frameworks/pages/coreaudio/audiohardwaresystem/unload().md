> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/unload()

# unload()

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Terminates all IO on all devices within the process and releases all resources capable of being released. This essentially returns the HAL to its uninitialized state.

## Declaration

```swift
func unload() throws
```
