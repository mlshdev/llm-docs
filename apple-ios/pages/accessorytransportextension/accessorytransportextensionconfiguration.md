> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportextensionconfiguration](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportextensionconfiguration)

# AccessoryTransportExtensionConfiguration

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.2+

An interface that enables you to configure and manage communication between your extension and the system.

## Declaration

```swift
protocol AccessoryTransportExtensionConfiguration : AppExtensionConfiguration
```

## Relationships

### Inherits From

- [AppExtensionConfiguration](https://developer.apple.com/documentation/extensionfoundation/appextensionconfiguration)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Wi-Fi network sharing

- [AccessoryTransportAppExtension](accessorytransportappextension.md): A protocol for an extension that transmits data to an accessory you develop.
- [AccessoryTransportSession](accessorytransportsession.md): A class that manages a transport session between the extension and the system.
- [Wi-Fi Infrastructure](../wifiinfrastructure.md): Share Wi-Fi network credentials securely between devices and connected accessories.
