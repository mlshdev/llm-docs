> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/getnumberavailablestreamformats](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/getnumberavailablestreamformats)

# GetNumberAvailableStreamFormats

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the number of available stream formats.

## Declaration

```objectivec
size_t GetNumberAvailableStreamFormats();
```

<a id="return-value"></a>

## Return Value

The number of available stream formats, as a [size_t](https://developer.apple.com/documentation/kernel/size_t).

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Stream Formats

- [SetCurrentStreamFormat](setcurrentstreamformat.md): Sets the current stream format to a given audio stream basic description.
- [GetCurrentStreamFormat](getcurrentstreamformat.md): Returns the current stream format, as an audio stream basic description.
- [SetAvailableStreamFormats](setavailablestreamformats.md): Sets the available stream formats to an array of audio stream basic descriptions.
- [GetAvailableStreamFormats](getavailablestreamformats.md): Returns the available stream formats as an array of audio stream basic descriptions.
- [IOUserAudioStreamBasicDescription](../audiodriverkit/iouseraudiostreambasicdescription.md): A structure that encapsulates all of the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](getstreamdirection.md): Gets the direction of the stream: input or output.
- [IOUserAudioStreamDirection](../audiodriverkit/iouseraudiostreamdirection.md): A type representing the direction of audio flow.
- [SetStreamIsActive](setstreamisactive.md): Sets a Boolean value that indicates whether the stream is active and doing I/O.
- [GetStreamIsActive](getstreamisactive.md): Gets a value that indicates whether the stream is active and doing I/O.
