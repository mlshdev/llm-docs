> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/remotehostname](https://developer.apple.com/documentation/networkextension/neappproxyflow/remotehostname)

# remoteHostname (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.0+ · visionOS 1.0+

The remote host name for flows created from a hostname.

## Declaration

```swift
var remoteHostname: String? { get }
```

<a id="Discussion"></a>

## Discussion

The flow populates this property when you create the flow from a connect-by-name API such as [URLSession](../../foundation/urlsession.md) or the [Network](../../network.md) framework.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata(\_:)](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.

# remoteHostname (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.0+ · visionOS 1.0+

The remote host name for flows created from a hostname.

## Declaration

```objectivec
@property (readonly, nullable) NSString * remoteHostname;
```

<a id="Discussion"></a>

## Discussion

The flow populates this property when you create the flow from a connect-by-name API such as [NSURLSession](../../foundation/urlsession.md) or the [Network](../../network.md) framework.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata:](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
