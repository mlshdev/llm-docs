> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationparameters/previousframe](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationparameters/previousframe)

# previousFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Previous frame that you provided when creating the low-latency frame interpolation parameters object.

## Declaration

```swift
var previousFrame: VTFrameProcessorFrame { get }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Source frame that you provided when creating the low-latency frame interpolation parameters object.
- [interpolationPhase](interpolationphase-886vi.md)

# previousFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Previous frame that you provided when creating the low-latency frame interpolation parameters object.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * previousFrame;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Source frame that you provided when creating the low-latency frame interpolation parameters object.
- [destinationFrames](destinationframes.md): Array of destination frames that you provided when creating the low-latency frame interpolation parameters object.
