> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/options](https://developer.apple.com/documentation/appkit/nscolorpanel/options)

# NSColorPanel.Options (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The color modes that are enabled for a color panel.

## Declaration

```swift
struct Options
```

## Topics

### Color Panel Options

- [grayModeMask](options/graymodemask.md): The grayscale-alpha color mode.
- [rgbModeMask](options/rgbmodemask.md): The red-green-blue color mode.
- [cmykModeMask](options/cmykmodemask.md): The cyan-magenta-yellow-black color mode.
- [hsbModeMask](options/hsbmodemask.md): The hue-saturation-brightness color mode.
- [customPaletteModeMask](options/custompalettemodemask.md): The custom palette color mode.
- [colorListModeMask](options/colorlistmodemask.md): The custom color list mode.
- [wheelModeMask](options/wheelmodemask.md): The color wheel mode.
- [crayonModeMask](options/crayonmodemask.md): The crayon color mode.
- [allModesMask](options/allmodesmask.md): All color modes.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting color picker modes

- [setPickerMode(\_:)](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanel.Mode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask(\_:)](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.

# NSColorPanelOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The color modes that are enabled for a color panel.

## Declaration

```objectivec
enum NSColorPanelOptions : NSUInteger;
```

## Topics

### Color Panel Options

- [NSColorPanelGrayModeMask](options/graymodemask.md): The grayscale-alpha color mode.
- [NSColorPanelRGBModeMask](options/rgbmodemask.md): The red-green-blue color mode.
- [NSColorPanelCMYKModeMask](options/cmykmodemask.md): The cyan-magenta-yellow-black color mode.
- [NSColorPanelHSBModeMask](options/hsbmodemask.md): The hue-saturation-brightness color mode.
- [NSColorPanelCustomPaletteModeMask](options/custompalettemodemask.md): The custom palette color mode.
- [NSColorPanelColorListModeMask](options/colorlistmodemask.md): The custom color list mode.
- [NSColorPanelWheelModeMask](options/wheelmodemask.md): The color wheel mode.
- [NSColorPanelCrayonModeMask](options/crayonmodemask.md): The crayon color mode.
- [NSColorPanelAllModesMask](options/allmodesmask.md): All color modes.

## See Also

### Setting color picker modes

- [setPickerMode:](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanelMode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask:](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
