> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationparameters/destinationframes

# destinationFrames

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Array of destination frames that you provided when creating the low-latency frame interpolation parameters object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<VTFrameProcessorFrame *> * destinationFrames;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Source frame that you provided when creating the low-latency frame interpolation parameters object.
- [previousFrame](previousframe.md): Previous frame that you provided when creating the low-latency frame interpolation parameters object.
