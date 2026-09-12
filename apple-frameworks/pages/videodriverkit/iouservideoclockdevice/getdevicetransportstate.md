> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getdevicetransportstate](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getdevicetransportstate)

# GetDeviceTransportState

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the transport state of the device.

## Declaration

```objectivec
IOUserVideoDeviceTransportState GetDeviceTransportState();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with transport states

- [IOUserVideoDeviceTransportState](../videodriverkit/iouservideodevicetransportstate.md): The current transport state of the device.
