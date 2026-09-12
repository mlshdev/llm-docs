> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection](https://developer.apple.com/documentation/networkextension/nwtcpconnection)

# NWTCPConnection (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object to manage a TCP connection, with or without TLS.

> Use the [nw_connection_t](../network/nw_connection_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWTCPConnection
```

## Topics

### Monitoring the connection status

- [state](nwtcpconnection/state.md): Deprecated. The status of the connection.
- [NWTCPConnectionState](nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [isViable](nwtcpconnection/isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](nwtcpconnection/error.md): Deprecated. The connection-wide error property.

### Transferring data

- [readMinimumLength(\_:maximumLength:completionHandler:)](nwtcpconnection/readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength(\_:completionHandler:)](nwtcpconnection/readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write(\_:completionHandler:)](nwtcpconnection/write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose()](nwtcpconnection/writeclose%28%29.md): Deprecated. Close the connection for writing.

### Canceling the connection

- [cancel()](nwtcpconnection/cancel%28%29.md): Deprecated. Cancel the connection.

### Responding to network changes

- [hasBetterPath](nwtcpconnection/hasbetterpath.md): Deprecated. If a connection has a better path, new connections would use a different interface.
- [init(upgradeFor:)](nwtcpconnection/init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new connection that will only be connected if there exists a better path (as determined by the system) to the remote endpoint of the original connection.

### Getting connection properties

- [endpoint](nwtcpconnection/endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](nwtcpconnection/localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](nwtcpconnection/remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](nwtcpconnection/connectedpath.md): Deprecated. The network path over which the connection was established.
- [txtRecord](nwtcpconnection/txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.

### Initializers

- [init(upgradeForConnection:)](nwtcpconnection/init%28upgradeforconnection_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### TCP connections

- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.

# NWTCPConnection (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object to manage a TCP connection, with or without TLS.

> Use the [nw_connection_t](../network/nw_connection_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWTCPConnection : NSObject
```

## Topics

### Monitoring the connection status

- [state](nwtcpconnection/state.md): Deprecated. The status of the connection.
- [NWTCPConnectionState](nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [viable](nwtcpconnection/isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](nwtcpconnection/error.md): Deprecated. The connection-wide error property.

### Transferring data

- [readMinimumLength:maximumLength:completionHandler:](nwtcpconnection/readminimumlength%28__maximumlength_completionhandler_%29.md): Deprecated. Read the requested range of bytes.
- [readLength:completionHandler:](nwtcpconnection/readlength%28__completionhandler_%29.md): Deprecated. Read a certain number of bytes on a connection.
- [write:completionHandler:](nwtcpconnection/write%28__completionhandler_%29.md): Deprecated. Write the data to the connection.
- [writeClose](nwtcpconnection/writeclose%28%29.md): Deprecated. Close the connection for writing.

### Canceling the connection

- [cancel](nwtcpconnection/cancel%28%29.md): Deprecated. Cancel the connection.

### Responding to network changes

- [hasBetterPath](nwtcpconnection/hasbetterpath.md): Deprecated. If a connection has a better path, new connections would use a different interface.
- [initWithUpgradeForConnection:](nwtcpconnection/init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new connection that will only be connected if there exists a better path (as determined by the system) to the remote endpoint of the original connection.

### Getting connection properties

- [endpoint](nwtcpconnection/endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](nwtcpconnection/localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](nwtcpconnection/remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](nwtcpconnection/connectedpath.md): Deprecated. The network path over which the connection was established.
- [txtRecord](nwtcpconnection/txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### TCP connections

- [NWTLSParameters](nwtlsparameters.md): Deprecated. TLS properties for creating a connection.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.
