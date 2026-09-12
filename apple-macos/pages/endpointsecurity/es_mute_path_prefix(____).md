> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_mute_path_prefix(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_mute_path_prefix(_:_:))

# es_mute_path_prefix(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 12.0)

Suppresses events from executables matching a path prefix.

> Use [es_mute_path(\_:\_:\_:)](es_mute_path%28______%29.md) or [es_mute_path_events(\_:\_:\_:\_:\_:)](es_mute_path_events%28__________%29.md) instead.

## Declaration

```swift
func es_mute_path_prefix(_ client: OpaquePointer, _ path_prefix: UnsafePointer<CChar>) -> es_return_t
```

## Parameters

- `client`: The client for which to mute events.
- `path_prefix`: A prefix string. The client stops receiving events from executables whose paths begin with this string.

## See Also

### Deprecated Functions

- [es_muted_processes(\_:\_:\_:)](es_muted_processes%28______%29.md): Deprecated. Generates a list of muted processes.
- [es_mute_path_literal(\_:\_:)](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.

# es_mute_path_prefix (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 12.0)

Suppresses events from executables matching a path prefix.

> Use [es_mute_path](es_mute_path%28______%29.md) or [es_mute_path_events](es_mute_path_events%28__________%29.md) instead.

## Declaration

```objectivec
extern es_return_t es_mute_path_prefix(es_client_t *client, const char *path_prefix);
```

## Parameters

- `client`: The client for which to mute events.
- `path_prefix`: A prefix string. The client stops receiving events from executables whose paths begin with this string.

## See Also

### Deprecated Functions

- [es_muted_processes](es_muted_processes%28______%29.md): Deprecated. Generates a list of muted processes.
- [es_mute_path_literal](es_mute_path_literal%28____%29.md): Deprecated. Suppresses events from executables matching a path literal.
