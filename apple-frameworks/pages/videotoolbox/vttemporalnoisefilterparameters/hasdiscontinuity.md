> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterparameters/hasdiscontinuity](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterparameters/hasdiscontinuity)

# hasDiscontinuity (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.

## Declaration

```swift
var hasDiscontinuity: Bool { get set }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame; must be non `nil`.
- [nextFrames](nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [filterStrength](filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.

# hasDiscontinuity (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A Boolean that indicates sequence discontinuity, forcing the processor to reset prior to processing the source frame.

## Declaration

```objectivec
@property (nonatomic) BOOL hasDiscontinuity;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame; must be non `nil`.
- [nextFrames](nextframes.md): Future reference frames in presentation time order that you use to process the source frame.
- [previousFrames](previousframes.md): Past reference frames in presentation time order that you use to process the source frame.
- [destinationFrame](destinationframe.md): Destination frame that contains a user-allocated pixel buffer that receives the output frame.
- [filterStrength](filterstrength.md): A parameter to control the strength of noise-filtering. The value can range from the minimum strength of 0.0 to the maximum strength of 1.0. Change in filter strength causes the processor to flush all frames in the queue prior to processing the source frame.
