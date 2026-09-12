> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/keyframe(_:forparameter:channel:andindex:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/keyframe(_:forparameter:channel:andindex:))

# keyframe(\_:forParameter:channel:andIndex:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the keyframe info for the keyframe at a given index.

## Declaration

```swift
func keyframe(_ keyframe: UnsafeMutablePointer<FxKeyframe>, forParameter parameterID: Int, channel channelIndex: Int, andIndex keyframeIndex: Int) -> (any Error)?
```

## Parameters

- `keyframe`: A pointer to an FxKeyframeInfo structure to be filled out with the information about the keyframe in question.
- `parameterID`: The ID of the parameter you want info about.
- `channelIndex`: The index of the channel you want info about.
- `keyframeIndex`: The index of the keyframe you wish to retrieve.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# keyframe:forParameter:channel:andIndex: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the keyframe info for the keyframe at a given index.

## Declaration

```objectivec
- (NSError *) keyframe:(FxKeyframe *) keyframe forParameter:(NSUInteger) parameterID channel:(NSUInteger) channelIndex andIndex:(NSUInteger) keyframeIndex;
```

## Parameters

- `keyframe`: A pointer to an FxKeyframeInfo structure to be filled out with the information about the keyframe in question.
- `parameterID`: The ID of the parameter you want info about.
- `channelIndex`: The index of the channel you want info about.
- `keyframeIndex`: The index of the keyframe you wish to retrieve.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
