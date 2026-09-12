> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_stop_handler_t](https://developer.apple.com/documentation/network/nw_framer_stop_handler_t)

# nw_framer_stop_handler_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that requests that your protocol send any final messages to close the connection.

## Declaration

```swift
typealias nw_framer_stop_handler_t = (nw_framer_t) -> Bool
```

## See Also

### Managing Instance Lifetime

- [nw_framer_mark_ready(\_:)](nw_framer_mark_ready%28__%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [nw_framer_mark_failed_with_error(\_:\_:)](nw_framer_mark_failed_with_error%28____%29.md): Indicates to a connection that your protocol has encountered an error, or has gracefully closed.
- [nw_framer_prepend_application_protocol(\_:\_:)](nw_framer_prepend_application_protocol%28____%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [nw_framer_mark_ready(\_:)](nw_framer_mark_ready%28__%29.md).
- [nw_framer_set_stop_handler(\_:\_:)](nw_framer_set_stop_handler%28____%29.md): Sets a block to handle when the connection is being closed.
- [nw_framer_set_cleanup_handler(\_:\_:)](nw_framer_set_cleanup_handler%28____%29.md): Sets a block to handle the final cleanup of allocations made by your protocol instance.
- [nw_framer_cleanup_handler_t](nw_framer_cleanup_handler_t.md): A handler that tells your protocol to clean up all allocations before being deallocated.

# nw_framer_stop_handler_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that requests that your protocol send any final messages to close the connection.

## Declaration

```objectivec
typedef _Bool (^)(NSObject<OS_nw_framer> *) nw_framer_stop_handler_t;
```

## See Also

### Managing Instance Lifetime

- [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [nw_framer_mark_failed_with_error](nw_framer_mark_failed_with_error%28____%29.md): Indicates to a connection that your protocol has encountered an error, or has gracefully closed.
- [nw_framer_prepend_application_protocol](nw_framer_prepend_application_protocol%28____%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md).
- [nw_framer_set_stop_handler](nw_framer_set_stop_handler%28____%29.md): Sets a block to handle when the connection is being closed.
- [nw_framer_set_cleanup_handler](nw_framer_set_cleanup_handler%28____%29.md): Sets a block to handle the final cleanup of allocations made by your protocol instance.
- [nw_framer_cleanup_handler_t](nw_framer_cleanup_handler_t.md): A handler that tells your protocol to clean up all allocations before being deallocated.
