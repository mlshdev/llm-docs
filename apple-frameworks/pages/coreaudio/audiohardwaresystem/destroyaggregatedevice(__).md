> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/destroyaggregatedevice(_:)

# destroyAggregateDevice(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Destroys the aggregate device represented by the given AudioHardwareAggregateDevice.

## Declaration

```swift
func destroyAggregateDevice(_ device: AudioHardwareAggregateDevice) throws
```

## Parameters

- `device`: The AudioHardwareAggregateDevice to destroy.

<a id="discussion"></a>

## Discussion

The actual destruction of the aggregate device is asynchronous and may take place after the call to this routine has returned.
