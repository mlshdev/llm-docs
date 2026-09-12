> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_interface_set_event_callback(_:_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_interface_set_event_callback(_:_:_:_:))

# vmnet_interface_set_event_callback(\_:\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Schedules a callback to be executed when events for the specified interface are received.

## Declaration

```swift
func vmnet_interface_set_event_callback(_ interface: interface_ref, _ event_mask: interface_event_t, _ queue: dispatch_queue_t?, _ callback: vmnet_interface_event_callback_t?) -> vmnet_return_t
```

## Parameters

- `interface`: The interface reference.
- `queue`: The queue on which the handler is scheduled.

<a id="Return-Value"></a>

## Return Value

Returns `vmnet` on success, or an error code on failure. See `vmnet` for possible values.

<a id="Discussion"></a>

## Discussion

Once the block is set, the callback can be unset by calling the function again, specifying a `NULL` queue and a `NULL` handler.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface(\_:\_:\_:)](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network(\_:\_:\_:\_:)](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_stop_interface(\_:\_:\_:)](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.

# vmnet_interface_set_event_callback (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Schedules a callback to be executed when events for the specified interface are received.

## Declaration

```objectivec
vmnet_return_t vmnet_interface_set_event_callback(interface_ref interface, interface_event_t event_mask, dispatch_queue_t queue, vmnet_interface_event_callback_t callback);
```

## Parameters

- `interface`: The interface reference.
- `queue`: The queue on which the handler is scheduled.

<a id="Return-Value"></a>

## Return Value

Returns `vmnet` on success, or an error code on failure. See `vmnet` for possible values.

<a id="Discussion"></a>

## Discussion

Once the block is set, the callback can be unset by calling the function again, specifying a `NULL` queue and a `NULL` handler.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_stop_interface](vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.
