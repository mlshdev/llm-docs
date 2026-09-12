> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresult)

# WINetworkSharingProvider.AccessoryScanResult

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

An access point that the accessory was able to discover in its Wi-Fi scans.

## Declaration

```swift
struct AccessoryScanResult
```

<a id="overview"></a>

## Overview

An `AccessoryScanResult` represents a single Wi-Fi access point your accessory detected during network scanning. Include signal strength information to help people select networks with good connectivity from your accessory’s location.

Provide signal strength as a normalized value between 0.0 (weakest) and 1.0 (strongest) to give people a consistent way to compare network quality across different accessory types.

## Topics

### Getting network definitions

- [ssid](accessoryscanresult/ssid.md): The SSID of the network.

### Getting network performance indicators

- [signalStrength](accessoryscanresult/signalstrength.md): The signal strength the accessory measured for the access point.

### Getting network connection state

- [isConnected](accessoryscanresult/isconnected.md): A Boolean value that indicates whether the accessory currently has a connection to this Wi-Fi access point.

### Initializers

- [init(ssid:signalStrength:isConnected:)](accessoryscanresult/init%28ssid_signalstrength_isconnected_%29.md): Creates an accessory scan result.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying network selection

- [presentAskToShareUI(scanProvider:)](presentasktoshareui%28scanprovider_%29.md): Presents system UI asking people to share available networks with an accessory.
- [WINetworkSharingProvider.AccessoryScanRequest](accessoryscanrequest.md): A request for the accessory to scan for available Wi-Fi networks.
- [WINetworkSharingProvider.AccessoryScanResponse](accessoryscanresponse.md): A scan response from the accessory containing Wi-Fi scan results, if any.
