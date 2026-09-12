> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_mute_path_type_t](https://developer.apple.com/documentation/endpointsecurity/es_mute_path_type_t)

# es_mute_path_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The type of a path argument, such as a prefix or a path literal.

## Declaration

```swift
struct es_mute_path_type_t
```

## Topics

### Path Types

- [ES_MUTE_PATH_TYPE_PREFIX](es_mute_path_type_prefix.md): A type for a path string used as a prefix.
- [ES_MUTE_PATH_TYPE_LITERAL](es_mute_path_type_literal.md): A type for a path string used as a path literal.

### Initializers

- [init(\_:)](es_mute_path_type_t/init%28__%29.md)
- [init(rawValue:)](es_mute_path_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_mute_path_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Muting Events

- [es_mute_process(\_:\_:)](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths(\_:)](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

# es_mute_path_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The type of a path argument, such as a prefix or a path literal.

## Declaration

```objectivec
typedef enum { ... } es_mute_path_type_t;
```

## Topics

### Path Types

- [ES_MUTE_PATH_TYPE_PREFIX](es_mute_path_type_prefix.md): A type for a path string used as a prefix.
- [ES_MUTE_PATH_TYPE_LITERAL](es_mute_path_type_literal.md): A type for a path string used as a path literal.

## See Also

### Muting Events

- [es_mute_process](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.
