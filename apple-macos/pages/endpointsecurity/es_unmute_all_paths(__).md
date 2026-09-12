> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unmute_all_paths(_:)](https://developer.apple.com/documentation/endpointsecurity/es_unmute_all_paths(_:))

# es_unmute_all_paths(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Restores event delivery from previously-muted paths.

## Declaration

```swift
func es_unmute_all_paths(_ client: OpaquePointer) -> es_return_t
```

## Parameters

- `client`: The client for which to unmute events.

## See Also

### Unmuting Events

- [es_unmute_process(\_:\_:)](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events(\_:\_:\_:\_:)](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path(\_:\_:\_:)](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events(\_:\_:\_:\_:\_:)](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.

# es_unmute_all_paths (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Restores event delivery from previously-muted paths.

## Declaration

```objectivec
extern es_return_t es_unmute_all_paths(es_client_t *client);
```

## Parameters

- `client`: The client for which to unmute events.

## See Also

### Unmuting Events

- [es_unmute_process](es_unmute_process%28____%29.md): Restores event delivery from a previously-muted process.
- [es_unmute_process_events](es_unmute_process_events%28________%29.md): Restores event delivery of a subset of events from a previously-muted process.
- [es_unmute_path](es_unmute_path%28______%29.md): Restores event delivery from a previously-muted path.
- [es_unmute_path_events](es_unmute_path_events%28__________%29.md): Restores event delivery of a subset of events from a previously-muted path.
- [es_mute_path_type_t](es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
