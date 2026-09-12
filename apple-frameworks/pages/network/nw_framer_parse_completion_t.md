> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_parse_completion_t](https://developer.apple.com/documentation/network/nw_framer_parse_completion_t)

# nw_framer_parse_completion_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that examines a range of data being sent or received.

## Declaration

```swift
typealias nw_framer_parse_completion_t = (UnsafeMutablePointer<UInt8>?, Int, Bool) -> Int
```

## Parameters

- `buffer`: The pointer to bytes to parse.
- `buffer_length`: The length of the buffer.
- `is_complete`: A boolean indicating if this span of bytes represents the end of a message.

<a id="return-value"></a>

## Return Value

Return the number of bytes by which to increment the input or output cursor. Once the cursor is moved, previous bytes will no longer be delivered to [nw_framer_parse_input(\_:\_:\_:\_:\_:)](nw_framer_parse_input%28__________%29.md) and [nw_framer_deliver_input_no_copy(\_:\_:\_:\_:)](nw_framer_deliver_input_no_copy%28________%29.md) for input data, or [nw_framer_parse_output(\_:\_:\_:\_:\_:)](nw_framer_parse_output%28__________%29.md) and [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md) for output messages.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler(\_:\_:)](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_output(\_:\_:\_:\_:\_:)](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_write_output(\_:\_:\_:)](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data(\_:\_:)](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output(\_:)](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.

# nw_framer_parse_completion_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A handler that examines a range of data being sent or received.

## Declaration

```objectivec
typedef unsigned long (^)(unsigned char *, unsigned long, _Bool) nw_framer_parse_completion_t;
```

## Parameters

- `buffer`: The pointer to bytes to parse.
- `buffer_length`: The length of the buffer.
- `is_complete`: A boolean indicating if this span of bytes represents the end of a message.

<a id="return-value"></a>

## Return Value

Return the number of bytes by which to increment the input or output cursor. Once the cursor is moved, previous bytes will no longer be delivered to [nw_framer_parse_input](nw_framer_parse_input%28__________%29.md) and [nw_framer_deliver_input_no_copy](nw_framer_deliver_input_no_copy%28________%29.md) for input data, or [nw_framer_parse_output](nw_framer_parse_output%28__________%29.md) and [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md) for output messages.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_output](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_write_output](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.
