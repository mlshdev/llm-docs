> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionestimationframeflags/kvtmotionestimationframeflags_currentbufferwillbenextreferencebuffer](https://developer.apple.com/documentation/videotoolbox/vtmotionestimationframeflags/kvtmotionestimationframeflags_currentbufferwillbenextreferencebuffer)

# kVTMotionEstimationFrameFlags_CurrentBufferWillBeNextReferenceBuffer

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A hint to the motion-estimation session that you are going to reuse the `currentBuffer` as `referenceBuffer` in the next call to [VTMotionEstimationSessionEstimateMotionVectors](../vtmotionestimationsessionestimatemotionvectors.md). Using this flag allows the motion-estimation processor to deliver better performance.

## Declaration

```objectivec
kVTMotionEstimationFrameFlags_CurrentBufferWillBeNextReferenceBuffer
```
