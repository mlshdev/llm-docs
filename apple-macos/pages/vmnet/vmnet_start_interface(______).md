> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_start_interface(_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_start_interface(_:_:_:))

# vmnet_start_interface(\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Starts a new virtual interface instance.

## Declaration

```swift
func vmnet_start_interface(_ interface_desc: xpc_object_t, _ queue: dispatch_queue_t, _ handler: @escaping vmnet_start_interface_completion_handler_t) -> interface_ref?
```

## Parameters

- `interface_desc`: A dictionary describing parameters to use when creating the interface.
- `queue`: The queue on which to schedule the completion handler.
- `handler`: The block to invoke when the start interface request completes.

<a id="return-value"></a>

## Return Value

A non-`NULL` interface handle on success, `NULL` otherwise.

<a id="Discussion"></a>

## Discussion

Attributes of the virtual interface are specified using the interface_desc dictionary.

## See Also

### Starting and stopping interfaces

- [vmnet_interface_start_with_network(\_:\_:\_:\_:)](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback(\_:\_:\_:\_:)](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface(\_:\_:\_:)](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.

# vmnet_start_interface (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Starts a new virtual interface instance.

## Declaration

```objectivec
interface_refvmnet_start_interface(xpc_object_t interface_desc, dispatch_queue_t queue, vmnet_start_interface_completion_handler_t handler);
```

## Parameters

- `interface_desc`: A dictionary describing parameters to use when creating the interface.
- `queue`: The queue on which to schedule the completion handler.
- `handler`: The block to invoke when the start interface request completes.

<a id="return-value"></a>

## Return Value

A non-`NULL` interface handle on success, `NULL` otherwise.

<a id="Discussion"></a>

## Discussion

Attributes of the virtual interface are specified using the interface_desc dictionary.

## See Also

### Starting and stopping interfaces

- [vmnet_interface_start_with_network](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.
