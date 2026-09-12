> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingerror/accessorynotconfigured](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingerror/accessorynotconfigured)

# WINetworkSharingError.accessoryNotConfigured

**Framework:** Wi-Fi Infrastructure  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Indicates the person hasn’t configured the accessory on this system.

## Declaration

```swift
case accessoryNotConfigured
```

## See Also

### Checking for accessory issues

- [WINetworkSharingError.accessoryNotAuthorized](accessorynotauthorized.md): Indicates the person didn’t grant the accessory authorization to access network information.
- [WINetworkSharingError.accessoryNotConnected](accessorynotconnected.md): Indicates the accessory isn’t connected to the host.
- [WINetworkSharingError.noAccessoryScanResponse](noaccessoryscanresponse.md): Indicates the accessory didn’t send a scan response.
- [WINetworkSharingError.accessoryTransportNotSecured](accessorytransportnotsecured.md): Indicates the accessory doesn’t use the required transport security, such as Bluetooth Secure Connections.
- [WINetworkSharingError.noMatchingAccessoryScanRequest](nomatchingaccessoryscanrequest.md): Indicates the system found no matching scan request pending for the accessory.
