> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessoryproperties](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessoryproperties)

# EAWiFiUnconfiguredAccessoryProperties (Swift)

**Framework:** External Accessory  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.

## Declaration

```swift
struct EAWiFiUnconfiguredAccessoryProperties
```

## Topics

### Getting the Accessory Properties

- [propertySupportsAirPlay](eawifiunconfiguredaccessoryproperties/propertysupportsairplay.md): The accessory indicates that it supports AirPlay.
- [propertySupportsAirPrint](eawifiunconfiguredaccessoryproperties/propertysupportsairprint.md): The accessory indicates that it supports AirPrint.
- [propertySupportsHomeKit](eawifiunconfiguredaccessoryproperties/propertysupportshomekit.md): The accessory indicates that it supports HomeKit.

### Initializers

- [init(rawValue:)](eawifiunconfiguredaccessoryproperties/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting Information About the Accessory

- [name](eawifiunconfiguredaccessory/name.md): The name of the accessory.
- [manufacturer](eawifiunconfiguredaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [model](eawifiunconfiguredaccessory/model.md): The model name of accessory.
- [ssid](eawifiunconfiguredaccessory/ssid.md): The Wi-Fi SSID of the accessory.
- [macAddress](eawifiunconfiguredaccessory/macaddress.md): The primary MAC address of the accessory.
- [properties](eawifiunconfiguredaccessory/properties.md): The properties the accessory supports.

# EAWiFiUnconfiguredAccessoryProperties (Objective-C)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.

## Declaration

```objectivec
enum EAWiFiUnconfiguredAccessoryProperties : NSUInteger;
```

## Topics

### Getting the Accessory Properties

- [EAWiFiUnconfiguredAccessoryPropertySupportsAirPlay](eawifiunconfiguredaccessoryproperties/propertysupportsairplay.md): The accessory indicates that it supports AirPlay.
- [EAWiFiUnconfiguredAccessoryPropertySupportsAirPrint](eawifiunconfiguredaccessoryproperties/propertysupportsairprint.md): The accessory indicates that it supports AirPrint.
- [EAWiFiUnconfiguredAccessoryPropertySupportsHomeKit](eawifiunconfiguredaccessoryproperties/propertysupportshomekit.md): The accessory indicates that it supports HomeKit.

## See Also

### Getting Information About the Accessory

- [name](eawifiunconfiguredaccessory/name.md): The name of the accessory.
- [manufacturer](eawifiunconfiguredaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [model](eawifiunconfiguredaccessory/model.md): The model name of accessory.
- [ssid](eawifiunconfiguredaccessory/ssid.md): The Wi-Fi SSID of the accessory.
- [macAddress](eawifiunconfiguredaccessory/macaddress.md): The primary MAC address of the accessory.
- [properties](eawifiunconfiguredaccessory/properties.md): The properties the accessory supports.
