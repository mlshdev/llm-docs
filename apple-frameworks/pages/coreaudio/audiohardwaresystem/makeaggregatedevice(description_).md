> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/makeaggregatedevice(description:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/makeaggregatedevice(description:))

# makeAggregateDevice(description:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Creates a new aggregate device  using the provided description.

## Declaration

```swift
func makeAggregateDevice(description: [String : Any]) throws -> AudioHardwareAggregateDevice?
```

## Parameters

- `description`: The Dictionary that specifies how to build the aggregate device. The supported keys are described in the AudioAggregateDevice Constants section of AudioHardware.h.

<a id="return-value"></a>

## Return Value

An AudioHardwareAggregateDevice representing the newly created aggregate device.
