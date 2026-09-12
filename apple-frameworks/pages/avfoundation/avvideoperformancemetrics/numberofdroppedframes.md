> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoperformancemetrics/numberofdroppedframes](https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/numberofdroppedframes)

# numberOfDroppedFrames (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The total number of frames the system drops prior to decoding or from missing the display deadline.

## Declaration

```swift
var numberOfDroppedFrames: Int { get }
```

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [totalAccumulatedFrameDelay](totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.

# numberOfDroppedFrames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The total number of frames the system drops prior to decoding or from missing the display deadline.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfDroppedFrames;
```

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfCorruptedVideoFrames](numberofcorruptedvideoframes.md)
- [numberOfDisplayCompositedVideoFrames](numberofdisplaycompositedvideoframes.md)
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md)
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [numberOfNonDisplayCompositedVideoFrames](numberofnondisplaycompositedvideoframes.md)
- [totalAccumulatedFrameDelay](totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalFrameDelay](totalframedelay.md)
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.
- [totalNumberOfVideoFrames](totalnumberofvideoframes.md)
