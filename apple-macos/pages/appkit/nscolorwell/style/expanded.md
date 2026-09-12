> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/style/expanded](https://developer.apple.com/documentation/appkit/nscolorwell/style/expanded)

# NSColorWell.Style.expanded (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 13.0+

A style that supports a color picker popover for fast interactions, and adds a dedicated button to display the color panel.

## Declaration

```swift
case expanded
```

<a id="Discussion"></a>

## Discussion

This style displays a dedicated button and a rectangular area with the selected color. Clicks in the dedicated button always display the system color panel. Clicks in the color area display a popover with a color picker. If you specified a custom action using the [pulldownAction](../pulldownaction.md) and [pulldownTarget](../pulldowntarget.md) properties, clicks in the color area execute your action method instead.

## See Also

### Getting the Style Option

- [NSColorWell.Style.default](default.md): The default style for color wells.
- [NSColorWell.Style.minimal](minimal.md): A style that adds minimal adornments to the color well.

# NSColorWellStyleExpanded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 13.0+

A style that supports a color picker popover for fast interactions, and adds a dedicated button to display the color panel.

## Declaration

```objectivec
NSColorWellStyleExpanded
```

<a id="Discussion"></a>

## Discussion

This style displays a dedicated button and a rectangular area with the selected color. Clicks in the dedicated button always display the system color panel. Clicks in the color area display a popover with a color picker. If you specified a custom action using the [pulldownAction](../pulldownaction.md) and [pulldownTarget](../pulldowntarget.md) properties, clicks in the color area execute your action method instead.

## See Also

### Getting the Style Option

- [NSColorWellStyleDefault](default.md): The default style for color wells.
- [NSColorWellStyleMinimal](minimal.md): A style that adds minimal adornments to the color well.
