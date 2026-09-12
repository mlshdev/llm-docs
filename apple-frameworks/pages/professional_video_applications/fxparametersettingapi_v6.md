> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v6](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v6)

# FxParameterSettingAPI_v6 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2.2+

Defines the functions the application provides to set parameter flags.

## Declaration

```swift
protocol FxParameterSettingAPI_v6 : FxParameterSettingAPI_v5
```

## Topics

### Instance Methods

- [addFlags(\_:toParameter:)](fxparametersettingapi_v6/addflags%28__toparameter_%29.md): Add new parameter flags to the current flags for a parameter.
- [removeFlags(\_:fromParameter:)](fxparametersettingapi_v6/removeflags%28__fromparameter_%29.md): Remove parameter flags from the current flags for a parameter.

## Relationships

### Inherits From

- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.

# FxParameterSettingAPI_v6 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the functions the application provides to set parameter flags.

## Declaration

```objectivec
@protocol FxParameterSettingAPI_v6 <FxParameterSettingAPI_v5>
```

## Topics

### Instance Methods

- [addFlags:toParameter:](fxparametersettingapi_v6/addflags%28__toparameter_%29.md): Add new parameter flags to the current flags for a parameter.
- [removeFlags:fromParameter:](fxparametersettingapi_v6/removeflags%28__fromparameter_%29.md): Remove parameter flags from the current flags for a parameter.

## Relationships

### Inherits From

- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md)

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.
