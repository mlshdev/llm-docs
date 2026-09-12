> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setacl_t/acl](https://developer.apple.com/documentation/endpointsecurity/es_event_setacl_t/acl)

# acl (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A union containing a settable access control list structure.

## Declaration

```swift
var acl: es_event_setacl_t.__Unnamed_union_acl
```

<a id="Discussion"></a>

## Discussion

The `acl` union is valid only when the [set_or_clear](set_or_clear.md) value is [ES_SET](../es_set.md). In this case, the union contains an `acl_t` called `set` containing the access control list values.

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.

# acl (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A union containing a settable access control list structure.

## Declaration

```objectivec
union { ... } acl;
```

<a id="Discussion"></a>

## Discussion

The `acl` union is valid only when the [set_or_clear](set_or_clear.md) value is [ES_SET](../es_set.md). In this case, the union contains an `acl_t` called `set` containing the access control list values.

## Topics

### Instance Properties

- [set](acl/set.md)

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing the access control list to set or clear.
- [set_or_clear](set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](../es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](reserved.md): An unused field reserved for future use.
