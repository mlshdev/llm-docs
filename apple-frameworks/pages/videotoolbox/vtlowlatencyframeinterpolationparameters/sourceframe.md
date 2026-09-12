> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationparameters/sourceframe)

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Source frame that you provided when creating the low-latency frame interpolation parameters object.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

## See Also

### Inspecting the parameters

- [previousFrame](previousframe.md): Previous frame that you provided when creating the low-latency frame interpolation parameters object.
- [interpolationPhase](interpolationphase-886vi.md)

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Source frame that you provided when creating the low-latency frame interpolation parameters object.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

## See Also

### Inspecting the parameters

- [previousFrame](previousframe.md): Previous frame that you provided when creating the low-latency frame interpolation parameters object.
- [destinationFrames](destinationframes.md): Array of destination frames that you provided when creating the low-latency frame interpolation parameters object.
