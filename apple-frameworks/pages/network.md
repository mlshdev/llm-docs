> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network](https://developer.apple.com/documentation/network)

# Network (Swift)

**Framework:** Network  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Create network connections to send and receive data using transport and security protocols.

## Mentioned In

- [Indicating the source of network activity](network/indicating-the-source-of-network-activity.md)
- [Inspecting app activity data](network/inspecting-app-activity-data.md)

<a id="overview"></a>

## Overview

Use this framework when you need direct access to protocols like TLS, TCP, and UDP for your custom application protocols. Continue to use [URLSession](foundation/urlsession.md), which is built upon this framework, for loading HTTP- and URL-based resources. For in-depth advice on where to start with networking, see [TN3151: Choosing the right networking API](https://developer.apple.com/documentation/technotes/tn3151-choosing-the-right-networking-api).

> **Note**

>  watchOS supports Network framework for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Essentials

- [NWEndpoint](network/nwendpoint.md): A local or remote endpoint in a network connection.
- [NWParameters](network/nwparameters.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.

### Connections and Listeners

- [NWConnection](network/nwconnection.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [NWListener](network/nwlistener.md): An object you use to listen for incoming network connections.
- [NWBrowser](network/nwbrowser.md): An object you use to browse for available network services.
- [NWConnectionGroup](network/nwconnectiongroup.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [NWEthernetChannel](network/nwethernetchannel.md): An object you use to send and receive custom Ethernet frames.

### Network Protocols

Configure protocol options to use with connections and listeners, and inspect the results of protocol handshakes.

- [Building a custom peer-to-peer protocol](network/building-a-custom-peer-to-peer-protocol.md): Use networking frameworks to create a custom protocol for playing a game across iOS, iPadOS, watchOS, and tvOS devices.
- [Connecting iPadOS and visionOS apps over the local network](visionos/connecting-ipados-and-visionos-apps-over-the-local-network.md): Build an iPadOS companion app to control your visionOS app.
- [NWProtocolTCP](network/nwprotocoltcp.md): A network protocol for connections that use the Transmission Control Protocol.
- [NWProtocolTLS](network/nwprotocoltls.md): A network protocol for connections that use Transport Layer Security.
- [NWProtocolQUIC](network/nwprotocolquic.md): A network protocol for connections that use the QUIC transport protocol.
- [NWProtocolUDP](network/nwprotocoludp.md): A network protocol for connections that use the User Datagram Protocol.
- [NWProtocolIP](network/nwprotocolip.md): A network protocol for configuring the Internet Protocol on connections.
- [NWProtocolWebSocket](network/nwprotocolwebsocket.md): A network protocol for connections that use WebSocket.
- [NWProtocolFramer](network/nwprotocolframer.md): A customizable network protocol for defining application message parsers.

### Network Security and Privacy

- [Security Options](network/security-options.md): Configure security options for TLS handshakes.
- [Privacy Management](network/privacy-management.md): Configure parameters related to user privacy.
- [Creating an Identity for Local Network TLS](network/creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.

### Paths and Interfaces

- [NWPath](network/nwpath.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [NWPathMonitor](network/nwpathmonitor.md): An observer that you use to monitor and react to network changes.
- [NWInterface](network/nwinterface.md): An interface that a network connection uses to send and receive data.

### Errors

- [NWError](network/nwerror.md): The errors returned by objects in the Network framework.

### Network Debugging

- [Choosing a Network Debugging Tool](network/choosing-a-network-debugging-tool.md): Decide which tool works best for your network debugging problem.
- [Debugging HTTP Server-Side Errors](network/debugging-http-server-side-errors.md): Understand HTTP server-side errors and how to debug them.
- [Debugging HTTPS Problems with CFNetwork Diagnostic Logging](network/debugging-https-problems-with-cfnetwork-diagnostic-logging.md): Use CFNetwork diagnostic logging to investigate HTTP and HTTPS problems.
- [Recording a Packet Trace](network/recording-a-packet-trace.md): Learn how to record a low-level trace of network traffic.
- [Taking Advantage of Third-Party Network Debugging Tools](network/taking-advantage-of-third-party-network-debugging-tools.md): Learn about the available third-party network debugging tools.
- [Testing and Debugging L4S in Your App](network/testing-and-debugging-l4s-in-your-app.md): Learn how to verify your app on an L4S-capable host and network to improve your app’s responsiveness.

### C-Language Symbols

Access Network framework symbols used in C.

- [C-Language Symbols](network/c-language-symbols.md)

### Structures

- [nw_interface_radio_type_t](network/nw_interface_radio_type_t.md)
- [nw_multipath_version_t](network/nw_multipath_version_t.md)
- [nw_path_unsatisfied_reason_t](network/nw_path_unsatisfied_reason_t.md)
- [nw_quic_stream_type_t](network/nw_quic_stream_type_t.md)
- [Bonjour](network/bonjour.md): A browser that discovers Bonjour services.
- [BonjourListenerProvider](network/bonjourlistenerprovider.md): Advertise a Bonjour service.
- [Coder](network/coder.md): A protocol that frames and encodes/decodes Codable types.
- [DTLS](network/dtls.md): The system definition of the Datagram Transport Layer Security (DTLS) protocol.
- [DefaultProtocolStorage](network/defaultprotocolstorage.md)
- [Framer](network/framer.md): An instance of a Framer protocol to load into a protocol stack.
- [IP](network/ip.md): The system definition of the Internet Protocol (IP).
- [NWParametersBuilder](network/nwparametersbuilder.md): An opaque class that is responsible for creating and configuring NWParameters based on the parameterized protocol stack.
- [NWTXTRecord](network/nwtxtrecord.md): A dictionary representing a TXT record in a DNS packet.
- [NetworkJSONCoder](network/networkjsoncoder.md)
- [NetworkPropertyListCoder](network/networkpropertylistcoder.md)
- [ProtocolMetadataBuilder](network/protocolmetadatabuilder.md): A resultBuilder for configuring metadata in send methods in a declarative way.
- [ProtocolStackBuilder](network/protocolstackbuilder.md): A resultBuilder for specifying and configuring protocol stacks in a declarative way
- [ProxyConfiguration](network/proxyconfiguration.md): A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.
- [QUIC](network/quic.md): The system definition of the QUIC protocol.
- [QUICDatagram](network/quicdatagram.md): Send and receive unreliable datagrams over QUIC via RFC 9221
- [QUICStream](network/quicstream.md): A QUIC stream that runs over a QUIC connection.
- [TCP](network/tcp.md): The system definition of the Transmission Control Protocol (TCP).
- [TLS](network/tls.md): The system definition of the Transport Layer Security (TLS) protocol.
- [TLV](network/tlv.md): A Type-Length-Value (TLV) framing protocol.
- [TXTRecordDecoder](network/txtrecorddecoder.md)
- [UDP](network/udp.md): The system definition of the User Datagram Protocol (UDP).
- [UnexpectedEndpointType](network/unexpectedendpointtype.md): An error generated when an unexpected endpoint type is supplied.
- [WebSocket](network/websocket.md): The system definition of the WebSocket protocol.
- [nw_link_quality_t](network/nw_link_quality_t.md)

### Classes

- [NWMultiplexGroup](network/nwmultiplexgroup.md)
- [NetworkBrowser](network/networkbrowser.md): Discover advertised services and devices on the network.
- [NetworkChannel](network/networkchannel.md): A base class supporting sending and recieving data through an arbitrary network channel.
- [NetworkConnection](network/networkconnection.md): Connect to an endpoint on the network to send and receive data.
- [NetworkListener](network/networklistener.md): Listen for incoming network connections.

### Reference

- [Network Constants](network/network-constants.md): Access Network framework constants used in C.
- [Network Functions](network/network-functions.md): Access Network framework functions used in C.
- [Network Data Types](network/network-data-types.md)

### Protocols

- [BrowserProvider](network/browserprovider.md): BrowserProviders can be used when creating NetworkBrowsers.
- [Connectable](network/connectable.md): Describes types that can be used to make NetworkConnections.
- [ConnectionStorage](network/connectionstorage.md): Types that conform to ConnectionStorage can be used as additional storage within a connection.
- [DatagramProtocol](network/datagramprotocol.md): Types that conform to DatagramProtocol send and receive messages with minimal or no metadata, usually constrained to a fixed maximum size.
- [FramerProtocol](network/framerprotocol.md): Framer protocols allow custom framing and serialization of messages on a connection.
- [ListenerProvider](network/listenerprovider.md): Extensible support for configuring advertise descriptors to define the service a listener should advertise.
- [MessageProtocol](network/messageprotocol.md): Types that conform to MessageProtocol send and receive messages. The conforming type is responsible for specifying its message-specific metadata.
- [MultiplexProtocol](network/multiplexprotocol.md): Types that conform to MultiplexProtocol are allowed to be the top protocol in a network protocol stack for multiplexing network connection objects.
- [NWParametersProvider](network/nwparametersprovider.md): Types that conform to the NWParametersProvider protocol can be used to generate an NWParameters.
- [NetworkCoder](network/networkcoder.md)
- [NetworkDecoder](network/networkdecoder.md): A type that conforms to the NetworkEncoder protocol can decode data to an Encodable object
- [NetworkEncoder](network/networkencoder.md): A type that conforms to the NetworkEncoder protocol can encode a Encodable object to Data
- [NetworkFixedWidthInteger](network/networkfixedwidthinteger.md)
- [NetworkMetadataProtocol](network/networkmetadataprotocol.md): Types that conform to NetworkProtocolOptions can be used when configuring protocol stacks.
- [NetworkProtocolOptions](network/networkprotocoloptions.md)
- [OneToOneProtocol](network/onetooneprotocol.md): Types that conform to OneToOneProtocol are allowed to be the top protocol in a network protocol stack for non-multiplexed connections.
- [StreamProtocol](network/streamprotocol.md): Types that conform to the StreamProtocol protocol expose methods for sending and receiving byte streams.

### Variables

- [kNWErrorDomainWiFiAware](network/knwerrordomainwifiaware.md)
- [nw_error_domain_wifi_aware](network/nw_error_domain_wifi_aware.md)
- [nw_link_quality_good](network/nw_link_quality_good.md)
- [nw_link_quality_minimal](network/nw_link_quality_minimal.md)
- [nw_link_quality_moderate](network/nw_link_quality_moderate.md)
- [nw_link_quality_unknown](network/nw_link_quality_unknown.md)

### Functions

- [nw_parameters_get_allow_ultra_constrained(\_:)](network/nw_parameters_get_allow_ultra_constrained%28__%29.md)
- [nw_parameters_set_allow_ultra_constrained(\_:\_:)](network/nw_parameters_set_allow_ultra_constrained%28____%29.md)
- [nw_path_get_link_quality(\_:)](network/nw_path_get_link_quality%28__%29.md)
- [nw_path_is_ultra_constrained(\_:)](network/nw_path_is_ultra_constrained%28__%29.md)
- [nw_tcp_set_max_pacing_rate(\_:\_:)](network/nw_tcp_set_max_pacing_rate%28____%29.md)
- [withNetworkConnection(to:using:\_:)](network/withnetworkconnection%28to_using___%29-1sik8.md)
- [withNetworkConnection(to:using:\_:)](network/withnetworkconnection%28to_using___%29-4wpc9.md)
- [withNetworkConnection(to:using:\_:)](network/withnetworkconnection%28to_using___%29-7skhi.md)
- [withNetworkConnection(to:using:\_:)](network/withnetworkconnection%28to_using___%29-887ho.md)

# Network (Objective-C)

**Framework:** Network  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Create network connections to send and receive data using transport and security protocols.

## Mentioned In

- [Indicating the source of network activity](network/indicating-the-source-of-network-activity.md)
- [Inspecting app activity data](network/inspecting-app-activity-data.md)

<a id="overview"></a>

## Overview

Use this framework when you need direct access to protocols like TLS, TCP, and UDP for your custom application protocols. Continue to use [NSURLSession](foundation/urlsession.md), which is built upon this framework, for loading HTTP- and URL-based resources. For in-depth advice on where to start with networking, see [TN3151: Choosing the right networking API](https://developer.apple.com/documentation/technotes/tn3151-choosing-the-right-networking-api).

> **Note**

>  watchOS supports Network framework for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Essentials

- [nw_endpoint_t](network/nw_endpoint_t.md): A local or remote endpoint in a network connection.
- [nw_parameters_t](network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.

### Connections and Listeners

- [Implementing netcat with Network Framework](network/implementing-netcat-with-network-framework.md): Build a simple `netcat` tool that establishes network connections and transfers data.
- [nw_connection_t](network/nw_connection_t.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [nw_listener_t](network/nw_listener_t.md): An object you use to listen for incoming network connections.
- [nw_browser_t](network/nw_browser_t.md): An object you use to browse for available network services.
- [nw_connection_group_t](network/nw_connection_group_t.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [nw_ethernet_channel_t](network/nw_ethernet_channel_t.md): An object you use to send and receive custom Ethernet frames.

### Network Protocols

Configure protocol options to use with connections and listeners, and inspect the results of protocol handshakes.

- [TCP Options](network/tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [TLS Options](network/tls-options.md): Configure options for connections that use Transport Layer Security.
- [QUIC Options](network/quic-options.md): Configure options for connections that use the QUIC transport protocol.
- [UDP Options](network/udp-options.md): Configure options for connections that use the User Datagram Protocol.
- [IP Options](network/ip-options.md): Configure Internet Protocol options on connections.
- [WebSocket Options](network/websocket-options.md): Configure options for connections that use WebSocket.
- [Framer Protocol Options](network/framer-protocol-options.md): Create custom protocols to frame applications messages over a connection.

### Network Security and Privacy

- [Security Options](network/security-options.md): Configure security options for TLS handshakes.
- [Privacy Management](network/privacy-management.md): Configure parameters related to user privacy.
- [Creating an Identity for Local Network TLS](network/creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.

### Paths and Interfaces

- [nw_path_t](network/nw_path_t.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [nw_path_monitor_t](network/nw_path_monitor_t.md): An observer that you use to monitor and react to network changes.
- [nw_interface_t](network/nw_interface_t.md): An interface that a network connection uses to send and receive data.

### Memory Management

- [nw_release](network/nw_release.md): Releases a reference count on a Network.framework object.
- [nw_retain](network/nw_retain.md): Adds a reference count to a Network.framework object.
- [nw_object_t](network/nw_object_t.md): The generic type for objects in the Network framework.

### Errors

- [nw_error_t](network/nw_error_t.md): The errors returned by the Network framework.

### Network Debugging

- [Choosing a Network Debugging Tool](network/choosing-a-network-debugging-tool.md): Decide which tool works best for your network debugging problem.
- [Debugging HTTP Server-Side Errors](network/debugging-http-server-side-errors.md): Understand HTTP server-side errors and how to debug them.
- [Debugging HTTPS Problems with CFNetwork Diagnostic Logging](network/debugging-https-problems-with-cfnetwork-diagnostic-logging.md): Use CFNetwork diagnostic logging to investigate HTTP and HTTPS problems.
- [Recording a Packet Trace](network/recording-a-packet-trace.md): Learn how to record a low-level trace of network traffic.
- [Taking Advantage of Third-Party Network Debugging Tools](network/taking-advantage-of-third-party-network-debugging-tools.md): Learn about the available third-party network debugging tools.
- [Testing and Debugging L4S in Your App](network/testing-and-debugging-l4s-in-your-app.md): Learn how to verify your app on an L4S-capable host and network to improve your app’s responsiveness.

### Protocols

- [OS_nw_advertise_descriptor](network/os_nw_advertise_descriptor.md)
- [OS_nw_browse_descriptor](network/os_nw_browse_descriptor.md)
- [OS_nw_browse_result](network/os_nw_browse_result.md)
- [OS_nw_browser](network/os_nw_browser.md)
- [OS_nw_connection](network/os_nw_connection.md)
- [OS_nw_connection_group](network/os_nw_connection_group.md)
- [OS_nw_content_context](network/os_nw_content_context.md)
- [OS_nw_data_transfer_report](network/os_nw_data_transfer_report.md)
- [OS_nw_endpoint](network/os_nw_endpoint.md)
- [OS_nw_error](network/os_nw_error.md)
- [OS_nw_establishment_report](network/os_nw_establishment_report.md)
- [OS_nw_ethernet_channel](network/os_nw_ethernet_channel.md)
- [OS_nw_framer](network/os_nw_framer.md)
- [OS_nw_group_descriptor](network/os_nw_group_descriptor.md)
- [OS_nw_interface](network/os_nw_interface.md)
- [OS_nw_listener](network/os_nw_listener.md)
- [OS_nw_object](network/os_nw_object.md)
- [OS_nw_parameters](network/os_nw_parameters.md)
- [OS_nw_path](network/os_nw_path.md)
- [OS_nw_path_monitor](network/os_nw_path_monitor.md)
- [OS_nw_privacy_context](network/os_nw_privacy_context.md)
- [OS_nw_protocol_definition](network/os_nw_protocol_definition.md)
- [OS_nw_protocol_metadata](network/os_nw_protocol_metadata.md)
- [OS_nw_protocol_options](network/os_nw_protocol_options.md)
- [OS_nw_protocol_stack](network/os_nw_protocol_stack.md)
- [OS_nw_proxy_config](network/os_nw_proxy_config.md)
- [OS_nw_relay_hop](network/os_nw_relay_hop.md)
- [OS_nw_resolution_report](network/os_nw_resolution_report.md)
- [OS_nw_resolver_config](network/os_nw_resolver_config.md)
- [OS_nw_txt_record](network/os_nw_txt_record.md)
- [OS_nw_ws_request](network/os_nw_ws_request.md)
- [OS_nw_ws_response](network/os_nw_ws_response.md)

### Reference

- [Network Enumerations](network/network-enumerations.md)
- [Network Constants](network/network-constants.md): Access Network framework constants used in C.
- [Network Functions](network/network-functions.md): Access Network framework functions used in C.
- [Network Data Types](network/network-data-types.md)
- [Network Macros](network/network-macros.md)

### Variables

- [kNWErrorDomainWiFiAware](network/knwerrordomainwifiaware.md)

### Functions

- [nw_parameters_get_allow_ultra_constrained](network/nw_parameters_get_allow_ultra_constrained%28__%29.md)
- [nw_parameters_set_allow_ultra_constrained](network/nw_parameters_set_allow_ultra_constrained%28____%29.md)
- [nw_path_get_link_quality](network/nw_path_get_link_quality%28__%29.md)
- [nw_path_is_ultra_constrained](network/nw_path_is_ultra_constrained%28__%29.md)
- [nw_tcp_set_max_pacing_rate](network/nw_tcp_set_max_pacing_rate%28____%29.md)

### Macros

- [NW_ASSUME_EXTERNALLY_RETAINED_BEGIN](network/nw_assume_externally_retained_begin.md)
- [NW_ASSUME_EXTERNALLY_RETAINED_END](network/nw_assume_externally_retained_end.md)
- [NW_EXPORT](network/nw_export.md)
- [NW_EXTERNALLY_RETAINED](network/nw_externally_retained.md)

### Enumerations

- [nw_link_quality_t](network/nw_link_quality_t.md)
