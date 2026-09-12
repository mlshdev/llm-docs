> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_set_input_handler(_:_:)](https://developer.apple.com/documentation/network/nw_framer_set_input_handler(_:_:))

# nw_framer_set_input_handler(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a block to handle new inbound data.

## Declaration

```swift
func nw_framer_set_input_handler(_ framer: nw_framer_t, _ input_handler: @escaping nw_framer_input_handler_t)
```

## See Also

### Handling Input Data

- [nw_framer_input_handler_t](nw_framer_input_handler_t.md): A handler that notifies your protocol that new inbound data is available to parse.
- [nw_framer_parse_input(\_:\_:\_:\_:\_:)](nw_framer_parse_input%28__________%29.md): Examines the content of input data while inside your input handler block.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_deliver_input(\_:\_:\_:\_:\_:)](nw_framer_deliver_input%28__________%29.md): Delivers an inbound message containing arbitrary data from your protocol to the application.
- [nw_framer_deliver_input_no_copy(\_:\_:\_:\_:)](nw_framer_deliver_input_no_copy%28________%29.md): Delivers an inbound message containing a specific number of next received bytes.
- [nw_framer_pass_through_input(\_:)](nw_framer_pass_through_input%28__%29.md): Indicates that your protocol no longer needs to handle input data.

# nw_framer_set_input_handler (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a block to handle new inbound data.

## Declaration

```objectivec
void nw_framer_set_input_handler(nw_framer_t framer, nw_framer_input_handler_t input_handler);
```

## See Also

### Handling Input Data

- [nw_framer_input_handler_t](nw_framer_input_handler_t.md): A handler that notifies your protocol that new inbound data is available to parse.
- [nw_framer_parse_input](nw_framer_parse_input%28__________%29.md): Examines the content of input data while inside your input handler block.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_deliver_input](nw_framer_deliver_input%28__________%29.md): Delivers an inbound message containing arbitrary data from your protocol to the application.
- [nw_framer_deliver_input_no_copy](nw_framer_deliver_input_no_copy%28________%29.md): Delivers an inbound message containing a specific number of next received bytes.
- [nw_framer_pass_through_input](nw_framer_pass_through_input%28__%29.md): Indicates that your protocol no longer needs to handle input data.
