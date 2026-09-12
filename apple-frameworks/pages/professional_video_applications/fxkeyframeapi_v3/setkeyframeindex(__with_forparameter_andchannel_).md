> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/setkeyframeindex(_:with:forparameter:andchannel:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/setkeyframeindex(_:with:forparameter:andchannel:))

# setKeyframeIndex(\_:with:forParameter:andChannel:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets the keyframe at the given index to have the given info.

## Declaration

```swift
func setKeyframeIndex(_ keyframeIndex: Int, with keyframe: UnsafePointer<FxKeyframe>, forParameter parameterID: Int, andChannel channelIndex: Int) -> (any Error)?
```

## Parameters

- `keyframeIndex`: The index of the keyframe you want to set.
- `keyframe`: An FxKeyframe structure with the information you want to apply to the keyframe at the above index.
- `parameterID`: The ID of the parameter you want to set a keyframe for.
- `channelIndex`: The index of the channel of the parameter you want to set the keyframe for.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.

# setKeyframeIndex:withKeyframe:forParameter:andChannel: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the keyframe at the given index to have the given info.

## Declaration

```objectivec
- (NSError *) setKeyframeIndex:(NSUInteger) keyframeIndex withKeyframe:(const FxKeyframe *) keyframe forParameter:(NSUInteger) parameterID andChannel:(NSUInteger) channelIndex;
```

## Parameters

- `keyframeIndex`: The index of the keyframe you want to set.
- `keyframe`: An FxKeyframe structure with the information you want to apply to the keyframe at the above index.
- `parameterID`: The ID of the parameter you want to set a keyframe for.
- `channelIndex`: The index of the channel of the parameter you want to set the keyframe for.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
