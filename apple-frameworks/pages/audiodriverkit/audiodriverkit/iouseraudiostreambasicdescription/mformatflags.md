> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudiostreambasicdescription/mformatflags

# mFormatFlags

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 21.0+

Audio format flags for the stream’s format.

## Declaration

```objectivec
IOUserAudioFormatFlags mFormatFlags;
```

## See Also

### Identifying the Format

- [mFormatID](mformatid.md): The audio format identifier indicating the general kind of data in the stream.
- [IOUserAudioFormatID](../iouseraudioformatid.md): An enumeration of four character codes used to identify distinct audio data formats.
- [IOUserAudioFormatFlags](../iouseraudioformatflags.md): Flag values that provide more information about the format used by an audio stream basic description.
