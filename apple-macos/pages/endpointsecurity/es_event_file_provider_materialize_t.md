> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_file_provider_materialize_t](https://developer.apple.com/documentation/endpointsecurity/es_event_file_provider_materialize_t)

# es_event_file_provider_materialize_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the materialization of a file provider.

## Declaration

```swift
struct es_event_file_provider_materialize_t
```

## Topics

### Inspecting Event Properties

- [instigator](es_event_file_provider_materialize_t/instigator.md): The process that instigated the event.
- [instigator_token](es_event_file_provider_materialize_t/instigator_token.md)
- [source](es_event_file_provider_materialize_t/source.md): The source file.
- [target](es_event_file_provider_materialize_t/target.md): The target fle.
- [reserved](es_event_file_provider_materialize_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(instigator:source:target:instigator_token:reserved:)](es_event_file_provider_materialize_t/init%28instigator_source_target_instigator_token_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### File Provider Event Types

- [es_event_file_provider_update_t](es_event_file_provider_update_t.md): A type for an event that indicates an update to a file provider.

# es_event_file_provider_materialize_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the materialization of a file provider.

## Declaration

```objectivec
typedef struct { ... } es_event_file_provider_materialize_t;
```

## Topics

### Inspecting Event Properties

- [instigator](es_event_file_provider_materialize_t/instigator.md): The process that instigated the event.
- [instigator_token](es_event_file_provider_materialize_t/instigator_token.md)
- [source](es_event_file_provider_materialize_t/source.md): The source file.
- [target](es_event_file_provider_materialize_t/target.md): The target fle.
- [reserved](es_event_file_provider_materialize_t/reserved.md): An unused field reserved for future use.

## See Also

### File Provider Event Types

- [es_event_file_provider_update_t](es_event_file_provider_update_t.md): A type for an event that indicates an update to a file provider.
