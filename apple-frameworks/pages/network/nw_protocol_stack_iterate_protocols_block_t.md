> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_protocol_stack_iterate_protocols_block_t](https://developer.apple.com/documentation/network/nw_protocol_stack_iterate_protocols_block_t)

# nw_protocol_stack_iterate_protocols_block_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A block that allows you to inspect or modify a single protocol’s options.

## Declaration

```swift
typealias nw_protocol_stack_iterate_protocols_block_t = (nw_protocol_options_t) -> Void
```

## See Also

### Modifying Application Protocols

- [nw_protocol_stack_prepend_application_protocol(\_:\_:)](nw_protocol_stack_prepend_application_protocol%28____%29.md): Adds a protocol onto the top of the protocol stack.
- [nw_protocol_stack_clear_application_protocols(\_:)](nw_protocol_stack_clear_application_protocols%28__%29.md): Removes all application protocols from the protocol stack.
- [nw_protocol_stack_iterate_application_protocols(\_:\_:)](nw_protocol_stack_iterate_application_protocols%28____%29.md): Iterates through the array of application protocol options that will be used by connections and listeners.

# nw_protocol_stack_iterate_protocols_block_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A block that allows you to inspect or modify a single protocol’s options.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_nw_protocol_options> *) nw_protocol_stack_iterate_protocols_block_t;
```

## See Also

### Modifying Application Protocols

- [nw_protocol_stack_prepend_application_protocol](nw_protocol_stack_prepend_application_protocol%28____%29.md): Adds a protocol onto the top of the protocol stack.
- [nw_protocol_stack_clear_application_protocols](nw_protocol_stack_clear_application_protocols%28__%29.md): Removes all application protocols from the protocol stack.
- [nw_protocol_stack_iterate_application_protocols](nw_protocol_stack_iterate_application_protocols%28____%29.md): Iterates through the array of application protocol options that will be used by connections and listeners.
