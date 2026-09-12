> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametercreationapi_v5](https://developer.apple.com/documentation/professional_video_applications/fxparametercreationapi_v5)

# FxParameterCreationAPI_v5 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1.1+

Defines the methods provided by the host application to create parameters.

## Declaration

```swift
protocol FxParameterCreationAPI_v5
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)
- [Using FxPlug APIs](../professional-video-applications/using-fxplug-apis.md)

<a id="overview"></a>

## Overview

A plug-in uses the methods defined in this protocol (along with those defined in `FxOptionalParameterAPI.h`) to populate its parameter list. Each parameter is created with a unique numeric parameter ID. The host application uses this parameter ID to identify a parameter, and stores the parameter ID in a saved project file. If a new version of a plug-in removes a parameter, the host application will then ignore any saved parameter data for that obsolete parameter in a project that was saved while using the old version of the plug-in. This implies that a new version plug-in should never change the ID of a given parameter unless it intentionally wants to obsolesce old value data in saved projects. Similarly, it should not introduce a new parameter with an ID that has already been obsolesced.

This is version 5 of the Parameter Creation API. This version 5 protocol is not a superset of version 4.

> **Important**

>  Parameter IDs must be in the range of `[1, 9998]`. IDs outside of this range are invalid.

## Topics

### Instance Methods

- [addAngleSlider(withName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:)](fxparametercreationapi_v5/addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:)](fxparametercreationapi_v5/addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:)](fxparametercreationapi_v5/addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addCustomParameter(withName:parameterID:defaultValue:parameterFlags:)](fxparametercreationapi_v5/addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
- [addFloatSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](fxparametercreationapi_v5/addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenu(withName:parameterID:fontName:parameterFlags:)](fxparametercreationapi_v5/addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradient(withName:parameterID:parameterFlags:)](fxparametercreationapi_v5/addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButton(withName:parameterID:selector:parameterFlags:)](fxparametercreationapi_v5/addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogram(withName:parameterID:parameterFlags:)](fxparametercreationapi_v5/addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReference(withName:parameterID:parameterFlags:)](fxparametercreationapi_v5/addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](fxparametercreationapi_v5/addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPicker(withName:parameterID:parameterFlags:)](fxparametercreationapi_v5/addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPercentSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](fxparametercreationapi_v5/addpercentslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list. A parameter value of 1.0 corresponds to a slider value of 100%.
- [addPointParameter(withName:parameterID:defaultX:defaultY:parameterFlags:)](fxparametercreationapi_v5/addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenu(withName:parameterID:defaultValue:menuEntries:parameterFlags:)](fxparametercreationapi_v5/addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButton(withName:parameterID:selector:parameterFlags:)](fxparametercreationapi_v5/addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.
- [addStringParameter(withName:parameterID:defaultValue:parameterFlags:)](fxparametercreationapi_v5/addstringparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a string parameter and adds it to the plug-in’s parameter list.
- [addToggleButton(withName:parameterID:defaultValue:parameterFlags:)](fxparametercreationapi_v5/addtogglebutton%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a checkbox toggle button parameter and adds it to the plug-in’s parameter.
- [endParameterSubGroup()](fxparametercreationapi_v5/endparametersubgroup%28%29.md): Closes current parameter subgroup. You should always pair this with a preceding [startParameterSubGroup(\_:parameterID:parameterFlags:)](fxparametercreationapi_v5/startparametersubgroup%28__parameterid_parameterflags_%29.md) message.
- [startParameterSubGroup(\_:parameterID:parameterFlags:)](fxparametercreationapi_v5/startparametersubgroup%28__parameterid_parameterflags_%29.md): Starts a new parameter subgroup. All subsequent parameter additions are placed in this group until you send an [endParameterSubGroup()](fxparametercreationapi_v5/endparametersubgroup%28%29.md) message.

## See Also

### Parameter APIs

- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.

# FxParameterCreationAPI_v5 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the methods provided by the host application to create parameters.

## Declaration

```objectivec
@protocol FxParameterCreationAPI_v5
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Managing color space and gamut in plug-ins](../professional-video-applications/managing-color-space-and-gamut-in-plug-ins.md)
- [Using FxPlug APIs](../professional-video-applications/using-fxplug-apis.md)

