> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex)

# motionTransformsStartIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```swift
var motionTransformsStartIndex: UInt32
```

<a id="discussion"></a>

## Discussion

The index points to an entry in an [MTLInstanceAccelerationStructureDescriptor](../mtlinstanceaccelerationstructuredescriptor.md) instance’s transform data, which it stores in its [motionTransformBuffer](../mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer.md) property.

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsCount](motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

# motionTransformsStartIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```objectivec
uint32_t motionTransformsStartIndex;
```

<a id="discussion"></a>

## Discussion

The index points to an entry in an [MTLInstanceAccelerationStructureDescriptor](../mtlinstanceaccelerationstructuredescriptor.md) instance’s transform data, which it stores in its [motionTransformBuffer](../mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer.md) property.

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsCount](motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.
