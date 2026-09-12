> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersocketflow/remotehostname](https://developer.apple.com/documentation/networkextension/nefiltersocketflow/remotehostname)

# remoteHostname (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The flow’s remote hostname, if applicable.

## Declaration

```swift
var remoteHostname: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only populated for flows originating from create-by-name APIs like [URLSession](../../foundation/urlsession.md) or [Network](../../network.md).

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.

# remoteHostname (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The flow’s remote hostname, if applicable.

## Declaration

```objectivec
@property (readonly, nullable) NSString * remoteHostname;
```

<a id="Discussion"></a>

## Discussion

This property is only populated for flows originating from create-by-name APIs like [NSURLSession](../../foundation/urlsession.md) or [Network](../../network.md).

## See Also

### Getting socket flow properties

- [remoteEndpoint](remoteendpoint.md): Deprecated. An object containing details about the socket’s remote endpoint.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.
