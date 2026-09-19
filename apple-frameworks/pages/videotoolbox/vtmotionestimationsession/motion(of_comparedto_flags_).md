> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsession/motion(of:comparedto:flags:)

# motion(of:comparedTo:flags:)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
final func motion(of currentImage: CVReadOnlyPixelBuffer, comparedTo referenceImage: CVReadOnlyPixelBuffer, flags: VTMotionEstimationSession.FrameFlags = .init(rawValue:0)) async throws -> VTMotionEstimationSession.Motion
```

## See Also

### Estimating motion

- [VTMotionEstimationSession.FrameFlags](frameflags.md)
