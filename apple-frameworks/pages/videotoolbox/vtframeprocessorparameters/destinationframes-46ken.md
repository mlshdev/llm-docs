> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorparameters/destinationframes-46ken](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorparameters/destinationframes-46ken)

# destinationFrames

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Array of [VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frames for processors which may output more than one processed frame.

## Declaration

```swift
var destinationFrames: [VTFrameProcessorFrame]? { get }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): A processor frame that contains the current source frame to use for all processing features.
- [destinationFrame](destinationframe-5suam.md): [VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frame for processors which output a single processed frame.
