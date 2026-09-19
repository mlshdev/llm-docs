> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarestream/setvirtualformat(_:)

# setVirtualFormat(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the virtualFormat property.

## Declaration

```swift
func setVirtualFormat(_ format: AudioStreamBasicDescription) throws
```

## Parameters

- `format`: An AudioStreamBasicDescription that describes the data format in which all IOProcs for the owning device will perform IO transactions.
