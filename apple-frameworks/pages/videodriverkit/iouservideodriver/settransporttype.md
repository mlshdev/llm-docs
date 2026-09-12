> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/settransporttype](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/settransporttype)

# SetTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the transport type of the video driver.

## Declaration

```objectivec
kern_return_t SetTransportType(IOUserVideoTransportType in_transport_type);
```

## Parameters

- `in_transport_type`: IOUserVideoTransportType to set.

<a id="discussion"></a>

## Discussion

Transport type can be changed dynamically. The object sends a notification to the host to update the object state on success.

## See Also

### Working with transport types

- [GetTransportType](gettransporttype.md): Gets the transport type of the driver.
- [IOUserVideoTransportType](../videodriverkit/iouservideotransporttype.md): The transport type of a video stream.
