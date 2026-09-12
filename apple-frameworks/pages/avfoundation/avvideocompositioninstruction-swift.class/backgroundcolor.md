> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/backgroundcolor](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The background color of the composition.

## Declaration

```swift
var backgroundColor: CGColor? { get }
```

<a id="Discussion"></a>

## Discussion

Only solid BGRA colors are supported; patterns and other supported colors are ignored. If the rendered pixel buffer does not have alpha, the alpha value of the background color is ignored.

If the background color is `NULL`, the video compositor uses a default background color of opaque black.

## See Also

### Inspecting the instruction

- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): The time range to which the instruction applies.
- [enablePostProcessing](enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.

# backgroundColor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The background color of the composition.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) CGColorRef backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Only solid BGRA colors are supported; patterns and other supported colors are ignored. If the rendered pixel buffer does not have alpha, the alpha value of the background color is ignored.

If the background color is `NULL`, the video compositor uses a default background color of opaque black.

## See Also

### Inspecting the instruction

- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): The time range to which the instruction applies.
- [enablePostProcessing](enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.
