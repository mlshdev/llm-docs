> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow](https://developer.apple.com/documentation/networkextension/neappproxyflow)

# NEAppProxyFlow (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.

## Declaration

```swift
class NEAppProxyFlow
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive network connections to be proxied in the form of `NEAppProxyFlow` objects, which are passed to the App Proxy Provider via the [handleNewFlow(\_:)](neappproxyprovider/handlenewflow%28__%29.md) method.

`NEAppProxyFlow` objects are initially in an unopened state. Before they can be used to transmit network data, they must be opened using the [open(withLocalEndpoint:completionHandler:)](neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) method. When you are finished with a flow, you should call [closeReadWithError(\_:)](neappproxyflow/closereadwitherror%28__%29.md) and [closeWriteWithError(\_:)](neappproxyflow/closewritewitherror%28__%29.md), and then release the `NEAppProxyFlow` object.

## Topics

### Managing the flow life cycle

- [open(withLocalEndpoint:completionHandler:)](neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md): Deprecated. Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.
- [closeReadWithError(\_:)](neappproxyflow/closereadwitherror%28__%29.md): Close the flow for further read operations.
- [closeWriteWithError(\_:)](neappproxyflow/closewritewitherror%28__%29.md): Close the flow for further write operations.

### Accessing flow information

- [metaData](neappproxyflow/metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata(\_:)](neappproxyflow/setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](neappproxyflow/isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](neappproxyflow/networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](neappproxyflow/remotehostname.md): The remote host name for flows created from a hostname.

### Errors

- [NEAppProxyFlowError](neappproxyflowerror-swift.struct.md): An error that the app proxy flow encounters.
- [NEAppProxyErrorDomain](neappproxyerrordomain.md): The domain used for app proxy errors.
- [NEAppProxyFlowError.Code](neappproxyflowerror-swift.struct/code.md): Error codes that the app proxy flow API declares.
- [NEAppProxyFlowError](neappproxyflowerror-swift.struct.md): An error that the app proxy flow encounters.

### Instance Properties

- [interface](neappproxyflow/interface.md)

### Instance Methods

- [open(withLocalFlowEndpoint:)](neappproxyflow/open%28withlocalflowendpoint_%29.md)
- [open(withLocalFlowEndpoint:completionHandler:)](neappproxyflow/open%28withlocalflowendpoint_completionhandler_%29.md)
- [setMetadata(on:)](neappproxyflow/setmetadata%28on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEAppProxyTCPFlow](neappproxytcpflow.md)
- [NEAppProxyUDPFlow](neappproxyudpflow.md)

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
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.

# NEAppProxyFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An abstract base class shared by NEAppProxyTCPFlow and NEAppProxyUDPFlow.

## Declaration

```objectivec
@interface NEAppProxyFlow : NSObject
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

App Proxy Providers receive network connections to be proxied in the form of `NEAppProxyFlow` objects, which are passed to the App Proxy Provider via the [handleNewFlow:](neappproxyprovider/handlenewflow%28__%29.md) method.

`NEAppProxyFlow` objects are initially in an unopened state. Before they can be used to transmit network data, they must be opened using the [openWithLocalEndpoint:completionHandler:](neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) method. When you are finished with a flow, you should call [closeReadWithError:](neappproxyflow/closereadwitherror%28__%29.md) and [closeWriteWithError:](neappproxyflow/closewritewitherror%28__%29.md), and then release the `NEAppProxyFlow` object.

## Topics

### Managing the flow life cycle

- [openWithLocalEndpoint:completionHandler:](neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md): Deprecated. Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.
- [closeReadWithError:](neappproxyflow/closereadwitherror%28__%29.md): Close the flow for further read operations.
- [closeWriteWithError:](neappproxyflow/closewritewitherror%28__%29.md): Close the flow for further write operations.

### Accessing flow information

- [metaData](neappproxyflow/metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata:](neappproxyflow/setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](neappproxyflow/isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](neappproxyflow/networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](neappproxyflow/remotehostname.md): The remote host name for flows created from a hostname.

### Errors

- [NEAppProxyErrorDomain](neappproxyerrordomain.md): The domain used for app proxy errors.
- [NEAppProxyFlowError](neappproxyflowerror-swift.struct/code.md): Error codes that the app proxy flow API declares.

### Instance Methods

- [openWithLocalFlowEndpoint:completionHandler:](neappproxyflow/openwithlocalflowendpoint_completionhandler_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEAppProxyTCPFlow](neappproxytcpflow.md)
- [NEAppProxyUDPFlow](neappproxyudpflow.md)

## See Also

### Flow handling

- [NEAppProxyTCPFlow](neappproxytcpflow.md): An object for reading and writing data to and from a TCP connection being proxied by the provider.
- [NEAppProxyUDPFlow](neappproxyudpflow.md): An object for reading and writing data to and from a UDP conversation being proxied by the provider.
- [NEFlowMetaData](neflowmetadata.md): Additional information about data flowing through a per-app VPN provider.
- [In-Provider Networking](in-provider-networking.md): Network APIs for use by all types of NetworkExtension providers and by hotspot helpers.
- [Handling Flow Copying](handling-flow-copying.md): Exchange data streams by using proxy-provider classes.
