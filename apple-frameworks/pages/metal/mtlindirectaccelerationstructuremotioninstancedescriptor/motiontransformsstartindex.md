> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex](https://developer.apple.com/documentation/metal/mtlindirectaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex)

# motionTransformsStartIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The index of the first set of transforms describing one keyframe of the animation.

## Declaration

```swift
var motionTransformsStartIndex: UInt32
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): The start time of the motion instance.
- [motionStartBorderMode](motionstartbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure before the motion start time.
- [motionEndTime](motionendtime.md): The end time of the motion instance.
- [motionEndBorderMode](motionendbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure after the motion end time.
- [motionTransformsCount](motiontransformscount.md): The number of motion transforms belonging to the motion instance.

# motionTransformsStartIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the first set of transforms describing one keyframe of the animation.

## Declaration

```objectivec
uint32_t motionTransformsStartIndex;
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): The start time of the motion instance.
- [motionStartBorderMode](motionstartbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure before the motion start time.
- [motionEndTime](motionendtime.md): The end time of the motion instance.
- [motionEndBorderMode](motionendbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure after the motion end time.
- [motionTransformsCount](motiontransformscount.md): The number of motion transforms belonging to the motion instance.
