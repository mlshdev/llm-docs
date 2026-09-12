> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideodevicetransportstate](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideodevicetransportstate)

# IOUserVideoDeviceTransportState

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

The current transport state of the device.

## Declaration

```objectivec
enum IOUserVideoDeviceTransportState : uint64_t;
```

## Topics

### Transport states

- [Stopped](iouservideodevicetransportstate/stopped.md): Device transport state is stopped.
- [Prewarmed](iouservideodevicetransportstate/prewarmed.md): Device transport state is prewarmed.
- [Running](iouservideodevicetransportstate/running.md): Device transport state is running.

## See Also

### Working with transport states

- [GetDeviceTransportState](../iouservideoclockdevice/getdevicetransportstate.md): Gets the transport state of the device.
