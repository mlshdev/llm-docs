> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametercreationapi_v5/addcolorparameter(withname:parameterid:defaultred:defaultgreen:defaultblue:parameterflags:)](https://developer.apple.com/documentation/professional_video_applications/fxparametercreationapi_v5/addcolorparameter(withname:parameterid:defaultred:defaultgreen:defaultblue:parameterflags:))

# addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Creates an RGB color parameter and adds it to the plug-in’s parameter list.

## Declaration

```swift
func addColorParameter(withName name: String, parameterID: UInt32, defaultRed red: Double, defaultGreen green: Double, defaultBlue blue: Double, parameterFlags flags: FxParameterFlags) -> Bool
```

## Parameters

- `name`: The name of the parameter in the user interface.
- `parameterID`: The unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `red`: The initial red value of the parameter in float (0.0 - 1.0) space.
- `green`: The initial green value of the parameter in float (0.0 - 1.0) space.
- `blue`: The initial blue value of the parameter in float (0.0 - 1.0) space.
- `flags`: The flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates an RGB color parameter; otherwise `NO`.

<a id="discussion"></a>

## Discussion

The parameter assumes the default color values are in the sRGB color space.

## See Also

### Instance Methods

- [addAngleSlider(withName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:)](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameter(withName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:)](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addCustomParameter(withName:parameterID:defaultValue:parameterFlags:)](addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
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

# addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:parameterFlags: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Creates an RGB color parameter and adds it to the plug-in’s parameter list.

## Declaration

```objectivec
- (BOOL) addColorParameterWithName:(NSString *) name parameterID:(UInt32) parameterID defaultRed:(double) red defaultGreen:(double) green defaultBlue:(double) blue parameterFlags:(FxParameterFlags) flags;
```

## Parameters

- `name`: The name of the parameter in the user interface.
- `parameterID`: The unique identifier for a parameter. Used to retrieve, set, or validate the parameter.
- `red`: The initial red value of the parameter in float (0.0 - 1.0) space.
- `green`: The initial green value of the parameter in float (0.0 - 1.0) space.
- `blue`: The initial blue value of the parameter in float (0.0 - 1.0) space.
- `flags`: The flags that encode various state values for the parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if the application successfully creates an RGB color parameter; otherwise `NO`.

<a id="discussion"></a>

## Discussion

The parameter assumes the default color values are in the sRGB color space.

## See Also

### Instance Methods

- [addAngleSliderWithName:parameterID:defaultDegrees:parameterMinDegrees:parameterMaxDegrees:parameterFlags:](addangleslider%28withname_parameterid_defaultdegrees_parametermindegrees_parametermaxdegrees_parameterflags_%29.md): Creates an angle slider parameter and adds it to the plug-in’s parameter list.
- [addColorParameterWithName:parameterID:defaultRed:defaultGreen:defaultBlue:defaultAlpha:parameterFlags:](addcolorparameter%28withname_parameterid_defaultred_defaultgreen_defaultblue_defaultalpha_parameterflags_%29.md): Creates an RGBA color value and adds it to the plug-in’s parameter list.
- [addCustomParameterWithName:parameterID:defaultValue:parameterFlags:](addcustomparameter%28withname_parameterid_defaultvalue_parameterflags_%29.md): Creates a custom parameter and adds it to the plug-in’s parameter list.
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
