> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider)

# NEPacketTunnelProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The principal class for a packet tunnel provider app extension.

## Declaration

```swift
class NEPacketTunnelProvider
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

The [NEPacketTunnelProvider](nepackettunnelprovider.md) class gives its subclasses access to a virtual network interface via the [packetFlow](nepackettunnelprovider/packetflow.md) property. Use the [setTunnelNetworkSettings(\_:completionHandler:)](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) method in the Packet Tunnel Provider to specify that the following network settings be associated with the virtual interface:

- Virtual IP address
- DNS resolver configuration
- HTTP proxy configuration
- IP destination networks to be routed through the tunnel
- IP destination networks to be routed outside the tunnel
- Interface MTU

By specifying IP destination networks, the Packet Tunnel Provider can dictate what IP destinations will be routed to the virtual interface. IP packets with matching destination addresses will then be diverted to Packet Tunnel Provider and can be read using the [packetFlow](nepackettunnelprovider/packetflow.md) property. The Packet Tunnel Provider can then encapsulate the IP packets per a custom tunneling protocol and send them to a tunnel server. When the Packet Tunnel Provider decapsulates IP packets received from the tunnel server, it can use the [packetFlow](nepackettunnelprovider/packetflow.md) property to inject the packets into the networking stack.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NEPacketTunnelProvider](nepackettunnelprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="Creating-a-Packet-Tunnel-Provider-Extension"></a>

### Creating a Packet Tunnel Provider Extension

Packet Tunnel Providers run as App Extensions for the `com.apple.networkextension.packet-tunnel` extension point.

To create a Packet Tunnel Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Packet Tunnel Provider extension target, create a subclass of NEPacketTunnelProvider. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.packet-tunnel`.

Here is an example of the NSExtension dictionary in a Packet Tunnel Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.packet-tunnel</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomPacketTunnelProvider</string>
</dict>
```

Finally, add the Packet Tunnel Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In order to create a Packet Tunnel Provider extension, you must create a subclass of `NEPacketTunnelProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [startTunnel(options:completionHandler:)](nepackettunnelprovider/starttunnel%28options_completionhandler_%29.md)
- [stopTunnel(with:completionHandler:)](nepackettunnelprovider/stoptunnel%28with_completionhandler_%29.md)

## Topics

### Managing the tunnel life cycle

- [startTunnel(options:completionHandler:)](nepackettunnelprovider/starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [stopTunnel(with:completionHandler:)](nepackettunnelprovider/stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.
- [cancelTunnelWithError(\_:)](nepackettunnelprovider/canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.

### Handling IP packets

- [packetFlow](nepackettunnelprovider/packetflow.md): A [NEPacketTunnelFlow](nepackettunnelflow.md) object which is used to receive IP packets routed to the tunnel’s virtual interface and inject IP packets into the networking stack via the tunnel’s virtual interface.

### Creating network connections through the tunnel

- [createTCPConnectionThroughTunnel(to:enableTLS:tlsParameters:delegate:)](nepackettunnelprovider/createtcpconnectionthroughtunnel%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection through the current tunnel.
- [createUDPSessionThroughTunnel(to:from:)](nepackettunnelprovider/createudpsessionthroughtunnel%28to_from_%29.md): Deprecated. Creates a UDP session through the current tunnel.

### Instance Properties

- [virtualInterface](nepackettunnelprovider/virtualinterface-7l3ol.md)

## Relationships

### Inherits From

- [NETunnelProvider](netunnelprovider.md)

### Inherited By

- [NEEthernetTunnelProvider](neethernettunnelprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Packet tunnel provider

- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.

# NEPacketTunnelProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The principal class for a packet tunnel provider app extension.

## Declaration

```objectivec
@interface NEPacketTunnelProvider : NETunnelProvider
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

The [NEPacketTunnelProvider](nepackettunnelprovider.md) class gives its subclasses access to a virtual network interface via the [packetFlow](nepackettunnelprovider/packetflow.md) property. Use the [setTunnelNetworkSettings:completionHandler:](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) method in the Packet Tunnel Provider to specify that the following network settings be associated with the virtual interface:

- Virtual IP address
- DNS resolver configuration
- HTTP proxy configuration
- IP destination networks to be routed through the tunnel
- IP destination networks to be routed outside the tunnel
- Interface MTU

By specifying IP destination networks, the Packet Tunnel Provider can dictate what IP destinations will be routed to the virtual interface. IP packets with matching destination addresses will then be diverted to Packet Tunnel Provider and can be read using the [packetFlow](nepackettunnelprovider/packetflow.md) property. The Packet Tunnel Provider can then encapsulate the IP packets per a custom tunneling protocol and send them to a tunnel server. When the Packet Tunnel Provider decapsulates IP packets received from the tunnel server, it can use the [packetFlow](nepackettunnelprovider/packetflow.md) property to inject the packets into the networking stack.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NEPacketTunnelProvider](nepackettunnelprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="Creating-a-Packet-Tunnel-Provider-Extension"></a>

### Creating a Packet Tunnel Provider Extension

Packet Tunnel Providers run as App Extensions for the `com.apple.networkextension.packet-tunnel` extension point.

To create a Packet Tunnel Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Packet Tunnel Provider extension target, create a subclass of NEPacketTunnelProvider. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.packet-tunnel`.

Here is an example of the NSExtension dictionary in a Packet Tunnel Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.packet-tunnel</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomPacketTunnelProvider</string>
</dict>
```

Finally, add the Packet Tunnel Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In order to create a Packet Tunnel Provider extension, you must create a subclass of `NEPacketTunnelProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [startTunnelWithOptions:completionHandler:](nepackettunnelprovider/starttunnel%28options_completionhandler_%29.md)
- [stopTunnelWithReason:completionHandler:](nepackettunnelprovider/stoptunnel%28with_completionhandler_%29.md)

## Topics

### Managing the tunnel life cycle

- [startTunnelWithOptions:completionHandler:](nepackettunnelprovider/starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [stopTunnelWithReason:completionHandler:](nepackettunnelprovider/stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.
- [cancelTunnelWithError:](nepackettunnelprovider/canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.

### Handling IP packets

- [packetFlow](nepackettunnelprovider/packetflow.md): A [NEPacketTunnelFlow](nepackettunnelflow.md) object which is used to receive IP packets routed to the tunnel’s virtual interface and inject IP packets into the networking stack via the tunnel’s virtual interface.

### Creating network connections through the tunnel

- [createTCPConnectionThroughTunnelToEndpoint:enableTLS:TLSParameters:delegate:](nepackettunnelprovider/createtcpconnectionthroughtunnel%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection through the current tunnel.
- [createUDPSessionThroughTunnelToEndpoint:fromEndpoint:](nepackettunnelprovider/createudpsessionthroughtunnel%28to_from_%29.md): Deprecated. Creates a UDP session through the current tunnel.

### Instance Properties

- [virtualInterface](nepackettunnelprovider/virtualinterface-9fpgd.md)

## Relationships

### Inherits From

- [NETunnelProvider](netunnelprovider.md)

### Inherited By

- [NEEthernetTunnelProvider](neethernettunnelprovider.md)

## See Also

### Packet tunnel provider

- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NEPacketTunnelNetworkSettings](nepackettunnelnetworksettings.md): The configuration for a packet tunnel provider’s virtual interface.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
- [NEEthernetTunnelProvider](neethernettunnelprovider.md): A type that implements the client side of a custom link-layer packet tunneling protocol.
- [NEEthernetTunnelNetworkSettings](neethernettunnelnetworksettings.md): The network settings for an ethernet-based VPN tunnel.
