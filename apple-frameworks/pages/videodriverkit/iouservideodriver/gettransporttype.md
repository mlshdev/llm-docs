> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/gettransporttype

# GetTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetTransportType](settransporttype.md): Beta. Sets the transport type of the video driver.
- [IOUserVideoTransportType](../videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.
