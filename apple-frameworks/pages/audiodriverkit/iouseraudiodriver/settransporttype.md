> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/settransporttype](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/settransporttype)

# SetTransportType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Set the transport type of the driver.

## Declaration

```objectivec
kern_return_t SetTransportType(IOUserAudioTransportType in_transport_type);
```

## Parameters

- `in_transport_type`: The audio transport type to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

You can change the transport type dynamically. If the change succeeds, the framework sends a notification to the host to update its object state.

## See Also

### Working with Transport Type

- [GetTransportType](gettransporttype.md): Gets the transport type of the driver.
- [IOUserAudioTransportType](../audiodriverkit/iouseraudiotransporttype.md): The type of transport to deliver audio.
