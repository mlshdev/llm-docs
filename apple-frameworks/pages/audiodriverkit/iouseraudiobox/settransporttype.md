> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/settransporttype](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/settransporttype)

# SetTransportType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the box’s transport type.

## Declaration

```objectivec
kern_return_t SetTransportType(IOUserAudioTransportType in_transport_type);
```

## Parameters

- `in_transport_type`: The `IOUserAudioTransportType` to set for the audio box.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the transport type sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Transport Types

- [GetTransportType](gettransporttype.md): Returns the box’s transport type.
- [IOUserAudioTransportType](../audiodriverkit/iouseraudiotransporttype.md): The type of transport to deliver audio.
