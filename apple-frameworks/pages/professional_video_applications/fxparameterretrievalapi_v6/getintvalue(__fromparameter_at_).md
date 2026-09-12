> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparameterretrievalapi_v6/getintvalue(_:fromparameter:at:)](https://developer.apple.com/documentation/professional_video_applications/fxparameterretrievalapi_v6/getintvalue(_:fromparameter:at:))

# getIntValue(\_:fromParameter:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Gets an integer value from a parameter.

## Declaration

```swift
func getIntValue(_ value: UnsafeMutablePointer<Int32>, fromParameter parameterID: UInt32, at time: CMTime) -> Bool
```

## Parameters

- `value`: Pointer to the plug-in variable for the value.
- `parameterID`: Unique identifier for the parameter.
- `time`: Specified time to get the value.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is retrieved successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [getBoolValue(\_:fromParameter:at:)](getboolvalue%28__fromparameter_at_%29.md): Gets a Boolean value from a parameter.
- [getCustomParameterValue(\_:fromParameter:at:)](getcustomparametervalue%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a custom parameter at a given time.
- [getFloatValue(\_:fromParameter:at:)](getfloatvalue%28__fromparameter_at_%29.md): Gets a floating point value from a parameter.
- [getFontName(\_:fromParameter:at:)](getfontname%28__fromparameter_at_%29.md): Retrieves the family and typeface of a given font.
- [getGradientSamples(\_:numSamples:depth:fromParameter:at:)](getgradientsamples%28__numsamples_depth_fromparameter_at_%29.md): Gets the Gradient parameter settings.
- [getHistogramBlack(in:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](gethistogramblack%28in_blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Gets the Histogram parameter settings.
- [getParameterFlags(\_:fromParameter:)](getparameterflags%28__fromparameter_%29.md): Gets current state of a parameter.
- [getPathID(\_:fromParameter:at:)](getpathid%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a pathID parameter at a given time.
- [getRedValue(\_:greenValue:blueValue:alphaValue:fromParameter:at:)](getredvalue%28__greenvalue_bluevalue_alphavalue_fromparameter_at_%29.md): Gets RGBA color value (in 0.0 - 1.0 floating point) from a parameter.
- [getRedValue(\_:greenValue:blueValue:fromParameter:at:)](getredvalue%28__greenvalue_bluevalue_fromparameter_at_%29.md): Gets RGB color values (in 0.0 - 1.0 floating point) from a parameter.
- [getStringParameterValue(\_:fromParameter:)](getstringparametervalue%28__fromparameter_%29.md): Gets a string value from a string parameter.
- [getXValue(\_:yValue:fromParameter:at:)](getxvalue%28__yvalue_fromparameter_at_%29.md): Gets the xy position value (in 0.0 - 1.0 floating point) from a parameter.

# getIntValue:fromParameter:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Gets an integer value from a parameter.

## Declaration

```objectivec
- (BOOL) getIntValue:(int *) value fromParameter:(UInt32) parameterID atTime:(CMTime) time;
```

## Parameters

- `value`: Pointer to the plug-in variable for the value.
- `parameterID`: Unique identifier for the parameter.
- `time`: Specified time to get the value.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is retrieved successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Instance Methods

- [getBoolValue:fromParameter:atTime:](getboolvalue%28__fromparameter_at_%29.md): Gets a Boolean value from a parameter.
- [getCustomParameterValue:fromParameter:atTime:](getcustomparametervalue%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a custom parameter at a given time.
- [getFloatValue:fromParameter:atTime:](getfloatvalue%28__fromparameter_at_%29.md): Gets a floating point value from a parameter.
- [getFontName:fromParameter:atTime:](getfontname%28__fromparameter_at_%29.md): Retrieves the family and typeface of a given font.
- [getGradientSamples:numSamples:depth:fromParameter:atTime:](getgradientsamples%28__numsamples_depth_fromparameter_at_%29.md): Gets the Gradient parameter settings.
- [getHistogramBlackIn:BlackOut:WhiteIn:WhiteOut:Gamma:forChannel:fromParameter:atTime:](gethistogramblack%28in_blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Gets the Histogram parameter settings.
- [getParameterFlags:fromParameter:](getparameterflags%28__fromparameter_%29.md): Gets current state of a parameter.
- [getPathID:fromParameter:atTime:](getpathid%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a pathID parameter at a given time.
- [getRedValue:greenValue:blueValue:alphaValue:fromParameter:atTime:](getredvalue%28__greenvalue_bluevalue_alphavalue_fromparameter_at_%29.md): Gets RGBA color value (in 0.0 - 1.0 floating point) from a parameter.
- [getRedValue:greenValue:blueValue:fromParameter:atTime:](getredvalue%28__greenvalue_bluevalue_fromparameter_at_%29.md): Gets RGB color values (in 0.0 - 1.0 floating point) from a parameter.
- [getStringParameterValue:fromParameter:](getstringparametervalue%28__fromparameter_%29.md): Gets a string value from a string parameter.
- [getXValue:YValue:fromParameter:atTime:](getxvalue%28__yvalue_fromparameter_at_%29.md): Gets the xy position value (in 0.0 - 1.0 floating point) from a parameter.
