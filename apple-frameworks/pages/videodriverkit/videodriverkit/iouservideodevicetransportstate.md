> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideodevicetransportstate

# IOUserVideoDeviceTransportState

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

The current transport state of the device.

## Declaration

```objectivec
enum IOUserVideoDeviceTransportState : uint64_t;
```

## Topics

### Transport states

- [Stopped](iouservideodevicetransportstate/stopped.md): Beta. Device transport state is stopped.
- [Prewarmed](iouservideodevicetransportstate/prewarmed.md): Beta. Device transport state is prewarmed.
- [Running](iouservideodevicetransportstate/running.md): Beta. Device transport state is running.

## See Also

### Working with transport states

- [GetDeviceTransportState](../iouservideoclockdevice/getdevicetransportstate.md): Beta. Gets the transport state of the device.
