> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration/minimumdimensions

# minimumDimensions

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The minimum dimensions of a source frame that the processor supports.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CMVideoDimensions minimumDimensions;
```

## See Also

### Determining processor availability

- [supported](issupported.md): Reports whether the system supports this processor.
- [maximumDimensions](maximumdimensions.md): The maximum dimensions of a source frame that the processor supports.
