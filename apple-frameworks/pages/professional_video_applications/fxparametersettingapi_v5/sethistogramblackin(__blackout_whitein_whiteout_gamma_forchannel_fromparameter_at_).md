> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v5/sethistogramblackin(_:blackout:whitein:whiteout:gamma:forchannel:fromparameter:at:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v5/sethistogramblackin(_:blackout:whitein:whiteout:gamma:forchannel:fromparameter:at:))

# setHistogramBlackIn(\_:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets the values in a histogram parameter group.

## Declaration

```swift
func setHistogramBlackIn(_ blackIn: Double, blackOut: Double, whiteIn: Double, whiteOut: Double, gamma: Double, forChannel channel: FxHistogramChannel, fromParameter parameterID: UInt32, at time: CMTime) -> Bool
```

## Parameters

- `blackIn`: The new black in level value.
- `blackOut`: The new black out level value.
- `whiteIn`: The new white in level value.
- `whiteOut`: The new white out level value.
- `gamma`: The new gamma level value.
- `channel`: Specified channel for new histogram values (RGB: `0`, Red: `1`, Green: `2`, Blue: `3`, Alpha: `4`).
- `parameterID`: Parameter identifier assigned upon creation.
- `time`: Specified time to set the values.

<a id="return-value"></a>

## Return Value

Returns `YES` if the values are set successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue(\_:toParameter:at:)](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue(\_:toParameter:at:)](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue(\_:toParameter:at:)](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setIntValue(\_:toParameter:at:)](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags(\_:toParameter:)](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID(\_:toParameter:at:)](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue(\_:greenValue:blueValue:alphaValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue(\_:greenValue:blueValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue(\_:toParameter:)](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue(\_:yValue:toParameter:at:)](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

# setHistogramBlackIn:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the values in a histogram parameter group.

## Declaration

```objectivec
- (BOOL) setHistogramBlackIn:(double) blackIn blackOut:(double) blackOut whiteIn:(double) whiteIn whiteOut:(double) whiteOut gamma:(double) gamma forChannel:(FxHistogramChannel) channel fromParameter:(UInt32) parameterID atTime:(CMTime) time;
```

## Parameters

- `blackIn`: The new black in level value.
- `blackOut`: The new black out level value.
- `whiteIn`: The new white in level value.
- `whiteOut`: The new white out level value.
- `gamma`: The new gamma level value.
- `channel`: Specified channel for new histogram values (RGB: `0`, Red: `1`, Green: `2`, Blue: `3`, Alpha: `4`).
- `parameterID`: Parameter identifier assigned upon creation.
- `time`: Specified time to set the values.

<a id="return-value"></a>

## Return Value

Returns `YES` if the values are set successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue:toParameter:atTime:](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue:toParameter:atTime:](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue:toParameter:atTime:](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setIntValue:toParameter:atTime:](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags:toParameter:](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID:toParameter:atTime:](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue:greenValue:blueValue:alphaValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue:greenValue:blueValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue:toParameter:](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue:YValue:toParameter:atTime:](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.
