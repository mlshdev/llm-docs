> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbegincriticalalertsheet](https://developer.apple.com/documentation/appkit/nsbegincriticalalertsheet)

# NSBeginCriticalAlertSheet

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates and runs a critical alert sheet.

> Use [NSAlert](nsalert.md) instead.

## Declaration

```objectivec
extern void NSBeginCriticalAlertSheet(NSString *title, NSString *defaultButton, NSString *alternateButton, NSString *otherButton, NSWindow *docWindow, id modalDelegate, SEL didEndSelector, SEL didDismissSelector, void *contextInfo, NSString *msgFormat, ...);
```

<a id="Discussion"></a>

## Discussion

Creates and runs a critical alert sheet on `docWindow`, with the title of `title`, the text of `msg`, and buttons with titles of `defaultButton`, `alternateButton`, and `otherButton`.

See the description of [NSBeginAlertSheet](nsbeginalertsheet.md) for information on layout, default parameters, and the selectors.

The sheet presented to the user is badged with a caution icon. Critical alerts should be used only as specified in the “Alerts” section of the UI Element Guidelines: Windows chapter of [macOS Human Interface Guidelines](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/OSXHIGuidelines/index.html#//apple_ref/doc/uid/20000957).

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [NSOpenGLGetOption](nsopenglgetoption.md): Deprecated. Returns global OpenGL options.
- [NSOpenGLGetVersion](nsopenglgetversion.md): Deprecated. Returns the NSOpenGL version numbers.
- [NSOpenGLSetOption](nsopenglsetoption.md): Deprecated. Sets global OpenGL options.
- [NSAccessibilityRaiseBadArgumentException](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSBeginAlertSheet](nsbeginalertsheet.md): Deprecated. Creates and runs an alert sheet.
- [NSBeginInformationalAlertSheet](nsbegininformationalalertsheet.md): Deprecated. Creates and runs an informational alert sheet.
- [NSGetAlertPanel](nsgetalertpanel.md): Deprecated. Returns an alert panel.
- [NSGetCriticalAlertPanel](nsgetcriticalalertpanel.md): Deprecated. Returns an alert panel to display a critical message.
- [NSGetInformationalAlertPanel](nsgetinformationalalertpanel.md): Deprecated. Returns an alert panel to display an informational message.
- [NSReleaseAlertPanel](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSRunAlertPanel](nsrunalertpanel.md): Deprecated. Creates an alert panel.
- [NSRunCriticalAlertPanel](nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
- [NSRunAlertPanelRelativeToWindow](nsrunalertpanelrelativetowindow.md): Deprecated.
