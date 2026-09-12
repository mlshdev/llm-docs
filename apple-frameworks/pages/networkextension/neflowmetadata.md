> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neflowmetadata](https://developer.apple.com/documentation/networkextension/neflowmetadata)

# NEFlowMetaData (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Additional information about data flowing through a per-app VPN provider.

## Declaration

```swift
class NEFlowMetaData
```

<a id="overview"></a>

## Overview

This metadata is only present for data flowing through per-app VPN providers, that is, app proxy providers and packet tunnel providers in per-app VPN mode, as indicated by the [routingMethod](netunnelprovider/routingmethod.md) property.

## Topics

### Getting source app information

- [sourceAppUniqueIdentifier](neflowmetadata/sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppSigningIdentifier](neflowmetadata/sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.
- [sourceAppAuditToken](neflowmetadata/sourceappaudittoken.md): The audit token of the source application of the flow.

### Getting flow information

- [filterFlowIdentifier](neflowmetadata/filterflowidentifier.md): The identifier of the content filter flow corresponding to this flow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Related Documentation

- [NEPacket](nepacket.md): A network packet and its associated properties.

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.

# NEFlowMetaData (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Additional information about data flowing through a per-app VPN provider.

## Declaration

```objectivec
@interface NEFlowMetaData : NSObject
```

<a id="overview"></a>

## Overview

This metadata is only present for data flowing through per-app VPN providers, that is, app proxy providers and packet tunnel providers in per-app VPN mode, as indicated by the [routingMethod](netunnelprovider/routingmethod.md) property.

## Topics

### Getting source app information

- [sourceAppUniqueIdentifier](neflowmetadata/sourceappuniqueidentifier.md): A data instance that contains a unique hash value for the source application.
- [sourceAppSigningIdentifier](neflowmetadata/sourceappsigningidentifier.md): A string that contains the signing identifier of the source application.
- [sourceAppAuditToken](neflowmetadata/sourceappaudittoken.md): The audit token of the source application of the flow.

### Getting flow information

- [filterFlowIdentifier](neflowmetadata/filterflowidentifier.md): The identifier of the content filter flow corresponding to this flow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Related Documentation

- [NEPacket](nepacket.md): A network packet and its associated properties.

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.
