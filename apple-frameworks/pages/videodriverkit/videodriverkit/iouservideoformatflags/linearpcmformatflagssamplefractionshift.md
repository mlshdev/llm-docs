> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionshift

# LinearPCMFormatFlagsSampleFractionShift

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.

## Declaration

```objectivec
LinearPCMFormatFlagsSampleFractionShift
```

<a id="discussion"></a>

## Discussion

The value indicates the number of bits are used to represent the fractional portion of each sample value. This constant indicates the bit position (counting from the right) of the bitfield in `mFormatFlags`.

## See Also

### Sample fraction flags

- [LinearPCMFormatFlagsSampleFractionMask](linearpcmformatflagssamplefractionmask.md): Beta. The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.
