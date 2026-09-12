> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingasktosharestate](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingasktosharestate)

# WINetworkSharingAskToShareState

**Framework:** Wi-Fi Infrastructure  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The authorization state for sharing the current Wi-Fi network with an accessory.

## Declaration

```swift
enum WINetworkSharingAskToShareState
```

<a id="overview"></a>

## Overview

Use this type to track whether the person allowed the accessory to join the Wi-Fi network that the device is currently using.

## Topics

### Checking authorization state

- [WINetworkSharingAskToShareState.undetermined](winetworksharingasktosharestate/undetermined.md): The person hasn’t decided whether to share the network with the accessory.
- [WINetworkSharingAskToShareState.denied](winetworksharingasktosharestate/denied.md): The person chose not to share the network with the accessory.
- [WINetworkSharingAskToShareState.approved](winetworksharingasktosharestate/approved.md): The person allowed the accessory to use the network.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network sharing

- [WINetworkSharingController](winetworksharingcontroller.md): A controller that enables your container app to control network-sharing functions with connected accessories.
- [WINetworkSharingProvider](winetworksharingprovider.md): A provider that delivers updated Wi-Fi network information to your app extension.
