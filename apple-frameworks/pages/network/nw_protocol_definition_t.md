> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_protocol_definition_t](https://developer.apple.com/documentation/network/nw_protocol_definition_t)

# nw_protocol_definition_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The abstract superclass for identifying a network protocol.

## Declaration

```swift
typealias nw_protocol_definition_t = any OS_nw_protocol_definition
```

## Topics

### Comparing Protocols

- [nw_protocol_definition_is_equal(\_:\_:)](nw_protocol_definition_is_equal%28____%29.md): Compares two protocol definitions, and returns true if they represent the same protocol implementation.

## See Also

### Modifying Protocol Stacks

- [nw_parameters_copy_default_protocol_stack(\_:)](nw_parameters_copy_default_protocol_stack%28__%29.md): Accesses the protocol stack used by connections and listeners.
- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.

# nw_protocol_definition_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The abstract superclass for identifying a network protocol.

## Declaration

```objectivec
typedef NSObject<OS_nw_protocol_definition> * nw_protocol_definition_t;
```

## Topics

### Comparing Protocols

- [nw_protocol_definition_is_equal](nw_protocol_definition_is_equal%28____%29.md): Compares two protocol definitions, and returns true if they represent the same protocol implementation.

## See Also

### Modifying Protocol Stacks

- [nw_parameters_copy_default_protocol_stack](nw_parameters_copy_default_protocol_stack%28__%29.md): Accesses the protocol stack used by connections and listeners.
- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.
