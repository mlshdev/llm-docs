> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didupdate:)](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didupdate:))

# accessoryBrowser(\_:didUpdate:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser’s state has changed.

## Declaration

```swift
func accessoryBrowser(_ browser: EAWiFiUnconfiguredAccessoryBrowser, didUpdate state: EAWiFiUnconfiguredAccessoryBrowserState)
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `state`: The current state of the browser. See [EAWiFiUnconfiguredAccessoryBrowserState](../eawifiunconfiguredaccessorybrowserstate.md) for possible values.

<a id="Discussion"></a>

## Discussion

When the browser state changes, the delegate typically provides feedback to users. For example, the delegate might show whether the scan is currently active or inactive, or it might indicate that Wi-Fi is unavailable if a user starts a scan while the device is in airplane mode.

## See Also

### Getting Updates About Browser State

- [EAWiFiUnconfiguredAccessoryBrowserState](../eawifiunconfiguredaccessorybrowserstate.md): The possible states of an accessory browser.

# accessoryBrowser:didUpdateState: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser’s state has changed.

## Declaration

```objectivec
- (void) accessoryBrowser:(EAWiFiUnconfiguredAccessoryBrowser *) browser didUpdateState:(EAWiFiUnconfiguredAccessoryBrowserState) state;
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `state`: The current state of the browser. See [EAWiFiUnconfiguredAccessoryBrowserState](../eawifiunconfiguredaccessorybrowserstate.md) for possible values.

<a id="Discussion"></a>

## Discussion

When the browser state changes, the delegate typically provides feedback to users. For example, the delegate might show whether the scan is currently active or inactive, or it might indicate that Wi-Fi is unavailable if a user starts a scan while the device is in airplane mode.

## See Also

### Getting Updates About Browser State

- [EAWiFiUnconfiguredAccessoryBrowserState](../eawifiunconfiguredaccessorybrowserstate.md): The possible states of an accessory browser.
