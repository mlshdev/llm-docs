> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/setpickermask(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/setpickermask(_:))

# setPickerMask(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Determines which color selection modes are available in an application’s `NSColorPanel`.

## Declaration

```swift
class func setPickerMask(_ mask: NSColorPanel.Options)
```

## Parameters

- `mask`: One or more logically ORed color mode masks described in `Color Picker Mode Masks`.

<a id="Discussion"></a>

## Discussion

This method has an effect only before an `NSColorPanel` object is instantiated.

If you create a class that implements the color-picking protocols (`NSColorPickingDefault` and `NSColorPickingCustom`), you may want to give it a unique mask—one different from those defined for the standard color pickers. To display your color picker, your application will need to logically OR that unique mask with the standard color mask constants when invoking this method.

## See Also

### Setting color picker modes

- [setPickerMode(\_:)](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanel.Mode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [NSColorPanel.Options](options.md): The color modes that are enabled for a color panel.

# setPickerMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Determines which color selection modes are available in an application’s `NSColorPanel`.

## Declaration

```objectivec
+ (void) setPickerMask:(NSColorPanelOptions) mask;
```

## Parameters

- `mask`: One or more logically ORed color mode masks described in `Color Picker Mode Masks`.

<a id="Discussion"></a>

## Discussion

This method has an effect only before an `NSColorPanel` object is instantiated.

If you create a class that implements the color-picking protocols (`NSColorPickingDefault` and `NSColorPickingCustom`), you may want to give it a unique mask—one different from those defined for the standard color pickers. To display your color picker, your application will need to logically OR that unique mask with the standard color mask constants when invoking this method.

## See Also

### Setting color picker modes

- [setPickerMode:](setpickermode%28__%29.md): Specifies the color panel’s initial picker.
- [mode](mode-swift.property.md): The mode of the receiver the mode is one of the modes allowed by the color mask.
- [NSColorPanelMode](mode-swift.enum.md): A type defined for the `enum` constants specifying color panel modes.
- [NSColorPanelOptions](options.md): The color modes that are enabled for a color panel.
