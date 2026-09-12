> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowser](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowser)

# EAWiFiUnconfiguredAccessoryBrowser (Swift)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An object you use to scan for wireless accessories and configure them for use with the user’s app.

## Declaration

```swift
class EAWiFiUnconfiguredAccessoryBrowser
```

<a id="overview"></a>

## Overview

The [EAWiFiUnconfiguredAccessoryBrowser](eawifiunconfiguredaccessorybrowser.md) class gives your app access to the MFi Wireless Accessory Configuration process. You use a browser object to scan for unconfigured accessories, connect them to the user’s Wi-Fi infrastructure, and configure attributes of the accessories. An accessory is represented by an instance of [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md).

## Topics

### Creating the Browser Object

- [init(delegate:queue:)](eawifiunconfiguredaccessorybrowser/init%28delegate_queue_%29.md): Creates a browser object that scans for unconfigured accessories.

### Managing Browser Interactions

- [delegate](eawifiunconfiguredaccessorybrowser/delegate.md): The object that acts as the delegate of the browser and receives browser events.
- [EAWiFiUnconfiguredAccessoryBrowserDelegate](eawifiunconfiguredaccessorybrowserdelegate.md): A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.

### Finding and Configuring Accessories

- [configureAccessory(\_:withConfigurationUIOn:)](eawifiunconfiguredaccessorybrowser/configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [startSearchingForUnconfiguredAccessories(matching:)](eawifiunconfiguredaccessorybrowser/startsearchingforunconfiguredaccessories%28matching_%29.md): Starts the search for unconfigured accessories that match the specified predicate.
- [stopSearchingForUnconfiguredAccessories()](eawifiunconfiguredaccessorybrowser/stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.
- [unconfiguredAccessories](eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md): The set of unconfigured accessories that have been discovered.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Wi-Fi Accessory Configuration

- [Wireless Accessory Configuration Entitlement](../bundleresources/entitlements/com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md): An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.

# EAWiFiUnconfiguredAccessoryBrowser (Objective-C)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An object you use to scan for wireless accessories and configure them for use with the user’s app.

## Declaration

```objectivec
@interface EAWiFiUnconfiguredAccessoryBrowser : NSObject
```

<a id="overview"></a>

## Overview

The [EAWiFiUnconfiguredAccessoryBrowser](eawifiunconfiguredaccessorybrowser.md) class gives your app access to the MFi Wireless Accessory Configuration process. You use a browser object to scan for unconfigured accessories, connect them to the user’s Wi-Fi infrastructure, and configure attributes of the accessories. An accessory is represented by an instance of [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md).

## Topics

### Creating the Browser Object

- [initWithDelegate:queue:](eawifiunconfiguredaccessorybrowser/init%28delegate_queue_%29.md): Creates a browser object that scans for unconfigured accessories.

### Managing Browser Interactions

- [delegate](eawifiunconfiguredaccessorybrowser/delegate.md): The object that acts as the delegate of the browser and receives browser events.
- [EAWiFiUnconfiguredAccessoryBrowserDelegate](eawifiunconfiguredaccessorybrowserdelegate.md): A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.

### Finding and Configuring Accessories

- [configureAccessory:withConfigurationUIOnViewController:](eawifiunconfiguredaccessorybrowser/configureaccessory%28__withconfigurationuion_%29.md): Begins the configuration process for the specified accessory.
- [startSearchingForUnconfiguredAccessoriesMatchingPredicate:](eawifiunconfiguredaccessorybrowser/startsearchingforunconfiguredaccessories%28matching_%29.md): Starts the search for unconfigured accessories that match the specified predicate.
- [stopSearchingForUnconfiguredAccessories](eawifiunconfiguredaccessorybrowser/stopsearchingforunconfiguredaccessories%28%29.md): Stops the search for unconfigured accessories.
- [unconfiguredAccessories](eawifiunconfiguredaccessorybrowser/unconfiguredaccessories.md): The set of unconfigured accessories that have been discovered.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Wi-Fi Accessory Configuration

- [Wireless Accessory Configuration Entitlement](../bundleresources/entitlements/com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md): An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.
