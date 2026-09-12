> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/keyframe(_:atorafter:fromparameter:andchannel:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/keyframe(_:atorafter:fromparameter:andchannel:))

# keyframe(\_:atOrAfter:fromParameter:andChannel:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the info about the nearest next keyframe.

## Declaration

```swift
func keyframe(_ keyframe: UnsafeMutablePointer<FxKeyframe>, atOrAfter time: CMTime, fromParameter parameterID: Int, andChannel channelIndex: Int) -> (any Error)?
```

## Parameters

- `keyframe`: A pointer to a struct which will receive information about the keyframe at or after the given time.
- `time`: The time ([CMTime](../../coremedia/cmtime.md)) you want a keyframe at or after.
- `parameterID`: The ID of the parameter for which you want the keyframe information.
- `channelIndex`: The index of the channel of the parameter for which you want the keyframe information.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# keyframe:atOrAfterTime:fromParameter:andChannel: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the info about the nearest next keyframe.

## Declaration

```objectivec
- (NSError *) keyframe:(FxKeyframe *) keyframe atOrAfterTime:(CMTime) time fromParameter:(NSUInteger) parameterID andChannel:(NSUInteger) channelIndex;
```

## Parameters

- `keyframe`: A pointer to a struct which will receive information about the keyframe at or after the given time.
- `time`: The time ([CMTime](../../coremedia/cmtime.md)) you want a keyframe at or after.
- `parameterID`: The ID of the parameter for which you want the keyframe information.
- `channelIndex`: The index of the channel of the parameter for which you want the keyframe information.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
