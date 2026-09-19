> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefiltersocketflow/sockettype

# socketType (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The type of the socket.

## Declaration

```swift
var socketType: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Examples of socket types include `SOCK_STREAM` and `SOCK_DGRAM`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.

# socketType (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The type of the socket.

## Declaration

```objectivec
@property (readonly) int socketType;
```

<a id="Discussion"></a>

## Discussion

Examples of socket types include `SOCK_STREAM` and `SOCK_DGRAM`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.
