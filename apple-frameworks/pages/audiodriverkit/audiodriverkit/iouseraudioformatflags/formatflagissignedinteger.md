> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagissignedinteger](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagissignedinteger)

# FormatFlagIsSignedInteger

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A flag to indicate whether samples are signed or unsigned integers.

## Declaration

```objectivec
FormatFlagIsSignedInteger
```

<a id="Discussion"></a>

## Discussion

Set this value for signed integers; clear it for unsigned. This flag is only valid if [FormatFlagIsFloat](formatflagisfloat.md) is clear.

## See Also

### Numeric Representation Flags

- [FormatFlagIsFloat](formatflagisfloat.md): A flag to indicate whether samples are floating-point values.
- [LinearPCMFormatFlagIsFloat](linearpcmformatflagisfloat.md): A flag to indicate whether PCM samples are floating-point values.
- [LinearPCMFormatFlagIsSignedInteger](linearpcmformatflagissignedinteger.md): A flag to indicate whether PCM samples are signed or unsigned integers.
