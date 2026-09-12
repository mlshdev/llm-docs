> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/setmetadata(_:)](https://developer.apple.com/documentation/networkextension/neappproxyflow/setmetadata(_:))

# setMetadata(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+

Sets the flow’s metadata for use by proxy providers.

## Declaration

```swift
func setMetadata(_ parameters: nw_parameters_t)
```

## Parameters

- `parameters`: A nw_parameters_t object that contains the flow metadata.

<a id="Discussion"></a>

## Discussion

Use an [nw_parameters_t](../../network/nw_parameters_t.md) object to create a connection that transparently proxies the flow’s data. This also provides accurate source app information to any subsequent [NEAppProxyProvider](../neappproxyprovider.md) instances that transparently proxy the flow.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.

# setMetadata: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+

Sets the flow’s metadata for use by proxy providers.

## Declaration

```objectivec
- (void) setMetadata:(nw_parameters_t) parameters;
```

## Parameters

- `parameters`: A nw_parameters_t object that contains the flow metadata.

<a id="Discussion"></a>

## Discussion

Use an [nw_parameters_t](../../network/nw_parameters_t.md) object to create a connection that transparently proxies the flow’s data. This also provides accurate source app information to any subsequent [NEAppProxyProvider](../neappproxyprovider.md) instances that transparently proxy the flow.

## See Also

### Accessing flow information

- [metaData](metadata.md): A metadata object containing information about the source app of the flow.
- [nw_parameters_t](../../network/nw_parameters_t.md): An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- [isBound](isbound.md): A Boolean value that indicates whether the flow has a binding to a specific interface.
- [networkInterface](networkinterface.md): The network interface, if any, used by this flow.
- [nw_interface_type_t](../../network/nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [remoteHostname](remotehostname.md): The remote host name for flows created from a hostname.
