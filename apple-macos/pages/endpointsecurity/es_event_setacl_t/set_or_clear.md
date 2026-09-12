> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setacl_t/set_or_clear](https://developer.apple.com/documentation/endpointsecurity/es_event_setacl_t/set_or_clear)

# set_or_clear (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The access control list action represented by the event, either setting or clearing values.

## Declaration

```swift
var set_or_clear: es_set_or_clear_t
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [acl](acl.md): A union containing a settable access control list structure.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.

# set_or_clear (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The access control list action represented by the event, either setting or clearing values.

## Declaration

```objectivec
es_set_or_clear_t set_or_clear;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [acl](acl.md): A union containing a settable access control list structure.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.
