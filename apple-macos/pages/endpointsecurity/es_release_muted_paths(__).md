> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_release_muted_paths(_:)](https://developer.apple.com/documentation/endpointsecurity/es_release_muted_paths(_:))

# es_release_muted_paths(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Frees resources associated with a set of previously-retrieved muted paths.

## Declaration

```swift
func es_release_muted_paths(_ muted_paths: UnsafeMutablePointer<es_muted_paths_t>)
```

## Parameters

- `muted_paths`: An [es_muted_paths_t](es_muted_paths_t.md) structure, previously populated by a call to [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md), to release.

## See Also

### Muting Events

- [es_mute_process(\_:\_:)](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.

# es_release_muted_paths (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Frees resources associated with a set of previously-retrieved muted paths.

## Declaration

```objectivec
extern void es_release_muted_paths(es_muted_paths_t *muted_paths);
```

## Parameters

- `muted_paths`: An [es_muted_paths_t](es_muted_paths_t.md) structure, previously populated by a call to [es_muted_paths_events](es_muted_paths_events%28____%29.md), to release.

## See Also

### Muting Events

- [es_mute_process](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
