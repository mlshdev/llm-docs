> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlistoption/optiononscreenonly](https://developer.apple.com/documentation/coregraphics/cgwindowlistoption/optiononscreenonly)

# optionOnScreenOnly (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var optionOnScreenOnly: CGWindowListOption { get }
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen. Windows are returned in order from front to back. When retrieving a list with this option, the `relativeToWindow` parameter should be set to [kCGNullWindowID](../kcgnullwindowid.md).

## See Also

### Type Properties

- [excludeDesktopElements](excludedesktopelements.md)
- [optionAll](optionall.md)
- [optionIncludingWindow](optionincludingwindow.md)
- [optionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [optionOnScreenBelowWindow](optiononscreenbelowwindow.md)

# kCGWindowListOptionOnScreenOnly (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowListOptionOnScreenOnly
```

<a id="Discussion"></a>

## Discussion

List all windows that are currently onscreen. Windows are returned in order from front to back. When retrieving a list with this option, the `relativeToWindow` parameter should be set to [kCGNullWindowID](../kcgnullwindowid.md).

## See Also

### Type Properties

- [kCGWindowListExcludeDesktopElements](excludedesktopelements.md)
- [kCGWindowListOptionAll](optionall.md)
- [kCGWindowListOptionIncludingWindow](optionincludingwindow.md)
- [kCGWindowListOptionOnScreenAboveWindow](optiononscreenabovewindow.md)
- [kCGWindowListOptionOnScreenBelowWindow](optiononscreenbelowwindow.md)
