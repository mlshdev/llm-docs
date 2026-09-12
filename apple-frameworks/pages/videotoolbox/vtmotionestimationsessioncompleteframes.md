> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationsessioncompleteframes](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsessioncompleteframes)

# VTMotionEstimationSessionCompleteFrames

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Directs the motion-estimation session to emit all pending frames and waits for completion.

## Declaration

```objectivec
extern OSStatus VTMotionEstimationSessionCompleteFrames(VTMotionEstimationSessionRef session);
```

<a id="discussion"></a>

## Discussion

Directs the motion-estimation session to emit all pending frames, then waits for all outstanding requests to complete, then returns.

## See Also

### Handling output

- [VTMotionEstimationOutputHandler](vtmotionestimationoutputhandler.md): A block invoked by motion-estimation session when frame processing is complete.
- [VTMotionEstimationSessionCopySourcePixelBufferAttributes](vtmotionestimationsessioncopysourcepixelbufferattributes.md): Copies the attributes for source pixel buffers expected by motion-estimation session.
- [VTMotionEstimationSessionEstimateMotionVectors](vtmotionestimationsessionestimatemotionvectors.md): Creates a new pixel buffer that contains motion vectors between the input pixel buffers.
