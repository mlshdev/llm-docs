> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessoryconfigurationstatus](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessoryconfigurationstatus)

# EAWiFiUnconfiguredAccessoryConfigurationStatus (Swift)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md) object.

## Declaration

```swift
enum EAWiFiUnconfiguredAccessoryConfigurationStatus
```

## Topics

### Status Values

- [EAWiFiUnconfiguredAccessoryConfigurationStatus.success](eawifiunconfiguredaccessoryconfigurationstatus/success.md): The configuration of the accessory succeeded.
- [EAWiFiUnconfiguredAccessoryConfigurationStatus.userCancelledConfiguration](eawifiunconfiguredaccessoryconfigurationstatus/usercancelledconfiguration.md): The user cancelled the configuration process.
- [EAWiFiUnconfiguredAccessoryConfigurationStatus.failed](eawifiunconfiguredaccessoryconfigurationstatus/failed.md): The configuration failed.

### Initializers

- [init(rawValue:)](eawifiunconfiguredaccessoryconfigurationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Updates About the Configuration Process

- [accessoryBrowser(\_:didFinishConfiguringAccessory:with:)](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfinishconfiguringaccessory_with_%29.md): Indicates that the browser has completed configuring the specified accessory.

# EAWiFiUnconfiguredAccessoryConfigurationStatus (Objective-C)

**Framework:** External Accessory  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Values that represent the state of the configuration process for an [EAWiFiUnconfiguredAccessory](eawifiunconfiguredaccessory.md) object.

## Declaration

```objectivec
enum EAWiFiUnconfiguredAccessoryConfigurationStatus : NSInteger;
```

## Topics

### Status Values

- [EAWiFiUnconfiguredAccessoryConfigurationStatusSuccess](eawifiunconfiguredaccessoryconfigurationstatus/success.md): The configuration of the accessory succeeded.
- [EAWiFiUnconfiguredAccessoryConfigurationStatusUserCancelledConfiguration](eawifiunconfiguredaccessoryconfigurationstatus/usercancelledconfiguration.md): The user cancelled the configuration process.
- [EAWiFiUnconfiguredAccessoryConfigurationStatusFailed](eawifiunconfiguredaccessoryconfigurationstatus/failed.md): The configuration failed.

## See Also

### Getting Updates About the Configuration Process

- [accessoryBrowser:didFinishConfiguringAccessory:withStatus:](eawifiunconfiguredaccessorybrowserdelegate/accessorybrowser%28__didfinishconfiguringaccessory_with_%29.md): Indicates that the browser has completed configuring the specified accessory.
