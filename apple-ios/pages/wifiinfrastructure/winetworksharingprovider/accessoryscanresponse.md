> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresponse](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresponse)

# WINetworkSharingProvider.AccessoryScanResponse

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A scan response from the accessory containing Wi-Fi scan results, if any.

## Declaration

```swift
struct AccessoryScanResponse
```

<a id="overview"></a>

## Overview

An `AccessoryScanResponse` contains the Wi-Fi networks your accessory discovered during scanning. The system uses these results to enhance the network selection interface, showing signal strength and compatibility information to help people choose the best networks to share.

Create responses that correspond to specific scan requests and include all relevant networks your accessory found. Include signal strength information to help people select networks with good connectivity from your accessory’s perspective.

## Topics

### Identifying a scan response

- [WINetworkSharingProvider.AccessoryScanResponse.ID](accessoryscanresponse/id-swift.typealias.md): The type of value that uniquely identifies this scan response.
- [id](accessoryscanresponse/id-swift.property.md): A stable identifier that uniquely identifies this scan response.

### Getting the originating scan request

- [scanRequest](accessoryscanresponse/scanrequest.md): The original scan request that prompted this response.

### Getting the scan results from the Accessory

- [results](accessoryscanresponse/results.md): An array of scan results containing access points the accessory has discovered.

### Initializers

- [init(scanRequest:results:)](accessoryscanresponse/init%28scanrequest_results_%29.md): Creates an accessory scan response.

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
- [WINetworkSharingProvider.AccessoryScanRequest](accessoryscanrequest.md): A request for the accessory to scan for available Wi-Fi networks.
- [WINetworkSharingProvider.AccessoryScanResult](accessoryscanresult.md): An access point that the accessory was able to discover in its Wi-Fi scans.
