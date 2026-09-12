> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxytcpflow](https://developer.apple.com/documentation/networkextension/neappproxytcpflow)

# NEAppProxyTCPFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object for reading and writing data to and from a TCP connection being proxied by the provider.

## Declaration

```swift
class NEAppProxyTCPFlow
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive TCP connections to be proxied in the form of `NEAppProxyTCPFlow` objects.

## Topics

### Handling flow data

- [write(\_:withCompletionHandler:)](neappproxytcpflow/write%28__withcompletionhandler_%29.md): Write data to the flow.
- [readData(completionHandler:)](neappproxytcpflow/readdata%28completionhandler_%29.md): Read data from the flow.

### Getting flow information

- [remoteEndpoint](neappproxytcpflow/remoteendpoint.md): Deprecated. An [NWEndpoint](nwendpoint.md) object containing information about the intended remote endpoint of the flow.

### Instance Properties

- [remoteFlowEndpoint](neappproxytcpflow/remoteflowendpoint-4r7v1.md)

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

- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.

# NEAppProxyTCPFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object for reading and writing data to and from a TCP connection being proxied by the provider.

## Declaration

```objectivec
@interface NEAppProxyTCPFlow : NEAppProxyFlow
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive TCP connections to be proxied in the form of `NEAppProxyTCPFlow` objects.

## Topics

### Handling flow data

- [writeData:withCompletionHandler:](neappproxytcpflow/write%28__withcompletionhandler_%29.md): Write data to the flow.
- [readDataWithCompletionHandler:](neappproxytcpflow/readdata%28completionhandler_%29.md): Read data from the flow.

### Getting flow information

- [remoteEndpoint](neappproxytcpflow/remoteendpoint.md): Deprecated. An [NWEndpoint](nwendpoint.md) object containing information about the intended remote endpoint of the flow.

### Instance Properties

- [remoteFlowEndpoint](neappproxytcpflow/remoteflowendpoint-9lvob.md)

## Relationships

### Inherits From

- [NEAppProxyFlow](neappproxyflow.md)

## See Also

### Flow handling

- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEAppProxyFlow](neappproxyflow.md): An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.
