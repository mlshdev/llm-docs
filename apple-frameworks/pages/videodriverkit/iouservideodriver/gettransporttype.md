> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/gettransporttype](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/gettransporttype)

# GetTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the transport type of the driver.

## Declaration

```objectivec
IOUserVideoTransportType GetTransportType();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with transport types

- [SetTransportType](settransporttype.md): Sets the transport type of the video driver.
- [IOUserVideoTransportType](../videodriverkit/iouservideotransporttype.md): The transport type of a video stream.
