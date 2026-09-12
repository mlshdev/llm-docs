> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_file_provider_update_t](https://developer.apple.com/documentation/endpointsecurity/es_event_file_provider_update_t)

# es_event_file_provider_update_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates an update to a file provider.

## Declaration

```swift
struct es_event_file_provider_update_t
```

## Topics

### Inspecting Event Properties

- [source](es_event_file_provider_update_t/source.md): The source file of the event.
- [target_path](es_event_file_provider_update_t/target_path.md): The target path to update.
- [reserved](es_event_file_provider_update_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(source:target_path:reserved:)](es_event_file_provider_update_t/init%28source_target_path_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### File Provider Event Types

- [es_event_file_provider_materialize_t](es_event_file_provider_materialize_t.md): A type for an event that indicates the materialization of a file provider.

# es_event_file_provider_update_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates an update to a file provider.

## Declaration

```objectivec
typedef struct { ... } es_event_file_provider_update_t;
```

## Topics

### Inspecting Event Properties

- [source](es_event_file_provider_update_t/source.md): The source file of the event.
- [target_path](es_event_file_provider_update_t/target_path.md): The target path to update.
- [reserved](es_event_file_provider_update_t/reserved.md): An unused field reserved for future use.

## See Also

### File Provider Event Types

- [es_event_file_provider_materialize_t](es_event_file_provider_materialize_t.md): A type for an event that indicates the materialization of a file provider.
