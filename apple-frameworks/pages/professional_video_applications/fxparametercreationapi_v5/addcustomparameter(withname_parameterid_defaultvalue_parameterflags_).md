> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametercreationapi_v5/addcustomparameter(withname:parameterid:defaultvalue:parameterflags:)](https://developer.apple.com/documentation/professional_video_applications/fxparametercreationapi_v5/addcustomparameter(withname:parameterid:defaultvalue:parameterflags:))

# addCustomParameter(withName:parameterID:defaultValue:parameterFlags:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Creates a custom parameter and adds it to the plug-in’s parameter list.

## Declaration

```swift
func addCustomParameter(withName name: String, parameterID: UInt32, defaultValue: any NSCopying & NSSecureCoding & NSObjectProtocol, parameterFlags flags: FxParameterFlags) -> Bool
```

## Parameters

- `name`: Name of the parameter in the user interface.
- `parameterID`: Unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `defaultValue`: Initial entry for the parameter.
- `flags`: Flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates a custom parameter; `NO` otherwise.

<a id="discussion"></a>

## Discussion

The `defaultValue` argument is an instance, created by the plug-in, of the custom parameter’s class, which must conform to the [NSCoding](../../foundation/nscoding.md) protocol. `NSCoding` is used for serializing and unserializing the custom parameter’s value object for saving and loading.

> **Note**

> Your implementation of [NSSecureCoding](../../foundation/nssecurecoding.md) (`-encodeWithCoder:` and `-initWithCoder:`) must use keyed coding. If you have a custom parameter, you must implement the `FxCustomParameterInterpolation_v2` protocol for your custom class and implement the [classes(forCustomParameterID:)](../fxtileableeffect/classes%28forcustomparameterid_%29.md) method in your plug-in.

## See Also

### Instance Methods

- [addAngleSlider(withName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:)](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:)](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:)](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addFloatSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenu(withName:parameterID:fontName:parameterFlags:)](addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradient(withName:parameterID:parameterFlags:)](addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButton(withName:parameterID:selector:parameterFlags:)](addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogram(withName:parameterID:parameterFlags:)](addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReference(withName:parameterID:parameterFlags:)](addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPicker(withName:parameterID:parameterFlags:)](addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPercentSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](addpercentslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list. A parameter value of 1.0 corresponds to a slider value of 100%.
- [addPointParameter(withName:parameterID:defaultX:defaultY:parameterFlags:)](addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenu(withName:parameterID:defaultValue:menuEntries:parameterFlags:)](addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButton(withName:parameterID:selector:parameterFlags:)](addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.

# addCustomParameterWithName:parameterID:defaultValue:parameterFlags: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Creates a custom parameter and adds it to the plug-in’s parameter list.

## Declaration

```objectivec
- (BOOL) addCustomParameterWithName:(NSString *) name parameterID:(UInt32) parameterID defaultValue:(NSObject<NSCopying,NSSecureCoding> *) defaultValue parameterFlags:(FxParameterFlags) flags;
```

## Parameters

- `name`: Name of the parameter in the user interface.
- `parameterID`: Unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `defaultValue`: Initial entry for the parameter.
- `flags`: Flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates a custom parameter; `NO` otherwise.

<a id="discussion"></a>

## Discussion

The `defaultValue` argument is an instance, created by the plug-in, of the custom parameter’s class, which must conform to the [NSCoding](../../foundation/nscoding.md) protocol. `NSCoding` is used for serializing and unserializing the custom parameter’s value object for saving and loading.

> **Note**

> Your implementation of [NSSecureCoding](../../foundation/nssecurecoding.md) (`-encodeWithCoder:` and `-initWithCoder:`) must use keyed coding. If you have a custom parameter, you must implement the `FxCustomParameterInterpolation_v2` protocol for your custom class and implement the [classesForCustomParameterID:](../fxtileableeffect/classes%28forcustomparameterid_%29.md) method in your plug-in.

## See Also

### Instance Methods

- [addAngleSliderWithName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addFloatSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenuWithName:parameterID:fontName:parameterFlags:](addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradientWithName:parameterID:parameterFlags:](addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButtonWithName:parameterID:selector:parameterFlags:](addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogramWithName:parameterID:parameterFlags:](addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReferenceWithName:parameterID:parameterFlags:](addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPickerWithName:parameterID:parameterFlags:](addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPercentSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](addpercentslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list. A parameter value of 1.0 corresponds to a slider value of 100%.
- [addPointParameterWithName:parameterID:defaultX:defaultY:parameterFlags:](addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenuWithName:parameterID:defaultValue:menuEntries:parameterFlags:](addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButtonWithName:parameterID:selector:parameterFlags:](addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.
