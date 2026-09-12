> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_channel_bindings_struct/initiator_address](https://developer.apple.com/documentation/gss/gss_channel_bindings_struct/initiator_address)

# initiator_address (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The network address of the acceptor, in the form specified by [initiator_addrtype](initiator_addrtype.md).

## Declaration

```swift
var initiator_address: gss_buffer_desc
```

<a id="Discussion"></a>

## Discussion

If the specified address family has more than one format, the address itself should contain enough information to distinguish among them.

## See Also

### Instance Properties

- [initiator_addrtype](initiator_addrtype.md): The type of address contained in the [initiator_address](initiator_address.md) field.
- [acceptor_addrtype](acceptor_addrtype.md): The type of address contained in the [acceptor_address](acceptor_address.md) field.
- [acceptor_address](acceptor_address.md): The network address of the acceptor, in the form specified by [acceptor_addrtype](acceptor_addrtype.md).
- [application_data](application_data.md): Application specific data for use in communicating a channel binding.

# initiator_address (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The network address of the acceptor, in the form specified by [initiator_addrtype](initiator_addrtype.md).

## Declaration

```objectivec
gss_buffer_desc initiator_address;
```

<a id="Discussion"></a>

## Discussion

If the specified address family has more than one format, the address itself should contain enough information to distinguish among them.

## See Also

### Instance Properties

- [initiator_addrtype](initiator_addrtype.md): The type of address contained in the [initiator_address](initiator_address.md) field.
- [acceptor_addrtype](acceptor_addrtype.md): The type of address contained in the [acceptor_address](acceptor_address.md) field.
- [acceptor_address](acceptor_address.md): The network address of the acceptor, in the form specified by [acceptor_addrtype](acceptor_addrtype.md).
- [application_data](application_data.md): Application specific data for use in communicating a channel binding.
