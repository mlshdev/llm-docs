> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersocketflow/socketprotocol](https://developer.apple.com/documentation/networkextension/nefiltersocketflow/socketprotocol)

# socketProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The protocol of the socket.

## Declaration

```swift
var socketProtocol: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Examples of protocols include `IPPROTO_TCP` and `IPPROTO_IP`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.

# socketProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The protocol of the socket.

## Declaration

```objectivec
@property (readonly) int socketProtocol;
```

<a id="Discussion"></a>

## Discussion

Examples of protocols include `IPPROTO_TCP` and `IPPROTO_IP`.

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.
