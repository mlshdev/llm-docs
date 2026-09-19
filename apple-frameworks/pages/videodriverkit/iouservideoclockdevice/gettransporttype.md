> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/gettransporttype

# GetTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the transport type of the IOUserVideoClockDevice.

## Declaration

```objectivec
IOUserVideoTransportType GetTransportType();
```

<a id="return-value"></a>

## Return Value

The transport type of the clock device.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to this value.

## See Also

### Working with transport type

- [SetTransportType](settransporttype.md): Beta. Sets the transport type of the clock device.
- [IOUserVideoTransportType](../videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.
