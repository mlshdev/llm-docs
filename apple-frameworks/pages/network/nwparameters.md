> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters](https://developer.apple.com/documentation/network/nwparameters)

# NWParameters

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An object that stores the protocols to use for connections, options for sending data, and network path constraints.

## Declaration

```swift
final class NWParameters
```

## Mentioned In

- [Indicating the source of network activity](indicating-the-source-of-network-activity.md)

## Topics

### Creating Parameters

- [tls](nwparameters/tls.md): A set of default parameters for connections and listeners that use TLS and TCP.
- [tcp](nwparameters/tcp.md): A set of default parameters for connections and listeners that use TCP.
- [dtls](nwparameters/dtls.md): A set of default parameters for connections and listeners that use DTLS and UDP.
- [udp](nwparameters/udp.md): A set of default parameters for connections and listeners that use UDP.
- [quic(alpn:)](nwparameters/quic%28alpn_%29.md): Returns a set of default parameters for connections and listeners that use QUIC, with a set of supported Application-Layer Protocol Negotiation values.
- [quicDatagram(alpn:)](nwparameters/quicdatagram%28alpn_%29.md): Returns a set of default parameters for connections and listeners that use QUIC datagrams, with a set of supported Application-Layer Protocol Negotiation values.
- [init(tls:tcp:)](nwparameters/init%28tls_tcp_%29.md): Initializes parameters for TLS connections and listeners with custom TLS and TCP options.
- [init(dtls:udp:)](nwparameters/init%28dtls_udp_%29.md): Initializes parameters for DTLS connections and listeners with custom DTLS and UDP options.
- [init(quic:)](nwparameters/init%28quic_%29.md): Initializes parameters for QUIC connections and listeners with custom QUIC options.
- [init()](nwparameters/init%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [init(customIPProtocolNumber:)](nwparameters/init%28customipprotocolnumber_%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [copy()](nwparameters/copy%28%29.md): Performs a deep copy of a parameters object.

### Modifying Protocol Stacks

- [defaultProtocolStack](nwparameters/defaultprotocolstack.md): The protocol stack used by connections and listeners.
- [NWParameters.ProtocolStack](nwparameters/protocolstack.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [NWProtocol](nwprotocol.md): The abstract superclass used by Network framework protocols and by custom network protocols that you define.

### Selecting Paths

- [requiredInterfaceType](nwparameters/requiredinterfacetype.md): An interface type to require on connections and listeners.
- [requiredInterface](nwparameters/requiredinterface.md): A specific interface to require on connections, listeners, and browsers.
- [requiredLocalEndpoint](nwparameters/requiredlocalendpoint.md): A specific local IP address and port to use for connections and listeners.
- [prohibitConstrainedPaths](nwparameters/prohibitconstrainedpaths.md): A Boolean that prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.
- [prohibitExpensivePaths](nwparameters/prohibitexpensivepaths.md): A Boolean that prevents connections, listeners, and browsers from using network paths marked as expensive.
- [prohibitedInterfaceTypes](nwparameters/prohibitedinterfacetypes.md): A list of interface types that connections, listeners, and browsers will not use.
- [prohibitedInterfaces](nwparameters/prohibitedinterfaces.md): A list of specific interfaces that connections and listeners will not use.

### Customizing Connection Options

- [multipathServiceType](nwparameters/multipathservicetype-swift.property.md): An option to allow connections to use multipath protocols.
- [NWParameters.MultipathServiceType](nwparameters/multipathservicetype-swift.enum.md): Modes in which a connection can support multipath protocols.
- [serviceClass](nwparameters/serviceclass-swift.property.md): The traffic characteristics network connections send and receive.
- [NWParameters.ServiceClass](nwparameters/serviceclass-swift.enum.md): Indicates how the system prioritizes transmitted traffic by your latency and throughput needs.
- [allowFastOpen](nwparameters/allowfastopen.md): A Boolean that enables sending application data with protocol handshakes.
- [expiredDNSBehavior](nwparameters/expireddnsbehavior-swift.property.md): A behavior that defines how expired DNS answers will be used.
- [NWParameters.ExpiredDNSBehavior](nwparameters/expireddnsbehavior-swift.enum.md): Options for configuring how expired DNS answers should be used.
- [requiresDNSSECValidation](nwparameters/requiresdnssecvalidation.md): A Boolean value that determines whether a connection requires DNSSEC validation when resolving endpoints.
- [preferNoProxies](nwparameters/prefernoproxies.md): A Boolean that indicates that connections should ignore proxies when they are enabled on the system.
- [includePeerToPeer](nwparameters/includepeertopeer.md): A Boolean that enables peer-to-peer link technologies for connections and listeners.
- [allowLocalEndpointReuse](nwparameters/allowlocalendpointreuse.md): A Boolean that allows reusing local addresses and ports across connections.
- [acceptLocalOnly](nwparameters/acceptlocalonly.md): A Boolean that restricts listeners to only accepting connections from the local link.

### Configuring Privacy Settings

- [setPrivacyContext(\_:)](nwparameters/setprivacycontext%28__%29.md): Associates a privacy context with any connections or listeners that use the parameters.
- [NWParameters.PrivacyContext](nwparameters/privacycontext.md): An object that defines the privacy requirements for a set of connections.

### Instance Properties

- [allowUltraConstrainedPaths](nwparameters/allowultraconstrainedpaths.md): Allow connection to use interfaces considered ultra-constrained by the system
- [attribution](nwparameters/attribution-swift.property.md)
- [wifiAware](nwparameters/wifiaware.md): Get and set Wi-Fi Aware specific connection parameters.

### Instance Methods

- [wifiAware(\_:)](nwparameters/wifiaware%28__%29.md): Configure Wi-Fi Aware properties on an `NWParameters` object.

### Type Properties

- [applicationService](nwparameters/applicationservice.md): The default parameters for connecting with other, local devices that are running your app.

### Enumerations

- [NWParameters.Attribution](nwparameters/attribution-swift.enum.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NWParametersProvider](nwparametersprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [NWEndpoint](nwendpoint.md): A local or remote endpoint in a network connection.
