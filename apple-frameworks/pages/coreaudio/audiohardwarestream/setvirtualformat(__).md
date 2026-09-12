> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarestream/setvirtualformat(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwarestream/setvirtualformat(_:))

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
