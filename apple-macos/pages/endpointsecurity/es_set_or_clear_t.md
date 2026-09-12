> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_set_or_clear_t](https://developer.apple.com/documentation/endpointsecurity/es_set_or_clear_t)

# es_set_or_clear_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that indicates whether an event represents setting or clearing a file’s access control list.

## Declaration

```swift
struct es_set_or_clear_t
```

## Topics

### Event Types

- [ES_CLEAR](es_clear.md): A case that indicates the event represents a clearing of the access control list.
- [ES_SET](es_set.md): A case that indicates the event represents a setting of access control list values.

### Initializers

- [init(\_:)](es_set_or_clear_t/init%28__%29.md)
- [init(rawValue:)](es_set_or_clear_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_set_or_clear_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Event Properties

- [target](es_event_setacl_t/target.md): The file containing the access control list to set or clear.
- [acl](es_event_setacl_t/acl.md): A union containing a settable access control list structure.
- [set_or_clear](es_event_setacl_t/set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [reserved](es_event_setacl_t/reserved.md): An unused field reserved for future use.

# es_set_or_clear_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

A type that indicates whether an event represents setting or clearing a file’s access control list.

## Declaration

```objectivec
typedef enum { ... } es_set_or_clear_t;
```

## Topics

### Event Types

- [ES_CLEAR](es_clear.md): A case that indicates the event represents a clearing of the access control list.
- [ES_SET](es_set.md): A case that indicates the event represents a setting of access control list values.

## See Also

### Inspecting Event Properties

- [target](es_event_setacl_t/target.md): The file containing the access control list to set or clear.
- [acl](es_event_setacl_t/acl.md): A union containing a settable access control list structure.
- [set_or_clear](es_event_setacl_t/set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [reserved](es_event_setacl_t/reserved.md): An unused field reserved for future use.
