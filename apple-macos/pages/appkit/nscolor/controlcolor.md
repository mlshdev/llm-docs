> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/controlcolor](https://developer.apple.com/documentation/appkit/nscolor/controlcolor)

# controlColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the flat surfaces of a control.

## Declaration

```swift
class var controlColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

The system color used for the flat surfaces of a control. By default, the control color is a pattern color that will draw the ruled lines for the window background, which is the same as returned by [windowBackgroundColor](windowbackgroundcolor.md).

<a id="discussion"></a>

## Discussion

If you use [controlColor](controlcolor.md) assuming that it is a solid, you may have an incorrect appearance. You should use [lightGray](lightgray.md) in its place.

## See Also

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlBackgroundColor](controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](currentcontroltint.md): The current system control tint color.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackground](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.

# controlColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the flat surfaces of a control.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * controlColor;
```

<a id="return-value"></a>

## Return Value

The system color used for the flat surfaces of a control. By default, the control color is a pattern color that will draw the ruled lines for the window background, which is the same as returned by [windowBackgroundColor](windowbackgroundcolor.md).

<a id="discussion"></a>

## Discussion

If you use [controlColor](controlcolor.md) assuming that it is a solid, you may have an incorrect appearance. You should use [lightGrayColor](lightgray.md) in its place.

## See Also

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlBackgroundColor](controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](currentcontroltint.md): The current system control tint color.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackgroundColor](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.
