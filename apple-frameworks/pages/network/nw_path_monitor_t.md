> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_path_monitor_t](https://developer.apple.com/documentation/network/nw_path_monitor_t)

# nw_path_monitor_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An observer that you use to monitor and react to network changes.

## Declaration

```swift
typealias nw_path_monitor_t = any OS_nw_path_monitor
```

## Topics

### Creating Path Monitors

- [nw_path_monitor_create()](nw_path_monitor_create%28%29.md): Initializes a path monitor to observe all available interface types.
- [nw_path_monitor_create_with_type(\_:)](nw_path_monitor_create_with_type%28__%29.md): Initializes a path monitor to observe a specific interface type.
- [nw_path_monitor_prohibit_interface_type(\_:\_:)](nw_path_monitor_prohibit_interface_type%28____%29.md): Prohibit a path monitor from using a specific interface type.
- [nw_path_monitor_set_queue(\_:\_:)](nw_path_monitor_set_queue%28____%29.md): Sets a queue on which to deliver path events.
- [nw_path_monitor_start(\_:)](nw_path_monitor_start%28__%29.md): Starts monitoring path changes.

### Handling Path Updates

- [nw_path_monitor_set_update_handler(\_:\_:)](nw_path_monitor_set_update_handler%28____%29.md): Sets a handler to receive network path updates.
- [nw_path_monitor_update_handler_t](nw_path_monitor_update_handler_t.md): A handler that delivers network path updates.

### Canceling Path Monitors

- [nw_path_monitor_cancel(\_:)](nw_path_monitor_cancel%28__%29.md): Stops receiving network path updates.
- [nw_path_monitor_set_cancel_handler(\_:\_:)](nw_path_monitor_set_cancel_handler%28____%29.md): Sets a handler to determine when a monitor is fully cancelled and will no longer deliver events.
- [nw_path_monitor_cancel_handler_t](nw_path_monitor_cancel_handler_t.md): A handler that indicates when a monitor has been cancelled.

# nw_path_monitor_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An observer that you use to monitor and react to network changes.

## Declaration

```objectivec
typedef NSObject<OS_nw_path_monitor> * nw_path_monitor_t;
```

## Topics

### Creating Path Monitors

- [nw_path_monitor_create](nw_path_monitor_create%28%29.md): Initializes a path monitor to observe all available interface types.
- [nw_path_monitor_create_with_type](nw_path_monitor_create_with_type%28__%29.md): Initializes a path monitor to observe a specific interface type.
- [nw_path_monitor_prohibit_interface_type](nw_path_monitor_prohibit_interface_type%28____%29.md): Prohibit a path monitor from using a specific interface type.
- [nw_path_monitor_set_queue](nw_path_monitor_set_queue%28____%29.md): Sets a queue on which to deliver path events.
- [nw_path_monitor_start](nw_path_monitor_start%28__%29.md): Starts monitoring path changes.

### Handling Path Updates

- [nw_path_monitor_set_update_handler](nw_path_monitor_set_update_handler%28____%29.md): Sets a handler to receive network path updates.
- [nw_path_monitor_update_handler_t](nw_path_monitor_update_handler_t.md): A handler that delivers network path updates.

### Canceling Path Monitors

- [nw_path_monitor_cancel](nw_path_monitor_cancel%28__%29.md): Stops receiving network path updates.
- [nw_path_monitor_set_cancel_handler](nw_path_monitor_set_cancel_handler%28____%29.md): Sets a handler to determine when a monitor is fully cancelled and will no longer deliver events.
- [nw_path_monitor_cancel_handler_t](nw_path_monitor_cancel_handler_t.md): A handler that indicates when a monitor has been cancelled.

## See Also

### Paths and Interfaces

- [nw_path_t](nw_path_t.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [nw_interface_t](nw_interface_t.md): An interface that a network connection uses to send and receive data.
