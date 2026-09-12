> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_network_copy_serialization(_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_network_copy_serialization(_:_:))

# vmnet_network_copy_serialization(\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Serializes a vmnet network to an XPC object.

## Declaration

```swift
func vmnet_network_copy_serialization(_ network: vmnet_network_ref, _ status: UnsafeMutablePointer<vmnet_return_t>?) -> xpc_object_t?
```

## Parameters

- `network`: The network object to be copy serialized.
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

Serialized copy of network in `xpc_object_t`, `NULL` otherwise. Optionally, `status` will contain the error code.

<a id="Discussion"></a>

## Discussion

Use `vmnet_network_create_with_serialization` to create a new network object from such an XPC object.

## See Also

### Creating a network configuration

- [vmnet_network_create(\_:\_:)](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create(\_:\_:)](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization(\_:\_:)](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.

# vmnet_network_copy_serialization (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Serializes a vmnet network to an XPC object.

## Declaration

```objectivec
xpc_object_tvmnet_network_copy_serialization(vmnet_network_ref network, vmnet_return_t *status);
```

## Parameters

- `network`: The network object to be copy serialized.
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

Serialized copy of network in `xpc_object_t`, `NULL` otherwise. Optionally, `status` will contain the error code.

<a id="Discussion"></a>

## Discussion

Use `vmnet_network_create_with_serialization` to create a new network object from such an XPC object.

## See Also

### Creating a network configuration

- [vmnet_network_create](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
