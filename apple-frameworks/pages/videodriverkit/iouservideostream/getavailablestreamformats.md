> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getavailablestreamformats

# GetAvailableStreamFormats

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Beta. Sets the current stream format.
- [GetCurrentStreamFormat](getcurrentstreamformat.md): Beta. Gets the current basic description of the stream.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Beta. Sets the available descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Beta. Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Beta. Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): Beta. The direction of a video stream.
- [SetStreamIsActive](setstreamisactive.md): Beta. Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](getstreamisactive.md): Beta. Gets the stream activity state.
