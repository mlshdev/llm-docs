> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3/keyframecount(_:forparameter:andchannel:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3/keyframecount(_:forparameter:andchannel:))

# keyframeCount(\_:forParameter:andChannel:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the number of keyframes for a parameter’s channel.

## Declaration

```swift
func keyframeCount(_ count: UnsafeMutablePointer<Int>, forParameter parameterID: Int, andChannel channelIndex: Int) -> (any Error)?
```

## Parameters

- `count`: Receives the number of keyframes in the given channel.
- `parameterID`: The ID of the parameter you want to get the keyframe count for.
- `channelIndex`: The index of the channel within the parameter that you want to retrieve the keyframe count from.

<a id="return-value"></a>

## Return Value

If any errors occur while getting the keyframe count, the return value will be a pointer to an `NSError` describing the problem. Otherwise, the return value is `nil`.

<a id="discussion"></a>

## Discussion

Given a parameter, you can get the number of keyframes for any one of its channels. For a slider, toggle button (checkbox), or angle parameter, there will be only 1 channel (indexed starting at `0`), whereas a point parameter will have 2 channels (x and y), and a color channel will have 4 (R, G, B, and A).

## See Also

### Instance Methods

- [add(\_:toParameter:andChannel:)](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [parameter(\_:channel:hasKeyframe:at:)](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

# keyframeCount:forParameter:andChannel: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the number of keyframes for a parameter’s channel.

## Declaration

```objectivec
- (NSError *) keyframeCount:(NSUInteger *) count forParameter:(NSUInteger) parameterID andChannel:(NSUInteger) channelIndex;
```

## Parameters

- `count`: Receives the number of keyframes in the given channel.
- `parameterID`: The ID of the parameter you want to get the keyframe count for.
- `channelIndex`: The index of the channel within the parameter that you want to retrieve the keyframe count from.

<a id="return-value"></a>

## Return Value

If any errors occur while getting the keyframe count, the return value will be a pointer to an `NSError` describing the problem. Otherwise, the return value is `nil`.

<a id="discussion"></a>

## Discussion

Given a parameter, you can get the number of keyframes for any one of its channels. For a slider, toggle button (checkbox), or angle parameter, there will be only 1 channel (indexed starting at `0`), whereas a point parameter will have 2 channels (x and y), and a color channel will have 4 (R, G, B, and A).

## See Also

### Instance Methods

- [addKeyframe:toParameter:andChannel:](add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [parameter:channel:hasKeyframe:atTime:](parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.
