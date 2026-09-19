> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagissignedinteger

# FormatFlagIsSignedInteger

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

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

- [FormatFlagIsFloat](formatflagisfloat.md): Beta. Set for floating point, clear for integer.
- [LinearPCMFormatFlagIsFloat](linearpcmformatflagisfloat.md): Beta. Synonym for `FormatFlagIsFloat`.
- [LinearPCMFormatFlagIsSignedInteger](linearpcmformatflagissignedinteger.md): Beta. Synonym for `FormatFlagIsSignedInteger`.
