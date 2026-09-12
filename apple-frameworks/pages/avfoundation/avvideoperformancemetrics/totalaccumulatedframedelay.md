> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoperformancemetrics/totalaccumulatedframedelay](https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/totalaccumulatedframedelay)

# totalAccumulatedFrameDelay (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.

## Declaration

```swift
var totalAccumulatedFrameDelay: TimeInterval { get }
```

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfDroppedFrames](numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.

# totalAccumulatedFrameDelay (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval totalAccumulatedFrameDelay;
```

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfCorruptedVideoFrames](numberofcorruptedvideoframes.md)
- [numberOfDisplayCompositedVideoFrames](numberofdisplaycompositedvideoframes.md)
- [numberOfDroppedFrames](numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md)
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [numberOfNonDisplayCompositedVideoFrames](numberofnondisplaycompositedvideoframes.md)
- [totalFrameDelay](totalframedelay.md)
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.
- [totalNumberOfVideoFrames](totalnumberofvideoframes.md)
