> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/wifiscanresult](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/wifiscanresult)

# MatterAddDeviceExtensionRequestHandler.WiFiScanResult

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A result of a Wi-Fi-scan operation performed on the device

## Declaration

```swift
struct WiFiScanResult
```

<a id="overview"></a>

## Overview

Use an instances to create a `WiFiNetworkAssociation` as a possible Wi-Fi network for the device to join.

## Topics

### Creating the result

- [init(ssid:rssi:security:band:)](wifiscanresult/init%28ssid_rssi_security_band_%29.md): Creates a new instance of the request handler.

### Getting result information

- [band](wifiscanresult/band.md): The band for the Wi-Fi network.
- [rssi](wifiscanresult/rssi.md): The device-observed RSSI of the network.
- [security](wifiscanresult/security.md): The security method used to secure the Wi-Fi network.
- [ssid](wifiscanresult/ssid.md): The SSID of the Wi-Fi network.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the Wi-Fi network

- [selectWiFiNetwork(from:)](selectwifinetwork%28from_%29.md): Provides the visible Wi-Fi networks to the Matter device.
- [MatterAddDeviceExtensionRequestHandler.WiFiNetworkAssociation](wifinetworkassociation.md): The description of an association to a Wi-Fi network.
