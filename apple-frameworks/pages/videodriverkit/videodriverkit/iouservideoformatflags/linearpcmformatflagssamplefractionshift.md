> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionshift](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/linearpcmformatflagssamplefractionshift)

# LinearPCMFormatFlagsSampleFractionShift

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

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

- [LinearPCMFormatFlagsSampleFractionMask](linearpcmformatflagssamplefractionmask.md): The linear PCM flags contain a 6-bit bitfield indicating that an integer format is to be interpreted as fixed point.
