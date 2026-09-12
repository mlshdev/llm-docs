> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanrequest](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanrequest)

# WINetworkSharingProvider.AccessoryScanRequest

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A request for the accessory to scan for available Wi-Fi networks.

## Declaration

```swift
struct AccessoryScanRequest
```

<a id="overview"></a>

## Overview

An `AccessoryScanRequest` represents a system request for your accessory to perform a Wi-Fi scan and report discovered networks.

When you provide a scan closure to [presentAskToShareUI(scanProvider:)](presentasktoshareui%28scanprovider_%29.md), the system calls your closure with scan request instances. Your accessory should perform a Wi-Fi scan and return the results in an [WINetworkSharingProvider.AccessoryScanResponse](accessoryscanresponse.md).

## Topics

### Identifying a scan request

- [WINetworkSharingProvider.AccessoryScanRequest.ID](accessoryscanrequest/id-swift.typealias.md): The type of value that uniquely identifies this scan request.
- [id](accessoryscanrequest/id-swift.property.md): A stable identifier that uniquely identifies this scan request.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying network selection

- [presentAskToShareUI(scanProvider:)](presentasktoshareui%28scanprovider_%29.md): Presents system UI asking people to share available networks with an accessory.
- [WINetworkSharingProvider.AccessoryScanResponse](accessoryscanresponse.md): A scan response from the accessory containing Wi-Fi scan results, if any.
- [WINetworkSharingProvider.AccessoryScanResult](accessoryscanresult.md): An access point that the accessory was able to discover in its Wi-Fi scans.
