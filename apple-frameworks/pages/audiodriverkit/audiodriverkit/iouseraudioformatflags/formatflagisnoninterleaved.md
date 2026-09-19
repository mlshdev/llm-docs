> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioformatflags/formatflagisnoninterleaved

# FormatFlagIsNonInterleaved

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

A flag to indicate whether the channels interleave their samples in the data.

## Declaration

```objectivec
FormatFlagIsNonInterleaved
```

<a id="Discussion"></a>

## Discussion

Set this flag if the each channel lays out its samples contiguously, with the channels layed out end to end. Clear this flag if each frame lays out its samples contiguously, with the frames layed out end to end.

## See Also

### Channel Layout Flags

- [LinearPCMFormatFlagIsNonInterleaved](linearpcmformatflagisnoninterleaved.md): A flag to indicate whether PCM channels interleave their samples in the data.
