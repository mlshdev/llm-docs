> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionendtime](https://developer.apple.com/documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionendtime)

# motionEndTime (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The end time for the range of motion that the keyframe data describes.

## Declaration

```swift
var motionEndTime: Float { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1.0f`.

## See Also

### Specifying motion behavior

- [motionKeyframeCount](motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

# motionEndTime (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The end time for the range of motion that the keyframe data describes.

## Declaration

```objectivec
@property (nonatomic) float motionEndTime;
```

<a id="discussion"></a>

## Discussion

The default value is `1.0f`.

## See Also

### Specifying motion behavior

- [motionKeyframeCount](motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.
