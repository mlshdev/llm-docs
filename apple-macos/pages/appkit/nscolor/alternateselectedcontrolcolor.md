> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/alternateselectedcontrolcolor](https://developer.apple.com/documentation/appkit/nscolor/alternateselectedcontrolcolor)

# alternateSelectedControlColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.2+ (deprecated in 11.0)

The system color used for the face of a selected control in a list or table.

> Use [selectedContentBackgroundColor](selectedcontentbackgroundcolor.md) instead.

## Declaration

```swift
class var alternateSelectedControlColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

The system color used for the face of a selected control—a control being clicked or dragged. This color is used in lists and tables.

<a id="Discussion"></a>

## Discussion

This color is the table and list view equivalent to the [selectedControlColor](selectedcontrolcolor.md) color, which is used for controls in other views.

For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [Color](https://developer.apple.com/design/human-interface-guidelines/color): Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.

### Deprecated colors

- [controlAlternatingRowBackgroundColors](controlalternatingrowbackgroundcolors.md): Deprecated. An array containing the system specified background colors for alternating rows in tables and lists.
- [controlHighlightColor](controlhighlightcolor.md): Deprecated. The system color used for the highlighted bezels of controls.
- [controlLightHighlightColor](controllighthighlightcolor.md): Deprecated. The system color used for light highlights in controls.
- [controlShadowColor](controlshadowcolor.md): Deprecated. The system color used for the shadows dropped from controls.
- [controlDarkShadowColor](controldarkshadowcolor.md): Deprecated. The system color used for the dark edge of the shadow dropped from controls.
- [headerColor](headercolor.md): Deprecated. The system color used as the background color for header cells in table views and outline views.
- [knobColor](knobcolor.md): Deprecated. The system color used for the flat surface of a slider knob that hasn’t been selected.
- [selectedKnobColor](selectedknobcolor.md): Deprecated. The system color used for the slider knob when it is selected.
- [scrollBarColor](scrollbarcolor.md): Deprecated. The system color used for scroll “bars”—that is, for the groove in which a scroller’s knob moves
- [secondarySelectedControlColor](secondaryselectedcontrolcolor.md): Deprecated. The color used for selected controls in non-key views.
- [selectedMenuItemColor](selectedmenuitemcolor.md): Deprecated. The color to use for the face of selected menu items.
- [windowFrameColor](windowframecolor.md): Deprecated. The system color used for window frames, except for their text.

# alternateSelectedControlColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.2+ (deprecated in 11.0)

The system color used for the face of a selected control in a list or table.

> Use [selectedContentBackgroundColor](selectedcontentbackgroundcolor.md) instead.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * alternateSelectedControlColor;
```

<a id="return-value"></a>

## Return Value

The system color used for the face of a selected control—a control being clicked or dragged. This color is used in lists and tables.

<a id="Discussion"></a>

## Discussion

This color is the table and list view equivalent to the [selectedControlColor](selectedcontrolcolor.md) color, which is used for controls in other views.

For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [alternateSelectedControlTextColor](alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [Color](https://developer.apple.com/design/human-interface-guidelines/color): Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information.
- [selectedControlColor](selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.

### Deprecated colors

- [controlAlternatingRowBackgroundColors](controlalternatingrowbackgroundcolors.md): Deprecated. An array containing the system specified background colors for alternating rows in tables and lists.
- [controlHighlightColor](controlhighlightcolor.md): Deprecated. The system color used for the highlighted bezels of controls.
- [controlLightHighlightColor](controllighthighlightcolor.md): Deprecated. The system color used for light highlights in controls.
- [controlShadowColor](controlshadowcolor.md): Deprecated. The system color used for the shadows dropped from controls.
- [controlDarkShadowColor](controldarkshadowcolor.md): Deprecated. The system color used for the dark edge of the shadow dropped from controls.
- [headerColor](headercolor.md): Deprecated. The system color used as the background color for header cells in table views and outline views.
- [knobColor](knobcolor.md): Deprecated. The system color used for the flat surface of a slider knob that hasn’t been selected.
- [selectedKnobColor](selectedknobcolor.md): Deprecated. The system color used for the slider knob when it is selected.
- [scrollBarColor](scrollbarcolor.md): Deprecated. The system color used for scroll “bars”—that is, for the groove in which a scroller’s knob moves
- [secondarySelectedControlColor](secondaryselectedcontrolcolor.md): Deprecated. The color used for selected controls in non-key views.
- [selectedMenuItemColor](selectedmenuitemcolor.md): Deprecated. The color to use for the face of selected menu items.
- [windowFrameColor](windowframecolor.md): Deprecated. The system color used for window frames, except for their text.
