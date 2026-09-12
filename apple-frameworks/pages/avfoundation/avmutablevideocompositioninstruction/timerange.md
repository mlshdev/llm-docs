> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositioninstruction/timerange](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The time range to which the instruction applies.

> Use AVVideoCompositionInstruction.Configuration instead

## Declaration

```swift
var timeRange: CMTimeRange { get set }
```

<a id="Discussion"></a>

## Discussion

If the time range is invalid, the video compositor ignores it.

## See Also

### Configuring the instructions

- [backgroundColor](backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [enablePostProcessing](enablepostprocessing.md): Deprecated. A Boolean value that indicates whether the instruction requires post processing.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time range to which the instruction applies.

## Declaration

```objectivec
@property (nonatomic, assign) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

If the time range is invalid, the video compositor ignores it.

## See Also

### Configuring the instructions

- [backgroundColor](backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [enablePostProcessing](enablepostprocessing.md): Deprecated. A Boolean value that indicates whether the instruction requires post processing.
