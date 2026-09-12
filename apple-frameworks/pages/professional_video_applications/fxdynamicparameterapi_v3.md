> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxdynamicparameterapi_v3](https://developer.apple.com/documentation/professional_video_applications/fxdynamicparameterapi_v3)

# FxDynamicParameterAPI_v3 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Allows your plugin to create parameters on-the-fly.

## Declaration

```swift
protocol FxDynamicParameterAPI_v3
```

<a id="overview"></a>

## Overview

With this API your plugin can create and remove parameters outside of its `-addParameters` method. It can also get and set various properties of parameters during run-time, as well, such as the minimum and maximum allowable values.

## Topics

### Instance Methods

- [parameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](fxdynamicparameterapi_v3/parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](fxdynamicparameterapi_v3/parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameter(\_:name:)](fxdynamicparameterapi_v3/parameter%28__name_%29.md): Get a parameter’s name.
- [parameterCount()](fxdynamicparameterapi_v3/parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [parameterID(at:)](fxdynamicparameterapi_v3/parameterid%28at_%29.md): Returns the ID of the parameter at the given index.
- [removeParameter(\_:)](fxdynamicparameterapi_v3/removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAt(\_:)](fxdynamicparameterapi_v3/setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](fxdynamicparameterapi_v3/setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](fxdynamicparameterapi_v3/setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter(\_:name:)](fxdynamicparameterapi_v3/setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter(\_:entries:defaultValue:)](fxdynamicparameterapi_v3/setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.

# FxDynamicParameterAPI_v3 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Allows your plugin to create parameters on-the-fly.

## Declaration

```objectivec
@protocol FxDynamicParameterAPI_v3
```

<a id="overview"></a>

## Overview

With this API your plugin can create and remove parameters outside of its `-addParameters` method. It can also get and set various properties of parameters during run-time, as well, such as the minimum and maximum allowable values.

## Topics

### Instance Methods

- [parameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](fxdynamicparameterapi_v3/parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](fxdynamicparameterapi_v3/parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameter:name:](fxdynamicparameterapi_v3/parameter%28__name_%29.md): Get a parameter’s name.
- [parameterCount](fxdynamicparameterapi_v3/parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [parameterIDAtIndex:](fxdynamicparameterapi_v3/parameterid%28at_%29.md): Returns the ID of the parameter at the given index.
- [removeParameter:](fxdynamicparameterapi_v3/removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAtTime:withError:](fxdynamicparameterapi_v3/setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](fxdynamicparameterapi_v3/setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](fxdynamicparameterapi_v3/setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter:name:](fxdynamicparameterapi_v3/setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter:entries:defaultValue:](fxdynamicparameterapi_v3/setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.

## See Also

### Parameter APIs

- [FxParameterCreationAPI_v5](fxparametercreationapi_v5.md): Defines the methods provided by the host application to create parameters.
- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
