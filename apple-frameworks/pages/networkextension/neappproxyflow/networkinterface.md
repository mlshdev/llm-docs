> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/networkinterface](https://developer.apple.com/documentation/networkextension/neappproxyflow/networkinterface)

# networkInterface (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The network interface, if any, used by this flow.

## Declaration

```swift
@NSCopying var networkInterface: nw_interface_t? { get set }
```

<a id="Discussion"></a>

## Discussion

To transport the flow’s data over a different interface, set this property to that interface.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata(\_:)](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.

# networkInterface (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The network interface, if any, used by this flow.

## Declaration

```objectivec
@property (copy, nullable) nw_interface_t networkInterface;
```

<a id="Discussion"></a>

## Discussion

To transport the flow’s data over a different interface, set this property to that interface.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata:](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.
