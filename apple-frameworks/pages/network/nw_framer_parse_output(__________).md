> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_parse_output(_:_:_:_:_:)](https://developer.apple.com/documentation/network/nw_framer_parse_output(_:_:_:_:_:))

# nw_framer_parse_output(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Examines the content of output data while inside your output handler.

## Declaration

```swift
func nw_framer_parse_output(_ framer: nw_framer_t, _ minimum_incomplete_length: Int, _ maximum_length: Int, _ temp_buffer: UnsafeMutablePointer<UInt8>?, _ parse: (UnsafeMutablePointer<UInt8>?, Int, Bool) -> Int) -> Bool
```

## Parameters

- `framer`: A network framer instance.
- `minimum_incomplete_length`: The minimum number of bytes that should be delivered to the parse completion.
- `maximum_length`: The maximum number of bytes that should be delivered to the parse completion.
- `temp_buffer`: An optional buffer into which the parser will copy bytes. Use this if you need to make guarantees about byte alignment.
- `parse`: A completion handler that will be called inline to examine a region of bytes.

<a id="return-value"></a>

## Return Value

Returns true if the requested length was available to parse, or false if the conditions could not be met.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler(\_:\_:)](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output(\_:\_:\_:)](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data(\_:\_:)](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy(\_:\_:)](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output(\_:)](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.

# nw_framer_parse_output (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Examines the content of output data while inside your output handler.

## Declaration

```objectivec
bool nw_framer_parse_output(nw_framer_t framer, size_t minimum_incomplete_length, size_t maximum_length, uint8_t *temp_buffer, nw_framer_parse_completion_t parse);
```

## Parameters

- `framer`: A network framer instance.
- `minimum_incomplete_length`: The minimum number of bytes that should be delivered to the parse completion.
- `maximum_length`: The maximum number of bytes that should be delivered to the parse completion.
- `temp_buffer`: An optional buffer into which the parser will copy bytes. Use this if you need to make guarantees about byte alignment.
- `parse`: A completion handler that will be called inline to examine a region of bytes.

<a id="return-value"></a>

## Return Value

Returns true if the requested length was available to parse, or false if the conditions could not be met.

## See Also

### Handling Output Data

- [nw_framer_set_output_handler](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.