<a id="overview"></a>

## Overview

A plug-in uses the methods defined in this protocol (along with those defined in `FxOptionalParameterAPI.h`) to populate its parameter list. Each parameter is created with a unique numeric parameter ID. The host application uses this parameter ID to identify a parameter, and stores the parameter ID in a saved project file. If a new version of a plug-in removes a parameter, the host application will then ignore any saved parameter data for that obsolete parameter in a project that was saved while using the old version of the plug-in. This implies that a new version plug-in should never change the ID of a given parameter unless it intentionally wants to obsolesce old value data in saved projects. Similarly, it should not introduce a new parameter with an ID that has already been obsolesced.

This is version 5 of the Parameter Creation API. This version 5 protocol is not a superset of version 4.

> **Important**

>  Parameter IDs must be in the range of `[1, 9998]`. IDs outside of this range are invalid.

## Topics

### Instance Methods

- [addAngleSliderWithName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:](fxparametercreationapi_v5/addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:](fxparametercreationapi_v5/addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:](fxparametercreationapi_v5/addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addCustomParameterWithName:parameterID:defaultValue:parameterFlags:](fxparametercreationapi_v5/addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
- [addFloatSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](fxparametercreationapi_v5/addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenuWithName:parameterID:fontName:parameterFlags:](fxparametercreationapi_v5/addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradientWithName:parameterID:parameterFlags:](fxparametercreationapi_v5/addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButtonWithName:parameterID:selector:parameterFlags:](fxparametercreationapi_v5/addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogramWithName:parameterID:parameterFlags:](fxparametercreationapi_v5/addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReferenceWithName:parameterID:parameterFlags:](fxparametercreationapi_v5/addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](fxparametercreationapi_v5/addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPickerWithName:parameterID:parameterFlags:](fxparametercreationapi_v5/addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPercentSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](fxparametercreationapi_v5/addpercentslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list. A parameter value of 1.0 corresponds to a slider value of 100%.
- [addPointParameterWithName:parameterID:defaultX:defaultY:parameterFlags:](fxparametercreationapi_v5/addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenuWithName:parameterID:defaultValue:menuEntries:parameterFlags:](fxparametercreationapi_v5/addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButtonWithName:parameterID:selector:parameterFlags:](fxparametercreationapi_v5/addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.
- [addStringParameterWithName:parameterID:defaultValue:parameterFlags:](fxparametercreationapi_v5/addstringparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a string parameter and adds it to the plug-in’s parameter list.
- [addToggleButtonWithName:parameterID:defaultValue:parameterFlags:](fxparametercreationapi_v5/addtogglebutton%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a checkbox toggle button parameter and adds it to the plug-in’s parameter.
- [endParameterSubGroup](fxparametercreationapi_v5/endparametersubgroup%28%29.md): Closes current parameter subgroup. You should always pair this with a preceding [startParameterSubGroup:parameterID:parameterFlags:](fxparametercreationapi_v5/startparametersubgroup%28__parameterid_parameterflags_%29.md) message.
- [startParameterSubGroup:parameterID:parameterFlags:](fxparametercreationapi_v5/startparametersubgroup%28__parameterid_parameterflags_%29.md): Starts a new parameter subgroup. All subsequent parameter additions are placed in this group until you send an [endParameterSubGroup](fxparametercreationapi_v5/endparametersubgroup%28%29.md) message.

## See Also

### Parameter APIs

- [FxParameterRetrievalAPI_v6](fxparameterretrievalapi_v6.md): Defines the functions the application provides to retrieve parameter values.
- [FxParameterRetrievalAPI_v7](fxparameterretrievalapi_v7.md): Adds a method to retrieve the image information about an image parameter.
- [FxParameterSettingAPI_v5](fxparametersettingapi_v5.md): Defines the functions the application provides to set parameter values.
- [FxParameterSettingAPI_v6](fxparametersettingapi_v6.md): Defines the functions the application provides to set parameter flags.
- [FxDynamicParameterAPI_v3](fxdynamicparameterapi_v3.md): Allows your plugin to create parameters on-the-fly.
