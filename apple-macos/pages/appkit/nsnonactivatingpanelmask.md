> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnonactivatingpanelmask](https://developer.apple.com/documentation/appkit/nsnonactivatingpanelmask)

# NSNonactivatingPanelMask

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The panel can receive keyboard input without activating the owning app.

## Declaration

```objectivec
static const NSWindowStyleMask NSNonactivatingPanelMask;
```

<a id="Discussion"></a>

## Discussion

Valid only for an instance of `NSPanel` or its subclasses; not valid for a window.

## See Also

### Constants

- [NSDocModalWindowMask](nsdocmodalwindowmask.md): Deprecated. The panel is created as a modal sheet.
- [NSUtilityWindowMask](nsutilitywindowmask.md): Deprecated. The panel is created as a floating window.
- [NSHUDWindowMask](nshudwindowmask.md): Deprecated. The panel is created as a transparent panel (sometimes called a “heads-up display”).
