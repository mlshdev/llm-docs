> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/removeallkeyframes(forparameter:andchannel:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/removeallkeyframes(forparameter:andchannel:))

# removeAllKeyframes(forParameter:andChannel:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Remove all keyframes from the given parameter’s channel.

## Declaration

```swift
func removeAllKeyframes(forParameter parameterID: Int, andChannel channelIndex: Int) -> (any Error)?
```

## Parameters

- `parameterID`: The ID of the parameter whose keyframes you want to remove.
- `channelIndex`: The index of the channel of the parameter you wish to remove the keyframes from.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# removeAllKeyframesForParameter:andChannel: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Remove all keyframes from the given parameter’s channel.

## Declaration

```objectivec
- (NSError *) removeAllKeyframesForParameter:(NSUInteger) parameterID andChannel:(NSUInteger) channelIndex;
```

## Parameters

- `parameterID`: The ID of the parameter whose keyframes you want to remove.
- `channelIndex`: The index of the channel of the parameter you wish to remove the keyframes from.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
