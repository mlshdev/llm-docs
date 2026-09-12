> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoperformancemetrics/numberofdisplaycompositedvideoframes](https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/numberofdisplaycompositedvideoframes)

# numberOfDisplayCompositedVideoFrames

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property

## Declaration

```objectivec
@property (nonatomic, readonly) unsigned long numberOfDisplayCompositedVideoFrames;
```

<a id="discussion"></a>

## Discussion

\[SPI\] The total number of frames that were composited in detached mode.  Same as numberOfFramesDisplayedUsingOptimizedCompositing.

## See Also

### Inspecting metrics

- [numberOfCorruptedFrames](numberofcorruptedframes.md): The total number of corrupted frames.
- [numberOfCorruptedVideoFrames](numberofcorruptedvideoframes.md)
- [numberOfDroppedFrames](numberofdroppedframes.md): The total number of frames the system drops prior to decoding or from missing the display deadline.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md)
- [numberOfFramesDisplayedUsingOptimizedCompositing](numberofframesdisplayedusingoptimizedcompositing.md): The total number of full screen frames rendered in a special power-efficient mode that didn’t require compositing with other UI elements.
- [numberOfNonDisplayCompositedVideoFrames](numberofnondisplaycompositedvideoframes.md)
- [totalAccumulatedFrameDelay](totalaccumulatedframedelay.md): The accumulated amount of time between the prescribed presentation times of displayed video frames and their actual time of display.
- [totalFrameDelay](totalframedelay.md)
- [totalNumberOfFrames](totalnumberofframes.md): The total number of frames that display if no frames drop.
- [totalNumberOfVideoFrames](totalnumberofvideoframes.md)
