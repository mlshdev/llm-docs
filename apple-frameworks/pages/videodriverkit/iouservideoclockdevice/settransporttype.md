> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/settransporttype

# SetTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the transport type of the clock device.

## Declaration

```objectivec
kern_return_t SetTransportType(IOUserVideoTransportType in_transport_type);
```

## Parameters

- `in_transport_type`: IOUserVideoTransportType to set

<a id="discussion"></a>

## Discussion

Drivers can change the transport type of the clock device dynamically. The object sends a notification to the host to update the object state on success.

## See Also

### Working with transport type

- [GetTransportType](gettransporttype.md): Beta. Gets the transport type of the IOUserVideoClockDevice.
- [IOUserVideoTransportType](../videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.
