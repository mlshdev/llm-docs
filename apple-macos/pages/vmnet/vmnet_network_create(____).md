> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_network_create(_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_network_create(_:_:))

# vmnet_network_create(\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a vmnet network based on the provided configuration.

## Declaration

```swift
func vmnet_network_create(_ configuration: vmnet_network_configuration_ref, _ status: UnsafeMutablePointer<vmnet_return_t>?) -> vmnet_network_ref?
```

## Parameters

- `configuration`: The vmnet network configuration.

<a id="return-value"></a>

## Return Value

Vmnet network handle on success, otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

This API attempts to reserve the configuration such that subsequent interface start calls is guaranteed to not fail due to resource contention. The lifetime of such reservation is the same as that of [vmnet_network_ref](vmnet_network_ref.md). Use [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to release the network object.

## See Also

### Creating a network configuration

- [vmnet_network_configuration_create(\_:\_:)](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization(\_:\_:)](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization(\_:\_:)](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.

# vmnet_network_create (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a vmnet network based on the provided configuration.

## Declaration

```objectivec
vmnet_network_refvmnet_network_create(vmnet_network_configuration_ref configuration, vmnet_return_t *status);
```

## Parameters

- `configuration`: The vmnet network configuration.

<a id="return-value"></a>

## Return Value

Vmnet network handle on success, otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

This API attempts to reserve the configuration such that subsequent interface start calls is guaranteed to not fail due to resource contention. The lifetime of such reservation is the same as that of [vmnet_network_ref](vmnet_network_ref.md). Use [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to release the network object.

## See Also

### Creating a network configuration

- [vmnet_network_configuration_create](vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.
