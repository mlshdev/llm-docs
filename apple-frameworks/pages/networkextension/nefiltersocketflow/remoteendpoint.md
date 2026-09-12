> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersocketflow/remoteendpoint](https://developer.apple.com/documentation/networkextension/nefiltersocketflow/remoteendpoint)

# remoteEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object containing details about the socket’s remote endpoint.

## Declaration

```swift
var remoteEndpoint: NWEndpoint? { get }
```

<a id="Discussion"></a>

## Discussion

This endpoint object may be `nil` when the system calls your [handleNewFlow(\_:)](../nefilterdataprovider/handlenewflow%28__%29.md) method; if so, receiving network data populates the object. In such a case, the filter may still perform filtering, based on its socket type, socket family, or socket protocol.

## See Also

### Getting socket flow properties

- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.

# remoteEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object containing details about the socket’s remote endpoint.

## Declaration

```objectivec
@property (readonly, nullable) NWEndpoint * remoteEndpoint;
```

<a id="Discussion"></a>

## Discussion

This endpoint object may be `nil` when the system calls your [handleNewFlow:](../nefilterdataprovider/handlenewflow%28__%29.md) method; if so, receiving network data populates the object. In such a case, the filter may still perform filtering, based on its socket type, socket family, or socket protocol.

## See Also

### Getting socket flow properties

- [remoteHostname](remotehostname.md): The flow’s remote hostname, if applicable.
- [NEFilterFlow](../nefilterflow.md): The abstract base class for types that represent flows of network data.
- [localEndpoint](localendpoint.md): Deprecated. An object containing details about the socket’s local endpoint.
- [socketFamily](socketfamily.md): The protocol family of the socket.
- [socketType](sockettype.md): The type of the socket.
- [socketProtocol](socketprotocol.md): The protocol of the socket.
