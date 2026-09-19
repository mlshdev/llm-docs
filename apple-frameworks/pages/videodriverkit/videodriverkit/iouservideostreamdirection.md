> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostreamdirection

# IOUserVideoStreamDirection

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

The direction of a video stream.

## Declaration

```objectivec
enum IOUserVideoStreamDirection : uint32_t;
```

## Topics

### Stream directions

- [Input](iouservideostreamdirection/input.md): Beta. Input stream direction.
- [Output](iouservideostreamdirection/output.md): Beta. Output stream direction.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](../iouservideostream/setcurrentstreamformat.md): Beta. Sets the current stream format.
- [GetCurrentStreamFormat](../iouservideostream/getcurrentstreamformat.md): Beta. Gets the current basic description of the stream.
- [SetAvailableStreamFormats](../iouservideostream/setavailablestreamformats.md): Beta. Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](../iouservideostream/getavailablestreamformats.md): Beta. Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](../iouservideostream/getnumberavailablestreamformats.md): Beta. Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](../iouservideostream/getstreamdirection.md): Beta. Gets the direction of the stream.
- [SetStreamIsActive](../iouservideostream/setstreamisactive.md): Beta. Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](../iouservideostream/getstreamisactive.md): Beta. Gets the stream activity state.
