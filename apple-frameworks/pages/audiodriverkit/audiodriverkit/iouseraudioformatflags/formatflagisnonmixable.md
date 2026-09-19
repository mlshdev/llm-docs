> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagisnonmixable

# FormatFlagIsNonMixable

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A flag to indicate whether the format can’t mix.

## Declaration

```objectivec
FormatFlagIsNonMixable
```

<a id="Discussion"></a>

## Discussion

This flag is for use only when interacting with the Core Audio HAL’s stream format information. It isn’t a valid flag for any other uses.

## See Also

### Mixability Flags

- [LinearPCMFormatFlagIsNonMixable](linearpcmformatflagisnonmixable.md): A flag to indicate whether the PCM format can’t mix.
