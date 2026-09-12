> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/setcurrentstreamformat](https://developer.apple.com/documentation/videodriverkit/iouservideostream/setcurrentstreamformat)

# SetCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current stream format.

## Declaration

```objectivec
kern_return_t SetCurrentStreamFormat(const IOUserVideoStreamBasicDescription *in_format);
```

## Parameters

- `in_format`: Pointer to a description.

<a id="discussion"></a>

## Discussion

Changing the format send sa notification to the host to update the object state if successful. The object’s work queue synchronizes access to the stream format.

## See Also

### Working with stream formats

- [GetCurrentStreamFormat](getcurrentstreamformat.md): Gets the current basic description of the stream.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](getavailablestreamformats.md): Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): The direction of a video stream.
- [SetStreamIsActive](setstreamisactive.md): Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](getstreamisactive.md): Gets the stream activity state.
