> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagisnonmixable

# FormatFlagIsNonMixable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

Set to indicate when a format is non-mixable.

## Declaration

```objectivec
FormatFlagIsNonMixable
```

<a id="discussion"></a>

## Discussion

This flag is used  only when interacting with the HAL’s stream format information. It is not a valid flag for any other uses.

## See Also

### Mixability flags

- [LinearPCMFormatFlagIsNonMixable](linearpcmformatflagisnonmixable.md): Beta. Synonym for `FormatFlagIsNonMixable`.
