> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterparameters/sourceframe)

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Current source frame; must be non `nil`.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

## See Also

### Inspecting the parameters

- [nextFrames](nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [filterStrength](filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- [hasDiscontinuity](hasdiscontinuity.md): A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Current source frame; must be non `nil`.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

## See Also

### Inspecting the parameters

- [nextFrames](nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [destinationFrame](destinationframe.md): Destination frame that contains a user-allocated pixel buffer that receives the output frame.
- [filterStrength](filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
- [hasDiscontinuity](hasdiscontinuity.md): A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.
