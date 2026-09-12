> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getavailablestreamformats](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getavailablestreamformats)

# GetAvailableStreamFormats

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the available basic descriptions for the stream.

## Declaration

```objectivec
size_t GetAvailableStreamFormats(IOUserVideoStreamBasicDescription *out_formats, size_t in_num_formats);
```

## Parameters

- `out_formats`: Pointer to a buffer of `IOUserVideoStreamBasicDescription` objects with size corresponding to `in_num_formats`.
- `in_num_formats`: The number of formats in `out_formats `buffer.

<a id="return-value"></a>

## Return Value

The number of formats were set in the `out_formats` buffer.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Sets the current stream format.
- [GetCurrentStreamFormat](getcurrentstreamformat.md): Gets the current basic description of the stream.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Sets the available descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): The direction of a video stream.
- [SetStreamIsActive](setstreamisactive.md): Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](getstreamisactive.md): Gets the stream activity state.
