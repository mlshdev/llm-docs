> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparameterretrievalapi_v6](https://developer.apple.com/documentation/professional_video_applications/fxparameterretrievalapi_v6)

# FxParameterRetrievalAPI_v6 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Defines the functions the application provides to retrieve parameter values.

## Declaration

```swift
protocol FxParameterRetrievalAPI_v6 : NSObjectProtocol
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)
- [Communicating with the plug-in state](../professional-video-applications/communicating-with-the-plug-in-state.md)
- [Using FxPlug APIs](../professional-video-applications/using-fxplug-apis.md)

## Topics

### Instance Methods

- [getBoolValue(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getboolvalue%28__fromparameter_at_%29.md): Gets a Boolean value from a parameter.
- [getCustomParameterValue(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getcustomparametervalue%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a custom parameter at a given time.
- [getFloatValue(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getfloatvalue%28__fromparameter_at_%29.md): Gets a floating point value from a parameter.
- [getFontName(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getfontname%28__fromparameter_at_%29.md): Retrieves the family and typeface of a given font.
- [getGradientSamples(\_:numSamples:depth:fromParameter:at:)](fxparameterretrievalapi_v6/getgradientsamples%28__numsamples_depth_fromparameter_at_%29.md): Gets the Gradient parameter settings.
- [getHistogramBlack(in:blackOut:whiteIn:whiteOut:gamma:forChannel:fromParameter:at:)](fxparameterretrievalapi_v6/gethistogramblack%28in_blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Gets the Histogram parameter settings.
- [getIntValue(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getintvalue%28__fromparameter_at_%29.md): Gets an integer value from a parameter.
- [getParameterFlags(\_:fromParameter:)](fxparameterretrievalapi_v6/getparameterflags%28__fromparameter_%29.md): Gets current state of a parameter.
- [getPathID(\_:fromParameter:at:)](fxparameterretrievalapi_v6/getpathid%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a pathID parameter at a given time.
- [getRedValue(\_:greenValue:blueValue:alphaValue:fromParameter:at:)](fxparameterretrievalapi_v6/getredvalue%28__greenvalue_bluevalue_alphavalue_fromparameter_at_%29.md): Gets RGBA color value (in 0.0 - 1.0 floating point) from a parameter.
- [getRedValue(\_:greenValue:blueValue:fromParameter:at:)](fxparameterretrievalapi_v6/getredvalue%28__greenvalue_bluevalue_fromparameter_at_%29.md): Gets RGB color values (in 0.0 - 1.0 floating point) from a parameter.
- [getStringParameterValue(\_:fromParameter:)](fxparameterretrievalapi_v6/getstringparametervalue%28__fromparameter_%29.md): Gets a string value from a string parameter.
- [getXValue(\_:yValue:fromParameter:at:)](fxparameterretrievalapi_v6/getxvalue%28__yvalue_fromparameter_at_%29.md): Gets the xy position value (in 0.0 - 1.0 floating point) from a parameter.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.

# FxParameterRetrievalAPI_v6 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the functions the application provides to retrieve parameter values.

## Declaration

```objectivec
@protocol FxParameterRetrievalAPI_v6 <NSObject>
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)
- [Communicating with the plug-in state](../professional-video-applications/communicating-with-the-plug-in-state.md)
- [Using FxPlug APIs](../professional-video-applications/using-fxplug-apis.md)

## Topics

### Instance Methods

- [getBoolValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getboolvalue%28__fromparameter_at_%29.md): Gets a Boolean value from a parameter.
- [getCustomParameterValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getcustomparametervalue%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a custom parameter at a given time.
- [getFloatValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getfloatvalue%28__fromparameter_at_%29.md): Gets a floating point value from a parameter.
- [getFontName:fromParameter:atTime:](fxparameterretrievalapi_v6/getfontname%28__fromparameter_at_%29.md): Retrieves the family and typeface of a given font.
- [getGradientSamples:numSamples:depth:fromParameter:atTime:](fxparameterretrievalapi_v6/getgradientsamples%28__numsamples_depth_fromparameter_at_%29.md): Gets the Gradient parameter settings.
- [getHistogramBlackIn:BlackOut:WhiteIn:WhiteOut:Gamma:forChannel:fromParameter:atTime:](fxparameterretrievalapi_v6/gethistogramblack%28in_blackout_whitein_whiteout_gamma_forchannel_fromparameter_at_%29.md): Gets the Histogram parameter settings.
- [getIntValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getintvalue%28__fromparameter_at_%29.md): Gets an integer value from a parameter.
- [getParameterFlags:fromParameter:](fxparameterretrievalapi_v6/getparameterflags%28__fromparameter_%29.md): Gets current state of a parameter.
- [getPathID:fromParameter:atTime:](fxparameterretrievalapi_v6/getpathid%28__fromparameter_at_%29.md): Retrieves the (possibly keyframed) value of a pathID parameter at a given time.
- [getRedValue:greenValue:blueValue:alphaValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getredvalue%28__greenvalue_bluevalue_alphavalue_fromparameter_at_%29.md): Gets RGBA color value (in 0.0 - 1.0 floating point) from a parameter.
- [getRedValue:greenValue:blueValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getredvalue%28__greenvalue_bluevalue_fromparameter_at_%29.md): Gets RGB color values (in 0.0 - 1.0 floating point) from a parameter.
- [getStringParameterValue:fromParameter:](fxparameterretrievalapi_v6/getstringparametervalue%28__fromparameter_%29.md): Gets a string value from a string parameter.
- [getXValue:YValue:fromParameter:atTime:](fxparameterretrievalapi_v6/getxvalue%28__yvalue_fromparameter_at_%29.md): Gets the xy position value (in 0.0 - 1.0 floating point) from a parameter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.
