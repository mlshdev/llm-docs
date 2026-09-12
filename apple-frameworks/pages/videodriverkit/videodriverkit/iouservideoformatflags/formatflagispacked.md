> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagispacked](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagispacked)

# FormatFlagIsPacked

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

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

- [FormatFlagIsAlignedHigh](formatflagisalignedhigh.md): Set if the sample bits are placed into the high bits of the channel, clear for low bit placement.
- [LinearPCMFormatFlagIsAlignedHigh](linearpcmformatflagisalignedhigh.md): Synonym for `FormatFlagIsAlignedHigh`.
- [LinearPCMFormatFlagIsPacked](linearpcmformatflagispacked.md): Synonym for `FormatFlagIsPacked`.
- [FormatFlagsNativeFloatPacked](formatflagsnativefloatpacked.md)
