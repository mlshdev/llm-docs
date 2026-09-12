> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_output_handler_t](https://developer.apple.com/documentation/network/nw_framer_output_handler_t)

# nw_framer_output_handler_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that notifies your protocol about a new outbound message.

## Declaration

```swift
typealias nw_framer_output_handler_t = (nw_framer_t, nw_framer_message_t, Int, Bool) -> Void
```

## Parameters

- `framer`: The framer instance associated with the connection.
- `message`: The framer message passed by the application.
- `message_length`: The length of the message content being sent.
- `is_complete`: A boolean indicating if this the last chunk of a message.

<a id="Discussion"></a>

## Discussion

The output handler is your opportunity to encapsulate or encode a signle application message. You should write any output using [nw_framer_write_output(\_:\_:\_:)](nw_framer_write_output%28______%29.md), [nw_framer_write_output_data(\_:\_:)](nw_framer_write_output_data%28____%29.md), or [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md) before returning from the output handler. If you do not write a message, the application message will be discarded.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler(\_:\_:)](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_parse_output(\_:\_:\_:\_:\_:)](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output(\_:\_:\_:)](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data(\_:\_:)](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output(\_:)](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.

# nw_framer_output_handler_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that notifies your protocol about a new outbound message.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_nw_framer> *, NSObject<OS_nw_protocol_metadata> *, unsigned long, _Bool) nw_framer_output_handler_t;
```

## Parameters

- `framer`: The framer instance associated with the connection.
- `message`: The framer message passed by the application.
- `message_length`: The length of the message content being sent.
- `is_complete`: A boolean indicating if this the last chunk of a message.

<a id="Discussion"></a>

## Discussion

The output handler is your opportunity to encapsulate or encode a signle application message. You should write any output using [nw_framer_write_output](nw_framer_write_output%28______%29.md), [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md), or [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md) before returning from the output handler. If you do not write a message, the application message will be discarded.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_parse_output](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.
