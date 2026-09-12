> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/channelcount(_:forparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/channelcount(_:forparameter:))

# channelCount(\_:forParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the number of channels in a parameter.

## Declaration

```swift
func channelCount(_ count: UnsafeMutablePointer<Int>, forParameter parameterID: Int) -> (any Error)?
```

## Parameters

- `count`: Receives the count of channels in the parameter
- `parameterID`: The ID of the parameter whose channels you want to count

<a id="return-value"></a>

## Return Value

Returns the number of channels in a parameter (sliders = 1, 2D points = 2, RGBA colors = 4, etc.) in the count parameter. If any errors occur, the return value will be a non-nil pointer to an NSError containing information about the error.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# channelCount:forParameter: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the number of channels in a parameter.

## Declaration

```objectivec
- (NSError *) channelCount:(NSUInteger *) count forParameter:(NSUInteger) parameterID;
```

## Parameters

- `count`: Receives the count of channels in the parameter
- `parameterID`: The ID of the parameter whose channels you want to count

<a id="return-value"></a>

## Return Value

Returns the number of channels in a parameter (sliders = 1, 2D points = 2, RGBA colors = 4, etc.) in the count parameter. If any errors occur, the return value will be a non-nil pointer to an NSError containing information about the error.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
