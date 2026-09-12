> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessory](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessory)

# EAWiFiUnconfiguredAccessory (Swift)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.

## Declaration

```swift
class EAWiFiUnconfiguredAccessory
```

## Topics

### Getting Information About the Accessory

- [name](eawifiunconfiguredaccessory/name.md): The name of the accessory.
- [manufacturer](eawifiunconfiguredaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [model](eawifiunconfiguredaccessory/model.md): The model name of accessory.
- [ssid](eawifiunconfiguredaccessory/ssid.md): The Wi-Fi SSID of the accessory.
- [macAddress](eawifiunconfiguredaccessory/macaddress.md): The primary MAC address of the accessory.
- [properties](eawifiunconfiguredaccessory/properties.md): The properties the accessory supports.
- [EAWiFiUnconfiguredAccessoryProperties](eawifiunconfiguredaccessoryproperties.md): Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.

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
- [EAWiFiUnconfiguredAccessoryBrowser](eawifiunconfiguredaccessorybrowser.md): An object you use to scan for wireless accessories and configure them for use with the user’s app.

# EAWiFiUnconfiguredAccessory (Objective-C)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.

## Declaration

```objectivec
@interface EAWiFiUnconfiguredAccessory : NSObject
```

## Topics

### Getting Information About the Accessory

- [name](eawifiunconfiguredaccessory/name.md): The name of the accessory.
- [manufacturer](eawifiunconfiguredaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [model](eawifiunconfiguredaccessory/model.md): The model name of accessory.
- [ssid](eawifiunconfiguredaccessory/ssid.md): The Wi-Fi SSID of the accessory.
- [macAddress](eawifiunconfiguredaccessory/macaddress.md): The primary MAC address of the accessory.
- [properties](eawifiunconfiguredaccessory/properties.md): The properties the accessory supports.
- [EAWiFiUnconfiguredAccessoryProperties](eawifiunconfiguredaccessoryproperties.md): Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Wi-Fi Accessory Configuration

- [Wireless Accessory Configuration Entitlement](../bundleresources/entitlements/com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [EAWiFiUnconfiguredAccessoryBrowser](eawifiunconfiguredaccessorybrowser.md): An object you use to scan for wireless accessories and configure them for use with the user’s app.
