> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getcurrentstreamformat

# GetCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Beta. Sets the current stream format.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Beta. Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](getavailablestreamformats.md): Beta. Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](getnumberavailablestreamformats.md): Beta. Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](../videodriverkit/iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Beta. Gets the direction of the stream.
- [IOUserVideoStreamDirection](../videodriverkit/iouservideostreamdirection.md): Beta. The direction of a video stream.
- [SetStreamIsActive](setstreamisactive.md): Beta. Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](getstreamisactive.md): Beta. Gets the stream activity state.
