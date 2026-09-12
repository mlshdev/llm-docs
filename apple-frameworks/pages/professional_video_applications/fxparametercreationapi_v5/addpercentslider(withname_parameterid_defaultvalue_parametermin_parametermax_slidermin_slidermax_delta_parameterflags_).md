> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametercreationapi_v5/addpercentslider(withname:parameterid:defaultvalue:parametermin:parametermax:slidermin:slidermax:delta:parameterflags:)](https://developer.apple.com/documentation/professional_video_applications/fxparametercreationapi_v5/addpercentslider(withname:parameterid:defaultvalue:parametermin:parametermax:slidermin:slidermax:delta:parameterflags:))

# addPercentSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list.  A parameter value of 1.0 corresponds to a slider value of 100%.

## Declaration

```swift
func addPercentSlider(withName name: String, parameterID: UInt32, defaultValue: Double, parameterMin min: Double, parameterMax max: Double, sliderMin: Double, sliderMax: Double, delta sliderDelta: Double, parameterFlags flags: FxParameterFlags) -> Bool
```

## Parameters

- `name`: Name of the parameter in the user interface.
- `parameterID`: Unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `defaultValue`: Initial value for the parameter.
- `min`: Minimum value for the parameter.
- `max`: Maximum value for the parameter.
- `sliderMin`: Minimum value for the parameter’s slider control.
- `sliderMax`: Maximum value for the parameter’s slider control.
- `sliderDelta`: Step value added or removed when the slider is moved.
- `flags`: Flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates a floating point slider parameter; `NO` otherwise.

## See Also

### Instance Methods

- [addAngleSlider(withName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:)](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:)](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:)](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addCustomParameter(withName:parameterID:defaultValue:parameterFlags:)](addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
- [addFloatSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenu(withName:parameterID:fontName:parameterFlags:)](addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradient(withName:parameterID:parameterFlags:)](addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButton(withName:parameterID:selector:parameterFlags:)](addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogram(withName:parameterID:parameterFlags:)](addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReference(withName:parameterID:parameterFlags:)](addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSlider(withName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:)](addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPicker(withName:parameterID:parameterFlags:)](addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPointParameter(withName:parameterID:defaultX:defaultY:parameterFlags:)](addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenu(withName:parameterID:defaultValue:menuEntries:parameterFlags:)](addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButton(withName:parameterID:selector:parameterFlags:)](addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.

# addPercentSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Creates a percentage floating point slider parameter and adds it to the plug-in’s parameter list.  A parameter value of 1.0 corresponds to a slider value of 100%.

## Declaration

```objectivec
- (BOOL) addPercentSliderWithName:(NSString *) name parameterID:(UInt32) parameterID defaultValue:(double) defaultValue parameterMin:(double) min parameterMax:(double) max sliderMin:(double) sliderMin sliderMax:(double) sliderMax delta:(double) sliderDelta parameterFlags:(FxParameterFlags) flags;
```

## Parameters

- `name`: Name of the parameter in the user interface.
- `parameterID`: Unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `defaultValue`: Initial value for the parameter.
- `min`: Minimum value for the parameter.
- `max`: Maximum value for the parameter.
- `sliderMin`: Minimum value for the parameter’s slider control.
- `sliderMax`: Maximum value for the parameter’s slider control.
- `sliderDelta`: Step value added or removed when the slider is moved.
- `flags`: Flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates a floating point slider parameter; `NO` otherwise.

## See Also

### Instance Methods

- [addAngleSliderWithName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_parameterflags_%29.md): Creates an RGB color parameter and adds it to the plug-in’s parameter list.
- [addCustomParameterWithName:parameterID:defaultValue:parameterFlags:](addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
- [addFloatSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](addfloatslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates a floating point slider parameter and adds it to the plug-in’s parameter list.
- [addFontMenuWithName:parameterID:fontName:parameterFlags:](addfontmenu%28withname_parameterid_fontname_parameterflags_%29.md): Creates a font menu button parameter and adds it to the plug-in’s parameter.
- [addGradientWithName:parameterID:parameterFlags:](addgradient%28withname_parameterid_parameterflags_%29.md): Creates a gradient parameter.
- [addHelpButtonWithName:parameterID:selector:parameterFlags:](addhelpbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a help push button parameter and adds it to the plug-in’s parameter.
- [addHistogramWithName:parameterID:parameterFlags:](addhistogram%28withname_parameterid_parameterflags_%29.md): Creates a histogram parameter.
- [addImageReferenceWithName:parameterID:parameterFlags:](addimagereference%28withname_parameterid_parameterflags_%29.md): Creates an image reference parameter and adds it to the plug-in’s parameter list.
- [addIntSliderWithName:parameterID:defaultValue:parameterMin:parameterMax:sliderMin:sliderMax:delta:parameterFlags:](addintslider%28withname_parameterid_defaultvalue_parametermin_parametermax_slidermin_slidermax_delta_parameterflags_%29.md): Creates an integer slider parameter and adds it to the plug-in’s parameter list.
- [addPathPickerWithName:parameterID:parameterFlags:](addpathpicker%28withname_parameterid_parameterflags_%29.md): Creates a parameter for choosing an image mask path.
- [addPointParameterWithName:parameterID:defaultX:defaultY:parameterFlags:](addpointparameter%28withname_parameterid_defaultx_defaulty_parameterflags_%29.md): Creates a position point parameter and adds it to the plug-in’s parameter list.
- [addPopupMenuWithName:parameterID:defaultValue:menuEntries:parameterFlags:](addpopupmenu%28withname_parameterid_defaultvalue_menuentries_parameterflags_%29.md): Creates a popup menu parameter and adds it to the plug-in’s parameter list.
- [addPushButtonWithName:parameterID:selector:parameterFlags:](addpushbutton%28withname_parameterid_selector_parameterflags_%29.md): Creates a push button parameter and adds it to the plug-in’s parameter list.
