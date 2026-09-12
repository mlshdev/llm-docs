> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_channel_bindings_struct/acceptor_addrtype](https://developer.apple.com/documentation/gss/gss_channel_bindings_struct/acceptor_addrtype)

# acceptor_addrtype (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The type of address contained in the [acceptor_address](acceptor_address.md) field.

## Declaration

```swift
var acceptor_addrtype: OM_uint32
```

<a id="Discussion"></a>

## Discussion

The field takes one of the constants listed in `Address Families`.

## See Also

### Instance Properties

- [initiator_addrtype](initiator_addrtype.md): The type of address contained in the [initiator_address](initiator_address.md) field.
- [initiator_address](initiator_address.md): The network address of the acceptor, in the form specified by [initiator_addrtype](initiator_addrtype.md).
- [acceptor_address](acceptor_address.md): The network address of the acceptor, in the form specified by [acceptor_addrtype](acceptor_addrtype.md).
- [application_data](application_data.md): Application specific data for use in communicating a channel binding.

# acceptor_addrtype (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The type of address contained in the [acceptor_address](acceptor_address.md) field.

## Declaration

```objectivec
OM_uint32 acceptor_addrtype;
```

<a id="Discussion"></a>

## Discussion

The field takes one of the constants listed in `Address Families`.

## See Also

### Instance Properties

- [initiator_addrtype](initiator_addrtype.md): The type of address contained in the [initiator_address](initiator_address.md) field.
- [initiator_address](initiator_address.md): The network address of the acceptor, in the form specified by [initiator_addrtype](initiator_addrtype.md).
- [acceptor_address](acceptor_address.md): The network address of the acceptor, in the form specified by [acceptor_addrtype](acceptor_addrtype.md).
- [application_data](application_data.md): Application specific data for use in communicating a channel binding.
