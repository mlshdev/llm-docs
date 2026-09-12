> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didfinishconfiguringaccessory:with:)](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser(_:didfinishconfiguringaccessory:with:))

# accessoryBrowser(\_:didFinishConfiguringAccessory:with:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser has completed configuring the specified accessory.

## Declaration

```swift
func accessoryBrowser(_ browser: EAWiFiUnconfiguredAccessoryBrowser, didFinishConfiguringAccessory accessory: EAWiFiUnconfiguredAccessory, with status: EAWiFiUnconfiguredAccessoryConfigurationStatus)
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `accessory`: The [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) object whose configuration process has completed.
- `status`: The status of the completed configuration process. See [EAWiFiUnconfiguredAccessoryConfigurationStatus](../eawifiunconfiguredaccessoryconfigurationstatus.md) for possible values.

<a id="Discussion"></a>

## Discussion

This method is called when the system-provided configuration view has been dismissed, revealing the part of the app’s user interface that was visible before the configuration process began. If the configuration was successful, the app can begin communicating with the accessory.

## See Also

### Getting Updates About the Configuration Process

- [EAWiFiUnconfiguredAccessoryConfigurationStatus](../eawifiunconfiguredaccessoryconfigurationstatus.md): Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) object.

# accessoryBrowser:didFinishConfiguringAccessory:withStatus: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates that the browser has completed configuring the specified accessory.

## Declaration

```objectivec
- (void) accessoryBrowser:(EAWiFiUnconfiguredAccessoryBrowser *) browser didFinishConfiguringAccessory:(EAWiFiUnconfiguredAccessory *) accessory withStatus:(EAWiFiUnconfiguredAccessoryConfigurationStatus) status;
```

## Parameters

- `browser`: The instance of [EAWiFiUnconfiguredAccessoryBrowser](../eawifiunconfiguredaccessorybrowser.md) that is generating the event.
- `accessory`: The [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) object whose configuration process has completed.
- `status`: The status of the completed configuration process. See [EAWiFiUnconfiguredAccessoryConfigurationStatus](../eawifiunconfiguredaccessoryconfigurationstatus.md) for possible values.

<a id="Discussion"></a>

## Discussion

This method is called when the system-provided configuration view has been dismissed, revealing the part of the app’s user interface that was visible before the configuration process began. If the configuration was successful, the app can begin communicating with the accessory.

## See Also

### Getting Updates About the Configuration Process

- [EAWiFiUnconfiguredAccessoryConfigurationStatus](../eawifiunconfiguredaccessoryconfigurationstatus.md): Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](../eawifiunconfiguredaccessory.md) object.
