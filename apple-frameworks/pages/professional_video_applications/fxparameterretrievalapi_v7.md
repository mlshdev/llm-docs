> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparameterretrievalapi_v7](https://developer.apple.com/documentation/professional_video_applications/fxparameterretrievalapi_v7)

# FxParameterRetrievalAPI_v7 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2+

Adds a method to retrieve the image information about an image parameter.

## Declaration

```swift
protocol FxParameterRetrievalAPI_v7 : FxParameterRetrievalAPI_v6
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## Topics

### Instance Methods

- [imageSize(\_:fromParameter:at:)](fxparameterretrievalapi_v7/imagesize%28__fromparameter_at_%29.md): Provides the dimensions of the image well image when it is at 100-percent scale and has square pixels.

## Relationships

### Inherits From

- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.

# FxParameterRetrievalAPI_v7 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Adds a method to retrieve the image information about an image parameter.

## Declaration

```objectivec
@protocol FxParameterRetrievalAPI_v7 <FxParameterRetrievalAPI_v6>
```

## Mentioned In

- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)

## Topics

### Instance Methods

- [imageSize:fromParameter:atTime:error:](fxparameterretrievalapi_v7/imagesize%28__fromparameter_at_%29.md): Provides the dimensions of the image well image when it is at 100-percent scale and has square pixels.

## Relationships

### Inherits From

- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.
