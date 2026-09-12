> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoperformancemetrics/totalframedelay](https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/totalframedelay)

# totalFrameDelay

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property

## Declaration

```objectivec
@property (nonatomic, readonly) double totalFrameDelay;
```

<a id="discussion"></a>

## Discussion

\[SPI\] The accumulated amount of time, in microseconds, between the prescribed presentation times of displayed video frames and the actual time at which they were displayed.

This delay is always greater than or equal to zero since frames must never be displayed before their presentation time. Non-zero delays are a sign of playback jitter and possible loss of A/V sync. Same as totalAccumulatedFrameDelay.

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfCorruptedVideoFrames](numberofcorruptedvideoframes.md)
- [numberOfDisplayCompositedVideoFrames](numberofdisplaycompositedvideoframes.md)
- [numberOfDroppedFrames](numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md)
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [numberOfNonDisplayCompositedVideoFrames](numberofnondisplaycompositedvideoframes.md)
- [totalAccumulatedFrameDelay](totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.
- [totalNumberOfVideoFrames](totalnumberofvideoframes.md)
