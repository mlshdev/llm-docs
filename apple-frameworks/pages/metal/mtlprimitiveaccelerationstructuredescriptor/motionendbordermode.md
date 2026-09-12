> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionendbordermode](https://developer.apple.com/documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionendbordermode)

# motionEndBorderMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The mode to use when handling timestamps after the end time.

## Declaration

```swift
var motionEndBorderMode: MTLMotionBorderMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMotionBorderMode.clamp](../mtlmotionbordermode/clamp.md).

## See Also

### Specifying motion behavior

- [motionKeyframeCount](motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

# motionEndBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The mode to use when handling timestamps after the end time.

## Declaration

```objectivec
@property (nonatomic) MTLMotionBorderMode motionEndBorderMode;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMotionBorderModeClamp](../mtlmotionbordermode/clamp.md).

## See Also

### Specifying motion behavior

- [motionKeyframeCount](motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.
