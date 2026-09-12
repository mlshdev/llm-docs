> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/packet-tunnel-provider](https://developer.apple.com/documentation/networkextension/packet-tunnel-provider)

# Packet tunnel provider

**Interface languages:** Swift, Objective-C

**Framework:** Network Extension  
**Kind:** API Collection

Implement a VPN client for a packet-oriented, custom VPN protocol.

<a id="overview"></a>

## Overview

A virtual private network (VPN) is a form of network tunnel where a VPN client uses the public Internet to create a connection to a VPN server and then passes private network traffic over that connection. If you want to build a VPN client that implements a packet-oriented, custom VPN protocol, create a packet tunnel provider app extension.

When the system starts a VPN configuration that uses your packet tunnel provider, it performs the following steps:

- Launches your app extension.
- Instantiates your packet tunnel provider subclass within that app extension.
- Starts forwarding packets to your provider.

Your provider should open a tunnel to a VPN server and send those packets over that tunnel. Similarly, if your provider receives packets from the tunnel, it should pass them back to the system.

Packet tunnel providers can run in destination IP mode or source-application mode. The latter is one form of per-app VPN (the other form is an [App proxy provider](app-proxy-provider.md)).

For detailed information about packet tunnel provider deployment options, see [TN3134: Network Extension provider deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment).

> **Note**

>  When a VPN configuration is active, connections use the VPN instead of iCloud Private Relay. Network Extension providers also don’t use iCloud Private Relay.

## Topics

### Essentials

- [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md): The APIs an app can use to customize networking features.

### Packet tunnel provider

- [NEPacketTunnelProvider](nepackettunnelprovider.md): The principal class for a packet tunnel provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.

### Packet handling

- [NEPacketTunnelFlow](nepackettunnelflow.md): An object you use to read and write packets to and from the tunnel’s virtual interface.
- [NEPacket](nepacket.md): A network packet and its associated properties.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

### VPN configuration

- [NETunnelProviderManager](netunnelprovidermanager.md): An object to create and manage the tunnel provider’s VPN configuration.
- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NETunnelProviderProtocol](netunnelproviderprotocol.md): Configuration parameters for a VPN tunnel.
- [NEAppRule](neapprule.md): The identity of an app whose traffic is to be routed through the tunnel.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

### VPN control

- [NETunnelProviderSession](netunnelprovidersession.md): An object to start and stop a tunnel connection and get its status.
- [NEVPNConnection](nevpnconnection.md): An object to start and stop a Personal VPN connection and get its status.

## See Also

### Virtual private networks

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md): Configure your VPN to include and exclude some network traffic.
- [Personal VPN](personal-vpn.md): Create and manage a VPN configuration that uses one of the built-in VPN protocols (IPsec or IKEv2).
- [App proxy provider](app-proxy-provider.md): Implement a VPN client for a flow-oriented, custom VPN protocol.
