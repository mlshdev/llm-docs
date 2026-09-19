> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgwindowlistoption/optiononscreenbelowwindow

# optionOnScreenBelowWindow (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var optionOnScreenBelowWindow: CGWindowListOption { get }
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen and in behind the window specified in the `relativeToWindow` parameter. Windows are returned in order from front to back.

## See Also

### Type Properties

- [excludeDesktopElements](excludedesktopelements.md)
- [optionAll](optionall.md)
- [optionIncludingWindow](optionincludingwindow.md)
- [optionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [optionOnScreenOnly](optiononscreenonly.md)

# kCGWindowListOptionOnScreenBelowWindow (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowListOptionOnScreenBelowWindow
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen and in behind the window specified in the `relativeToWindow` parameter. Windows are returned in order from front to back.

## See Also

### Type Properties

- [kCGWindowListExcludeDesktopElements](excludedesktopelements.md)
- [kCGWindowListOptionAll](optionall.md)
- [kCGWindowListOptionIncludingWindow](optionincludingwindow.md)
- [kCGWindowListOptionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [kCGWindowListOptionOnScreenOnly](optiononscreenonly.md)
