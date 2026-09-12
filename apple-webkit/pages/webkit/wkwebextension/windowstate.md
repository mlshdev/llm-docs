> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowstate](https://developer.apple.com/documentation/webkit/wkwebextension/windowstate)

# WKWebExtension.WindowState (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate possible states of a window.

## Declaration

```swift
enum WindowState
```

## Topics

### Enumeration Cases

- [WKWebExtension.WindowState.fullscreen](windowstate/fullscreen.md): Indicates a window is in full-screen mode.
- [WKWebExtension.WindowState.maximized](windowstate/maximized.md): Indicates a window is maximized.
- [WKWebExtension.WindowState.minimized](windowstate/minimized.md): Indicates a window is minimized.
- [WKWebExtension.WindowState.normal](windowstate/normal.md): Indicates a window is in its normal state.

### Initializers

- [init(rawValue:)](windowstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [WKWebExtension.WindowType](windowtype.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate the type of a window.

# WKWebExtensionWindowState (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate possible states of a window.

## Declaration

```objectivec
enum WKWebExtensionWindowState : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionWindowStateFullscreen](windowstate/fullscreen.md): Indicates a window is in full-screen mode.
- [WKWebExtensionWindowStateMaximized](windowstate/maximized.md): Indicates a window is maximized.
- [WKWebExtensionWindowStateMinimized](windowstate/minimized.md): Indicates a window is minimized.
- [WKWebExtensionWindowStateNormal](windowstate/normal.md): Indicates a window is in its normal state.

## See Also

### Enumerations

- [WKWebExtensionTabChangedProperties](tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.
- [WKWebExtensionWindowType](windowtype.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate the type of a window.
