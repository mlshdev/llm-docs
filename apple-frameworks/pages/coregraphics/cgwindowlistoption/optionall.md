> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlistoption/optionall](https://developer.apple.com/documentation/coregraphics/cgwindowlistoption/optionall)

# optionAll (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var optionAll: CGWindowListOption { get }
```

<a id="Discussion"></a>

## Discussion

List all windows, including both onscreen and offscreen windows. When retrieving a list with this option, the `relativeToWindow` parameter should be set to [kCGNullWindowID](../kcgnullwindowid.md).

## See Also

### Type Properties

- [excludeDesktopElements](excludedesktopelements.md)
- [optionIncludingWindow](optionincludingwindow.md)
- [optionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [optionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [optionOnScreenOnly](optiononscreenonly.md)

# kCGWindowListOptionAll (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowListOptionAll
```

<a id="Discussion"></a>

## Discussion

List all windows, including both onscreen and offscreen windows. When retrieving a list with this option, the `relativeToWindow` parameter should be set to [kCGNullWindowID](../kcgnullwindowid.md).

## See Also

### Type Properties

- [kCGWindowListExcludeDesktopElements](excludedesktopelements.md)
- [kCGWindowListOptionIncludingWindow](optionincludingwindow.md)
- [kCGWindowListOptionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [kCGWindowListOptionOnScreenBelowWindow](optiononscreenbelowwindow.md)
- [kCGWindowListOptionOnScreenOnly](optiononscreenonly.md)
