> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v5/setcustomparametervalue(_:toparameter:at:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v5/setcustomparametervalue(_:toparameter:at:))

# setCustomParameterValue(\_:toParameter:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets a custom value for a custom parameter.

## Declaration

```swift
func setCustomParameterValue(_ value: any NSCopying & NSSecureCoding & NSObjectProtocol, toParameter parameterID: UInt32, at time: CMTime) -> Bool
```

## Parameters

- `value`: Specified custom value for the parameter.
- `parameterID`: Unique identifier for the parameter.
- `time`: Specified time to set the value.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; `NO` otherwise.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue(\_:toParameter:at:)](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setFloatValue(\_:toParameter:at:)](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn(\_:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue(\_:toParameter:at:)](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags(\_:toParameter:)](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID(\_:toParameter:at:)](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue(\_:greenValue:blueValue:alphaValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue(\_:greenValue:blueValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue(\_:toParameter:)](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue(\_:yValue:toParameter:at:)](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

# setCustomParameterValue:toParameter:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets a custom value for a custom parameter.

## Declaration

```objectivec
- (BOOL) setCustomParameterValue:(NSObject<NSCopying,NSSecureCoding> *) value toParameter:(UInt32) parameterID atTime:(CMTime) time;
```

## Parameters

- `value`: Specified custom value for the parameter.
- `parameterID`: Unique identifier for the parameter.
- `time`: Specified time to set the value.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; `NO` otherwise.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue:toParameter:atTime:](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setFloatValue:toParameter:atTime:](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:atTime:](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue:toParameter:atTime:](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags:toParameter:](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID:toParameter:atTime:](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue:greenValue:blueValue:alphaValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue:greenValue:blueValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue:toParameter:](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue:YValue:toParameter:atTime:](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.
