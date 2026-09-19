> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagispacked

# FormatFlagIsPacked

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

Set if the sample bits occupy the entire available bits for the channel, clear if they are high or low aligned within the channel.

## Declaration

```objectivec
FormatFlagIsPacked
```

<a id="discussion"></a>

## Discussion

Even if this flag is clear, it is implied that this flag is set if the `VideoStreamBasicDescription` is filled out such that the fields have the following relationship:

```
((mBitsPerSample / 8) * mChannelsPerFrame) == mBytesPerFrame
```

## See Also

### Bitwise layout flags

- [FormatFlagIsAlignedHigh](formatflagisalignedhigh.md): Beta. Set if the sample bits are placed into the high bits of the channel, clear for low bit placement.
- [LinearPCMFormatFlagIsAlignedHigh](linearpcmformatflagisalignedhigh.md): Beta. Synonym for `FormatFlagIsAlignedHigh`.
- [LinearPCMFormatFlagIsPacked](linearpcmformatflagispacked.md): Beta. Synonym for `FormatFlagIsPacked`.
- [FormatFlagsNativeFloatPacked](formatflagsnativefloatpacked.md): Beta.
