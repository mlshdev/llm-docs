> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsecurityconfiguration](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsecurityconfiguration)

# AccessoryTransportSecurityConfiguration

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that configures and manages communication between your security extension and the system.

## Declaration

```swift
protocol AccessoryTransportSecurityConfiguration : AppExtensionConfiguration
```

<a id="overview"></a>

## Overview

The [AccessoryTransportSecurity](accessorytransportsecurity.md) protocol uses this configuration to establish communication with the system.

## Relationships

### Inherits From

- [AppExtensionConfiguration](https://developer.apple.com/documentation/extensionfoundation/appextensionconfiguration)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification forwarding

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [Forwarding notifications to your accessory using the internet transport type](forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md): Send notification data to your accessory over the internet when Bluetooth connectivity is unavailable.
- [AccessoryDataProvider](accessorydataprovider.md): A protocol for an extension that receives iOS system notifications and curates their data for your accessory.
- [AccessoryDataProviderConfiguration](accessorydataproviderconfiguration.md): A protocol that configures and manages communication between the extension and the system.
- [AccessoryTransportSecurity](accessorytransportsecurity.md): A protocol for an extension that handles cryptographic key exchange with your accessory.
- [Accessory Notifications](../accessorynotifications.md): Receive forwarded iOS system notifications on an accessory that you develop.
