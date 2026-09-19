> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagisalignedhigh

# FormatFlagIsAlignedHigh

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

Set if the sample bits are placed into the high bits of the channel, clear for low bit placement.

## Declaration

```objectivec
FormatFlagIsAlignedHigh
```

<a id="discussion"></a>

## Discussion

This flag is only valid if `FormatFlagIsPacked` is clear.

## See Also

### Bitwise layout flags

- [LinearPCMFormatFlagIsAlignedHigh](linearpcmformatflagisalignedhigh.md): Beta. Synonym for `FormatFlagIsAlignedHigh`.
- [FormatFlagIsPacked](formatflagispacked.md): Beta. Set if the sample bits occupy the entire available bits for the channel, clear if they are high or low aligned within the channel.
- [LinearPCMFormatFlagIsPacked](linearpcmformatflagispacked.md): Beta. Synonym for `FormatFlagIsPacked`.
- [FormatFlagsNativeFloatPacked](formatflagsnativefloatpacked.md): Beta.
