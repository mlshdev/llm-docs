> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/setpickermode(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/setpickermode(_:))

# setPickerMode(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Specifies the color panel’s initial picker.

## Declaration

```swift
class func setPickerMode(_ mode: NSColorPanel.Mode)
```

## Parameters

- `mode`: A constant specifying which color picker mode is initially visible. This is one of the symbolic constants described in `Color Panel Modes`.

<a id="Discussion"></a>

## Discussion

This method may be called at any time, whether or not an application’s `NSColorPanel` has been instantiated.

## See Also

### Setting color picker modes

- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanel.Mode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask(\_:)](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanel.Options](options.md): The color modes that are enabled for a color panel.

# setPickerMode: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Specifies the color panel’s initial picker.

## Declaration

```objectivec
+ (void) setPickerMode:(NSColorPanelMode) mode;
```

## Parameters

- `mode`: A constant specifying which color picker mode is initially visible. This is one of the symbolic constants described in `Color Panel Modes`.

<a id="Discussion"></a>

## Discussion

This method may be called at any time, whether or not an application’s `NSColorPanel` has been instantiated.

## See Also

### Setting color picker modes

- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanelMode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [setPickerMask:](setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
- [NSColorPanelOptions](options.md): The color modes that are enabled for a color panel.
