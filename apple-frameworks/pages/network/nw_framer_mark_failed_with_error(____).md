> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_mark_failed_with_error(_:_:)](https://developer.apple.com/documentation/network/nw_framer_mark_failed_with_error(_:_:))

# nw_framer_mark_failed_with_error(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates to a connection that your protocol has encountered an error, or has gracefully closed.

## Declaration

```swift
func nw_framer_mark_failed_with_error(_ framer: nw_framer_t, _ error_code: Int32)
```

## See Also

### Managing Instance Lifetime

- [nw_framer_mark_ready(\_:)](nw_framer_mark_ready%28__%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [nw_framer_prepend_application_protocol(\_:\_:)](nw_framer_prepend_application_protocol%28____%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [nw_framer_mark_ready(\_:)](nw_framer_mark_ready%28__%29.md).
- [nw_framer_set_stop_handler(\_:\_:)](nw_framer_set_stop_handler%28____%29.md): Sets a block to handle when the connection is being closed.
- [nw_framer_stop_handler_t](nw_framer_stop_handler_t.md): A handler that requests that your protocol send any final messages to close the connection.
- [nw_framer_set_cleanup_handler(\_:\_:)](nw_framer_set_cleanup_handler%28____%29.md): Sets a block to handle the final cleanup of allocations made by your protocol instance.
- [nw_framer_cleanup_handler_t](nw_framer_cleanup_handler_t.md): A handler that tells your protocol to clean up all allocations before being deallocated.

# nw_framer_mark_failed_with_error (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates to a connection that your protocol has encountered an error, or has gracefully closed.

## Declaration

```objectivec
void nw_framer_mark_failed_with_error(nw_framer_t framer, int error_code);
```

## See Also

### Managing Instance Lifetime

- [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [nw_framer_prepend_application_protocol](nw_framer_prepend_application_protocol%28____%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md).
- [nw_framer_set_stop_handler](nw_framer_set_stop_handler%28____%29.md): Sets a block to handle when the connection is being closed.
- [nw_framer_stop_handler_t](nw_framer_stop_handler_t.md): A handler that requests that your protocol send any final messages to close the connection.
- [nw_framer_set_cleanup_handler](nw_framer_set_cleanup_handler%28____%29.md): Sets a block to handle the final cleanup of allocations made by your protocol instance.
- [nw_framer_cleanup_handler_t](nw_framer_cleanup_handler_t.md): A handler that tells your protocol to clean up all allocations before being deallocated.
