> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/currentcontroltint](https://developer.apple.com/documentation/appkit/nscolor/currentcontroltint)

# currentControlTint (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The current system control tint color.

## Declaration

```swift
class var currentControlTint: NSControlTint { get }
```

<a id="return-value"></a>

## Return Value

The current system control tint.

<a id="Discussion"></a>

## Discussion

An application can register for the [currentControlTintDidChangeNotification](currentcontroltintdidchangenotification.md) notification to be notified of changes to the system control tint.

## See Also

### Related Documentation

- [init(for:)](init%28for_%29.md): Deprecated. Returns the color object specified by the given control tint.

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](controlcolor.md): The color to use for the flat surfaces of a control.
- [controlBackgroundColor](controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackground](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.

# currentControlTint (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The current system control tint color.

## Declaration

```objectivec
@property (class, readonly) NSControlTint currentControlTint;
```

<a id="return-value"></a>

## Return Value

The current system control tint.

<a id="Discussion"></a>

## Discussion

An application can register for the [NSControlTintDidChangeNotification](currentcontroltintdidchangenotification.md) notification to be notified of changes to the system control tint.

## See Also

### Related Documentation

- [colorForControlTint:](init%28for_%29.md): Deprecated. Returns the color object specified by the given control tint.

### Control colors

- [controlAccentColor](controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](controlcolor.md): The color to use for the flat surfaces of a control.
- [controlBackgroundColor](controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackgroundColor](scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.
