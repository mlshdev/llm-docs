> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostreambasicdescription

# IOUserVideoStreamBasicDescription

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.

## Declaration

```objectivec
struct IOUserVideoStreamBasicDescription;
```

<a id="overview"></a>

## Overview

This structure is sufficient to describe any constant bit rate format that has channels that are the same size. Extensions are required for variable bit rate data and for constant bit rate data where the channels have unequal sizes. However, where applicable, the appropriate fields will be filled out correctly for these kinds of formats (the extra data is provided via separate properties). In all fields, a value of 0 indicates that the field is either unknown, not applicable or otherwise is inappropriate for the format and should be ignored. Note that 0 is still a valid value for most formats in the `mFormatFlags` field.

In audio data a frame is one sample across all channels. In non-interleaved audio, the per frame fields identify one channel. In interleaved audio, the per frame fields identify the set of n channels. In uncompressed audio, a Packet is one frame, (`mFramesPerPacket == 1`). In compressed audio, a Packet is an indivisible chunk of compressed data, for example an AAC packet will contain 1024 sample frames.

## Topics

### Accessing the frame rate

- [mFrameRate](iouservideostreambasicdescription/mframerate.md): Beta.

### Identifying the codec

- [mVideoCodecType](iouservideostreambasicdescription/mvideocodectype.md): Beta.
- [IOUserVideoFormatID](iouservideoformatid.md): Beta. Identifiers used for formats of audio data.
- [mVideoCodecFlags](iouservideostreambasicdescription/mvideocodecflags.md): Beta.
- [IOUserVideoFormatFlags](iouservideoformatflags.md): Beta. Standard format flags for a basic description.

### Accessing spatial properties

- [mWidth](iouservideostreambasicdescription/mwidth.md): Beta.
- [mHeight](iouservideostreambasicdescription/mheight.md): Beta.

### Accessing timing properties

- [mFrameTimeScale](iouservideostreambasicdescription/mframetimescale.md): Beta.
- [mFrameTimeValue](iouservideostreambasicdescription/mframetimevalue.md): Beta.

### Accessing reserved properties

Don’t use these properties, which VideoDriverKit reserves for its own use.

- [mReserved1](iouservideostreambasicdescription/mreserved1.md): Beta.
- [mReserved2](iouservideostreambasicdescription/mreserved2.md): Beta.

## See Also

### Working with stream formats

- [SetCurrentStreamFormat](../iouservideostream/setcurrentstreamformat.md): Beta. Sets the current stream format.
- [GetCurrentStreamFormat](../iouservideostream/getcurrentstreamformat.md): Beta. Gets the current basic description of the stream.
- [SetAvailableStreamFormats](../iouservideostream/setavailablestreamformats.md): Beta. Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](../iouservideostream/getavailablestreamformats.md): Beta. Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](../iouservideostream/getnumberavailablestreamformats.md): Beta. Gets the number of available description for the stream.
- [GetStreamDirection](../iouservideostream/getstreamdirection.md): Beta. Gets the direction of the stream.
- [IOUserVideoStreamDirection](iouservideostreamdirection.md): Beta. The direction of a video stream.
- [SetStreamIsActive](../iouservideostream/setstreamisactive.md): Beta. Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](../iouservideostream/getstreamisactive.md): Beta. Gets the stream activity state.
