> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v5/setparameterflags(_:toparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v5/setparameterflags(_:toparameter:))

# setParameterFlags(\_:toParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets the flags for the state of a parameter.

## Declaration

```swift
func setParameterFlags(_ flags: FxParameterFlags, toParameter parameterID: UInt32) -> Bool
```

## Parameters

- `flags`: Specified flag values for the parameter.
- `parameterID`: Unique identifier for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Setting or resetting the `kFxParameterFlag_HIDDEN` flag on a `ParameterSubGroup` parameter will also hide or reveal all of the controls within the group. Likewise, changing the `kFxParameterFlag_DISABLED` flag value affects all of the controls within the group as well.

## See Also

### Instance Methods

- [setBoolValue(\_:toParameter:at:)](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue(\_:toParameter:at:)](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue(\_:toParameter:at:)](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn(\_:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue(\_:toParameter:at:)](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setPathID(\_:toParameter:at:)](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue(\_:greenValue:blueValue:alphaValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue(\_:greenValue:blueValue:toParameter:at:)](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue(\_:toParameter:)](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue(\_:yValue:toParameter:at:)](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

# setParameterFlags:toParameter: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the flags for the state of a parameter.

## Declaration

```objectivec
- (BOOL) setParameterFlags:(FxParameterFlags) flags toParameter:(UInt32) parameterID;
```

## Parameters

- `flags`: Specified flag values for the parameter.
- `parameterID`: Unique identifier for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the value is set successfully; `NO` otherwise.

<a id="discussion"></a>

## Discussion

Setting or resetting the `kFxParameterFlag_HIDDEN` flag on a `ParameterSubGroup` parameter will also hide or reveal all of the controls within the group. Likewise, changing the `kFxParameterFlag_DISABLED` flag value affects all of the controls within the group as well.

## See Also

### Instance Methods

- [setBoolValue:toParameter:atTime:](setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue:toParameter:atTime:](setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue:toParameter:atTime:](setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:atTime:](sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue:toParameter:atTime:](setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setPathID:toParameter:atTime:](setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue:greenValue:blueValue:alphaValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue:greenValue:blueValue:toParameter:atTime:](setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue:toParameter:](setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue:YValue:toParameter:atTime:](setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.
