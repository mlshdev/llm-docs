> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/isbound](https://developer.apple.com/documentation/networkextension/neappproxyflow/isbound)

# isBound (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

A Boolean value that indicates whether the flow has a binding to a specific interface.

## Declaration

```swift
var isBound: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When a binding exists, this value is [true](https://developer.apple.com/documentation/swift/true), and the [networkInterface](networkinterface.md) property indicates the bound interface. If the flow isn’t bound to an interface, this value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata(\_:)](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.

# isBound (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

A Boolean value that indicates whether the flow has a binding to a specific interface.

## Declaration

```objectivec
@property (readonly) BOOL isBound;
```

<a id="Discussion"></a>

## Discussion

When a binding exists, this value is [true](https://developer.apple.com/documentation/swift/true), and the [networkInterface](networkinterface.md) property indicates the bound interface. If the flow isn’t bound to an interface, this value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [setMetadata:](setmetadata%28__%29.md): Sets the flow’s metadata for use by proxy providers.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.
