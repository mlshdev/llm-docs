> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/metadata](https://developer.apple.com/documentation/networkextension/neappproxyflow/metadata)

# metaData (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A metadata object containing information about the source app of the flow.

## Declaration

```swift
var metaData: NEFlowMetaData { get }
```

## See Also

### Accessing flow information

- [setMetadata(\_:)](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.

# metaData (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A metadata object containing information about the source app of the flow.

## Declaration

```objectivec
@property (readonly) NEFlowMetaData * metaData;
```

## See Also

### Accessing flow information

- [setMetadata:](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.
