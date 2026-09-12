> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/wifinetworkassociation](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/wifinetworkassociation)

# MatterAddDeviceExtensionRequestHandler.WiFiNetworkAssociation

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

The description of an association to a Wi-Fi network.

## Declaration

```swift
struct WiFiNetworkAssociation
```

## Topics

### Getting network information

- [defaultSystemNetwork](wifinetworkassociation/defaultsystemnetwork.md): The current Wi-Fi network of the iOS device.
- [network(ssid:credentials:)](wifinetworkassociation/network%28ssid_credentials_%29.md): Maintains information about a specific Wi-Fi network.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the Wi-Fi network

- [selectWiFiNetwork(from:)](selectwifinetwork%28from_%29.md): Provides the visible Wi-Fi networks to the Matter device.
- [MatterAddDeviceExtensionRequestHandler.WiFiScanResult](wifiscanresult.md): A result of a Wi-Fi-scan operation performed on the device
