> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setacl_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_setacl_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file containing the access control list to set or clear.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [acl](acl.md): A union containing a settable access control list structure.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file containing the access control list to set or clear.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [acl](acl.md): A union containing a settable access control list structure.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.
