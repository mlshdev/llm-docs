> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motiontransformscount](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motiontransformscount)

# motionTransformsCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```swift
var motionTransformsCount: UInt32
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.

# motionTransformsCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```objectivec
uint32_t motionTransformsCount;
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.
