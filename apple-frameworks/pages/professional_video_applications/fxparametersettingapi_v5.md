> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v5](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v5)

# FxParameterSettingAPI_v5 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Defines the functions the application provides to set parameter values.

## Declaration

```swift
protocol FxParameterSettingAPI_v5 : NSObjectProtocol
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

## Topics

### Instance Methods

- [setBoolValue(\_:toParameter:at:)](fxparametersettingapi_v5/setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue(\_:toParameter:at:)](fxparametersettingapi_v5/setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue(\_:toParameter:at:)](fxparametersettingapi_v5/setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn(\_:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](fxparametersettingapi_v5/sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue(\_:toParameter:at:)](fxparametersettingapi_v5/setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags(\_:toParameter:)](fxparametersettingapi_v5/setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID(\_:toParameter:at:)](fxparametersettingapi_v5/setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue(\_:greenValue:blueValue:alphaValue:toParameter:at:)](fxparametersettingapi_v5/setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue(\_:greenValue:blueValue:toParameter:at:)](fxparametersettingapi_v5/setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue(\_:toParameter:)](fxparametersettingapi_v5/setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue(\_:yValue:toParameter:at:)](fxparametersettingapi_v5/setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.

# FxParameterSettingAPI_v5 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the functions the application provides to set parameter values.

## Declaration

```objectivec
@protocol FxParameterSettingAPI_v5 <NSObject>
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

## Topics

### Instance Methods

- [setBoolValue:toParameter:atTime:](fxparametersettingapi_v5/setboolvalue%28__toparameter_at_%29.md): Sets the value of a Boolean parameter.
- [setCustomParameterValue:toParameter:atTime:](fxparametersettingapi_v5/setcustomparametervalue%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setFloatValue:toParameter:atTime:](fxparametersettingapi_v5/setfloatvalue%28__toparameter_at_%29.md): Sets the value of a floating point parameter.
- [setHistogramBlackIn:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:atTime:](fxparametersettingapi_v5/sethistogramblackin%28__blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Sets the values in a histogram parameter group.
- [setIntValue:toParameter:atTime:](fxparametersettingapi_v5/setintvalue%28__toparameter_at_%29.md): Sets the value of an integer parameter.
- [setParameterFlags:toParameter:](fxparametersettingapi_v5/setparameterflags%28__toparameter_%29.md): Sets the flags for the state of a parameter.
- [setPathID:toParameter:atTime:](fxparametersettingapi_v5/setpathid%28__toparameter_at_%29.md): Sets a custom value for a custom parameter.
- [setRedValue:greenValue:blueValue:alphaValue:toParameter:atTime:](fxparametersettingapi_v5/setredvalue%28__greenvalue_bluevalue_alphavalue_toparameter_at_%29.md): Sets the value of an RGBA color parameter.
- [setRedValue:greenValue:blueValue:toParameter:atTime:](fxparametersettingapi_v5/setredvalue%28__greenvalue_bluevalue_toparameter_at_%29.md): Set the values of an RGB color parameter.
- [setStringParameterValue:toParameter:](fxparametersettingapi_v5/setstringparametervalue%28__toparameter_%29.md): Sets a string value for a string parameter.
- [setXValue:YValue:toParameter:atTime:](fxparametersettingapi_v5/setxvalue%28__yvalue_toparameter_at_%29.md): Sets the xy values for a position parameter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.
