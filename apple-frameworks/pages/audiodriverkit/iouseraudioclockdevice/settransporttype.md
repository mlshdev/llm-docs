> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/settransporttype](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/settransporttype)

# SetTransportType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the transport type of the clock device.

## Declaration

```objectivec
kern_return_t SetTransportType(IOUserAudioTransportType in_transport_type);
```

## Parameters

- `in_transport_type`: The transport type to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Drivers can change the transport type of the clock device dynamically. If successful, changing the transport type sends a notification to the host to update the object state.

## See Also

### Working with Transport Type

- [GetTransportType](gettransporttype.md): Gets the transport type of the clock device.
- [IOUserAudioTransportType](../audiodriverkit/iouseraudiotransporttype.md): The type of transport to deliver audio.
