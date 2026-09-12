> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsinterfacestyleforkey](https://developer.apple.com/documentation/appkit/nsinterfacestyleforkey)

# NSInterfaceStyleForKey

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns an interface style value for the specified key and responder.

## Declaration

```objectivec
extern NSInterfaceStyle NSInterfaceStyleForKey(NSString *key, NSResponder *responder);
```

<a id="Discussion"></a>

## Discussion

Used to determine an interface style based on a key and a responder, either of which may be `nil`. An [NSInterfaceStyle](nsinterfacestyle.md) value specifies the style in which an interface item, such as a button or a scroll bar, should be drawn. For example, a value of [NSMacintoshInterfaceStyle](nsmacintoshinterfacestyle.md) indicates an item should be drawn in the Macintosh style. The values defined for [NSInterfaceStyle](nsinterfacestyle.md) are [NSNoInterfaceStyle](nsnointerfacestyle.md), [NSNextStepInterfaceStyle](nsnextstepinterfacestyle.md), [NSWindows95InterfaceStyle](nswindows95interfacestyle.md), and [NSMacintoshInterfaceStyle](nsmacintoshinterfacestyle.md). Note that this function never returns [NSNoInterfaceStyle](nsnointerfacestyle.md).

The interface style value returned by this function depends on several factors. If responder is not `nil` and if responder specifies an interface style other than [NSNoInterfaceStyle](nsnointerfacestyle.md), this function returns the responder’s style, and `key` is ignored.

Otherwise, if `key` is not `nil` and there is an interface style for `key` specified by the defaults system, this function returns the interface style for `key` from the defaults system.

Finally, if `key` is `nil`, or if there is no interface style for `key` specified by the defaults system, this function returns the global interface style specified by the defaults system.

The defaults system allows an application to customize its behavior to match a user’s preferences. You can read about the defaults system in the documentation for [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults).

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
- [NSRunCriticalAlertPanel](nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
