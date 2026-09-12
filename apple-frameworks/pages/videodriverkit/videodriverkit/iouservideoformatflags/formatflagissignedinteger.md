> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagissignedinteger](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagissignedinteger)

# FormatFlagIsSignedInteger

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

Set for signed integer, clear for unsigned integer.

## Declaration

```objectivec
FormatFlagIsSignedInteger
```

<a id="discussion"></a>

## Discussion

This flag is only valid if `FormatFlagIsFloat` is clear.

## See Also

### Numeric representation flags

- [FormatFlagIsFloat](formatflagisfloat.md): Set for floating point, clear for integer.
- [LinearPCMFormatFlagIsFloat](linearpcmformatflagisfloat.md): Synonym for `FormatFlagIsFloat`.
- [LinearPCMFormatFlagIsSignedInteger](linearpcmformatflagissignedinteger.md): Synonym for `FormatFlagIsSignedInteger`.
