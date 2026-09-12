> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v5/setredvalue(_:greenvalue:bluevalue:alphavalue:toparameter:at:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v5/setredvalue(_:greenvalue:bluevalue:alphavalue:toparameter:at:))

# setRedValue(\_:greenValue:blueValue:alphaValue:toParameter:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets the value of an RGBA color parameter.

## Declaration

```swift
func setRedValue(_ red: Double, greenValue green: Double, blueValue blue: Double, alphaValue alpha: Double, toParameter parameterID: UInt32, at time: CMTime) -> Bool
```

## Parameters

- `red`: The specified red value for the parameter.
- `green`: The specified green value for the parameter.
- `blue`: The specified blue value for the parameter.
- `alpha`: The specified alpha value for the parameter.
- `parameterID`: The unique identifier for the parameter.
- `time`: The specified time to set the values.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; otherwise `NO`.

<a id="discussion"></a>

## Discussion

The color is assumed to be in the project working color space and is converted to sRGB, unless the parameter has the [kFxParameterFlag_DONT_REMAP_COLORS](../kfxparameterflag_dont_remap_colors.md) set. If this flag is set, the host copies the color values verbatim into the parameter with no conversion.

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue(\_:toParameter:at:)](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue(\_:toParameter:at:)](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue(\_:toParameter:at:)](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn(\_:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue(\_:toParameter:at:)](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags(\_:toParameter:)](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID(\_:toParameter:at:)](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue(\_:greenValue:blueValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue(\_:toParameter:)](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue(\_:yValue:toParameter:at:)](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

# setRedValue:greenValue:blueValue:alphaValue:toParameter:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the value of an RGBA color parameter.

## Declaration

```objectivec
- (BOOL) setRedValue:(double) red greenValue:(double) green blueValue:(double) blue alphaValue:(double) alpha toParameter:(UInt32) parameterID atTime:(CMTime) time;
```

## Parameters

- `red`: The specified red value for the parameter.
- `green`: The specified green value for the parameter.
- `blue`: The specified blue value for the parameter.
- `alpha`: The specified alpha value for the parameter.
- `parameterID`: The unique identifier for the parameter.
- `time`: The specified time to set the values.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; otherwise `NO`.

<a id="discussion"></a>

## Discussion

The color is assumed to be in the project working color space and is converted to sRGB, unless the parameter has the [kFxParameterFlag_DONT_REMAP_COLORS](../kfxparameterflag_dont_remap_colors.md) set. If this flag is set, the host copies the color values verbatim into the parameter with no conversion.

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [setBoolValue:toParameter:atTime:](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue:toParameter:atTime:](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue:toParameter:atTime:](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:atTime:](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue:toParameter:atTime:](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags:toParameter:](setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID:toParameter:atTime:](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue:greenValue:blueValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue:toParameter:](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue:YValue:toParameter:atTime:](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.
