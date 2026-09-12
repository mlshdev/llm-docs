> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbeginalertsheet](https://developer.apple.com/documentation/appkit/nsbeginalertsheet)

# NSBeginAlertSheet

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates and runs an alert sheet.

> Use [NSAlert](nsalert.md) instead.

## Declaration

```objectivec
extern void NSBeginAlertSheet(NSString *title, NSString *defaultButton, NSString *alternateButton, NSString *otherButton, NSWindow *docWindow, id modalDelegate, SEL didEndSelector, SEL didDismissSelector, void *contextInfo, NSString *msgFormat, ...);
```

<a id="Discussion"></a>

## Discussion

Creates and runs an alert sheet on `docWindow`, with the title of `title`, the text of `msg`, and buttons with titles of `defaultButton`, `alternateButton`, and `otherButton`.

The buttons are laid out on the lower-right corner of the sheet, with `defaultButton` on the right, `alternateButton` on the left, and `otherButton` in the middle. If `title` is `nil` or an empty string, a default localized title is used (“Alert” in English). If `defaultButton` is `nil` or an empty string, a default localized button title (“OK” in English) is used. For the remaining buttons, this function creates them only if their corresponding button title is non-`nil`.

A Command-D key equivalent for the “Don’t Save” button is provided, if one is found. The button titles are searched for the localized value for “Don’t Save.” If a match is found, that button is assigned a Command-D key equivalent, provided it is not the default button.

If you create a modal panel using [runModalForWindow:](nsapplication/runmodal%28for_%29.md) or [beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:](nsapplication/beginsheet%28__modalfor_modaldelegate_didend_contextinfo_%29.md), you can assign the key equivalent yourself, using [keyEquivalent](nsbutton/keyequivalent.md) and [keyEquivalentModifierMask](nsbutton/keyequivalentmodifiermask.md).

The `msg` argument is the message that’s displayed in the panel. It can use printf-style formatting characters; any necessary arguments should be listed at the end of the function’s argument list (after the `msg` argument). For more information on formatting characters, see the man page for `printf`.

When the modal session is ended, and before the sheet is dismissed, the `didEndSelector` is invoked on the `modalDelegate`. passing `contextInfo`. After the sheet is dismissed, the `didDismissSelector` is invoked on the `modalDelegate`, passing `contextInfo`. Typically, you will want to implement the `didEndSelector` but you may pass `NULL` for the `didDismissSelector`. The two selectors should be defined as follows:

```objc
sheetDidEnd:(NSWindow *)sheet returnCode:(int)returnCode contextInfo:(void  *)contextInfo;
sheetDidDismiss:(NSWindow *)sheet returnCode:(int)returnCode contextInfo:(void  *)contextInfo;
```

where `sheet` is the alert sheet, `returnCode` specifies which button the user pressed, and `contextInfo` is the same `contextInfo` passed into [NSBeginAlertSheet](nsbeginalertsheet.md). `returnCode` can be one of the following:

- [NSAlertDefaultReturn](nsalertdefaultreturn.md) means the user pressed the default button.
- [NSAlertAlternateReturn](nsalertalternatereturn.md) means the user pressed the alternate button.
- [NSAlertOtherReturn](nsalertotherreturn.md) means the user pressed the other button.
- [NSAlertErrorReturn](nsalerterrorreturn.md) means an error occurred while running the alert panel.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [NSOpenGLGetOption](nsopenglgetoption.md): Deprecated. Returns global OpenGL options.
- [NSOpenGLGetVersion](nsopenglgetversion.md): Deprecated. Returns the NSOpenGL version numbers.
- [NSOpenGLSetOption](nsopenglsetoption.md): Deprecated. Sets global OpenGL options.
- [NSAccessibilityRaiseBadArgumentException](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSBeginCriticalAlertSheet](nsbegincriticalalertsheet.md): Deprecated. Creates and runs a critical alert sheet.
- [NSBeginInformationalAlertSheet](nsbegininformationalalertsheet.md): Deprecated. Creates and runs an informational alert sheet.
- [NSGetAlertPanel](nsgetalertpanel.md): Deprecated. Returns an alert panel.
- [NSGetCriticalAlertPanel](nsgetcriticalalertpanel.md): Deprecated. Returns an alert panel to display a critical message.
- [NSGetInformationalAlertPanel](nsgetinformationalalertpanel.md): Deprecated. Returns an alert panel to display an informational message.
- [NSReleaseAlertPanel](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSRunAlertPanel](nsrunalertpanel.md): Deprecated. Creates an alert panel.
- [NSRunCriticalAlertPanel](nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
- [NSRunAlertPanelRelativeToWindow](nsrunalertpanelrelativetowindow.md): Deprecated.
