> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideostreamdirection](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostreamdirection)

# IOUserVideoStreamDirection

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

The direction of a video stream.

## Declaration

```objectivec
enum IOUserVideoStreamDirection : uint32_t;
```

## Topics

### Stream directions

- [Input](iouservideostreamdirection/input.md): Input stream direction.
- [Output](iouservideostreamdirection/output.md): Output stream direction.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](../iouservideostream/setcurrentstreamformat.md): Sets the current stream format.
- [GetCurrentStreamFormat](../iouservideostream/getcurrentstreamformat.md): Gets the current basic description of the stream.
- [SetAvailableStreamFormats](../iouservideostream/setavailablestreamformats.md): Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](../iouservideostream/getavailablestreamformats.md): Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](../iouservideostream/getnumberavailablestreamformats.md): Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](iouservideostreambasicdescription.md): A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](../iouservideostream/getstreamdirection.md): Gets the direction of the stream.
- [SetStreamIsActive](../iouservideostream/setstreamisactive.md): Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](../iouservideostream/getstreamisactive.md): Gets the stream activity state.
