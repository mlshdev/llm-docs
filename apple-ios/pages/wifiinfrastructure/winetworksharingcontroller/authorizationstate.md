> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingcontroller/authorizationstate](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingcontroller/authorizationstate)

# WINetworkSharingController.AuthorizationState

**Framework:** Wi-Fi Infrastructure  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

An enumeration that represents the authorization state for sharing Wi-Fi networks with a given accessory.

## Declaration

```swift
enum AuthorizationState
```

<a id="overview"></a>

## Overview

Use `AuthorizationState` to determine the current permission level for Wi-Fi network sharing between the person’s device and a connected accessory. This enum helps you understand whether the person has granted, denied, or not yet decided on Wi-Fi sharing permissions.

Check the authorization state before attempting to share Wi-Fi credentials with an accessory. Handle each state appropriately in your app’s user interface to provide clear feedback about the current sharing permissions.

## Topics

### Checking authorization state

- [WINetworkSharingController.AuthorizationState.undetermined](authorizationstate/undetermined.md): The person has not yet made a choice about sharing Wi-Fi networks with the accessory.
- [WINetworkSharingController.AuthorizationState.denied](authorizationstate/denied.md): The person has chosen not to share Wi-Fi networks with the accessory.
- [WINetworkSharingController.AuthorizationState.askToShare](authorizationstate/asktoshare.md): The person has granted authorization to share Wi-Fi networks with the accessory, but you must request approval for each network individually.
- [WINetworkSharingController.AuthorizationState.automatic](authorizationstate/automatic.md): The person has granted authorization to share Wi-Fi networks with the accessory automatically, without requiring approval for each network.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorizing an accessory for network sharing

- [requestAuthorization()](requestauthorization%28%29.md): Requests network-sharing authorization for the specified accessory at initial setup.
