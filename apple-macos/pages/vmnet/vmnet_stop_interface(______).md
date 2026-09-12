> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_stop_interface(_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_stop_interface(_:_:_:))

# vmnet_stop_interface(\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Stops I/O on the virtual interface.

## Declaration

```swift
func vmnet_stop_interface(_ interface: interface_ref, _ queue: dispatch_queue_t, _ handler: @escaping vmnet_interface_completion_handler_t) -> vmnet_return_t
```

## Parameters

- `interface`: The interface to halt I/O on.
- `queue`: The queue to schedule the stop handler on.
- `handler`: The block that is invoked when the stop interface request completes.

<a id="return-value"></a>

## Return Value

`VMNET_SUCCESS` if the framework scheduled the completion handler, an error code otherwise.

<a id="Discussion"></a>

## Discussion

Once an app calls this function, subsequent calls to read or write packets on this interface fail. If the app created the  interface through [vmnet_interface_start_with_network(\_:\_:\_:\_:)](vmnet_interface_start_with_network%28________%29.md), this call releases the associated network object.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface(\_:\_:\_:)](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network(\_:\_:\_:\_:)](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback(\_:\_:\_:\_:)](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.

# vmnet_stop_interface (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Stops I/O on the virtual interface.

## Declaration

```objectivec
vmnet_return_t vmnet_stop_interface(interface_ref interface, dispatch_queue_t queue, vmnet_interface_completion_handler_t handler);
```

## Parameters

- `interface`: The interface to halt I/O on.
- `queue`: The queue to schedule the stop handler on.
- `handler`: The block that is invoked when the stop interface request completes.

<a id="return-value"></a>

## Return Value

`VMNET_SUCCESS` if the framework scheduled the completion handler, an error code otherwise.

<a id="Discussion"></a>

## Discussion

Once an app calls this function, subsequent calls to read or write packets on this interface fail. If the app created the  interface through [vmnet_interface_start_with_network](vmnet_interface_start_with_network%28________%29.md), this call releases the associated network object.

## See Also

### Starting and stopping interfaces

- [vmnet_start_interface](vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network](vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback](vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
