> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtframeprocessorparameters/destinationframes-8yges

# destinationFrames

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Array of destination frames for processors which may output more than one processed frame.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<VTFrameProcessorFrame *> * destinationFrames;
```
