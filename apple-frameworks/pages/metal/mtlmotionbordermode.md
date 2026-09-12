> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmotionbordermode](https://developer.apple.com/documentation/metal/mtlmotionbordermode)

# MTLMotionBorderMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

## Declaration

```swift
enum MTLMotionBorderMode
```

<a id="overview"></a>

## Overview

The [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md) and [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md) properties use this type to describe the behavior for a motion-based object when a timestamp is outside the specified range.

## Topics

### Specifying motion modes

- [MTLMotionBorderMode.clamp](mtlmotionbordermode/clamp.md): A mode that specifies treating times outside the specified endpoint as if they were at the endpoint.
- [MTLMotionBorderMode.vanish](mtlmotionbordermode/vanish.md): A mode that specifies that times outside the specified endpoint need to prevent any ray-intersections with the primitive.

### Initializers

- [init(rawValue:)](mtlmotionbordermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying motion behavior

- [motionKeyframeCount](mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](mtlprimitiveaccelerationstructuredescriptor/motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](mtlprimitiveaccelerationstructuredescriptor/motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md): The mode to use when handling timestamps after the end time.

# MTLMotionBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

## Declaration

```objectivec
enum MTLMotionBorderMode : uint32_t;
```

<a id="overview"></a>

## Overview

The [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md) and [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md) properties use this type to describe the behavior for a motion-based object when a timestamp is outside the specified range.

## Topics

### Specifying motion modes

- [MTLMotionBorderModeClamp](mtlmotionbordermode/clamp.md): A mode that specifies treating times outside the specified endpoint as if they were at the endpoint.
- [MTLMotionBorderModeVanish](mtlmotionbordermode/vanish.md): A mode that specifies that times outside the specified endpoint need to prevent any ray-intersections with the primitive.

## See Also

### Specifying motion behavior

- [motionKeyframeCount](mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](mtlprimitiveaccelerationstructuredescriptor/motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](mtlprimitiveaccelerationstructuredescriptor/motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md): The mode to use when handling timestamps after the end time.
