> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/mode-swift.enum](https://developer.apple.com/documentation/appkit/nscolorpanel/mode-swift.enum)

# NSColorPanel.Mode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A type defined for the `enum` constants specifying color panel modes.

## Declaration

```swift
enum Mode
```

## Topics

### Color Panel Modes

- [NSColorPanel.Mode.none](mode-swift.enum/none.md): No color panel mode.
- [NSColorPanel.Mode.gray](mode-swift.enum/gray.md): The grayscale-alpha color mode.
- [NSColorPanel.Mode.RGB](mode-swift.enum/rgb.md): The red-green-blue color mode.
- [NSColorPanel.Mode.CMYK](mode-swift.enum/cmyk.md): The cyan-magenta-yellow-black color mode.
- [NSColorPanel.Mode.HSB](mode-swift.enum/hsb.md): The hue-saturation-brightness color mode.
- [NSColorPanel.Mode.customPalette](mode-swift.enum/custompalette.md): The custom palette color mode.
- [NSColorPanel.Mode.colorList](mode-swift.enum/colorlist.md): The custom color list mode.
- [NSColorPanel.Mode.wheel](mode-swift.enum/wheel.md): The color wheel mode.
- [NSColorPanel.Mode.crayon](mode-swift.enum/crayon.md): The crayon picker mode.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting color picker modes

- [setPickerMode(\_:)](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [setPickerMask(\_:)](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanel.Options](options.md): The color modes that are enabled for a color panel.

# NSColorPanelMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A type defined for the `enum` constants specifying color panel modes.

## Declaration

```objectivec
enum NSColorPanelMode : NSInteger;
```

## Topics

### Color Panel Modes

- [NSColorPanelModeNone](mode-swift.enum/none.md): No color panel mode.
- [NSColorPanelModeGray](mode-swift.enum/gray.md): The grayscale-alpha color mode.
- [NSColorPanelModeRGB](mode-swift.enum/rgb.md): The red-green-blue color mode.
- [NSColorPanelModeCMYK](mode-swift.enum/cmyk.md): The cyan-magenta-yellow-black color mode.
- [NSColorPanelModeHSB](mode-swift.enum/hsb.md): The hue-saturation-brightness color mode.
- [NSColorPanelModeCustomPalette](mode-swift.enum/custompalette.md): The custom palette color mode.
- [NSColorPanelModeColorList](mode-swift.enum/colorlist.md): The custom color list mode.
- [NSColorPanelModeWheel](mode-swift.enum/wheel.md): The color wheel mode.
- [NSColorPanelModeCrayon](mode-swift.enum/crayon.md): The crayon picker mode.

### Deprecated Constants

- [NSNoModeColorPanel](../nsnomodecolorpanel.md): Deprecated. Indicates no color panel mode.
- [NSGrayModeColorPanel](../nsgraymodecolorpanel.md): Deprecated.
- [NSRGBModeColorPanel](../nsrgbmodecolorpanel.md): Deprecated.
- [NSCMYKModeColorPanel](../nscmykmodecolorpanel.md): Deprecated.
- [NSHSBModeColorPanel](../nshsbmodecolorpanel.md): Deprecated.
- [NSCustomPaletteModeColorPanel](../nscustompalettemodecolorpanel.md): Deprecated.
- [NSColorListModeColorPanel](../nscolorlistmodecolorpanel.md): Deprecated.
- [NSWheelModeColorPanel](../nswheelmodecolorpanel.md): Deprecated.
- [NSCrayonModeColorPanel](../nscrayonmodecolorpanel.md): Deprecated.

## See Also

### Setting color picker modes

- [setPickerMode:](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [setPickerMask:](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanelOptions](options.md): The color modes that are enabled for a color panel.
