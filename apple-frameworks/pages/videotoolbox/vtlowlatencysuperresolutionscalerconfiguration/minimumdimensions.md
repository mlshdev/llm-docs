> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/minimumdimensions

# minimumDimensions

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Minimum dimensions for a source frame for the processor.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CMVideoDimensions minimumDimensions;
```

## See Also

### Determining processor availability

- [supported](issupported.md): Reports whether the system supports this processor on the current configuration.
- [maximumDimensions](maximumdimensions.md): Maximum dimensions for a source frame for the processor.
