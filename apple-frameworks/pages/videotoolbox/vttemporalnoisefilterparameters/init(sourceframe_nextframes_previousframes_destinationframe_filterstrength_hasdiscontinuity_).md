> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterparameters/init(sourceframe:nextframes:previousframes:destinationframe:filterstrength:hasdiscontinuity:)](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterparameters/init(sourceframe:nextframes:previousframes:destinationframe:filterstrength:hasdiscontinuity:))

# init(sourceFrame:nextFrames:previousFrames:destinationFrame:filterStrength:hasDiscontinuity:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new `VTTemporalNoiseFilterParameters` object.

## Declaration

```swift
init?(sourceFrame: VTFrameProcessorFrame, nextFrames: [VTFrameProcessorFrame], previousFrames: [VTFrameProcessorFrame], destinationFrame: VTFrameProcessorFrame, filterStrength: Float, hasDiscontinuity: Bool)
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `nextFrames`: Future reference frames in presentation time order to use for processing the source frame. The number of frames can vary from 0 to the number specified by [nextFrameCount](../vttemporalnoisefilterconfiguration/nextframecount.md) property.
- `previousFrames`: Past reference frames in presentation time order to use for processing the source frame. The number of frames can vary from 0 to the number specified by [previousFrameCount](../vttemporalnoisefilterconfiguration/previousframecount.md) property.
- `destinationFrame`: User-allocated pixel buffer that receives the output frame. The pixel format of `destinationFrame` must match with that of the `sourceFrame`.
- `filterStrength`: Strength of the noise-filtering to use. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- `hasDiscontinuity`: Marks sequence discontinuity, forcing the processor to reset prior to processing the source frame.

# initWithSourceFrame:nextFrames:previousFrames:destinationFrame:filterStrength:hasDiscontinuity: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new `VTTemporalNoiseFilterParameters` object.

## Declaration

```objectivec
- (instancetype) initWithSourceFrame:(VTFrameProcessorFrame *) sourceFrame nextFrames:(NSArray<VTFrameProcessorFrame *> *) nextFrames previousFrames:(NSArray<VTFrameProcessorFrame *> *) previousFrames destinationFrame:(VTFrameProcessorFrame *) destinationFrame filterStrength:(float) filterStrength hasDiscontinuity:(Boolean) hasDiscontinuity;
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `nextFrames`: Future reference frames in presentation time order to use for processing the source frame. The number of frames can vary from 0 to the number specified by [nextFrameCount](../vttemporalnoisefilterconfiguration/nextframecount.md) property.
- `previousFrames`: Past reference frames in presentation time order to use for processing the source frame. The number of frames can vary from 0 to the number specified by [previousFrameCount](../vttemporalnoisefilterconfiguration/previousframecount.md) property.
- `destinationFrame`: User-allocated pixel buffer that receives the output frame. The pixel format of `destinationFrame` must match with that of the `sourceFrame`.
- `filterStrength`: Strength of the noise-filtering to use. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- `hasDiscontinuity`: Marks sequence discontinuity, forcing the processor to reset prior to processing the source frame.
