> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/controlbackgroundcolor](https://developer.apple.com/documentation/appkit/nscolor/controlbackgroundcolor)

# controlBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the background of large controls, such as scroll views or table views.

## Declaration

```swift
class var controlBackgroundColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

Do not use this color for drawing. Instead, use an [NSVisualEffectView](../nsvisualeffectview.md) with the appropriate background material.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](controlcolor.md): The color to use for the flat surfaces of a control.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](currentcontroltint.md): The current system control tint color.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackground](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.

# controlBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the background of large controls, such as scroll views or table views.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * controlBackgroundColor;
```

<a id="return-value"></a>

## Return Value

Do not use this color for drawing. Instead, use an [NSVisualEffectView](../nsvisualeffectview.md) with the appropriate background material.

<a id="discussion"></a>

## Discussion

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](controlcolor.md): The color to use for the flat surfaces of a control.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](currentcontroltint.md): The current system control tint color.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackgroundColor](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.
