> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getdevicetransportstate

# GetDeviceTransportState

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [IOUserVideoDeviceTransportState](../videodriverkit/iouservideodevicetransportstate.md): Beta. The current transport state of the device.
