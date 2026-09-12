> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersocketflow/socketfamily](https://developer.apple.com/documentation/networkextension/nefiltersocketflow/socketfamily)

# socketFamily (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The protocol family of the socket.

## Declaration

```swift
var socketFamily: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Examples of protocol families include symbols like `PF_INET` and `PF_INET6`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.

# socketFamily (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The protocol family of the socket.

## Declaration

```objectivec
@property (readonly) int socketFamily;
```

<a id="Discussion"></a>

## Discussion

Examples of protocol families include symbols like `PF_INET` and `PF_INET6`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.
