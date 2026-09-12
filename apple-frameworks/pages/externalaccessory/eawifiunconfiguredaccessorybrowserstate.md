> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowserstate](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowserstate)

# EAWiFiUnconfiguredAccessoryBrowserState (Swift)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The possible states of an accessory browser.

## Declaration

```swift
enum EAWiFiUnconfiguredAccessoryBrowserState
```

## Topics

### States

- [EAWiFiUnconfiguredAccessoryBrowserState.wiFiUnavailable](eawifiunconfiguredaccessorybrowserstate/wifiunavailable.md): Wi-Fi is unavailable, typically because the user has placed the device in Airplane Mode or explicitly turned off Wi-Fi.
- [EAWiFiUnconfiguredAccessoryBrowserState.stopped](eawifiunconfiguredaccessorybrowserstate/stopped.md): The browser is not actively searching for unconfigured accessories.
- [EAWiFiUnconfiguredAccessoryBrowserState.searching](eawifiunconfiguredaccessorybrowserstate/searching.md): The browser is actively searching for unconfigured accessory.
- [EAWiFiUnconfiguredAccessoryBrowserState.configuring](eawifiunconfiguredaccessorybrowserstate/configuring.md): The browser is actively configuring an accessory.

### Initializers

- [init(rawValue:)](eawifiunconfiguredaccessorybrowserstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Updates About Browser State

- [accessoryBrowser(\_:didUpdate:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didupdate_%29.md): Indicates that the browser’s state has changed.

# EAWiFiUnconfiguredAccessoryBrowserState (Objective-C)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The possible states of an accessory browser.

## Declaration

```objectivec
enum EAWiFiUnconfiguredAccessoryBrowserState : NSInteger;
```

## Topics

### States

- [EAWiFiUnconfiguredAccessoryBrowserStateWiFiUnavailable](eawifiunconfiguredaccessorybrowserstate/wifiunavailable.md): Wi-Fi is unavailable, typically because the user has placed the device in Airplane Mode or explicitly turned off Wi-Fi.
- [EAWiFiUnconfiguredAccessoryBrowserStateStopped](eawifiunconfiguredaccessorybrowserstate/stopped.md): The browser is not actively searching for unconfigured accessories.
- [EAWiFiUnconfiguredAccessoryBrowserStateSearching](eawifiunconfiguredaccessorybrowserstate/searching.md): The browser is actively searching for unconfigured accessory.
- [EAWiFiUnconfiguredAccessoryBrowserStateConfiguring](eawifiunconfiguredaccessorybrowserstate/configuring.md): The browser is actively configuring an accessory.

## See Also

### Getting Updates About Browser State

- [accessoryBrowser:didUpdateState:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didupdate_%29.md): Indicates that the browser’s state has changed.
