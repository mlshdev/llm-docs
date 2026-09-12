> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyudpflow](https://developer.apple.com/documentation/networkextension/neappproxyudpflow)

# NEAppProxyUDPFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object for reading and writing data to and from a UDP conversation being proxied by the provider.

## Declaration

```swift
class NEAppProxyUDPFlow
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive UDP connections to be proxied in the form of `NEAppProxyUDPFlow` objects.

## Topics

### Handling flow data

- [readDatagrams(completionHandler:)](neappproxyudpflow/readdatagrams%28completionhandler_%29-9z8gw.md): Deprecated. Read datagrams from the flow.
- [writeDatagrams(\_:sentBy:completionHandler:)](neappproxyudpflow/writedatagrams%28__sentby_completionhandler_%29.md): Deprecated. Write datagrams to the flow.

### Getting flow information

- [localEndpoint](neappproxyudpflow/localendpoint.md): Deprecated. An [NWEndpoint](nwendpoint.md) object containing information about the local endpoint of the flow.

### Instance Properties

- [localFlowEndpoint](neappproxyudpflow/localflowendpoint-7ukb6.md)

### Instance Methods

- [readDatagrams()](neappproxyudpflow/readdatagrams%28%29.md)
- [readDatagrams(completionHandler:)](neappproxyudpflow/readdatagrams%28completionhandler_%29-71k28.md)
- [writeDatagrams(\_:)](neappproxyudpflow/writedatagrams%28__%29.md)
- [writeDatagrams(\_:completionHandler:)](neappproxyudpflow/writedatagrams%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NEAppProxyFlow](neappproxyflow.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.

# NEAppProxyUDPFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object for reading and writing data to and from a UDP conversation being proxied by the provider.

## Declaration

```objectivec
@interface NEAppProxyUDPFlow : NEAppProxyFlow
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive UDP connections to be proxied in the form of `NEAppProxyUDPFlow` objects.

## Topics

### Handling flow data

- [readDatagramsWithCompletionHandler:](neappproxyudpflow/readdatagrams%28completionhandler_%29-9z8gw.md): Deprecated. Read datagrams from the flow.
- [writeDatagrams:sentByEndpoints:completionHandler:](neappproxyudpflow/writedatagrams%28__sentby_completionhandler_%29.md): Deprecated. Write datagrams to the flow.

### Getting flow information

- [localEndpoint](neappproxyudpflow/localendpoint.md): Deprecated. An [NWEndpoint](nwendpoint.md) object containing information about the local endpoint of the flow.

### Instance Properties

- [localFlowEndpoint](neappproxyudpflow/localflowendpoint-9a8gj.md)

### Instance Methods

- [readDatagramsAndFlowEndpointsWithCompletionHandler:](neappproxyudpflow/readdatagramsandflowendpointswithcompletionhandler_.md)
- [writeDatagrams:sentByFlowEndpoints:completionHandler:](neappproxyudpflow/writedatagrams_sentbyflowendpoints_completionhandler_.md)

## Relationships

### Inherits From

- [NEAppProxyFlow](neappproxyflow.md)

## See Also

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.
