> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlistoption/optiononscreenabovewindow](https://developer.apple.com/documentation/coregraphics/cgwindowlistoption/optiononscreenabovewindow)

# optionOnScreenAboveWindow (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var optionOnScreenAboveWindow: CGWindowListOption { get }
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen and in front of the window specified in the `relativeToWindow` parameter. Windows are returned in order from front to back.

## See Also

### Type Properties

- [excludeDesktopElements](excludedesktopelements.md)
- [optionAll](optionall.md)
- [optionIncludingWindow](optionincludingwindow.md)
- [optionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [optionOnScreenOnly](optiononscreenonly.md)

# kCGWindowListOptionOnScreenAboveWindow (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowListOptionOnScreenAboveWindow
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen and in front of the window specified in the `relativeToWindow` parameter. Windows are returned in order from front to back.

## See Also

### Type Properties

- [kCGWindowListExcludeDesktopElements](excludedesktopelements.md)
- [kCGWindowListOptionAll](optionall.md)
- [kCGWindowListOptionIncludingWindow](optionincludingwindow.md)
- [kCGWindowListOptionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [kCGWindowListOptionOnScreenOnly](optiononscreenonly.md)
