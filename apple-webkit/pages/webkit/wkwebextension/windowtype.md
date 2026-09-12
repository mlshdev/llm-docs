> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowtype](https://developer.apple.com/documentation/webkit/wkwebextension/windowtype)

# WKWebExtension.WindowType (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate the type of a window.

## Declaration

```swift
enum WindowType
```

## Topics

### Enumeration Cases

- [WKWebExtension.WindowType.normal](windowtype/normal.md): Indicates a normal window.
- [WKWebExtension.WindowType.popup](windowtype/popup.md): Indicates a pop-up window.

### Initializers

- [init(rawValue:)](windowtype/init%28rawvalue_%29.md)

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

- [WKWebExtension.WindowState](windowstate.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate possible states of a window.

# WKWebExtensionWindowType (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate the type of a window.

## Declaration

```objectivec
enum WKWebExtensionWindowType : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionWindowTypeNormal](windowtype/normal.md): Indicates a normal window.
- [WKWebExtensionWindowTypePopup](windowtype/popup.md): Indicates a pop-up window.

## See Also

### Enumerations

- [WKWebExtensionTabChangedProperties](tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.
- [WKWebExtensionWindowState](windowstate.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate possible states of a window.
