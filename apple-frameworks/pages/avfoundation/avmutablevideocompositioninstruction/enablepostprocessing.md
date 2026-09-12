> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositioninstruction/enablepostprocessing](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/enablepostprocessing)

# enablePostProcessing (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A Boolean value that indicates whether the instruction requires post processing.

> Use AVVideoCompositionInstruction.Configuration instead

## Declaration

```swift
var enablePostProcessing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If no post processing is required for the whole duration of the video composition instruction, set this property to [false](https://developer.apple.com/documentation/swift/false) to make the composition process more efficient.

The value is [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Configuring the instructions

- [backgroundColor](backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): Deprecated. The time range to which the instruction applies.

# enablePostProcessing (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instruction requires post processing.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL enablePostProcessing;
```

<a id="Discussion"></a>

## Discussion

If no post processing is required for the whole duration of the video composition instruction, set this property to [false](https://developer.apple.com/documentation/swift/false) to make the composition process more efficient.

The value is [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Configuring the instructions

- [backgroundColor](backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): Deprecated. The time range to which the instruction applies.
