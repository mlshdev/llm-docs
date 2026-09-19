> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags

# IOUserVideoFormatFlags

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

Standard format flags for a basic description.

## Declaration

```objectivec
enum IOUserVideoFormatFlags : uint32_t;
```

<a id="overview"></a>

## Overview

These are the standard flags for use in the `mFormatFlags` field of the `VideoStreamBasicDescription` structure.

Typically, when an ASBD is being used, the fields describe the complete layout of the sample data in the buffers that are represented by this description - where typically those buffers are represented by an VideoBuffer that is contained in an VideoBufferList.

However, when an ASBD has the [FormatFlagIsNonInterleaved](iouservideoformatflags/formatflagisnoninterleaved.md) flag, the video buffer list has a different structure and semantic. In this case, the ASBD fields describe the format of oneof the video buffersthat are contained in the list, and each video buffer in the list is determined to have a single (mono) channel of audio data. Then, the ASBD’s `mChannelsPerFrame` indicates the total number of buffers that are contained within the video buffer list - where each buffer contains one channel. This is used primarily with the `VideoUnit` (and `VideoConverter`) representation of this list - and won’t be found in the `VideoHardware` usage of this structure.

## Topics

### Numeric representation flags

- [FormatFlagIsFloat](iouservideoformatflags/formatflagisfloat.md): Beta. Set for floating point, clear for integer.
- [LinearPCMFormatFlagIsFloat](iouservideoformatflags/linearpcmformatflagisfloat.md): Beta. Synonym for `FormatFlagIsFloat`.
- [FormatFlagIsSignedInteger](iouservideoformatflags/formatflagissignedinteger.md): Beta. Set for signed integer, clear for unsigned integer.
- [LinearPCMFormatFlagIsSignedInteger](iouservideoformatflags/linearpcmformatflagissignedinteger.md): Beta. Synonym for `FormatFlagIsSignedInteger`.

### Bitwise layout flags

- [FormatFlagIsAlignedHigh](iouservideoformatflags/formatflagisalignedhigh.md): Beta. Set if the sample bits are placed into the high bits of the channel, clear for low bit placement.
- [LinearPCMFormatFlagIsAlignedHigh](iouservideoformatflags/linearpcmformatflagisalignedhigh.md): Beta. Synonym for `FormatFlagIsAlignedHigh`.
- [FormatFlagIsPacked](iouservideoformatflags/formatflagispacked.md): Beta. Set if the sample bits occupy the entire available bits for the channel, clear if they are high or low aligned within the channel.
- [LinearPCMFormatFlagIsPacked](iouservideoformatflags/linearpcmformatflagispacked.md): Beta. Synonym for `FormatFlagIsPacked`.
- [FormatFlagsNativeFloatPacked](iouservideoformatflags/formatflagsnativefloatpacked.md): Beta.

### Endianness flags

- [FormatFlagIsBigEndian](iouservideoformatflags/formatflagisbigendian.md): Beta. Set for big endian, clear for little endian.
- [LinearPCMFormatFlagIsBigEndian](iouservideoformatflags/linearpcmformatflagisbigendian.md): Beta. Synonym for `FormatFlagIsBigEndian`.
- [FormatFlagsNativeEndian](iouservideoformatflags/formatflagsnativeendian.md): Beta.

### Apple Lossless flags

- [AppleLosslessFormatFlag_16BitSourceData](iouservideoformatflags/applelosslessformatflag_16bitsourcedata.md): Beta. This flag is set for Apple Lossless data that was sourced from 16 bit native endian signed integer data.
- [AppleLosslessFormatFlag_20BitSourceData](iouservideoformatflags/applelosslessformatflag_20bitsourcedata.md): Beta. This flag is set for Apple Lossless data that was sourced from 20 bit native endian signed integer data aligned high in 24 bits.
- [AppleLosslessFormatFlag_24BitSourceData](iouservideoformatflags/applelosslessformatflag_24bitsourcedata.md): Beta. This flag is set for Apple Lossless data that was sourced from 24 bit native endian signed integer data.
- [AppleLosslessFormatFlag_32BitSourceData](iouservideoformatflags/applelosslessformatflag_32bitsourcedata.md): Beta. This flag is set for Apple Lossless data that was sourced from 32 bit native endian signed integer data.

### Channel layout flags

- [FormatFlagIsNonInterleaved](iouservideoformatflags/formatflagisnoninterleaved.md): Beta. Set if the samples for each channel are located contiguously and the channels are layed out end to end, clear if the samples for each frame are layed out contiguously and the frames layed out end to end.
- [LinearPCMFormatFlagIsNonInterleaved](iouservideoformatflags/linearpcmformatflagisnoninterleaved.md): Beta. Synonym for `FormatFlagIsNonInterleaved`.

### Mixability flags

- [FormatFlagIsNonMixable](iouservideoformatflags/formatflagisnonmixable.md): Beta. Set to indicate when a format is non-mixable.
- [LinearPCMFormatFlagIsNonMixable](iouservideoformatflags/linearpcmformatflagisnonmixable.md): Beta. Synonym for `FormatFlagIsNonMixable`.

### Sample fraction flags

- [LinearPCMFormatFlagsSampleFractionMask](iouservideoformatflags/linearpcmformatflagssamplefractionmask.md): Beta. The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.
- [LinearPCMFormatFlagsSampleFractionShift](iouservideoformatflags/linearpcmformatflagssamplefractionshift.md): Beta. The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.

### Special purpose flags

- [FormatFlagsAreAllClear](iouservideoformatflags/formatflagsareallclear.md): Beta. Set if all the flags would be clear.
- [LinearPCMFormatFlagsAreAllClear](iouservideoformatflags/linearpcmformatflagsareallclear.md): Beta. Synonym for `FormatFlagsAreAllClear`.

## See Also

### Working with video streams

- [IOUserVideoStreamBasicDescription](iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [IOUserVideoFormatID](iouservideoformatid.md): Beta. Identifiers used for formats of audio data.
- [IOUserVideoStreamDirection](iouservideostreamdirection.md): Beta. The direction of a video stream.
- [IOUserVideoStreamTerminalType](iouservideostreamterminaltype.md): Beta. The terminal type of video stream.
