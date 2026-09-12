> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskmetrics/resourcefetchtype](https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics/resourcefetchtype)

# URLSessionTaskMetrics.ResourceFetchType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The manner in which a resource is fetched.

## Declaration

```swift
enum ResourceFetchType
```

## Topics

### Fetch types

- [URLSessionTaskMetrics.ResourceFetchType.unknown](resourcefetchtype/unknown.md): The manner in which the resource was fetched could not be determined.
- [URLSessionTaskMetrics.ResourceFetchType.networkLoad](resourcefetchtype/networkload.md): The resource was loaded over the network.
- [URLSessionTaskMetrics.ResourceFetchType.serverPush](resourcefetchtype/serverpush.md): Deprecated. The resource was pushed by the server to the client.
- [URLSessionTaskMetrics.ResourceFetchType.localCache](resourcefetchtype/localcache.md): The resource was retrieved from the local storage.

### Initializers

- [init(rawValue:)](resourcefetchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing transaction characteristics

- [networkProtocolName](../urlsessiontasktransactionmetrics/networkprotocolname.md): The network protocol used to fetch the resource.
- [remoteAddress](../urlsessiontasktransactionmetrics/remoteaddress.md): The IP address string of the remote interface for the connection.
- [remotePort](../urlsessiontasktransactionmetrics/remoteport.md): The port number of the remote interface for the connection.
- [localAddress](../urlsessiontasktransactionmetrics/localaddress.md): The IP address string of the local interface for the connection.
- [localPort](../urlsessiontasktransactionmetrics/localport.md): The port number of the local interface for the connection.
- [negotiatedTLSCipherSuite](../urlsessiontasktransactionmetrics/negotiatedtlsciphersuite.md): The TLS cipher suite the task negotiated with the endpoint for the connection.
- [negotiatedTLSProtocolVersion](../urlsessiontasktransactionmetrics/negotiatedtlsprotocolversion.md): The TLS protocol version the task negotiated with the endpoint for the connection.
- [isCellular](../urlsessiontasktransactionmetrics/iscellular.md): A Boolean value that indicates whether the connection operates over a cellular interface.
- [isExpensive](../urlsessiontasktransactionmetrics/isexpensive.md): A Boolean value that indicates whether the connection operates over an expensive interface.
- [isConstrained](../urlsessiontasktransactionmetrics/isconstrained.md): A Boolean value that indicates whether the connection operates over an interface marked as constrained.
- [isProxyConnection](../urlsessiontasktransactionmetrics/isproxyconnection.md): A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.
- [isReusedConnection](../urlsessiontasktransactionmetrics/isreusedconnection.md): A Boolean value that indicates whether the task used a persistent connection to fetch the resource.
- [isMultipath](../urlsessiontasktransactionmetrics/ismultipath.md): A Boolean value that indicates whether the connection uses a successfully negotiated multipath protocol.
- [resourceFetchType](../urlsessiontasktransactionmetrics/resourcefetchtype.md): A value that indicates whether the resource was loaded, pushed, or retrieved from the local cache.
- [domainResolutionProtocol](../urlsessiontasktransactionmetrics/domainresolutionprotocol.md): DNS protocol used for domain resolution.

# NSURLSessionTaskMetricsResourceFetchType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The manner in which a resource is fetched.

## Declaration

```objectivec
enum NSURLSessionTaskMetricsResourceFetchType : NSInteger;
```

## Topics

### Fetch types

- [NSURLSessionTaskMetricsResourceFetchTypeUnknown](resourcefetchtype/unknown.md): The manner in which the resource was fetched could not be determined.
- [NSURLSessionTaskMetricsResourceFetchTypeNetworkLoad](resourcefetchtype/networkload.md): The resource was loaded over the network.
- [NSURLSessionTaskMetricsResourceFetchTypeServerPush](resourcefetchtype/serverpush.md): Deprecated. The resource was pushed by the server to the client.
- [NSURLSessionTaskMetricsResourceFetchTypeLocalCache](resourcefetchtype/localcache.md): The resource was retrieved from the local storage.

## See Also

### Accessing transaction characteristics

- [networkProtocolName](../urlsessiontasktransactionmetrics/networkprotocolname.md): The network protocol used to fetch the resource.
- [remoteAddress](../urlsessiontasktransactionmetrics/remoteaddress.md): The IP address string of the remote interface for the connection.
- [remotePort](../nsurlsessiontasktransactionmetrics/remoteport.md): The port number of the remote interface for the connection.
- [localAddress](../urlsessiontasktransactionmetrics/localaddress.md): The IP address string of the local interface for the connection.
- [localPort](../nsurlsessiontasktransactionmetrics/localport.md): The port number of the local interface for the connection.
- [negotiatedTLSCipherSuite](../nsurlsessiontasktransactionmetrics/negotiatedtlsciphersuite.md): The TLS cipher suite the task negotiated with the endpoint for the connection.
- [negotiatedTLSProtocolVersion](../nsurlsessiontasktransactionmetrics/negotiatedtlsprotocolversion.md): The TLS protocol version the task negotiated with the endpoint for the connection.
- [cellular](../urlsessiontasktransactionmetrics/iscellular.md): A Boolean value that indicates whether the connection operates over a cellular interface.
- [expensive](../urlsessiontasktransactionmetrics/isexpensive.md): A Boolean value that indicates whether the connection operates over an expensive interface.
- [constrained](../urlsessiontasktransactionmetrics/isconstrained.md): A Boolean value that indicates whether the connection operates over an interface marked as constrained.
- [proxyConnection](../urlsessiontasktransactionmetrics/isproxyconnection.md): A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.
- [reusedConnection](../urlsessiontasktransactionmetrics/isreusedconnection.md): A Boolean value that indicates whether the task used a persistent connection to fetch the resource.
- [multipath](../urlsessiontasktransactionmetrics/ismultipath.md): A Boolean value that indicates whether the connection uses a successfully negotiated multipath protocol.
- [resourceFetchType](../urlsessiontasktransactionmetrics/resourcefetchtype.md): A value that indicates whether the resource was loaded, pushed, or retrieved from the local cache.
- [domainResolutionProtocol](../urlsessiontasktransactionmetrics/domainresolutionprotocol.md): DNS protocol used for domain resolution.
