> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_interface_start_with_network(_:_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_interface_start_with_network(_:_:_:_:))

# vmnet_interface_start_with_network(\_:\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Starts a new virtual interface instance on a network.

## Declaration

```swift
func vmnet_interface_start_with_network(_ network: vmnet_network_ref, _ interface_desc: xpc_object_t, _ queue: dispatch_queue_t, _ start_block: @escaping vmnet_start_interface_completion_handler_t) -> interface_ref?
```

## Parameters

- `network`: The network that the interface will be added to.
- `interface_desc`: A dictionary describing parameters to use when creating the interface.
- `queue`: The queue on which to schedule the completion handler.
- `start_block`: The block to invoke when the start interface request completes.

<a id="return-value"></a>

## Return Value

Returns a non-`NULL` interface handle on success, `NULL` otherwise.

<a id="Discussion"></a>

## Discussion

Attributes of the virtual interface are specified using the `interface_desc` dictionary. Namely,

- [vmnet_allocate_mac_address_key](vmnet_allocate_mac_address_key.md)
- [vmnet_enable_tso_key](vmnet_enable_tso_key.md)
- [vmnet_enable_isolation_key](vmnet_enable_isolation_key.md)
- [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md)

On success, this call retains the network object.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface(\_:\_:\_:)](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_set_event_callback(\_:\_:\_:\_:)](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface(\_:\_:\_:)](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.

# vmnet_interface_start_with_network (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Starts a new virtual interface instance on a network.

## Declaration

```objectivec
interface_refvmnet_interface_start_with_network(vmnet_network_ref network, xpc_object_t interface_desc, dispatch_queue_t queue, vmnet_start_interface_completion_handler_t start_block);
```

## Parameters

- `network`: The network that the interface will be added to.
- `interface_desc`: A dictionary describing parameters to use when creating the interface.
- `queue`: The queue on which to schedule the completion handler.
- `start_block`: The block to invoke when the start interface request completes.

<a id="return-value"></a>

## Return Value

Returns a non-`NULL` interface handle on success, `NULL` otherwise.

<a id="Discussion"></a>

## Discussion

Attributes of the virtual interface are specified using the `interface_desc` dictionary. Namely,

- [vmnet_allocate_mac_address_key](vmnet_allocate_mac_address_key.md)
- [vmnet_enable_tso_key](vmnet_enable_tso_key.md)
- [vmnet_enable_isolation_key](vmnet_enable_isolation_key.md)
- [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md)

On success, this call retains the network object.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_set_event_callback](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.
