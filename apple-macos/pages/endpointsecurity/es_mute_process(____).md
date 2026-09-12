> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_mute_process(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_mute_process(_:_:))

# es_mute_process(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Suppresses events from a given process.

## Declaration

```swift
func es_mute_process(_ client: OpaquePointer, _ audit_token: UnsafePointer<audit_token_t>) -> es_return_t
```

## Parameters

- `client`: A previously-created client. If the call succeeds, this client no longer receives events from the process indicated by `audit_token`.
- `audit_token`: The audit token that indicates the process to mute.

<a id="return-value"></a>

## Return Value

A value that indicates whether the mute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To mute a subset of events from a process, use [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md).

## See Also

### Muting Events

- [es_mute_process_events(\_:\_:\_:\_:)](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes(\_:)](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events(\_:\_:)](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events(\_:\_:)](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths(\_:)](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.

# es_mute_process (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Suppresses events from a given process.

## Declaration

```objectivec
extern es_return_t es_mute_process(es_client_t *client, const audit_token_t *audit_token);
```

## Parameters

- `client`: A previously-created client. If the call succeeds, this client no longer receives events from the process indicated by `audit_token`.
- `audit_token`: The audit token that indicates the process to mute.

<a id="return-value"></a>

## Return Value

A value that indicates whether the mute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To mute a subset of events from a process, use [es_mute_process_events](es_mute_process_events%28________%29.md).

## See Also

### Muting Events

- [es_mute_process_events](es_mute_process_events%28________%29.md): Suppresses a subset of events from a given process.
- [es_muted_processes_t](es_muted_processes_t.md): A structure for a set of muted processes.
- [es_release_muted_processes](es_release_muted_processes%28__%29.md): Frees resources associated with a set of previously-retrieved muted processes.
- [es_muted_processes_events](es_muted_processes_events%28____%29.md): Retrieve a list of all muted processes.
- [es_mute_path](es_mute_path%28______%29.md): Suppresses events from executables that match a given path.
- [es_mute_path_events](es_mute_path_events%28__________%29.md): Suppresses a subset of events from executables that match a given path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_muted_paths_events](es_muted_paths_events%28____%29.md): Retrieve a list of all muted paths.
- [es_muted_paths_t](es_muted_paths_t.md): A structure for a set of muted paths.
- [es_release_muted_paths](es_release_muted_paths%28__%29.md): Frees resources associated with a set of previously-retrieved muted paths.
