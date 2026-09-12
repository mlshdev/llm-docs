> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_protocol_stack_set_transport_protocol(_:_:)](https://developer.apple.com/documentation/network/nw_protocol_stack_set_transport_protocol(_:_:))

# nw_protocol_stack_set_transport_protocol(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Replaces the protocol stack’s transport protocol with a new set of options.

## Declaration

```swift
func nw_protocol_stack_set_transport_protocol(_ stack: nw_protocol_stack_t, _ protocol: nw_protocol_options_t)
```

## See Also

### Configuring Lower Protocols

- [nw_protocol_stack_copy_transport_protocol(\_:)](nw_protocol_stack_copy_transport_protocol%28__%29.md): Accesses the options for the protocol stack’s transport protocol.
- [nw_protocol_stack_copy_internet_protocol(\_:)](nw_protocol_stack_copy_internet_protocol%28__%29.md): Accesses the protocol stack’s Internet Protocol options.

# nw_protocol_stack_set_transport_protocol (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Replaces the protocol stack’s transport protocol with a new set of options.

## Declaration

```objectivec
void nw_protocol_stack_set_transport_protocol(nw_protocol_stack_t stack, nw_protocol_options_t protocol);
```

## See Also

### Configuring Lower Protocols

- [nw_protocol_stack_copy_transport_protocol](nw_protocol_stack_copy_transport_protocol%28__%29.md): Accesses the options for the protocol stack’s transport protocol.
- [nw_protocol_stack_copy_internet_protocol](nw_protocol_stack_copy_internet_protocol%28__%29.md): Accesses the protocol stack’s Internet Protocol options.
