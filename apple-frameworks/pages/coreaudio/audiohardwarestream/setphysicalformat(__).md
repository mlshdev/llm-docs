> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarestream/setphysicalformat(_:)

# setPhysicalFormat(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the physicalFormat property.

## Declaration

```swift
func setPhysicalFormat(_ format: AudioStreamBasicDescription) throws
```

## Parameters

- `format`: An AudioStreamBasicDescription that describes the data format in which the hardware for the owning device will perform IO transactions.
