> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingcontroller/authorizationstate/automatic](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingcontroller/authorizationstate/automatic)

# WINetworkSharingController.AuthorizationState.automatic

**Framework:** Wi-Fi Infrastructure  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The person has granted authorization to share Wi-Fi networks with the accessory automatically, without requiring approval for each network.

## Declaration

```swift
case automatic
```

## See Also

### Checking authorization state

- [WINetworkSharingController.AuthorizationState.undetermined](undetermined.md): The person has not yet made a choice about sharing Wi-Fi networks with the accessory.
- [WINetworkSharingController.AuthorizationState.denied](denied.md): The person has chosen not to share Wi-Fi networks with the accessory.
- [WINetworkSharingController.AuthorizationState.askToShare](asktoshare.md): The person has granted authorization to share Wi-Fi networks with the accessory, but you must request approval for each network individually.
