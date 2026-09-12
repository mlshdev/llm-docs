> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_processes_events(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_muted_processes_events(_:_:))

# es_muted_processes_events(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Retrieve a list of all muted processes.

## Declaration

```swift
func es_muted_processes_events(_ client: OpaquePointer, _ muted_processes: UnsafeMutablePointer<UnsafeMutablePointer<es_muted_processes_t>?>) -> es_return_t
```

## Parameters

- `client`: A previously-created client. If the call succeeds, the `processes` structure contains processes muted for this client.
- `muted_processes`: On output, a structure that contains the muted processes. You must dispose of this memory by calling [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md).

<a id="return-value"></a>

## Return Value

A value that indicates whether the request for muted processes succeeded or failed with an error.

## See Also

### Muting Events

- [es_mute_process(\_:\_:)](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths(\_:)](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

# es_muted_processes_events (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Retrieve a list of all muted processes.

## Declaration

```objectivec
extern es_return_t es_muted_processes_events(es_client_t *client, es_muted_processes_t **muted_processes);
```

## Parameters

- `client`: A previously-created client. If the call succeeds, the `processes` structure contains processes muted for this client.
- `muted_processes`: On output, a structure that contains the muted processes. You must dispose of this memory by calling [es_release_muted_processes](es_release_muted_processes%28__%29.md).

<a id="return-value"></a>

## Return Value

A value that indicates whether the request for muted processes succeeded or failed with an error.

## See Also

### Muting Events

- [es_mute_process](es_mute_process%28____%29.md): Suppresses events from a given process.
- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.
