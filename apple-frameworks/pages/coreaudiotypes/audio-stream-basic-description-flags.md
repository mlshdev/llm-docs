> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audio-stream-basic-description-flags](https://developer.apple.com/documentation/coreaudiotypes/audio-stream-basic-description-flags)

# Audio Stream Basic Description Flags (Swift)

**Framework:** Core Audio Types  
**Kind:** API Collection

The standard format flags for an audio stream basic description.

<a id="overview"></a>

## Overview

When you use an [AudioStreamBasicDescription](audiostreambasicdescription.md), the fields describe the complete layout of the sample data in the buffers that the description represents, whereas, typically, an [AudioBuffer](audiobuffer.md) in an [AudioBufferList](audiobufferlist.md) represents those buffers.

However, when a description has the [kAudioFormatFlagIsNonInterleaved](kaudioformatflagisnoninterleaved.md) flag, the audio buffer list has a different structure and semantic. In this case, the description fields describe the format of one of the audio buffers in the list, and each audio buffer in the list has a single (mono) channel of audio data. Then the description’s [mChannelsPerFrame](audiostreambasicdescription/mchannelsperframe.md) indicates the total number of audio buffers in the audio buffer list, and each buffer contains one channel. This is primarily for use with the audio unit and audio converter representation of this list, and not the audio hardware usage.

## Topics

### Constants

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

## See Also

### Enumerations

- [Anonymous](2962796-anonymous.md)
- [Anonymous](4278542-anonymous.md)

# Audio Stream Basic Description Flags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** API Collection

The standard format flags for an audio stream basic description.

<a id="overview"></a>

## Overview

When you use an [AudioStreamBasicDescription](audiostreambasicdescription.md), the fields describe the complete layout of the sample data in the buffers that the description represents, whereas, typically, an [AudioBuffer](audiobuffer.md) in an [AudioBufferList](audiobufferlist.md) represents those buffers.

However, when a description has the [kAudioFormatFlagIsNonInterleaved](kaudioformatflagisnoninterleaved.md) flag, the audio buffer list has a different structure and semantic. In this case, the description fields describe the format of one of the audio buffers in the list, and each audio buffer in the list has a single (mono) channel of audio data. Then the description’s [mChannelsPerFrame](audiostreambasicdescription/mchannelsperframe.md) indicates the total number of audio buffers in the audio buffer list, and each buffer contains one channel. This is primarily for use with the audio unit and audio converter representation of this list, and not the audio hardware usage.

## Topics

### Constants

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
