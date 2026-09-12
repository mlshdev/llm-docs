> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_processes_t](https://developer.apple.com/documentation/endpointsecurity/es_muted_processes_t)

# es_muted_processes_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure for a set of muted processes.

## Declaration

```swift
struct es_muted_processes_t
```

## Topics

### Accessing Muted Processes

- [processes](es_muted_processes_t/processes.md): An array containing the muted processes.
- [es_muted_process_t](es_muted_process_t.md): A structure that describes a process’s muted events.
- [count](es_muted_processes_t/count.md): The number of elements in the processes array.

### Initializers

- [init()](es_muted_processes_t/init%28%29.md)
- [init(count:processes:)](es_muted_processes_t/init%28count_processes_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Muting Events

- [es_mute_process(\_:\_:)](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths(\_:)](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

# es_muted_processes_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure for a set of muted processes.

## Declaration

```objectivec
typedef struct { ... } es_muted_processes_t;
```

## Topics

### Accessing Muted Processes

- [processes](es_muted_processes_t/processes.md): An array containing the muted processes.
- [es_muted_process_t](es_muted_process_t.md): A structure that describes a process’s muted events.
- [count](es_muted_processes_t/count.md): The number of elements in the processes array.

## See Also

### Muting Events

- [es_mute_process](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.
