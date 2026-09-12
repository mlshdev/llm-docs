> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_network_create_with_serialization(_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_network_create_with_serialization(_:_:))

# vmnet_network_create_with_serialization(\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.

## Declaration

```swift
func vmnet_network_create_with_serialization(_ network: xpc_object_t, _ status: UnsafeMutablePointer<vmnet_return_t>?) -> vmnet_network_ref?
```

## Parameters

- `network`: The xpc object from which to create the network
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

Network object in [vmnet_network_ref](vmnet_network_ref.md), `NULL` otherwise. The `status` contains the error code.

## See Also

### Creating a network configuration

- [vmnet_network_create(\_:\_:)](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create(\_:\_:)](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_copy_serialization(\_:\_:)](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.

# vmnet_network_create_with_serialization (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.

## Declaration

```objectivec
vmnet_network_refvmnet_network_create_with_serialization(xpc_object_t network, vmnet_return_t *status);
```

## Parameters

- `network`: The xpc object from which to create the network
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

Network object in [vmnet_network_ref](vmnet_network_ref.md), `NULL` otherwise. The `status` contains the error code.

## See Also

### Creating a network configuration

- [vmnet_network_create](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_copy_serialization](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.
