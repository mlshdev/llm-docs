> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/linearpcmformatflagssamplefractionshift](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/linearpcmformatflagssamplefractionshift)

# LinearPCMFormatFlagsSampleFractionShift

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A mask used to calculate the number of fractional bits in the flags field.

## Declaration

```objectivec
LinearPCMFormatFlagsSampleFractionShift
```

<a id="Discussion"></a>

## Discussion

This value completes the following relationship:

```c++
number_fractional_bits = (mFormatFlags & LinearPCMFormatFlagsSampleFractionMask) >> LinearPCMFormatFlagsSampleFractionShift
```

## See Also

### Sample Fraction Flags

- [LinearPCMFormatFlagsSampleFractionMask](linearpcmformatflagssamplefractionmask.md): A constant that indicates the bit position of a bit field within the flags, for use with fixed-point values.
