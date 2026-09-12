> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount](https://developer.apple.com/documentation/metal/mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount)

# motionKeyframeCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The number of keyframes in the geometry data.

## Declaration

```swift
var motionKeyframeCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`. If the value is greater than `1`, all geometry descriptors that you attach to this descriptor need to be motion descriptors, and each needs to have exactly that many [MTLMotionKeyframeData](../mtlmotionkeyframedata.md) objects.

## See Also

### Related Documentation

- [geometryDescriptors](geometrydescriptors.md): An array that contains the individual pieces of geometry that compose the acceleration structure.

### Specifying motion behavior

- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

# motionKeyframeCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The number of keyframes in the geometry data.

## Declaration

```objectivec
@property (nonatomic) NSUInteger motionKeyframeCount;
```

<a id="discussion"></a>

## Discussion

The default value is `1`. If the value is greater than `1`, all geometry descriptors that you attach to this descriptor need to be motion descriptors, and each needs to have exactly that many [MTLMotionKeyframeData](../mtlmotionkeyframedata.md) objects.

## See Also

### Related Documentation

- [geometryDescriptors](geometrydescriptors.md): An array that contains the individual pieces of geometry that compose the acceleration structure.

### Specifying motion behavior

- [motionStartTime](motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](../mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.
