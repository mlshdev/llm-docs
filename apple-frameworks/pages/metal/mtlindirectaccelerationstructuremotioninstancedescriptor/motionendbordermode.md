> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectaccelerationstructuremotioninstancedescriptor/motionendbordermode](https://developer.apple.com/documentation/metal/mtlindirectaccelerationstructuremotioninstancedescriptor/motionendbordermode)

# motionEndBorderMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The motion border mode describing what happens if Metal samples the acceleration structure after the motion end time.

## Declaration

```swift
var motionEndBorderMode: MTLMotionBorderMode
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): The start time of the motion instance.
- [motionStartBorderMode](motionstartbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure before the motion start time.
- [motionEndTime](motionendtime.md): The end time of the motion instance.
- [motionTransformsCount](motiontransformscount.md): The number of motion transforms belonging to the motion instance.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of the first set of transforms describing one keyframe of the animation.

# motionEndBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The motion border mode describing what happens if Metal samples the acceleration structure after the motion end time.

## Declaration

```objectivec
MTLMotionBorderMode motionEndBorderMode;
```

## See Also

### Specifying motion data

- [motionStartTime](motionstarttime.md): The start time of the motion instance.
- [motionStartBorderMode](motionstartbordermode.md): The motion border mode describing what happens if Metal samples the acceleration structure before the motion start time.
- [motionEndTime](motionendtime.md): The end time of the motion instance.
- [motionTransformsCount](motiontransformscount.md): The number of motion transforms belonging to the motion instance.
- [motionTransformsStartIndex](motiontransformsstartindex.md): The index of the first set of transforms describing one keyframe of the animation.
