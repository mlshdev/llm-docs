> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatid

# IOUserVideoFormatID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

Identifiers used for formats of audio data.

## Declaration

```objectivec
enum IOUserVideoFormatID : uint32_t;
```

## Topics

### RGB formats

- [Format_32ARGB](iouservideoformatid/format_32argb.md): Beta.
- [Format_32BGRA](iouservideoformatid/format_32bgra.md): Beta.

### Y’CbCr formats

- [Format_422YpCbCr8](iouservideoformatid/format_422ypcbcr8.md): Beta.
- [Format_422YpCbCr10](iouservideoformatid/format_422ypcbcr10.md): Beta.

## See Also

### Working with video streams

- [IOUserVideoStreamBasicDescription](iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [IOUserVideoFormatFlags](iouservideoformatflags.md): Beta. Standard format flags for a basic description.
- [IOUserVideoStreamDirection](iouservideostreamdirection.md): Beta. The direction of a video stream.
- [IOUserVideoStreamTerminalType](iouservideostreamterminaltype.md): Beta. The terminal type of video stream.
