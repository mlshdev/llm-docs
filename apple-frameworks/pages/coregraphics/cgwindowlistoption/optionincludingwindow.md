> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlistoption/optionincludingwindow](https://developer.apple.com/documentation/coregraphics/cgwindowlistoption/optionincludingwindow)

# optionIncludingWindow (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var optionIncludingWindow: CGWindowListOption { get }
```

<a id="Discussion"></a>

## Discussion

Include the specified window (from the `relativeToWindow` parameter) in the returned list. You must combine this option with the [optionOnScreenAboveWindow](optiononscreenabovewindow.md) or [optionOnScreenBelowWindow](optiononscreenbelowwindow.md) option to retrieve meaningful results.

## See Also

### Type Properties

- [excludeDesktopElements](excludedesktopelements.md)
- [optionAll](optionall.md)
- [optionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [optionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [optionOnScreenOnly](optiononscreenonly.md)

# kCGWindowListOptionIncludingWindow (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowListOptionIncludingWindow
```

<a id="Discussion"></a>

## Discussion

Include the specified window (from the `relativeToWindow` parameter) in the returned list. You must combine this option with the [kCGWindowListOptionOnScreenAboveWindow](optiononscreenabovewindow.md) or [kCGWindowListOptionOnScreenBelowWindow](optiononscreenbelowwindow.md) option to retrieve meaningful results.

## See Also

### Type Properties

- [kCGWindowListExcludeDesktopElements](excludedesktopelements.md)
- [kCGWindowListOptionAll](optionall.md)
- [kCGWindowListOptionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [kCGWindowListOptionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [kCGWindowListOptionOnScreenOnly](optiononscreenonly.md)
