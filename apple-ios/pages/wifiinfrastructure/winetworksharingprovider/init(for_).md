> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/init(for:)](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/init(for:))

# init(for:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Creates a provider for the specified accessory.

## Declaration

```swift
init(for accessory: ASAccessory) async throws
```

## Parameters

- `accessory`: The accessory that receives the shared networks list.

<a id="return-value"></a>

## Return Value

A new [WINetworkSharingProvider](../winetworksharingprovider.md) configured for the specified accessory.

<a id="discussion"></a>

## Discussion

Use this initializer to establish a connection with the system for sharing networks with your accessory.

> **Throws**

> A [WINetworkSharingError](../winetworksharingerror.md) for various conditions:
>
> - [WINetworkSharingError.accessoryTransportNotSecured](../winetworksharingerror/accessorytransportnotsecured.md): The accessory doesn’t use a secure Bluetooth transport.
> - [WINetworkSharingError.accessoryNotAuthorized](../winetworksharingerror/accessorynotauthorized.md): The person hasn’t authorized network data sharing to the accessory.
> - [WINetworkSharingError.accessoryNotConnected](../winetworksharingerror/accessorynotconnected.md): The accessory isn’t connected when making this request.
> - [WINetworkSharingError.wifiNetworkSharingUnsupported](../winetworksharingerror/wifinetworksharingunsupported.md): The device doesn’t support network sharing.
