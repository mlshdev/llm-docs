> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionmask

# LinearPCMFormatFlagsSampleFractionMask

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.

## Declaration

```objectivec
LinearPCMFormatFlagsSampleFractionMask
```

<a id="discussion"></a>

## Discussion

This constant is the mask used to extract that bitfield from `mFormatFlags`:

```
number_fractional_bits = (mFormatFlags & LinearPCMFormatFlagsSampleFractionMask) >> LinearPCMFormatFlagsSampleFractionShift
```

## See Also

### Sample fraction flags

- [LinearPCMFormatFlagsSampleFractionShift](linearpcmformatflagssamplefractionshift.md): Beta. The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.
