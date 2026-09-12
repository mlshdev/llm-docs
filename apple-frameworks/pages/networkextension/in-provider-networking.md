> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/in-provider-networking](https://developer.apple.com/documentation/networkextension/in-provider-networking)

# In-Provider Networking (Swift)

**Framework:** Network Extension  
**Kind:** API Collection

Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

<a id="overview"></a>

## Overview

NetworkExtension providers and hotspot helpers run in an unusual network environment that can cause problems for general-purpose networking APIs. For example, [URLSession](../foundation/urlsession.md) typically sends requests via the default route, which is inappropriate for a hotspot helper that must always use the Wi-Fi interface. The NetworkExtension framework includes a number of APIs that are useful in such situations.

These APIs have the following key characteristics:

- They aren’t general-purpose APIs; they can only be used in the context of a NetworkExtension provider or hotspot helper.
- In many cases, you don’t need to use them. For example, it’s possible for a packet tunnel provider to use a general-purpose networking API, like BSD Sockets, for its tunnel connection.

The recommended general-purpose networking APIs are the [URL Loading System](../foundation/url-loading-system.md) for HTTP and the [Network](../network.md) framework for TCP and UDP.

## Topics

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.

### UDP sessions

- [NWUDPSession](nwudpsession.md): Deprecated. An object to manage a UDP session to a network endpoint.

### Endpoints

- [NWHostEndpoint](nwhostendpoint.md): Deprecated. A network endpoint specified by DNS name (or IP address) and port.
- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

### Network path information

- [NWPath](nwpath.md): Deprecated. The path made by a network connection, including information about its viability.

## See Also

### Related Documentation

- [Packet tunnel provider](packet-tunnel-provider.md): Implement a VPN client for a packet-oriented, custom VPN protocol.
- [App proxy provider](app-proxy-provider.md): Implement a VPN client for a flow-oriented, custom VPN protocol.
- [Hotspot helper](hotspot-helper.md): Integrate your app with the iOS hotspot network subsystem.

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.

# In-Provider Networking (Objective-C)

**Framework:** Network Extension  
**Kind:** API Collection

Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.

<a id="overview"></a>

## Overview

NetworkExtension providers and hotspot helpers run in an unusual network environment that can cause problems for general-purpose networking APIs. For example, [NSURLSession](../foundation/urlsession.md) typically sends requests via the default route, which is inappropriate for a hotspot helper that must always use the Wi-Fi interface. The NetworkExtension framework includes a number of APIs that are useful in such situations.

These APIs have the following key characteristics:

- They aren’t general-purpose APIs; they can only be used in the context of a NetworkExtension provider or hotspot helper.
- In many cases, you don’t need to use them. For example, it’s possible for a packet tunnel provider to use a general-purpose networking API, like BSD Sockets, for its tunnel connection.

The recommended general-purpose networking APIs are the [URL Loading System](../foundation/url-loading-system.md) for HTTP and the [Network](../network.md) framework for TCP and UDP.

## Topics

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.

### UDP sessions

- [NWUDPSession](nwudpsession.md): Deprecated. An object to manage a UDP session to a network endpoint.

### Endpoints

- [NWHostEndpoint](nwhostendpoint.md): Deprecated. A network endpoint specified by DNS name (or IP address) and port.
- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

### Network path information

- [NWPath](nwpath.md): Deprecated. The path made by a network connection, including information about its viability.

## See Also

### Related Documentation

- [Packet tunnel provider](packet-tunnel-provider.md): Implement a VPN client for a packet-oriented, custom VPN protocol.
- [App proxy provider](app-proxy-provider.md): Implement a VPN client for a flow-oriented, custom VPN protocol.
- [Hotspot helper](hotspot-helper.md): Integrate your app with the iOS hotspot network subsystem.

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.
