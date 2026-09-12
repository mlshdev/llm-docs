> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/enablepostprocessing](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/enablepostprocessing)

# enablePostProcessing (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instruction requires post processing.

## Declaration

```swift
var enablePostProcessing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of [false](https://developer.apple.com/documentation/swift/false) indicates that no post processing is required for the whole duration of the video composition instruction. The composition process is more efficient if the value is [false](https://developer.apple.com/documentation/swift/false).

The value is [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Inspecting the instruction

- [backgroundColor](backgroundcolor.md): The background color of the composition.
- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): The time range to which the instruction applies.

# enablePostProcessing (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instruction requires post processing.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL enablePostProcessing;
```

<a id="Discussion"></a>

## Discussion

A value of [false](https://developer.apple.com/documentation/swift/false) indicates that no post processing is required for the whole duration of the video composition instruction. The composition process is more efficient if the value is [false](https://developer.apple.com/documentation/swift/false).

The value is [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Inspecting the instruction

- [backgroundColor](backgroundcolor.md): The background color of the composition.
- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](timerange.md): The time range to which the instruction applies.
