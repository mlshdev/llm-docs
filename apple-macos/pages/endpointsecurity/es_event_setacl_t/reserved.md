> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setacl_t/reserved](https://developer.apple.com/documentation/endpointsecurity/es_event_setacl_t/reserved)

# reserved (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [acl](acl.md): A union containing a settable access control list structure.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.

# reserved (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```objectivec
uint8_t reserved[64];
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [acl](acl.md): A union containing a settable access control list structure.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
