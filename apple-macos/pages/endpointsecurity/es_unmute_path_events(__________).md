> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unmute_path_events(_:_:_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_unmute_path_events(_:_:_:_:_:))

# es_unmute_path_events(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Restores event delivery of a subset of events from a previously-muted path.

## Declaration

```swift
func es_unmute_path_events(_ client: OpaquePointer, _ path: UnsafePointer<CChar>, _ type: es_mute_path_type_t, _ events: UnsafePointer<es_event_type_t>, _ event_count: Int) -> es_return_t
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events that match the types in `events` from executables whose paths match `path`.
- `path`: The path to unmute. The client resumes receiving events from executables whose paths match this string.
- `type`: The type of the `path` argument, either a prefix or a literal path.
- `events`: An array of event types to unmute.
- `event_count`: The number of members in the `events` array.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute all events from a path, use [es_unmute_path(\_:\_:\_:)](es_unmute_path%28______%29.md).

## See Also

### Unmuting Events

- [es_unmute_process(\_:\_:)](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path(\_:\_:\_:)](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths(\_:)](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.

# es_unmute_path_events (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 12.0+

Restores event delivery of a subset of events from a previously-muted path.

## Declaration

```objectivec
extern es_return_t es_unmute_path_events(es_client_t *client, const char *path, es_mute_path_type_t type, const es_event_type_t *events, size_t event_count);
```

## Parameters

- `client`: A previously-muted client. If the call succeeds, this client begins to receive events that match the types in `events` from executables whose paths match `path`.
- `path`: The path to unmute. The client resumes receiving events from executables whose paths match this string.
- `type`: The type of the `path` argument, either a prefix or a literal path.
- `events`: An array of event types to unmute.
- `event_count`: The number of members in the `events` array.

<a id="return-value"></a>

## Return Value

A value that indicates whether the unmute request succeeded or failed with an error.

<a id="Discussion"></a>

## Discussion

To unmute all events from a path, use [es_unmute_path](es_unmute_path%28______%29.md).

## See Also

### Unmuting Events

- [es_unmute_process](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_unmute_all_paths](es_unmute_all_paths%28__%29.md): Restores event delivery from previously-muted paths.
