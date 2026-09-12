> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/controlalternatingrowbackgroundcolors](https://developer.apple.com/documentation/appkit/nscolor/controlalternatingrowbackgroundcolors)

# controlAlternatingRowBackgroundColors (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 11.0)

An array containing the system specified background colors for alternating rows in tables and lists.

> Use [alternatingContentBackgroundColors](alternatingcontentbackgroundcolors.md) instead.

## Declaration

```swift
class var controlAlternatingRowBackgroundColors: [NSColor] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSColor` objects specifying the system colors used for rows in tables and lists. You should not assume the array will contain only two colors. For more information, see [NSColor](../nscolor.md).

## See Also

### Deprecated colors

- [alternateSelectedControlColor](alternateselectedcontrolcolor.md): Deprecated. The system color used for the face of a selected control in a list or table.
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

# controlAlternatingRowBackgroundColors (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 11.0)

An array containing the system specified background colors for alternating rows in tables and lists.

> Use [alternatingContentBackgroundColors](alternatingcontentbackgroundcolors.md) instead.

## Declaration

```objectivec
@property (class, strong, readonly) NSArray<NSColor *> * controlAlternatingRowBackgroundColors;
```

<a id="return-value"></a>

## Return Value

An array of `NSColor` objects specifying the system colors used for rows in tables and lists. You should not assume the array will contain only two colors. For more information, see [NSColor](../nscolor.md).

## See Also

### Deprecated colors

- [alternateSelectedControlColor](alternateselectedcontrolcolor.md): Deprecated. The system color used for the face of a selected control in a list or table.
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
