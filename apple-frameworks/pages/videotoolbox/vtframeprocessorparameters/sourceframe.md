> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorparameters/sourceframe](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorparameters/sourceframe)

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A processor frame that contains the current source frame to use for all processing features.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

<a id="discussion"></a>

## Discussion

This property must not be `NULL`.

## See Also

### Inspecting the parameters

- [destinationFrame](destinationframe-5suam.md): [VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frame for processors which output a single processed frame.
- [destinationFrames](destinationframes-46ken.md): Array of [VTFrameProcessorFrame](../vtframeprocessorframe.md) that contains the destination frames for processors which may output more than one processed frame.

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A processor frame that contains the current source frame to use for all processing features.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

<a id="discussion"></a>

## Discussion

This property must not be `NULL`.
