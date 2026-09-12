> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagsnativefloatpacked](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagsnativefloatpacked)

# FormatFlagsNativeFloatPacked

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A flag indicating native-endian packed floating-point values.

## Declaration

```objectivec
FormatFlagsNativeFloatPacked
```

<a id="Discussion"></a>

## Discussion

This convienence flag set the [FormatFlagIsFloat](formatflagisfloat.md), [FormatFlagsNativeEndian](formatflagsnativeendian.md), and [FormatFlagIsPacked](formatflagispacked.md) flags.

## See Also

### Bitwise Layout Flags

- [FormatFlagIsAlignedHigh](formatflagisalignedhigh.md): A flag to indicate whether sample bits use the high bits of the channel.
- [LinearPCMFormatFlagIsAlignedHigh](linearpcmformatflagisalignedhigh.md): A flag to indicate whether PCM sample bits use the high bits of the channel.
- [FormatFlagIsPacked](formatflagispacked.md): A flag to indicate whether sample bits use all available bits of the channel.
- [LinearPCMFormatFlagIsPacked](linearpcmformatflagispacked.md): A flag to indicate whether PCM sample bits use all available bits of the channel.
