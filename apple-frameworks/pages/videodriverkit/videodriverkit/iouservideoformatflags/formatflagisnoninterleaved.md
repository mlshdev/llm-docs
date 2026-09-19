> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoformatflags/formatflagisnoninterleaved

# FormatFlagIsNonInterleaved

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

Set if the samples for each channel are located contiguously and the channels are layed out end to end, clear if the samples for each frame are layed out contiguously and the frames layed out end to end.

## Declaration

```objectivec
FormatFlagIsNonInterleaved
```

## See Also

### Channel layout flags

- [LinearPCMFormatFlagIsNonInterleaved](linearpcmformatflagisnoninterleaved.md): Beta. Synonym for `FormatFlagIsNonInterleaved`.
