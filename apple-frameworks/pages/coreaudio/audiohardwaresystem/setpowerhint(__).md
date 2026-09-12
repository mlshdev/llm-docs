> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/setpowerhint(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setpowerhint(_:))

# setPowerHint(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the powerHint property.

## Declaration

```swift
func setPowerHint(_ hint: AudioHardwarePowerHint) throws
```

## Parameters

- `hint`: An AudioHardwarePowerHint enum indicating how aggressive the system can be with optimizations that save power.
