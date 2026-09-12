> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/parameter(_:channel:haskeyframe:at:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/parameter(_:channel:haskeyframe:at:))

# parameter(\_:channel:hasKeyframe:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Tells whether there is a keyframe at a given time.

## Declaration

```swift
func parameter(_ parameterID: Int, channel channelIndex: Int, hasKeyframe: UnsafeMutablePointer<ObjCBool>, at time: CMTime) -> (any Error)?
```

## Parameters

- `parameterID`: The ID of the parameter you wish to query.
- `channelIndex`: The index of the channel of the parameter you wish to query.
- `hasKeyframe`: Returns whether or not the channel of the parameter specified has a keyframe at the time specified.
- `time`: The time at which you wish to know if there’s a keyframe.

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# parameter:channel:hasKeyframe:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Tells whether there is a keyframe at a given time.

## Declaration

```objectivec
- (NSError *) parameter:(NSUInteger) parameterID channel:(NSUInteger) channelIndex hasKeyframe:(BOOL *) hasKeyframe atTime:(CMTime) time;
```

## Parameters

- `parameterID`: The ID of the parameter you wish to query.
- `channelIndex`: The index of the channel of the parameter you wish to query.
- `hasKeyframe`: Returns whether or not the channel of the parameter specified has a keyframe at the time specified.
- `time`: The time at which you wish to know if there’s a keyframe.

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
