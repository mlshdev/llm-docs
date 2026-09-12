> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionmask](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionmask)

# LinearPCMFormatFlagsSampleFractionMask

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

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

- [LinearPCMFormatFlagsSampleFractionShift](linearpcmformatflagssamplefractionshift.md): The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.
