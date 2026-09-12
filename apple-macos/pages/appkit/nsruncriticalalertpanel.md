> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruncriticalalertpanel](https://developer.apple.com/documentation/appkit/nsruncriticalalertpanel)

# NSRunCriticalAlertPanel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates and runs a critical alert panel.

> Use [NSAlert](nsalert.md) instead.

## Declaration

```objectivec
extern NSInteger NSRunCriticalAlertPanel(NSString *title, NSString *msgFormat, NSString *defaultButton, NSString *alternateButton, NSString *otherButton, ...);
```

<a id="Discussion"></a>

## Discussion

Creates a critical alert panel that warns the user of some critical consequence of a requested action; the panel lets the user cancel the action and may allow the user to modify the action. It then runs the panel in a modal event loop.

The panel presented to the user is badged with a caution icon. For more information on using alerts, see Human Interface Guidelines \> [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts).

The arguments for this function are the same as those for [NSRunAlertPanel](nsrunalertpanel.md).

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
- [NSRunAlertPanel](nsrunalertpanel.md): Deprecated. Creates an alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
- [NSRunAlertPanelRelativeToWindow](nsrunalertpanelrelativetowindow.md): Deprecated.
