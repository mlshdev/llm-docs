> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unmute_path(_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_unmute_path(_:_:_:))

# es_unmute_path(\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Restores event delivery from a previously-muted path.

## Declaration

```swift
func es_unmute_path(_ client: OpaquePointer, _ path: UnsafePointer<CChar>, _ type: es_mute_path_type_t) -> es_return_t
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events from executables whose paths match `path`.
- `path`: The path to unmute. The client resumes receiving events from executables whose paths match this string.
- `type`: The type of the `path` argument, either a prefix or a literal path.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute a subset of events from a path, use [es_unmute_path_events(\_:\_:\_:\_:\_:)](es_unmute_path_events%28__________%29.md).

## See Also

### Unmuting Events

- [es_unmute_process(\_:\_:)](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path_events(\_:\_:\_:\_:\_:)](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths(\_:)](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.

# es_unmute_path (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Restores event delivery from a previously-muted path.

## Declaration

```objectivec
extern es_return_t es_unmute_path(es_client_t *client, const char *path, es_mute_path_type_t type);
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events from executables whose paths match `path`.
- `path`: The path to unmute. The client resumes receiving events from executables whose paths match this string.
- `type`: The type of the `path` argument, either a prefix or a literal path.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute a subset of events from a path, use [es_unmute_path_events](es_unmute_path_events%28__________%29.md).

## See Also

### Unmuting Events

- [es_unmute_process](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path_events](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.
