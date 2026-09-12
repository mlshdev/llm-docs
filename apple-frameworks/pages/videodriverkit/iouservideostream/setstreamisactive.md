> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/setstreamisactive](https://developer.apple.com/documentation/videodriverkit/iouservideostream/setstreamisactive)

# SetStreamIsActive

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets whether that the stream is active and doing IO.

## Declaration

```objectivec
kern_return_t SetStreamIsActive(bool in_is_active);
```

## Parameters

- `in_is_active`: True if the stream is enabled and doing IO; otherwise, false.

<a id="discussion"></a>

## Discussion

Changing the stream active state will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the stream active state.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Sets the current stream format.
- [GetCurrentStreamFormat](getcurrentstreamformat.md): Gets the current basic description of the stream.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](getavailablestreamformats.md): Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): The direction of a video stream.
- [GetStreamIsActive](getstreamisactive.md): Gets the stream activity state.
