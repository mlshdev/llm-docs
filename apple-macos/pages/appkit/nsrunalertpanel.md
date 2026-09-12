> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunalertpanel](https://developer.apple.com/documentation/appkit/nsrunalertpanel)

# NSRunAlertPanel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates an alert panel.

> Use [NSAlert](nsalert.md) instead.

## Declaration

```objectivec
extern NSInteger NSRunAlertPanel(NSString *title, NSString *msgFormat, NSString *defaultButton, NSString *alternateButton, NSString *otherButton, ...);
```

<a id="Discussion"></a>

## Discussion

Creates and runs an alert panel (or dialog) with the title of `title` and buttons with titles of `defaultButton`, `alternateButton`, and `otherButton`. The optional alert message specified by `msgFormat` should be a static value that can consist of variable values using a format string (list any necessary arguments for this formatted string at the end of the function’s argument list), an unformatted string, or an empty string (`@""`), but not `nil`. Note that passing an untrusted string in `msgFormat` can lead to security issues. See the description of [NSBeginAlertSheet](nsbeginalertsheet.md) for information on layout of buttons, default parameters, and possible return values. `NSRunAlertPanel` runs the panel in a modal event loop.

A Command-D key equivalent for the “Don’t Save” button is provided, if one is found. The button titles are searched for the localized value for “Don’t Save.” If a match is found, that button is assigned a Command-D key equivalent, provided it is not the default button.

If you create a modal panel using [runModalForWindow:](nsapplication/runmodal%28for_%29.md) or [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](nsapplication/beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md), you can assign the key equivalent yourself, using [keyEquivalent](nsbutton/keyequivalent.md) and [keyEquivalentModifierMask](nsbutton/keyequivalentmodifiermask.md).

This function not only creates the panel; it also puts the panel onscreen and runs it using the [runModalForWindow:](nsapplication/runmodal%28for_%29.md) method defined in the [NSApplication](nsapplication.md) class. This method sets up a modal event loop that causes the panel to remain onscreen until the user clicks one of its buttons. This function then removes the panel from the screen list and returns a value that indicates which of the three buttons the user clicked. For efficiency, this function creates the panel the first time it’s called and reuses it on subsequent calls, reconfiguring it if necessary.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [NSOpenGLGetOption](nsopenglgetoption.md): Deprecated. Returns global OpenGL options.
- [NSOpenGLGetVersion](nsopenglgetversion.md): Deprecated. Returns the NSOpenGL version numbers.
- [NSOpenGLSetOption](nsopenglsetoption.md): Deprecated. Sets global OpenGL options.
- [NSAccessibilityRaiseBadArgumentException](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSBeginAlertSheet](nsbeginalertsheet.md): Deprecated. Creates and runs an alert sheet.
- [NSBeginCriticalAlertSheet](nsbegincriticalalertsheet.md): Deprecated. Creates and runs a critical alert sheet.
- [NSBeginInformationalAlertSheet](nsbegininformationalalertsheet.md): Deprecated. Creates and runs an informational alert sheet.
- [NSGetAlertPanel](nsgetalertpanel.md): Deprecated. Returns an alert panel.
- [NSGetCriticalAlertPanel](nsgetcriticalalertpanel.md): Deprecated. Returns an alert panel to display a critical message.
- [NSGetInformationalAlertPanel](nsgetinformationalalertpanel.md): Deprecated. Returns an alert panel to display an informational message.
- [NSReleaseAlertPanel](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSRunCriticalAlertPanel](nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
- [NSRunAlertPanelRelativeToWindow](nsrunalertpanelrelativetowindow.md): Deprecated.
