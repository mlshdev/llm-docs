> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowserdelegate)

# EAWiFiUnconfiguredAccessoryBrowserDelegate (Swift)

**Framework:** External Accessory  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.

## Declaration

```swift
protocol EAWiFiUnconfiguredAccessoryBrowserDelegate : NSObjectProtocol
```

## Topics

### Getting Updates About Browser State

- [accessoryBrowser(\_:didUpdate:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didupdate_%29.md): Indicates that the browser’s state has changed.
- [EAWiFiUnconfiguredAccessoryBrowserState](eawifiunconfiguredaccessorybrowserstate.md): The possible states of an accessory browser.

### Getting Updates About the Configuration Process

- [accessoryBrowser(\_:didFinishConfiguringAccessory:with:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfinishconfiguringaccessory_with_%29.md): Indicates that the browser has completed configuring the specified accessory.
- [EAWiFiUnconfiguredAccessoryConfigurationStatus](eawifiunconfiguredaccessoryconfigurationstatus.md): Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md) object.

### Getting Updates About the Search Process

- [accessoryBrowser(\_:didFindUnconfiguredAccessories:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfindunconfiguredaccessories_%29.md): Indicates that the browser found a new unconfigured accessory that matches the filter predicate defined at the start of the search.
- [accessoryBrowser(\_:didRemoveUnconfiguredAccessories:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didremoveunconfiguredaccessories_%29.md): Indicates that the browser removed an unconfigured accessory from the search results.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Browser Interactions

- [delegate](eawifiunconfiguredaccessorybrowser/delegate.md): The object that acts as the delegate of the browser and receives browser events.

# EAWiFiUnconfiguredAccessoryBrowserDelegate (Objective-C)

**Framework:** External Accessory  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.

## Declaration

```objectivec
@protocol EAWiFiUnconfiguredAccessoryBrowserDelegate <NSObject>
```

## Topics

### Getting Updates About Browser State

- [accessoryBrowser:didUpdateState:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didupdate_%29.md): Indicates that the browser’s state has changed.
- [EAWiFiUnconfiguredAccessoryBrowserState](eawifiunconfiguredaccessorybrowserstate.md): The possible states of an accessory browser.

### Getting Updates About the Configuration Process

- [accessoryBrowser:didFinishConfiguringAccessory:withStatus:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfinishconfiguringaccessory_with_%29.md): Indicates that the browser has completed configuring the specified accessory.
- [EAWiFiUnconfiguredAccessoryConfigurationStatus](eawifiunconfiguredaccessoryconfigurationstatus.md): Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md) object.

### Getting Updates About the Search Process

- [accessoryBrowser:didFindUnconfiguredAccessories:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfindunconfiguredaccessories_%29.md): Indicates that the browser found a new unconfigured accessory that matches the filter predicate defined at the start of the search.
- [accessoryBrowser:didRemoveUnconfiguredAccessories:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didremoveunconfiguredaccessories_%29.md): Indicates that the browser removed an unconfigured accessory from the search results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Browser Interactions

- [delegate](eawifiunconfiguredaccessorybrowser/delegate.md): The object that acts as the delegate of the browser and receives browser events.
