> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motionendbordermode](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motionendbordermode)

# motionEndBorderMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A behavior that configures how a motion instance handles timestamps after an ending time.

## Declaration

```swift
var motionEndBorderMode: MTLMotionBorderMode
```

<a id="discussion"></a>

## Discussion

The property’s default value is [MTLMotionBorderMode.clamp](../mtlmotionbordermode/clamp.md).

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [motionTransformsCount](motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

# motionEndBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A behavior that configures how a motion instance handles timestamps after an ending time.

## Declaration

```objectivec
MTLMotionBorderMode motionEndBorderMode;
```

<a id="discussion"></a>

## Discussion

The property’s default value is [MTLMotionBorderModeClamp](../mtlmotionbordermode/clamp.md).

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [motionTransformsCount](motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.
