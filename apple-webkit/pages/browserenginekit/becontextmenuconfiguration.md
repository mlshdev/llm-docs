> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/becontextmenuconfiguration](https://developer.apple.com/documentation/browserenginekit/becontextmenuconfiguration)

# BEContextMenuConfiguration (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An object that defers presentation of a contextual menu.

## Declaration

```swift
@MainActor class BEContextMenuConfiguration
```

<a id="overview"></a>

## Overview

Return an instance of this class when you don’t yet know whether a contextual menu is presentable, or don’t have the menu items available when the system calls your interaction delegate’s [contextMenuInteraction(\_:configurationForMenuAtLocation:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29) method. Once you have the real configuration, call [fulfill(using:)](becontextmenuconfiguration/fulfill%28using_%29.md) with it, or pass `nil` to indicate that no menu presentation is possible.

> **Note**

>  In most situations, use [UIDeferredMenuElement](https://developer.apple.com/documentation/uikit/uideferredmenuelement) when you don’t have the content of a contextual menu element at the time the system asks your delegate and you need to calculate it asynchronously. Use this class instead when the calculation involves a short deferral, for example, an XPC call to a browser extension.

## Topics

### Creating a context menu configuration

- [init()](becontextmenuconfiguration/init%28%29.md): Creates a context menu configuration.

### Fulfilling the configuration

- [fulfill(using:)](becontextmenuconfiguration/fulfill%28using_%29.md): Supplies a contextual menu configuration to the system.

## Relationships

### Inherits From

- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# BEContextMenuConfiguration (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An object that defers presentation of a contextual menu.

## Declaration

```objectivec
@interface BEContextMenuConfiguration : UIContextMenuConfiguration
```

<a id="overview"></a>

## Overview

Return an instance of this class when you don’t yet know whether a contextual menu is presentable, or don’t have the menu items available when the system calls your interaction delegate’s [contextMenuInteraction:configurationForMenuAtLocation:](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29) method. Once you have the real configuration, call [fulfillUsingConfiguration:](becontextmenuconfiguration/fulfill%28using_%29.md) with it, or pass `nil` to indicate that no menu presentation is possible.

> **Note**

>  In most situations, use [UIDeferredMenuElement](https://developer.apple.com/documentation/uikit/uideferredmenuelement) when you don’t have the content of a contextual menu element at the time the system asks your delegate and you need to calculate it asynchronously. Use this class instead when the calculation involves a short deferral, for example, an XPC call to a browser extension.

## Topics

### Creating a context menu configuration

- [init](becontextmenuconfiguration/init%28%29.md): Creates a context menu configuration.

### Fulfilling the configuration

- [fulfillUsingConfiguration:](becontextmenuconfiguration/fulfill%28using_%29.md): Supplies a contextual menu configuration to the system.

## Relationships

### Inherits From

- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration)
