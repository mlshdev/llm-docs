> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider)

# WINetworkSharingProvider

**Framework:** Wi-Fi Infrastructure  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A provider that delivers updated Wi-Fi network information to your app extension.

## Declaration

```swift
class WINetworkSharingProvider
```

<a id="Overview"></a>

## Overview

Use `WINetworkSharingProvider` to receive real-time updates about Wi-Fi networks the system shares with connected accessories and to present network sharing interfaces to people. The provider manages the lifecycle of network-sharing operations and coordinates between your app extension, the system, and connected accessories.

The provider delivers network updates through an async sequence that you can filter and process according to your app’s needs. Each event contains the current state of the shared networks, along with flags indicating when new networks become available or when your container app requests sharing. When networks become available for sharing or when your accessory needs additional networks, use the provider to present system UI that allows people to select and share networks. The interface can integrate with your accessory’s scan results to show signal strength and compatibility information.

> **Important**

> Your `WiFiNetworkSharing` app extension can only use the methods in this class. The extension needs both the [com.apple.developer.wifi-infrastructure](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.wifi-infrastructure) entitlement with the `WiFiNetworkSharing` capability declared and the [com.apple.developer.accessory-transport-extension](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.accessory-transport-extension) entitlement.

## Topics

### Creating network sharing provider instances

- [init(for:)](winetworksharingprovider/init%28for_%29.md): Creates a provider for the specified accessory.

### Getting accessory data

- [accessory](winetworksharingprovider/accessory.md): The accessory that receives the shared networks.

### Getting network updates

- [networkEvents(matching:)](winetworksharingprovider/networkevents%28matching_%29.md): Returns an async sequence of network events, containing current shared networks and future updates.
- [WINetworkSharingProvider.NetworkEvent](winetworksharingprovider/networkevent.md): An event that occurred, indicating an update to the available shared networks.
- [WINetworkSharingProvider.Network](winetworksharingprovider/network.md): A Wi-Fi network to share with a connected accessory.

### Getting information about access point connections

- [WINetworkSharingProvider.AccessPointConnection](winetworksharingprovider/accesspointconnection.md): A Wi-Fi access point the host is currently connected to, which may be shared with a connected accessory.
- [WINetworkSharingProvider.AccessPointConnectionEvent](winetworksharingprovider/accesspointconnectionevent.md): An event that indicates an update to the available shared access points.
- [accessPointConnectionEvents(matching:)](winetworksharingprovider/accesspointconnectionevents%28matching_%29.md): Returns an async sequence of access point events containing the currently connected access point(s) and future updates.

### Displaying network selection

- [presentAskToShareUI(scanProvider:)](winetworksharingprovider/presentasktoshareui%28scanprovider_%29.md): Presents system UI asking people to share available networks with an accessory.
- [WINetworkSharingProvider.AccessoryScanRequest](winetworksharingprovider/accessoryscanrequest.md): A request for the accessory to scan for available Wi-Fi networks.
- [WINetworkSharingProvider.AccessoryScanResponse](winetworksharingprovider/accessoryscanresponse.md): A scan response from the accessory containing Wi-Fi scan results, if any.
- [WINetworkSharingProvider.AccessoryScanResult](winetworksharingprovider/accessoryscanresult.md): An access point that the accessory was able to discover in its Wi-Fi scans.

## See Also

### Network sharing

- [WINetworkSharingController](winetworksharingcontroller.md): A controller that enables your container app to control network-sharing functions with connected accessories.
- [WINetworkSharingAskToShareState](winetworksharingasktosharestate.md): The authorization state for sharing the current Wi-Fi network with an accessory.
