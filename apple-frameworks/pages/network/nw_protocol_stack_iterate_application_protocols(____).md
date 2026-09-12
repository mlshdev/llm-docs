> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_protocol_stack_iterate_application_protocols(_:_:)](https://developer.apple.com/documentation/network/nw_protocol_stack_iterate_application_protocols(_:_:))

# nw_protocol_stack_iterate_application_protocols(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Iterates through the array of application protocol options that will be used by connections and listeners.

## Declaration

```swift
func nw_protocol_stack_iterate_application_protocols(_ stack: nw_protocol_stack_t, _ iterate_block: (nw_protocol_options_t) -> Void)
```

## See Also

### Modifying Application Protocols

- [nw_protocol_stack_prepend_application_protocol(\_:\_:)](nw_protocol_stack_prepend_application_protocol%28____%29.md): Adds a protocol onto the top of the protocol stack.
- [nw_protocol_stack_clear_application_protocols(\_:)](nw_protocol_stack_clear_application_protocols%28__%29.md): Removes all application protocols from the protocol stack.
- [nw_protocol_stack_iterate_protocols_block_t](nw_protocol_stack_iterate_protocols_block_t.md): A block that allows you to inspect or modify a single protocol’s options.

# nw_protocol_stack_iterate_application_protocols (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Iterates through the array of application protocol options that will be used by connections and listeners.

## Declaration

```objectivec
void nw_protocol_stack_iterate_application_protocols(nw_protocol_stack_t stack, nw_protocol_stack_iterate_protocols_block_t iterate_block);
```

## See Also

### Modifying Application Protocols

- [nw_protocol_stack_prepend_application_protocol](nw_protocol_stack_prepend_application_protocol%28____%29.md): Adds a protocol onto the top of the protocol stack.
- [nw_protocol_stack_clear_application_protocols](nw_protocol_stack_clear_application_protocols%28__%29.md): Removes all application protocols from the protocol stack.
- [nw_protocol_stack_iterate_protocols_block_t](nw_protocol_stack_iterate_protocols_block_t.md): A block that allows you to inspect or modify a single protocol’s options.
