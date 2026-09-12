> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getcurrentstreamformat](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getcurrentstreamformat)

# GetCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current basic description of the stream.

## Declaration

```objectivec
IOUserVideoStreamBasicDescription GetCurrentStreamFormat();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the current stream format.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Sets the current stream format.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](getavailablestreamformats.md): Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): The direction of a video stream.
- [SetStreamIsActive](setstreamisactive.md): Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](getstreamisactive.md): Gets the stream activity state.
