> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_path_t](https://developer.apple.com/documentation/endpointsecurity/es_muted_path_t)

# es_muted_path_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes a path’s muted events.

## Declaration

```swift
struct es_muted_path_t
```

## Topics

### Accessing Muted Path Properties

- [type](es_muted_path_t/type.md): The path type: prefix or literal.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [events](es_muted_path_t/events.md): An array containing the muted event types.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](es_muted_path_t/event_count.md): The number of elements in the muted events array.
- [path](es_muted_path_t/path.md): The muted path.
- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.

### Initializers

- [init()](es_muted_path_t/init%28%29.md)
- [init(type:event_count:events:path:)](es_muted_path_t/init%28type_event_count_events_path_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Accessing Muted Paths

- [paths](es_muted_paths_t/paths.md): An array containing the muted paths.
- [count](es_muted_paths_t/count.md): The number of elements in the paths array.

# es_muted_path_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes a path’s muted events.

## Declaration

```objectivec
typedef struct { ... } es_muted_path_t;
```

## Topics

### Accessing Muted Path Properties

- [type](es_muted_path_t/type.md): The path type: prefix or literal.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [events](es_muted_path_t/events.md): An array containing the muted event types.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](es_muted_path_t/event_count.md): The number of elements in the muted events array.
- [path](es_muted_path_t/path.md): The muted path.
- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.

## See Also

### Accessing Muted Paths

- [paths](es_muted_paths_t/paths.md): An array containing the muted paths.
- [count](es_muted_paths_t/count.md): The number of elements in the paths array.
