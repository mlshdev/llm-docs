> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/ui-element-colors](https://developer.apple.com/documentation/appkit/ui-element-colors)

# UI element colors (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.

<a id="overview"></a>

## Overview

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color#dynamic-system-colors).

## Topics

### Label colors

- [labelColor](nscolor/labelcolor.md): The primary color to use for text labels.
- [secondaryLabelColor](nscolor/secondarylabelcolor.md): The secondary color to use for text labels.
- [tertiaryLabelColor](nscolor/tertiarylabelcolor.md): The tertiary color to use for text labels.
- [quaternaryLabelColor](nscolor/quaternarylabelcolor.md): The quaternary color to use for text labels and separators.

### Text colors

- [textColor](nscolor/textcolor.md): The color to use for text.
- [placeholderTextColor](nscolor/placeholdertextcolor.md): The color to use for placeholder text in controls or text views.
- [selectedTextColor](nscolor/selectedtextcolor.md): The color to use for selected text.
- [textBackgroundColor](nscolor/textbackgroundcolor.md): The color to use for the background area behind text.
- [selectedTextBackgroundColor](nscolor/selectedtextbackgroundcolor.md): The color to use for the background of selected text.
- [keyboardFocusIndicatorColor](nscolor/keyboardfocusindicatorcolor.md): The color to use for the keyboard focus ring around controls.
- [unemphasizedSelectedTextColor](nscolor/unemphasizedselectedtextcolor.md): The color to use for selected text in an unemphasized context.
- [unemphasizedSelectedTextBackgroundColor](nscolor/unemphasizedselectedtextbackgroundcolor.md): The color to use for the text background in an unemphasized context.

### Content colors

- [linkColor](nscolor/linkcolor.md): The color to use for links.
- [separatorColor](nscolor/separatorcolor.md): The color to use for separators between different sections of content.
- [selectedContentBackgroundColor](nscolor/selectedcontentbackgroundcolor.md): The color to use for the background of selected and emphasized content.
- [unemphasizedSelectedContentBackgroundColor](nscolor/unemphasizedselectedcontentbackgroundcolor.md): The color to use for selected and unemphasized content.

### Menu colors

- [selectedMenuItemTextColor](nscolor/selectedmenuitemtextcolor.md): The color to use for the text in menu items.

### Table colors

- [gridColor](nscolor/gridcolor.md): The color to use for the optional gridlines, such as those in a table view.
- [headerTextColor](nscolor/headertextcolor.md): The color to use for text in header cells in table views and outline views.
- [alternatingContentBackgroundColors](nscolor/alternatingcontentbackgroundcolors.md): The colors to use for alternating content, typically found in table views and collection views.

### Control colors

- [controlAccentColor](nscolor/controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](nscolor/controlcolor.md): The color to use for the flat surfaces of a control.
- [controlBackgroundColor](nscolor/controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](nscolor/controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](nscolor/disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](nscolor/currentcontroltint.md): The current system control tint color.
- [selectedControlColor](nscolor/selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](nscolor/selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](nscolor/alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackground](nscolor/scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.

### Window colors

- [windowBackgroundColor](nscolor/windowbackgroundcolor.md): The color to use for the window background.
- [windowFrameTextColor](nscolor/windowframetextcolor.md): The color to use for text in a window’s frame.
- [underPageBackgroundColor](nscolor/underpagebackgroundcolor.md): The color to use in the area beneath your window’s views.

### Highlights and shadows

- [findHighlightColor](nscolor/findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [highlightColor](nscolor/highlightcolor.md): The color to use as a virtual light source on the screen.
- [shadowColor](nscolor/shadowcolor.md): The color to use for virtual shadows cast by raised objects on the screen.

### Fill colors

- [quaternarySystemFill](nscolor/quaternarysystemfill.md): A color appropriate for filling large areas, such as a group box or tab pane.
- [quinaryLabel](nscolor/quinarylabel.md): Deprecated.
- [quinarySystemFill](nscolor/quinarysystemfill.md): A color appropriate for filling large areas that require subtle emphasis, such as content of a form.
- [secondarySystemFill](nscolor/secondarysystemfill.md): A color appropriate for filling small-size shapes, such as the backing of a progress indicator.
- [systemFill](nscolor/systemfill.md): A color appropriate for filling thin shapes, such as the track of a slider.
- [tertiarySystemFill](nscolor/tertiarysystemfill.md): A color appropriate for filling medium-size shapes, such as the backing of a switch.
- [textInsertionPointColor](nscolor/textinsertionpointcolor.md)

### Deprecated colors

- [alternateSelectedControlColor](nscolor/alternateselectedcontrolcolor.md): Deprecated. The system color used for the face of a selected control in a list or table.
- [controlAlternatingRowBackgroundColors](nscolor/controlalternatingrowbackgroundcolors.md): Deprecated. An array containing the system specified background colors for alternating rows in tables and lists.
- [controlHighlightColor](nscolor/controlhighlightcolor.md): Deprecated. The system color used for the highlighted bezels of controls.
- [controlLightHighlightColor](nscolor/controllighthighlightcolor.md): Deprecated. The system color used for light highlights in controls.
- [controlShadowColor](nscolor/controlshadowcolor.md): Deprecated. The system color used for the shadows dropped from controls.
- [controlDarkShadowColor](nscolor/controldarkshadowcolor.md): Deprecated. The system color used for the dark edge of the shadow dropped from controls.
- [headerColor](nscolor/headercolor.md): Deprecated. The system color used as the background color for header cells in table views and outline views.
- [knobColor](nscolor/knobcolor.md): Deprecated. The system color used for the flat surface of a slider knob that hasn’t been selected.
- [selectedKnobColor](nscolor/selectedknobcolor.md): Deprecated. The system color used for the slider knob when it is selected.
- [scrollBarColor](nscolor/scrollbarcolor.md): Deprecated. The system color used for scroll “bars”—that is, for the groove in which a scroller’s knob moves
- [secondarySelectedControlColor](nscolor/secondaryselectedcontrolcolor.md): Deprecated. The color used for selected controls in non-key views.
- [selectedMenuItemColor](nscolor/selectedmenuitemcolor.md): Deprecated. The color to use for the face of selected menu items.
- [windowFrameColor](nscolor/windowframecolor.md): Deprecated. The system color used for window frames, except for their text.

## See Also

### Getting and creating colors

- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.

# UI element colors (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Retrieve standard color objects for use with windows, controls, labels, text, selections and other content in your app.

<a id="overview"></a>

## Overview

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color#dynamic-system-colors).

## Topics

### Label colors

- [labelColor](nscolor/labelcolor.md): The primary color to use for text labels.
- [secondaryLabelColor](nscolor/secondarylabelcolor.md): The secondary color to use for text labels.
- [tertiaryLabelColor](nscolor/tertiarylabelcolor.md): The tertiary color to use for text labels.
- [quaternaryLabelColor](nscolor/quaternarylabelcolor.md): The quaternary color to use for text labels and separators.

### Text colors

- [textColor](nscolor/textcolor.md): The color to use for text.
- [placeholderTextColor](nscolor/placeholdertextcolor.md): The color to use for placeholder text in controls or text views.
- [selectedTextColor](nscolor/selectedtextcolor.md): The color to use for selected text.
- [textBackgroundColor](nscolor/textbackgroundcolor.md): The color to use for the background area behind text.
- [selectedTextBackgroundColor](nscolor/selectedtextbackgroundcolor.md): The color to use for the background of selected text.
- [keyboardFocusIndicatorColor](nscolor/keyboardfocusindicatorcolor.md): The color to use for the keyboard focus ring around controls.
- [unemphasizedSelectedTextColor](nscolor/unemphasizedselectedtextcolor.md): The color to use for selected text in an unemphasized context.
- [unemphasizedSelectedTextBackgroundColor](nscolor/unemphasizedselectedtextbackgroundcolor.md): The color to use for the text background in an unemphasized context.

### Content colors

- [linkColor](nscolor/linkcolor.md): The color to use for links.
- [separatorColor](nscolor/separatorcolor.md): The color to use for separators between different sections of content.
- [selectedContentBackgroundColor](nscolor/selectedcontentbackgroundcolor.md): The color to use for the background of selected and emphasized content.
- [unemphasizedSelectedContentBackgroundColor](nscolor/unemphasizedselectedcontentbackgroundcolor.md): The color to use for selected and unemphasized content.

### Menu colors

- [selectedMenuItemTextColor](nscolor/selectedmenuitemtextcolor.md): The color to use for the text in menu items.

### Table colors

- [gridColor](nscolor/gridcolor.md): The color to use for the optional gridlines, such as those in a table view.
- [headerTextColor](nscolor/headertextcolor.md): The color to use for text in header cells in table views and outline views.
- [alternatingContentBackgroundColors](nscolor/alternatingcontentbackgroundcolors.md): The colors to use for alternating content, typically found in table views and collection views.

### Control colors

- [controlAccentColor](nscolor/controlaccentcolor.md): The user’s current accent color preference.
- [controlColor](nscolor/controlcolor.md): The color to use for the flat surfaces of a control.
- [controlBackgroundColor](nscolor/controlbackgroundcolor.md): The color to use for the background of large controls, such as scroll views or table views.
- [controlTextColor](nscolor/controltextcolor.md): The color to use for text on enabled controls.
- [disabledControlTextColor](nscolor/disabledcontroltextcolor.md): The color to use for text on disabled controls.
- [currentControlTint](nscolor/currentcontroltint.md): The current system control tint color.
- [selectedControlColor](nscolor/selectedcontrolcolor.md): The color to use for the face of a selected control—that is, a control that has been clicked or is being dragged.
- [selectedControlTextColor](nscolor/selectedcontroltextcolor.md): The color to use for text in a selected control—that is, a control being clicked or dragged.
- [alternateSelectedControlTextColor](nscolor/alternateselectedcontroltextcolor.md): The color to use for text in a selected control.
- [scrubberTexturedBackgroundColor](nscolor/scrubbertexturedbackground.md): The patterned color to use for the background of a scrubber control.

### Window colors

- [windowBackgroundColor](nscolor/windowbackgroundcolor.md): The color to use for the window background.
- [windowFrameTextColor](nscolor/windowframetextcolor.md): The color to use for text in a window’s frame.
- [underPageBackgroundColor](nscolor/underpagebackgroundcolor.md): The color to use in the area beneath your window’s views.

### Highlights and shadows

- [findHighlightColor](nscolor/findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [highlightColor](nscolor/highlightcolor.md): The color to use as a virtual light source on the screen.
- [shadowColor](nscolor/shadowcolor.md): The color to use for virtual shadows cast by raised objects on the screen.

### Fill colors

- [quaternarySystemFillColor](nscolor/quaternarysystemfill.md): A color appropriate for filling large areas, such as a group box or tab pane.
- [quinarySystemFillColor](nscolor/quinarysystemfill.md): A color appropriate for filling large areas that require subtle emphasis, such as content of a form.
- [secondarySystemFillColor](nscolor/secondarysystemfill.md): A color appropriate for filling small-size shapes, such as the backing of a progress indicator.
- [systemFillColor](nscolor/systemfill.md): A color appropriate for filling thin shapes, such as the track of a slider.
- [tertiarySystemFillColor](nscolor/tertiarysystemfill.md): A color appropriate for filling medium-size shapes, such as the backing of a switch.
- [textInsertionPointColor](nscolor/textinsertionpointcolor.md)

### Deprecated colors

- [alternateSelectedControlColor](nscolor/alternateselectedcontrolcolor.md): Deprecated. The system color used for the face of a selected control in a list or table.
- [controlAlternatingRowBackgroundColors](nscolor/controlalternatingrowbackgroundcolors.md): Deprecated. An array containing the system specified background colors for alternating rows in tables and lists.
- [controlHighlightColor](nscolor/controlhighlightcolor.md): Deprecated. The system color used for the highlighted bezels of controls.
- [controlLightHighlightColor](nscolor/controllighthighlightcolor.md): Deprecated. The system color used for light highlights in controls.
- [controlShadowColor](nscolor/controlshadowcolor.md): Deprecated. The system color used for the shadows dropped from controls.
- [controlDarkShadowColor](nscolor/controldarkshadowcolor.md): Deprecated. The system color used for the dark edge of the shadow dropped from controls.
- [headerColor](nscolor/headercolor.md): Deprecated. The system color used as the background color for header cells in table views and outline views.
- [knobColor](nscolor/knobcolor.md): Deprecated. The system color used for the flat surface of a slider knob that hasn’t been selected.
- [selectedKnobColor](nscolor/selectedknobcolor.md): Deprecated. The system color used for the slider knob when it is selected.
- [scrollBarColor](nscolor/scrollbarcolor.md): Deprecated. The system color used for scroll “bars”—that is, for the groove in which a scroller’s knob moves
- [secondarySelectedControlColor](nscolor/secondaryselectedcontrolcolor.md): Deprecated. The color used for selected controls in non-key views.
- [selectedMenuItemColor](nscolor/selectedmenuitemcolor.md): Deprecated. The color to use for the face of selected menu items.
- [windowFrameColor](nscolor/windowframecolor.md): Deprecated. The system color used for window frames, except for their text.

## See Also

### Getting and creating colors

- [Standard colors](standard-colors.md): Retrieve the standard color objects for common colors like red, blue, green, black, white, and more.
- [Color creation](color-creation.md): Load colors from asset catalogs, and create colors from raw component values, such as those used by grayscale, RGB, HSB, and CMYK colors.
