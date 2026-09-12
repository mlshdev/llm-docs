> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketsignature](https://developer.apple.com/documentation/corefoundation/cfsocketsignature)

# CFSocketSignature (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that fully specifies the communication protocol and connection address of a CFSocket object.

## Declaration

```swift
struct CFSocketSignature
```

## Topics

### Initializers

- [init()](cfsocketsignature/init%28%29.md)
- [init(protocolFamily:socketType:protocol:address:)](cfsocketsignature/init%28protocolfamily_sockettype_protocol_address_%29.md)

### Instance Properties

- [address](cfsocketsignature/address.md): A CFData object holding the contents of a `struct sockaddr` appropriate for the given protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example), identifying the address of the socket.
- [protocol](cfsocketsignature/protocol.md): The protocol type of the socket.
- [protocolFamily](cfsocketsignature/protocolfamily.md): The protocol family of the socket.
- [socketType](cfsocketsignature/sockettype.md): The socket type of the socket.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFSocketContext](cfsocketcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.

# CFSocketSignature (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that fully specifies the communication protocol and connection address of a CFSocket object.

## Declaration

```objectivec
typedef struct { ... } CFSocketSignature;
```

## Topics

### Instance Properties

- [address](cfsocketsignature/address.md): A CFData object holding the contents of a `struct sockaddr` appropriate for the given protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example), identifying the address of the socket.
- [protocol](cfsocketsignature/protocol.md): The protocol type of the socket.
- [protocolFamily](cfsocketsignature/protocolfamily.md): The protocol family of the socket.
- [socketType](cfsocketsignature/sockettype.md): The socket type of the socket.

## See Also

### Data Types

- [CFSocketContext](cfsocketcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.
