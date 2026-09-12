> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audio-format-flags](https://developer.apple.com/documentation/coreaudiotypes/audio-format-flags)

# Audio Format Flags (Swift)

**Framework:** Core Audio Types  
**Kind:** API Collection

Commonly used combinations of data format flags for an audio stream description.

<a id="overview"></a>

## Overview

Prefer using fixed-point formats in [iOS](https://developer.apple.com/documentation/packagedescription/platform/ios) and floating-point formats in [macOS](https://developer.apple.com/documentation/packagedescription/platform/macos).

## Topics

### Format flags

- [kAppleLosslessFormatFlag_16BitSourceData](kapplelosslessformatflag_16bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 16-bit native endian signed integer data.
- [kAppleLosslessFormatFlag_20BitSourceData](kapplelosslessformatflag_20bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 20-bit native endian signed integer data aligned high in 24 bits.
- [kAppleLosslessFormatFlag_24BitSourceData](kapplelosslessformatflag_24bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 24-bit native endian signed integer data.
- [kAppleLosslessFormatFlag_32BitSourceData](kapplelosslessformatflag_32bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 32-bit native endian signed integer data.
- [kAudioFormatFlagIsAlignedHigh](kaudioformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kAudioFormatFlagIsBigEndian](kaudioformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.
- [kAudioFormatFlagIsFloat](kaudioformatflagisfloat.md): A flag that indicates whether the format is floating point or integer.
- [kAudioFormatFlagIsNonInterleaved](kaudioformatflagisnoninterleaved.md): A flag that indicates whether the samples for each channel or frame are continguously located, and whether the layout of the channels or frames is end-to-end.
- [kAudioFormatFlagIsNonMixable](kaudioformatflagisnonmixable.md): A flag that indicates the format is nonmixable.
- [kAudioFormatFlagIsPacked](kaudioformatflagispacked.md): A flag that indicates whether placement of the sample bits occupy the entire available bits of the channel.
- [kAudioFormatFlagIsSignedInteger](kaudioformatflagissignedinteger.md): A flag that indicates whether the format is signed or unsigned integer.
- [kAudioFormatFlagsAreAllClear](kaudioformatflagsareallclear.md): A flag that indicates whether all the flags are clear.
- [kAudioFormatFlagsNativeEndian](kaudioformatflagsnativeendian.md): A flag that specifies whether the format is big endian, depending on the endianness of the processor at build time.
- [kAudioFormatFlagsNativeFloatPacked](kaudioformatflagsnativefloatpacked.md): The flags for the canonical format of fully packed, native endian floating-point data.
- [kLinearPCMFormatFlagIsAlignedHigh](klinearpcmformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kLinearPCMFormatFlagIsBigEndian](klinearpcmformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.
- [kLinearPCMFormatFlagIsFloat](klinearpcmformatflagisfloat.md): A flag that indicates whether the format is floating point or integer.
- [kLinearPCMFormatFlagIsNonInterleaved](klinearpcmformatflagisnoninterleaved.md): A flag that indicates whether the samples for each channel or frame are continguously located, and whether the layout of the channels or frames is end-to-end.
- [kLinearPCMFormatFlagIsNonMixable](klinearpcmformatflagisnonmixable.md): A flag that indicates the format is nonmixable.
- [kLinearPCMFormatFlagIsPacked](klinearpcmformatflagispacked.md): A flag that indicates whether placement of the sample bits occupy the entire available bits of the channel.
- [kLinearPCMFormatFlagIsSignedInteger](klinearpcmformatflagissignedinteger.md): A flag that indicates whether the format is signed or unsigned integer.
- [kLinearPCMFormatFlagsAreAllClear](klinearpcmformatflagsareallclear.md): A flag that indicates whether all the flags are clear.
- [kLinearPCMFormatFlagsSampleFractionMask](klinearpcmformatflagssamplefractionmask.md): A flag that indicates the sample fraction mask.
- [kLinearPCMFormatFlagsSampleFractionShift](klinearpcmformatflagssamplefractionshift.md): A flag that indicates the bit position of the PCM flag’s 6-bit bitfield.
- [kAudioFormatFlagsAudioUnitCanonical](kaudioformatflagsaudiounitcanonical.md): Deprecated. The flags for the canonical audio unit and processing sample type.
- [kAudioFormatFlagsCanonical](kaudioformatflagscanonical.md): Deprecated. The set of flags for the canonical input-output audio sample type.

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [Audio Format Identifiers](audio-format-identifiers.md): Identifiers for supported audio formats.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

# Audio Format Flags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** API Collection

Commonly used combinations of data format flags for an audio stream description.

<a id="overview"></a>

## Overview

Prefer using fixed-point formats in [iOS](https://developer.apple.com/documentation/packagedescription/platform/ios) and floating-point formats in [macOS](https://developer.apple.com/documentation/packagedescription/platform/macos).

## Topics

### Format flags

- [kAppleLosslessFormatFlag_16BitSourceData](kapplelosslessformatflag_16bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 16-bit native endian signed integer data.
- [kAppleLosslessFormatFlag_20BitSourceData](kapplelosslessformatflag_20bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 20-bit native endian signed integer data aligned high in 24 bits.
- [kAppleLosslessFormatFlag_24BitSourceData](kapplelosslessformatflag_24bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 24-bit native endian signed integer data.
- [kAppleLosslessFormatFlag_32BitSourceData](kapplelosslessformatflag_32bitsourcedata.md): A flag that indicates Apple Lossless data sourced from 32-bit native endian signed integer data.
- [kAudioFormatFlagIsAlignedHigh](kaudioformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kAudioFormatFlagIsBigEndian](kaudioformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.
- [kAudioFormatFlagIsFloat](kaudioformatflagisfloat.md): A flag that indicates whether the format is floating point or integer.
- [kAudioFormatFlagIsNonInterleaved](kaudioformatflagisnoninterleaved.md): A flag that indicates whether the samples for each channel or frame are continguously located, and whether the layout of the channels or frames is end-to-end.
- [kAudioFormatFlagIsNonMixable](kaudioformatflagisnonmixable.md): A flag that indicates the format is nonmixable.
- [kAudioFormatFlagIsPacked](kaudioformatflagispacked.md): A flag that indicates whether placement of the sample bits occupy the entire available bits of the channel.
- [kAudioFormatFlagIsSignedInteger](kaudioformatflagissignedinteger.md): A flag that indicates whether the format is signed or unsigned integer.
- [kAudioFormatFlagsAreAllClear](kaudioformatflagsareallclear.md): A flag that indicates whether all the flags are clear.
- [kAudioFormatFlagsNativeEndian](kaudioformatflagsnativeendian.md): A flag that specifies whether the format is big endian, depending on the endianness of the processor at build time.
- [kAudioFormatFlagsNativeFloatPacked](kaudioformatflagsnativefloatpacked.md): The flags for the canonical format of fully packed, native endian floating-point data.
- [kLinearPCMFormatFlagIsAlignedHigh](klinearpcmformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kLinearPCMFormatFlagIsBigEndian](klinearpcmformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.
- [kLinearPCMFormatFlagIsFloat](klinearpcmformatflagisfloat.md): A flag that indicates whether the format is floating point or integer.
- [kLinearPCMFormatFlagIsNonInterleaved](klinearpcmformatflagisnoninterleaved.md): A flag that indicates whether the samples for each channel or frame are continguously located, and whether the layout of the channels or frames is end-to-end.
- [kLinearPCMFormatFlagIsNonMixable](klinearpcmformatflagisnonmixable.md): A flag that indicates the format is nonmixable.
- [kLinearPCMFormatFlagIsPacked](klinearpcmformatflagispacked.md): A flag that indicates whether placement of the sample bits occupy the entire available bits of the channel.
- [kLinearPCMFormatFlagIsSignedInteger](klinearpcmformatflagissignedinteger.md): A flag that indicates whether the format is signed or unsigned integer.
- [kLinearPCMFormatFlagsAreAllClear](klinearpcmformatflagsareallclear.md): A flag that indicates whether all the flags are clear.
- [kLinearPCMFormatFlagsSampleFractionMask](klinearpcmformatflagssamplefractionmask.md): A flag that indicates the sample fraction mask.
- [kLinearPCMFormatFlagsSampleFractionShift](klinearpcmformatflagssamplefractionshift.md): A flag that indicates the bit position of the PCM flag’s 6-bit bitfield.
- [kAudioFormatFlagsAudioUnitCanonical](kaudioformatflagsaudiounitcanonical.md): Deprecated. The flags for the canonical audio unit and processing sample type.
- [kAudioFormatFlagsCanonical](kaudioformatflagscanonical.md): Deprecated. The set of flags for the canonical input-output audio sample type.
