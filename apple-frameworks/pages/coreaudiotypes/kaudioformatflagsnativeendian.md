> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/kaudioformatflagsnativeendian](https://developer.apple.com/documentation/coreaudiotypes/kaudioformatflagsnativeendian)

# kAudioFormatFlagsNativeEndian (Swift)

**Framework:** Core Audio Types  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that specifies whether the format is big endian, depending on the endianness of the processor at build time.

## Declaration

```swift
var kAudioFormatFlagsNativeEndian: AudioFormatFlags { get }
```

## See Also

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
- [kAudioFormatFlagsNativeFloatPacked](kaudioformatflagsnativefloatpacked.md): The flags for the canonical format of fully packed, native endian floating-point data.
- [kLinearPCMFormatFlagIsAlignedHigh](klinearpcmformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kLinearPCMFormatFlagIsBigEndian](klinearpcmformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.

# kAudioFormatFlagsNativeEndian (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A flag that specifies whether the format is big endian, depending on the endianness of the processor at build time.

## Declaration

```objectivec
kAudioFormatFlagsNativeEndian
```

## See Also

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
- [kAudioFormatFlagsNativeFloatPacked](kaudioformatflagsnativefloatpacked.md): The flags for the canonical format of fully packed, native endian floating-point data.
- [kLinearPCMFormatFlagIsAlignedHigh](klinearpcmformatflagisalignedhigh.md): A flag that indicates whether placement of the sample bits is with the high or low bits of the channel.
- [kLinearPCMFormatFlagIsBigEndian](klinearpcmformatflagisbigendian.md): A flag that indicates whether the format is big or little endian.
