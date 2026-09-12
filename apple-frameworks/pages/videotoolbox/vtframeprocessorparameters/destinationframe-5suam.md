> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorparameters/destinationframe-5suam](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorparameters/destinationframe-5suam)

# destinationFrame

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

[VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frame for processors which output a single processed frame.

## Declaration

```swift
var destinationFrame: VTFrameProcessorFrame? { get }
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): A processor frame that contains the current source frame to use for all processing features.
- [destinationFrames](destinationframes-46ken.md): Array of [VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frames for processors which may output more than one processed frame.
