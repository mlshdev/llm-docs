> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovider](https://developer.apple.com/documentation/networkextension/netunnelprovider)

# NETunnelProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.

## Declaration

```swift
class NETunnelProvider
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

Each [NETunnelProvider](netunnelprovider.md) instance corresponds to a single tunneling session, with a single associated configuration.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NETunnelProvider](netunnelprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The `NETunnelProvider` class should not be subclassed directly. Instead, you should create subclasses of `NETunnelProvider` subclasses.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [handleAppMessage(\_:completionHandler:)](netunnelprovider/handleappmessage%28__completionhandler_%29.md)

## Topics

### Getting the tunnel configuration

- [protocolConfiguration](netunnelprovider/protocolconfiguration.md): The configuration of the current tunneling session.
- [routingMethod](netunnelprovider/routingmethod.md): The method by which network traffic is routed to the tunnel.
- [appRules](netunnelprovider/apprules.md): The app rules dictating which apps use the current tunneling session.

### Configuring the tunnel interface

- [setTunnelNetworkSettings(\_:completionHandler:)](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md): Specify the network settings for the current tunneling session.

### Communicating with the containing app

- [handleAppMessage(\_:completionHandler:)](netunnelprovider/handleappmessage%28__completionhandler_%29.md): Handle messages sent by the tunnel provider extension’s containing app.

### Setting tunnel status

- [reasserting](netunnelprovider/reasserting.md): Indicate to the system that the tunnel is being re-established.

### Errors

- [NETunnelProviderError.Code](netunnelprovidererror-swift.struct/code.md): Error codes that the tunnel provider declares.
- [NETunnelProviderErrorDomain](netunnelprovidererrordomain.md): The domain used for Tunnel Provider errors.
- [NETunnelProviderError.Code](netunnelprovidererror-swift.struct/code.md): Error codes that the tunnel provider declares.

## Relationships

### Inherits From

- [NEProvider](neprovider.md)

### Inherited By

- [NEAppProxyProvider](neappproxyprovider.md)
- [NEPacketTunnelProvider](nepackettunnelprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.

# NETunnelProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.

## Declaration

```objectivec
@interface NETunnelProvider : NEProvider
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

Each [NETunnelProvider](netunnelprovider.md) instance corresponds to a single tunneling session, with a single associated configuration.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required in order to use the [NETunnelProvider](netunnelprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The `NETunnelProvider` class should not be subclassed directly. Instead, you should create subclasses of `NETunnelProvider` subclasses.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [handleAppMessage:completionHandler:](netunnelprovider/handleappmessage%28__completionhandler_%29.md)

## Topics

### Getting the tunnel configuration

- [protocolConfiguration](netunnelprovider/protocolconfiguration.md): The configuration of the current tunneling session.
- [routingMethod](netunnelprovider/routingmethod.md): The method by which network traffic is routed to the tunnel.
- [appRules](netunnelprovider/apprules.md): The app rules dictating which apps use the current tunneling session.

### Configuring the tunnel interface

- [setTunnelNetworkSettings:completionHandler:](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md): Specify the network settings for the current tunneling session.

### Communicating with the containing app

- [handleAppMessage:completionHandler:](netunnelprovider/handleappmessage%28__completionhandler_%29.md): Handle messages sent by the tunnel provider extension’s containing app.

### Setting tunnel status

- [reasserting](netunnelprovider/reasserting.md): Indicate to the system that the tunnel is being re-established.

### Errors

- [NETunnelProviderError](netunnelprovidererror-swift.struct/code.md): Error codes that the tunnel provider declares.
- [NETunnelProviderErrorDomain](netunnelprovidererrordomain.md): The domain used for Tunnel Provider errors.
- [NETunnelProviderError](netunnelprovidererror-swift.struct/code.md): Error codes that the tunnel provider declares.

## Relationships

### Inherits From

- [NEProvider](neprovider.md)

### Inherited By

- [NEAppProxyProvider](neappproxyprovider.md)
- [NEPacketTunnelProvider](nepackettunnelprovider.md)

## See Also

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
