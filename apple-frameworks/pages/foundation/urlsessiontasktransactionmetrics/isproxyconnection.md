> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/isproxyconnection](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/isproxyconnection)

# isProxyConnection (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.

## Declaration

```swift
var isProxyConnection: Bool { get }
```

## See Also

### Accessing transaction characteristics

- [networkProtocolName](networkprotocolname.md): The network protocol used to fetch the resource.
- [remoteAddress](remoteaddress.md): The IP address string of the remote interface for the connection.
- [remotePort](remoteport.md): The port number of the remote interface for the connection.
- [localAddress](localaddress.md): The IP address string of the local interface for the connection.
- [localPort](localport.md): The port number of the local interface for the connection.
- [negotiatedTLSCipherSuite](negotiatedtlsciphersuite.md): The TLS cipher suite the task negotiated with the endpoint for the connection.
- [negotiatedTLSProtocolVersion](negotiatedtlsprotocolversion.md): The TLS protocol version the task negotiated with the endpoint for the connection.
- [isCellular](iscellular.md): A Boolean value that indicates whether the connection operates over a cellular interface.
- [isExpensive](isexpensive.md): A Boolean value that indicates whether the connection operates over an expensive interface.
- [isConstrained](isconstrained.md): A Boolean value that indicates whether the connection operates over an interface marked as constrained.
- [isReusedConnection](isreusedconnection.md): A Boolean value that indicates whether the task used a persistent connection to fetch the resource.
- [isMultipath](ismultipath.md): A Boolean value that indicates whether the connection uses a successfully negotiated multipath protocol.
- [resourceFetchType](resourcefetchtype.md): A value that indicates whether the resource was loaded, pushed, or retrieved from the local cache.
- [URLSessionTaskMetrics.ResourceFetchType](../urlsessiontaskmetrics/resourcefetchtype.md): The manner in which a resource is fetched.
- [domainResolutionProtocol](domainresolutionprotocol.md): DNS protocol used for domain resolution.

# proxyConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.

## Declaration

```objectivec
@property (assign, readonly, getter=isProxyConnection) BOOL proxyConnection;
```

## See Also

### Accessing transaction characteristics

- [networkProtocolName](networkprotocolname.md): The network protocol used to fetch the resource.
- [remoteAddress](remoteaddress.md): The IP address string of the remote interface for the connection.
- [remotePort](../nsurlsessiontasktransactionmetrics/remoteport.md): The port number of the remote interface for the connection.
- [localAddress](localaddress.md): The IP address string of the local interface for the connection.
- [localPort](../nsurlsessiontasktransactionmetrics/localport.md): The port number of the local interface for the connection.
- [negotiatedTLSCipherSuite](../nsurlsessiontasktransactionmetrics/negotiatedtlsciphersuite.md): The TLS cipher suite the task negotiated with the endpoint for the connection.
- [negotiatedTLSProtocolVersion](../nsurlsessiontasktransactionmetrics/negotiatedtlsprotocolversion.md): The TLS protocol version the task negotiated with the endpoint for the connection.
- [cellular](iscellular.md): A Boolean value that indicates whether the connection operates over a cellular interface.
- [expensive](isexpensive.md): A Boolean value that indicates whether the connection operates over an expensive interface.
- [constrained](isconstrained.md): A Boolean value that indicates whether the connection operates over an interface marked as constrained.
- [reusedConnection](isreusedconnection.md): A Boolean value that indicates whether the task used a persistent connection to fetch the resource.
- [multipath](ismultipath.md): A Boolean value that indicates whether the connection uses a successfully negotiated multipath protocol.
- [resourceFetchType](resourcefetchtype.md): A value that indicates whether the resource was loaded, pushed, or retrieved from the local cache.
- [NSURLSessionTaskMetricsResourceFetchType](../urlsessiontaskmetrics/resourcefetchtype.md): The manner in which a resource is fetched.
- [domainResolutionProtocol](domainresolutionprotocol.md): DNS protocol used for domain resolution.
