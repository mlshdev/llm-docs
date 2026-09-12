> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_copy_default_protocol_stack(_:)](https://developer.apple.com/documentation/network/nw_parameters_copy_default_protocol_stack(_:))

# nw_parameters_copy_default_protocol_stack(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Accesses the protocol stack used by connections and listeners.

## Declaration

```swift
func nw_parameters_copy_default_protocol_stack(_ parameters: nw_parameters_t) -> nw_protocol_stack_t
```

## See Also

### Modifying Protocol Stacks

- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_definition_t](nw_protocol_definition_t.md): The abstract superclass for identifying a network protocol.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.

# nw_parameters_copy_default_protocol_stack (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Accesses the protocol stack used by connections and listeners.

## Declaration

```objectivec
nw_protocol_stack_tnw_parameters_copy_default_protocol_stack(nw_parameters_t parameters);
```

## See Also

### Modifying Protocol Stacks

- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_definition_t](nw_protocol_definition_t.md): The abstract superclass for identifying a network protocol.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.
