> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_pass_through_output(_:)](https://developer.apple.com/documentation/network/nw_framer_pass_through_output(_:))

# nw_framer_pass_through_output(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that your protocol no longer needs to handle output data.

## Declaration

```swift
func nw_framer_pass_through_output(_ framer: nw_framer_t)
```

## See Also

### Handling Output Data

- [nw_framer_set_output_handler(\_:\_:)](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_output(\_:\_:\_:\_:\_:)](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output(\_:\_:\_:)](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data(\_:\_:)](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.

# nw_framer_pass_through_output (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that your protocol no longer needs to handle output data.

## Declaration

```objectivec
void nw_framer_pass_through_output(nw_framer_t framer);
```

## See Also

### Handling Output Data

- [nw_framer_set_output_handler](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_output](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
